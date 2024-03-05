import React from "react";
import data from "../../../mock.json";

interface RestaurantCardProfileProps {
  id: number;
}

const RestaurantCardProfile: React.FC<RestaurantCardProfileProps> = ({ id }) => {
  const restaurant = data["restaurants"][id - 1];

  return (
    <div className=" my-5">
      <div className="flex flex-row gap-5 h-full w-full p-8 bg-gray-100 rounded-lg shadow-2xl border-l-2 border-b-4 border-blue-600 max-w-md">
        <img className="w-1/2 border-2 border-blue-600 rounded-lg" src={restaurant.photo} alt="Restaurant Photo" />

        <div className="flex flex-col text-xl">
          <h1 className=" sm:text-xl md:text-2xl font-bold mb-4">{restaurant.name}</h1>
          <p className="text-gray-600 mb-2">{restaurant.address}</p>
          <p className="text-gray-600 mb-2">Tel: {restaurant.telephone}</p>

        </div>
      </div>
    </div>
  );
};

export default RestaurantCardProfile;
