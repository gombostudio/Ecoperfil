import React from 'react';
import style from './styles.module.css'
import CardsComponents from './component/cards';

const Cards = () => {
  const card_datas = [
    {
      title: 'Card 1',
      text: 'Este é o texto do Card 1.',
      Urlimg: 'https://via.placeholder.com/150', 
    },
    {
      title: 'Card 2',
      text: 'Texto descritivo do Card 2.',
      Urlimg: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 3',
      text: 'Mais detalhes sobre o Card 3.',
      Urlimg: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
    <div className={style.section}>
      {card_datas.map((card, index) => (
        <CardsComponents
          key={index}
          title={card.title}
          text={card.text}
          Urlimg={card.Urlimg}
        />
      ))}
    </div>
    </div>
  );
};

export default Cards;
