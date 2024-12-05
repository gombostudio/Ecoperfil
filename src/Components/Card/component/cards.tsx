import React from 'react';
import style from './cardstyles.module.css';

function CardsComponents({ title, text, Urlimg }) {
  return (

    <div className={style.section}>
      <img src={Urlimg} alt={title} />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  
  );
}

export default CardsComponents;
