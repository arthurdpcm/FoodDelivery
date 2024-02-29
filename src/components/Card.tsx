import React from 'react';

interface CardProps {
  name: string;
  address: string;
  telephone: string;
  photo?: string;
}

const Card: React.FC<CardProps> = ({ name, address, telephone, photo }) => {
  console.log(photo)
  return (
    <div className="bg-zinc-700 ring-2 ring-yellow-400 rounded-lg flex flex-col p-5 ">
      <img className='w-full h-28'
        src={photo} alt="Restaurant Image" 
      />
      <h1 className='sm:text-2xl mt-5'><strong>{name}</strong></h1>
      <p className='sm:text-md'>{address}</p>
      <p className='sm:text-md'>{telephone}</p>

      <button className='mt-5 h-10 rounded-lg text-zinc-700 font-semibold w-full bg-gradient-to-r from-yellow-400 to-yellow-500 
              hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 tra'
      >
        <span>Check it out</span>
      </button>
    </div>
  );
};

export default Card;