import { FiSend } from 'react-icons/fi'
import "./form.css"

function Form() {
    return (
        <form className="inputs-container">
            <input className="inputs" type="text" placeholder="Nome" required />
            <input className="inputs" type="email" placeholder="Email" required />
            <input className="inputs" type="tel" placeholder="Telefone " required />
            <input className="inputs" type="text" placeholder="Assunto" required />
            <input className="textarea" placeholder="Envie sua mensagem" required />
            <button className="submit"><FiSend size={20} /></button>
        </form>
    )
}

export default Form