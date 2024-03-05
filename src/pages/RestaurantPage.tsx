import React from 'react';
import mockRestaurants from '../../mock.json';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import DishCard from '../components/Dish/DishCard';

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = mockRestaurants["restaurants"][Number(id) - 1];

  return (
    <>
      <Header />
      {restaurant ? (
        <>
          <div className='flex flex-col items-center mt-10'>
            <div className='flex flex-col max-w-screen-md gap-10 w-3/4 p-8 bg-gray-100 rounded-lg shadow-2xl border-l-2 border-b-4 border-blue-600 mx-auto'>
              <div className='flex gap-5'>
                <img className='w-36 h-2/5 md:w-2/5 lg:w-1/3 border-2 border-blue-600 rounded-lg' src={restaurant.photo} alt="Restaurant Photo" />
                <h1 className='text-xl sm:text-3xl md:text-4xl font-bold mb-4'>{restaurant.name}</h1>
              </div>
              <div className='flex flex-col text-xl'>
                <p className='text-gray-600 mb-2'>{restaurant.address}</p>
                <p className='text-gray-600 mb-2'>Tel: {restaurant.telephone}</p>
                <p className='text-gray-800'>{restaurant.description}</p>
              </div>
            </div>

            <div className='flex flex-col max-w-screen-md items-center mt-10'>
              {restaurant.dishes.map((dish) => (
                
                <DishCard key={dish.dish} id={dish.id} photo={dish.photo} dish={dish.dish} price={dish.price} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className='text-red-500 mt-4'>Restaurant not found</p>
      )}
    </>
  );
};

export default RestaurantPage;
