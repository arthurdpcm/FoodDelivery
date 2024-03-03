import CardsDisplay from "./components/CardsDisplay";

import mockCards from "../mock.json"
import { useState } from "react";
import Header from "./components/Header";

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

export function Restaurants() {

  const [cards] = useState<Card[]>(mockCards["restaurants"]);
  

  return (
    <>
      <Header/>
      <CardsDisplay cards={cards}/>
    </>
  )
}


