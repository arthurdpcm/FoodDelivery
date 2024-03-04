import CardsDisplay from "../components/Card/CardsDisplay";
import { useNavigate, useSearchParams } from 'react-router-dom';
import mockCards from "../../mock.json"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterRestaurants from "../components/Restaurant/FilterRestaurants";

interface Card {
  id:number;
  name: string;
  address: string;
  telephone: string;
  owner_id: number;
  dishes: Dish[];
  photo?: string;
  type: string;
}

interface Dish{
  dish: string;
  price: number;
}

export function Restaurants() {

  const [cards, setCards] = useState<Card[]>(mockCards["restaurants"]);
  const [searchParams ] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const filterName = searchParams.get("name") || "";
    const filterType = searchParams.get("type") || "";
  
    const cardsFiltered = mockCards["restaurants"].filter((card) => {
      const nameMatch = filterName === "" || card.name.toLowerCase().includes(filterName.toLowerCase());
      const typeMatch = filterType === "" || card.type.toLowerCase().includes(filterType.toLowerCase());
  
      return nameMatch && typeMatch;
    });
  
    setCards(cardsFiltered);
  }, [searchParams]);

  const handleFilterRestaurants = (filterName: string, filterType: string): void => {
    searchParams.set("name", filterName);
    if (filterType !== "") {
      searchParams.set("type", filterType);
    } else {
      searchParams.delete("type");
    }

    navigate(`/restaurants/?name=${filterName}${filterType !== "" ? `&type=${filterType}` : ""}`);
  };

  return (
    <>
      <Header/>
      <div className="flex flex-col w-full justify-center">
        <FilterRestaurants onFilter={handleFilterRestaurants}
          
          nameRestaurant={searchParams.get("name") || ""}
          typeRestaurant={searchParams.get("type") || ""} 
        />
        <CardsDisplay screen="restaurants" cards={cards} />
      </div>
    
    </>
  )
}


