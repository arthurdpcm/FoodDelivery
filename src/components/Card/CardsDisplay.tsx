import React, { useState } from 'react';
import Card from './Card';
import Pagination from '../Pagination';

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
  screen: "home" | "restaurants";

}

const CardsDisplay: React.FC<CardsDisplayProps> = ({ cards, screen}) => {


  const styleCardsDisplayHome = `grid grid-cols-1
  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
  gap-20 mx-auto lg:max-w-4xl xl:max-w-5xl md:max-w-2xl
  sm:max-w-xl mt-8`

  const styleCardsDisplayRestaurants = `mt-8 flex flex-col w-full`

  const pageSize = screen === "home" ? 6 : 10;
  const [currentPage, setCurrentPage] = useState(1);


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentCards = cards.slice(startIndex, endIndex);
  const totalPages = Math.ceil(cards.length / pageSize);

  return (
    <>
      <section className={ screen == "home" ? styleCardsDisplayHome : styleCardsDisplayRestaurants}
       >
        {currentCards.map((card) => (
            <div key={card.id} className='flex justify-center w-full'>
            
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
            
            </div> // 317 x 370
        ))}


      </section>
      <Pagination currentPage={currentPage} totalPages={totalPages} itemsCount={cards.length} onPageChange={(page) => setCurrentPage(page)} pageSize={pageSize}/>
      
    </>
  );
};

export default CardsDisplay;
