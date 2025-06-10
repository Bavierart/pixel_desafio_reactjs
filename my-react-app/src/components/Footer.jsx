import './Footer.css'

//só o footer com algumas informações
export default function Footer(){
    return (
        <footer>
            <div className="info">
                <div className="contact">
                    <p>Autor</p>
                    <a>
                        {/*Provavelmente devia botar um hiperlink nesses contatos*/}
                        <p>felipe.mendes@ejpixel.com.br</p>
                    </a>
                    <a>
                        <p>+55 55 99601-2156</p>
                    </a>
                </div>
                <div className="socials">
                    <ul>
                        <li><a className='social-link' href='https://www.linkedin.com/in/felipe-bitencourt-0781a8350'>LinkedIn</a></li>
                        <li><a className='social-link' href='https://www.instagram.com/felipebitencourtm/'>Instagram</a></li>
                        <li><a className='social-link' href='https://github.com/Bavierart'>GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="extras">
                {/*Nome do meu github inclusive*/}
                <p>© 2024 Bavierart. All Rights Reserved.</p>
            </div>
        </footer>
    );
}