import React, { useState } from 'react';

interface FilterRestaurantsProps {
  onFilter: (nameRestaurant: string, typeRestaurant: string) => void;
  nameRestaurant:string;
  typeRestaurant:string;
}

const FilterRestaurants: React.FC<FilterRestaurantsProps> = ({ onFilter, nameRestaurant, typeRestaurant }) => {
  const [nameRestaurantFilter, setNameRestaurantFilter] = useState(nameRestaurant);
  const [typeRestaurantFilter, setTypeRestaurantFilter] = useState(typeRestaurant);

  const handleFilter = () => {
    onFilter(nameRestaurantFilter, typeRestaurantFilter);
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setNameRestaurantFilter(newName);
    onFilter(newName, typeRestaurantFilter); 
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newType = e.target.value;
    setTypeRestaurantFilter(newType);
    onFilter(nameRestaurantFilter, newType); 
  };

  return (
    <div className='mt-16 flex justify-center gap-5'>
      <input
        type="text"
        placeholder="Name"
        value={nameRestaurantFilter}
        onChange={handleNameChange}
        className="h-12 rounded-lg w-1/6
        bg-zinc-200 p-3 font-normal text-zinc-800
          focus:outline-none focus:ring-2 focus:ring-blue-600
          caret-blue-600
        
        " 
      />
      <input
        type="text"
        placeholder="Type"
        value={typeRestaurantFilter}
        onChange={handleTypeChange}
        className="h-12 rounded-lg w-1/6
        bg-zinc-200 p-3 font-normal text-zinc-800
          focus:outline-none focus:ring-2 focus:ring-blue-600
          caret-blue-600
        
        " 
      />
      <button className='p-3  mb-1 bg-gradient-to-r from-blue-400 to-blue-500 text-zinc-100 font-normal h-12 w-24 rounded-md
                      hover:from-blue-500 hover:to-blue-600 hover:text-zinc-200 transition duration-300' 
              onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};

export default FilterRestaurants;