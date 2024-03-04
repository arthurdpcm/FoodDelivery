import React from 'react';
import data from '../../mock.json';
import { useNavigate } from 'react-router-dom';


const TypesDisplay: React.FC = () => {
  const navigate = useNavigate()

  const uniqueTypes = [...new Set(data.restaurants.map((restaurant) => restaurant.type))];

  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 mx-auto gap-7 mt-5'>
      {uniqueTypes.map((type, index) => (
        <div key={index} onClick={()=>{
          navigate(`/restaurants/?name=&type=${type}`)
        }} className=" cursor-pointer rounded-md w-28 h-16 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 
          bg-gradient-to-r from-blue-500 to-blue-700
           hover:from-blue-400 hover:to-blue-600">
          <h2 className='text-zinc-200 p-3 pl-3 text-lg md:text-xl hover:text-zinc-100 overflow-hidden whitespace-nowrap overflow-ellipsis'>{type}</h2>
        </div>
      ))}
    </div>
  );
};

export default TypesDisplay;