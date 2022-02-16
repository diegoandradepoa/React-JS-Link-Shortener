import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks'; //Importa a função que é usada para salvar 

export default function Home(){
  const [link, setLink] = useState(''); // State para pegar os dados digitados
  const [data, setData] = useState({}); // State usado para receber a requisiçao da api
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink(){
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data); // Recebe o retorno dos dados
      setShowModal(true);

      saveLink('@encurtaLink', response.data) // Salva o link gerado

      setLink(''); // Limpa o campo

   } catch {
      alert('Ops parece que de algo errado!');
      setLink('');
    }
  }

    return(
      <div className="container-home">
          <div className="logo">
            <img src="./logo.png" alt="Sujeito Link" />
            <h1>Encurtador de Link</h1>
            <span>Cole seu link para encurtar 👇</span>
          </div>

          <div className="area-input">
            <div>
              <FiLink size={24} color='#FFF'/>
              <input
               placeholder='Cole seu link aqui...' 
               value={link}
               onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <button onClick={handleShortLink}>Encurtar Link</button>
          </div>
          <Menu/>

          {showModal && ( // Renderização condicional para exibição do modal do link encurtado
            <LinkItem // Se for true exibe
              closeModal={()=> setShowModal(false)} // Usa o state show modal para fechar 
              content={data} // Recebe o valor do retorno da requisicao
            /> 
          )}
        </div>
    )
  }
  
  
  