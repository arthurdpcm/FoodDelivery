import React from 'react';

interface CardProps {
  name: string;
  address: string;
  telephone: string;
  photo?: string;
}

const Card: React.FC<CardProps> = ({ name, address, telephone, photo }) => {

  return (
    <div style={{borderWidth: '3px'}} className="flex flex-col max-w-sm bg-zinc-100 border border-solid border-blue-600  ring-blue-600 rounded-lg">
      <img className='w-full h-44 rounded-t-md object-cover border-b-2 border-blue-600'
        src={photo} alt="Restaurant Image" 
      />

      <div className='px-5 mt-5 flex flex-col justify-between h-full'>
        <div className='mb-5'>
          <h1 className='text-2xl'><strong>{
              name.length > 20 ? name.slice(0,20).concat('...') :name
            }</strong></h1>
          <p className='sm:text-md'>Address: {
              address.length > 20 ? address.slice(0,20).concat('...') : address
            }</p>
          <p className='sm:text-md'>Tel: {telephone}</p>
        </div>

        <button className='mt-auto mb-5 w-full h-12 rounded-lg text-zinc-100 font-semibold bg-gradient-to-r from-blue-400 to-blue-500 
              hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 tra'
      >
        <span>Check it out</span>
      </button>

      </div>
      


    </div>
  );
};

export default Card;