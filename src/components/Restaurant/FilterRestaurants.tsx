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
  const clearFilter = () => {
    setNameRestaurantFilter("")
    setTypeRestaurantFilter("")
    onFilter("", "");
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setNameRestaurantFilter(newName);
    // onFilter(newName, typeRestaurantFilter); 
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newType = e.target.value;
    setTypeRestaurantFilter(newType);
    // onFilter(nameRestaurantFilter, newType); 
  };

  return (
    <div className='mt-16 flex justify-center gap-5'>
      <input
        type="text"
        placeholder="Name"
        value={nameRestaurantFilter}
        onChange={handleNameChange}
        className=" h-12 rounded-lg w-1/6
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
      <button className='p-3  mb-1 bg-gradient-to-r from-blue-500 to-blue-600 text-zinc-200 font-normal h-12 w-16 sm:w-24 rounded-md
                      hover:from-blue-400 hover:to-blue-500 hover:text-zinc-100' 
              onClick={handleFilter}>
        Filter
      </button>
      <button className='p-3  mb-1 bg-gradient-to-r from-red-500 to-red-600 text-zinc-200 font-normal h-12 w-16 sm:w-24 rounded-md
                      hover:from-red-400 hover:to-red-500 hover:text-zinc-100' 
              onClick={clearFilter}>
        Clear
      </button>
    </div>
  );
};

export default FilterRestaurants;