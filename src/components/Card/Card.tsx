import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  name: string;
  address: string;
  telephone: string;
  photo?: string;
  screen: "home" | "restaurants";
  id: number;
  type: string;
}

const Card: React.FC<CardProps> = ({ id, name, address, telephone, photo, screen, type }) => {
  const [showFullName, setShowFullName] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("showFullName");
    return storedValue ? JSON.parse(storedValue) : window.innerWidth <= 800;
  });
  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth <= 800;
      setShowFullName(newSize);
      localStorage.setItem("showNavBarImage", JSON.stringify(newSize));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate()

  return screen == "home" ? 
  (
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
  ) : (
    <div style={{borderWidth: '2px'}} className=" mb-5 flex lg:w-1/2 w-3/4 h-20 sm:h-24 bg-zinc-100 border border-solid border-blue-600  ring-blue-600 rounded-lg">
      <img className='h-full rounded-l-md border-r-2 border-blue-600'
        src={photo} alt="Restaurant Image" 
      />

      <div className='flex items-center m-5 w-full gap-1'>
        <h1 className='text-sm sm:text-lg'><strong>{
            
            showFullName ?  name.slice(0, 17).concat('...') : name

          }</strong> • {type}</h1>

          <button  onClick={()=> navigate(`/restaurants/${id}`)}
            className=' ml-auto text-sm sm:text-lg px-5 sm:px-5 h-10 rounded-md text-zinc-100 font-normal
                bg-gradient-to-r from-blue-400 to-blue-500 
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600'
                
          >Details</button>


      </div>
    </div>
  )
};

export default Card;