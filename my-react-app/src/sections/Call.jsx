import './Call.css'
import mosaic from '../assets/mosaic.jpg'
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Call (){

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="contactsec" id="contato">
            <h1>Inscreva-se agora</h1>
            <div className="content-contact">
                <img src={mosaic} alt="Mosaico"/>
                <p>Junte-se a milhares de clientes satisfeitos e descubra o prazer de receber nossas deliciosas caixas de alimentos em sua casa. Inscreva-se agora para aproveitar vantagens exclusivas e promoções imperdíveis que tornarão suas refeições ainda mais práticas e saborosas. Não perca a oportunidade de transformar sua alimentação com qualidade e conveniência!</p>
            </div>
            <div className="but-backc">
                <button className="butprod" onClick={() => setShowModal(true)}>Inscreva-se</button>
            </div>
            {showModal && <Modal callback={() => setShowModal(false)}/>}
        </div>


    );
}
