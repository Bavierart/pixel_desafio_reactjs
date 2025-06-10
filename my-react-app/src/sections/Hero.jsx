import { useState } from 'react';
import './Hero.css';
import mosaic from '../assets/mosaic.jpg'
import Modal from '../components/Modal';
//No momento eu só fiz o hero
//mas talvez eu deva inserir um about
//ótimo próximo passo
export default function Hero() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='hero-sec' id="sobre">
                <div className="image">
                <img src={mosaic}/>
                </div>
            <div className="top divp">

                <div className="texttop">
                <h1>Sobre nós</h1>
                <p>Na Katbox, buscamos oferecer praticidade, qualidade e sabor em cada refeição. Desde o início, nossa missão sempre foi reinventar a forma de consumir alimentos no dia a dia: com ingredientes frescos e cuidadosamente selecionados, aliados a embalagens funcionais e seguras que garantem a integridade de cada produto. Trabalhamos incansavelmente para que cada caixa que chega até você represente um compromisso com a excelência, trazendo não apenas refeições deliciosas, mas também uma experiência única que simplifica a sua rotina e enche o seu paladar de satisfação. Nossa equipe de especialistas está sempre em busca de inovação, respeitando valores que prezam pela sustentabilidade e pelo bem-estar de quem nos escolhe. Acreditamos que a comida pode ir além do sabor — ela deve contar uma história, despertar memórias e reunir pessoas queridas em torno da mesa. Seja bem-vindo à nossa companhia: onde cada refeição é pensada para tornar o seu dia mais prático, saudável e saboroso.
                </p>
                <div className="but-back">
                <button className="butprod" onClick={() => setShowModal(true)}>Entre em contato</button>
                </div>
                </div>

            </div>
            {/*
            <div className={`hero-content`}>
                <h1 className="hero-title">Cadastre-se</h1>
                <p className="hero-desc">Pressione o botão e adicione o seu email<br/> à nossa lista</p>
                
            </div>
            */}
            {/*Quando showModal == true, o nosso querido modal de cadastro vai aparecer
            e nos agraciar com seu péssimo css e alerta padrão do navegador */}
            {showModal && <Modal callback={() => setShowModal(false)}/>}
            </div>
    );
}
