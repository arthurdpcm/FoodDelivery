import React from 'react';
import Card from './Card';

interface Card {
  id:number;
  name: string;
  address: string;
  telephone: string;
  owner_id: number;
  dishes: Dish[];
  photo?: string;
}

interface Dish{
  dish: string;
  price: number;
}

interface CardsDisplayProps {
  cards: Card[];
}

const CardsDisplay: React.FC<CardsDisplayProps> = ({ cards }) => {
  console.log(cards[0])
  return (
    <>
      <section className='flex justify-center mt-40 gap-10'>
        {cards.map((card) => {
          return <Card key={card.id} name={card.name}
          address={card.address}
          telephone={card.telephone}
          photo={card.photo} /> 
        })}
      </section>
    </>
  );
};

export default CardsDisplay;