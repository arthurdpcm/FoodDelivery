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
  type:string;
}

interface Dish {
  dish: string;
  price: number;
}

interface CardsDisplayProps {
  cards: Card[];
  screen: "home" | "restaurants"
}

const CardsDisplay: React.FC<CardsDisplayProps> = ({ cards, screen}) => {

  const styleCardsDisplayHome = `grid grid-cols-1
  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
  gap-20 mx-auto lg:max-w-4xl xl:max-w-5xl md:max-w-2xl
  sm:max-w-xl mt-8`

  const styleCardsDisplayRestaurants = `mt-8 flex flex-col w-full`

  return (
    <>
      <section className={ screen == "home" ? styleCardsDisplayHome : styleCardsDisplayRestaurants}
       >
        {cards.map((card) => (
            <div key={card.id} className='flex justify-center'>
            
              <Card
                type={card.type}
                key={card.id}
                id={card.id}
                name={card.name}
                address={card.address}
                telephone={card.telephone}
                photo={card.photo}
                screen={screen}
              />
            
            </div>
        ))}
      </section>
    </>
  );
};

export default CardsDisplay;
