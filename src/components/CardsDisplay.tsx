import React from 'react';
import Card from './Card';

interface Card {
  id: number;
  name: string;
  address: string;
  telephone: string;
  owner_id: number;
  dishes: Dish[];
  photo?: string;
}

interface Dish {
  dish: string;
  price: number;
}

interface CardsDisplayProps {
  cards: Card[];
}

const CardsDisplay: React.FC<CardsDisplayProps> = ({ cards }) => {
  return (
    <>
      <section className='grid grid-cols-1
       sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
       gap-20 mx-auto lg:max-w-4xl xl:max-w-5xl md:max-w-2xl
       sm:max-w-xl mt-24'>
        {cards.map((card) => (
            <div key={card.id} className='flex justify-center'>
            
              <Card
                key={card.id}
                name={card.name}
                address={card.address}
                telephone={card.telephone}
                photo={card.photo}
              />
            
            </div>
        ))}
      </section>
    </>
  );
};

export default CardsDisplay;
