import './ImageRender.css'

//Uma renderização padrão de imagens para seções e outros elementos
//basicamente só a imagem a descrição e o alt text
export default function ImageRender(props) {
    return (
        <div className={props.class}>
            <img src={props.src} alt={props.alt} className="def-img"/>
            <p className="desc-img">{props.desc}</p>
        </div>
    );
}