import { Search } from 'lucide-react';
import CardsDisplay from "../components/Card/CardsDisplay";
import Header from "../components/Header";
import mockCards from "../../mock.json"
import { useState } from "react";
import TypesDisplay from '../components/TypesDisplay';
import { useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

interface Card {
  id:number;
  name: string;
  address: string;
  telephone: string;
  owner_id: number;
  dishes: Dish[];
  photo?: string;
  type:string;
}

interface Dish{
  dish: string;
  price: number;
}

export function App() {
  const {user} = useUserContext()
  const [cards] = useState<Card[]>(mockCards["restaurants"]);
  const [searchRestaurant, setSearchRestaurant] = useState<string>("")
  const navigate = useNavigate()
  function handleSearchRestaurant(event: React.FormEvent){
    event.preventDefault();
    window.location.href = `/restaurants/?name=${searchRestaurant}`
  }
  if (!user) {
    navigate("/login")
  }

  return (
    <>
      <Header/>
      <div className='flex flex-col'>
        <section className="flex justify-center">
          <form onSubmit={handleSearchRestaurant} className="my-20 flex flex-col">
            <h1 className=" text-xl sm:text-2xl font-medium">In the mood for something specific?</h1>
    
            <div className='flex items-center mt-5 justify-end '>
              <input type="text" value={searchRestaurant} onChange={(e)=>setSearchRestaurant(e.target.value)}
              
              className="h-12 rounded-lg w-full
              bg-zinc-200 p-3 font-normal text-zinc-800
                focus:outline-none focus:ring-2 focus:ring-blue-600
                caret-blue-600
              
              " >

              </input>
              <button type="submit"  className=' ml-3 text-blue-600 hover:text-blue-700' ><Search size={20}/></button>
            </div>
            
          </form>
        </section>
        
      <div className='flex flex-col mx-12 md:mx-32 lg:mx-40 xl:mx-48'>
        <hr className=' my-5 w-full border-zinc-200' />

        <h1 className='font-semibold text-3xl'>Types</h1>
      </div>
        <TypesDisplay/>
      <div className='flex flex-col mx-12 md:mx-32 lg:mx-40 xl:mx-48'>
        <hr className=' my-5 w-full border-zinc-200' />

        <h1 className='font-semibold text-3xl'>Restaurants</h1>
      </div>
        <CardsDisplay screen="home" cards={cards}/>

      </div>
    </>
  )
}


