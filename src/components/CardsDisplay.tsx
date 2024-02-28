import React from 'react';

interface Card {
  id:number;
  name: string;
  address: string;
  telephone: string;
  owner_id: number;
  dishes: Dish[]
}

interface Dish{
  dish: string;
  price: number;
}

interface CardsDisplayProps {
  cards: Card[];
}

const CardsDisplay: React.FC<CardsDisplayProps> = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        <h1>{card.name}</h1>
      })}
    </>
  );
};

export default CardsDisplay;