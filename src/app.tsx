import { Search } from 'lucide-react';
import CardsDisplay from "./components/CardsDisplay";
import Header from "./components/Header";
import mockCards from "../mock.json"
import { useState } from "react";

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

export function App() {
  const [cards] = useState<Card[]>(mockCards["restaurants"]);
  const [searchRestaurant, setSearchRestaurant] = useState<string>("")

  function handleSearchRestaurant(event: React.FormEvent){
    event.preventDefault();
    window.location.href = `/restaurants` // /restaurantFilter=${searchRestaurant}
  }

  return (
    <>
      <Header/>
      <section className="flex justify-center">
        <form onSubmit={handleSearchRestaurant} className="mt-20 flex flex-col">
          <h1 className=" text-2xl font-medium">In the mood for something specific?</h1>
  
          <div className='flex items-center mt-5 justify-end '>
            <input type="text" value={searchRestaurant} onChange={(e)=>setSearchRestaurant(e.target.value)}
            
            className="h-12 rounded-lg w-full
            bg-zinc-200 p-3 font-normal text-zinc-800
              focus:outline-none focus:ring-2 focus:ring-blue-600
              caret-blue-600
            
            " >
              
            </input>
            <button type="submit"  className='absolute mr-3 text-blue-600 hover:text-blue-700' ><Search size={20}/></button>
          </div>
          
        </form>
      </section>

      <CardsDisplay cards={cards}/>

    </>
  )
}


