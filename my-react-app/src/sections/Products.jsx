import boxy from '../assets/boxyy.png';
import './Products.css';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Products(){
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="prod" id="produtos">
      <h1>Produto de Caixa</h1>
      <div className="prod-image-container">
        <img src={boxy} alt="Caixa aberta" />
        <div className="faixaroxa"></div>
      </div>
      <p>
        Cada uma das nossas caixas de alimentos é cuidadosamente montada para oferecer não apenas conveniência, mas também frescor e qualidade inigualáveis. Desde a escolha dos ingredientes até o empacotamento final, nos preocupamos em garantir que cada item preserve suas características e valor nutricional. Nossas embalagens são projetadas para manter a temperatura ideal, evitando desperdícios e garantindo que a refeição chegue até você no ponto certo. Além disso, oferecemos opções variadas para todos os gostos, desde pratos tradicionais até receitas inovadoras que surpreendem o paladar. Descubra o prazer de ter uma refeição completa e equilibrada sempre ao seu alcance, sem abrir mão do sabor e da qualidade que você merece.
      </p>
      <button className="butprod" onClick={() => setShowModal(true)}>Compre Já</button>

      {showModal && <Modal callback={() => setShowModal(false)}/>}

    </div>
  );
}
