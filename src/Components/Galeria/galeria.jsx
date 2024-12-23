import React from "react";
import Marquee from "react-fast-marquee";
import imagem1 from '../../assets/1.jpg';
import imagem2 from '../../assets/2.jpg';
import imagem3 from '../../assets/3.jpg';
import imagem4 from '../../assets/4.jpg';
import imagem5 from '../../assets/5.png';
import imagem6 from '../../assets/6.png';
import imagem7 from '../../assets/7.png';
import style from './styles.module.css';

const CustomMarquee = () => {
  const imagens = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7
  ];

  return (
    <Marquee speed={50} gradient={false}>
     <div className={style.section} id="galeria">
      {imagens.map((imagem, index) => (
        <img key={index} src={imagem} className={style.imgs}/>
      ))}
     </div>
    </Marquee>
  );
};

export default CustomMarquee;
