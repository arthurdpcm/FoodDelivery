import React from 'react';

interface DishCardProps {
  dish: string;
  price: number;
  photo:string;
}

const DishCard: React.FC<DishCardProps> = ({ dish, price, photo }) => {

  const addItemToCard = (dish: string, price:number) =>{
      console.log(dish, price)
  }

  return (
    <div className='mb-8 flex flex-col max-w-screen-md gap-10 w-3/4 pl-2 py-5 sm:p-8 bg-gray-100 rounded-lg
    shadow-2xl border-l-2 border-b-4 border-blue-600'>
      <div className='flex flex-col sm:flex-row gap-5'>
        <img className='w-16 h-2/5 lg:w-1/3 border-2 border-blue-600 rounded-lg' src={photo} alt="Restaurant Photo" />
        <div className='flex flex-col w-full pr-16'>
          <h1 className='text-lg sm:text-2xl font-bold mb-1'>{dish}</h1>
          <p className='text-zinc-600 text-lg sm:text-xl mb-2'>${price}</p>
          <button  onClick={()=>addItemToCard(dish, price)}
            className="mt-auto ml-auto font-normal text-lg sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-zinc-200 
                      hover:from-blue-400 hover:to-blue-500 hover:text-zinc-100">
                        +
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
