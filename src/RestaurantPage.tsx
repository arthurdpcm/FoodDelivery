import React from 'react';
import mockRestaurants from '../mock.json'

import Header from './components/Header';


const RestaurantPage: React.FC = () => {


  
  const restaurant = mockRestaurants["restaurants"][0]

  return (
    <>
    <Header/>
      <div className='flex flex-col'>
      {restaurant && (
        <>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.address}</p>
          <p>{restaurant.description}</p>
        </>
      )}
      {!restaurant && (
        <p>Restaurante não encontrado</p>
      )}
      </div>
    </>
  );
};

export default RestaurantPage;
