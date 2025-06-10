import './Header.css'
import box from '../assets/boxyy.png'
//só um header nada de mais, com os li linkando para as diferentes seções da página
export default function Header() {
    return(
        <header className="navbar">
            <div className="header-title">
                <img src={box}/>
                <h1>Katbox</h1>
            </div>

            <div className="nav-elements">
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#beneficios">Benefícios</a></li>
                    <li><a href="#depoimento">Depoimento</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}