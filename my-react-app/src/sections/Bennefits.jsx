import carrot from '../assets/carrot.png'
import broccs from '../assets/broccs.png'
import feihs from '../assets/feihs.png'
import './Bennefits.css'


//Provavelmente deveria botar alguma forma de inserir esses dados
//de maneira externa enão hard-coding
//não sei exatamente as práticas comuns da pixel
//ideia ai
//fazer um manual com o padrão de código usado
//péssima ideia em praticidade mas muito útil
export default function Bennefits(){
    return (
        <div id="beneficios">
            <div className="backt">
            <h1>Em que podemos te ajudar?</h1>
            </div>
            <div className="border-box">
            <div className="cont">
                <div className="section secb">
                    <p>Na nossa companhia, entendemos que o ritmo acelerado da vida moderna exige soluções inteligentes. Por isso, estamos aqui para ajudar você a economizar tempo e energia, oferecendo refeições completas e práticas, prontas para consumo imediato ou fácil preparo. Nossa dedicação à qualidade garante que cada caixa de alimentos seja um convite para um momento de prazer e nutrição, sem complicações.</p>
                    <img src={carrot} alt="carrot outline" />
                </div>
                <div className="section secp">
                    <img src={broccs} alt="carrot outline" />
                    <p>Além de oferecer refeições deliciosas, também ajudamos você a planejar melhor o seu dia. Nossos serviços foram pensados para atender às mais diversas necessidades — seja para um almoço rápido no trabalho, um jantar em família ou até mesmo um piquenique ao ar livre. Conte com a gente para transformar qualquer ocasião em uma experiência gastronômica completa e saborosa. </p>
                </div>
                <div className="section secb">
                    <p>Sabemos que a rotina pode ser corrida e nem sempre sobra tempo para cozinhar. É por isso que desenvolvemos um sistema ágil e confiável de entrega, para que você possa desfrutar de uma alimentação de qualidade, onde quer que esteja. Deixe que a gente cuide da sua refeição — você só precisa se preocupar em saborear cada garfada.</p>
                    <img src={feihs} alt="carrot outline" />
                </div>
                <div className="final">
                    <p>Em cada detalhe, buscamos superar as expectativas de quem confia na gente. Nosso compromisso é tornar a sua vida mais fácil, oferecendo alimentos que combinam sabor, praticidade e segurança. Seja em casa, no trabalho ou em momentos especiais, estamos sempre prontos para levar até você o melhor que a gastronomia em caixas pode oferecer. Escolha a qualidade, escolha a praticidade, escolha viver bem</p>
                    <p>Escolha a nossa companhia.</p>
                </div>
            </div>
            </div>
        </div>
    );
}