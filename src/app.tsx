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
  

  return (
    <>
      <Header/>
      <CardsDisplay cards={cards}/>
    </>
  )
}


