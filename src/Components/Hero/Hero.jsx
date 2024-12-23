import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Hero.module.css'
import img1 from '../../assets/slide1.jpg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';

function Hero() {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img1} className={style.img}/>
        <Carousel.Caption>
          <h3>Ecoperfil Engenharia ltd</h3>
          <p>Transformar a natureza para o bem-estar em harmonia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={img2} className={style.img}/>
        <Carousel.Caption>
          <h3>Ecoperfil Engenharia ltd</h3>
          <p>E o seu compromisso com a saúde.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className={style.img}/>
        <Carousel.Caption>
          <h3>O Mundo digital nas suas mãos</h3>
          <p>
          Com a EcoNet, acesso à internet de qualidade e velocidade sem limites.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Hero