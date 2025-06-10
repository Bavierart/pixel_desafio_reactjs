import { useState } from 'react';
import './Carousel.css';
import leftArrow from '../assets/aright.png'
import rightArrow from '../assets/aleft.png'


//Carousel de fotos, usado mais tarde na seção de opiniões
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //handle change of current state
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='cont-all'>
            <button className="arrow left" onClick={goToPrevious}>
        <img src={leftArrow} alt="Previous" className="icons-arr" />
        </button>
    <div className="carousel-container">


      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>


    </div>
            <button className="arrow right" onClick={goToNext}>
        <img src={rightArrow} alt="Next" className="icons-arr" />
        </button>
    </div>
  );
};

export default Carousel;
