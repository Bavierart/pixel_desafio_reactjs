import { useState } from "react";
import './Modal.css'

export default function Modal(props){
    const [email, setEmail] = useState("")

    const handleSubscribe = () => {
        if (email.includes('@')) {
            alert('Subscribed with ' + email);
            props.callback();
        } else {
            alert('Please enter a valid email.');
            setEmail('');
        }
    };

    return(
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close" onClick={() => props.callback()}>&times;</button>
                <h2>Inscreva-se</h2>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="butprod" onClick={handleSubscribe}>
                    Enviar
                </button>
            </div>
        </div>
    );
}