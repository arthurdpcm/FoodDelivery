import React, { useState } from 'react';

interface DishCardProps {
  dish: string;
  price: number;
  amount: number;
  id:number;
  restaurant:string;
}

const DishCardCart: React.FC<DishCardProps> = ({ dish, price, amount, restaurant }) => {
  const [localAmount, setLocalAmount] = useState(amount);

  const decreaseAmount = () => {
    setLocalAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : prevAmount));
  };

  return (
    localAmount > 0 ?
    <div className='my-8 flex flex-col max-w-screen-md gap-10 sm:mx-0 w-full sm:p-8 bg-gray-100 rounded-lg
      shadow-2xl border-l-2 border-b-4 border-blue-600'>
      <div className='flex flex-col sm:flex-row gap-5'>
        <div className='flex flex-col w-full p-4 pr-16'>
          <h1 className='text-lg sm:text-2xl font-bold mb-1'>{dish}</h1>
          <h1 className='text-md sm:text-xl font-medium mb-1'>{restaurant}</h1>

          <p className='text-zinc-600 text-lg sm:text-xl mb-2'>${price * localAmount}</p>

          <div className='flex font-normal text-lg mt-auto ml-auto items-center gap-5'>
            <p className='text-zinc-600 text-lg sm:text-xl mb-2'>{localAmount}</p>
            <button
              onClick={() => setLocalAmount((prevAmount) => prevAmount + 1)}
              className='sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-zinc-200 
                        hover:from-blue-400 hover:to-blue-500 hover:text-zinc-100'
            >
              +
            </button>
            <button
              onClick={decreaseAmount}
              className='sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-zinc-200 
                        hover:from-blue-400 hover:to-blue-500 hover:text-zinc-100'
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div> : null
  );
};

export default DishCardCart;
