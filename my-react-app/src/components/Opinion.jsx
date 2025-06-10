import ImageRender from './ImageRender';
import './Opinion.css'


//Uma opinião só dentro do carousel completo
//Poderia ser usada em outra seção
//vai ser?
//não
export default function Opinion(props){
    return (
        <div className='opinion'>
            <div className="text-op">
                <h2>{props.title}</h2>
                <h3>Por {props.author}</h3>
                <ImageRender src = {props.src}desc = {props.desc} class="img-op"/>
                <p className="pte">{props.opinion}</p>
                <h4>{props.date}</h4>
            </div>
        </div>
    );
}