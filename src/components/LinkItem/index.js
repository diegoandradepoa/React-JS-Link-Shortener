import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';


export default function LinkItem({closeModal, content}){ // Passando as props com as infos do modal e da requisição da api
    
  async function copyLink(){
    await navigator.clipboard.writeText(content.link)
    alert('URL copiada com sucesso');
    }
    
    return(
        <div className='modal-container'>
            
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}> {/*Essa prop foi passado no icone de fechamento*/}
                    <FiX size={28} color="#000"/>
                </button>
            </div>

                <span>
                    {content.long_url} {/*Recebe a requisição com props*/}
                </span>

                <button className='modal-link' onClick={copyLink}>
                    {content.link}
                    <FiClipboard size={20} color='#FFF'/>
                </button>

            
        </div>
    )
}
