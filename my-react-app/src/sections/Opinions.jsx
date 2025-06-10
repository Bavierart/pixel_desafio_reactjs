import Opinion from '../components/Opinion'
import Carousel from '../components/Carousel';
import opinionsData from '../assets/opinions.json'
import './Opinions.css'

import catzoiudoImg from '../assets/catzoiudo.jpg';
import kittyImg from '../assets/kitty.jpg';

  const images = {
  'catzoiudo.jpg': catzoiudoImg,
  'kitty.jpg': kittyImg,
};

export default function Opinions(){
  //só pegando os meus dados do json e aplicando no carousel
  //cada item do carousel é um componente opinion
  //sendo cada um desses um item no json opinonsData



  const items = opinionsData.map((item, index) => (
    <Opinion
        key={index}
        src={images[item.src]}
        title={item.title}
        alt={item.alt}
        desc={item.desc}
        author={item.author}
        date={item.date}
        opinion={item.opinion}
        />
    ));

    return (
      <div className="ops">

      <div id='depoimento'>
        <div className="headerops">
        <h1>Veja alguns relatos</h1>
        <div className="squareh1"></div>
        </div>
        <Carousel items={items} />
      </div>
      </div>
      
  );
}