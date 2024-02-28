// import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
// import MenuHome from './MenuHome';
import '../../styles/menuButton.css';
// import {   } from 'react-router-dom';


// interface MenuButtonProps{
//   className:string;
// }


const MenuButton: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const history = useHistory();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const params = new URLSearchParams(history.location.search);
  //   params.set('isOpen', String(isOpen));
  //   history.push({ search: params.toString() });
  // }, [isOpen, history]);

  return (
    <>
    <div className={` ${ isOpen ? 'w-60  bg-yellow-400 mr-12' : ''}`}>
        <div id="nav-icon3" className={` ${ isOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isOpen ? (
          <div className=' '>
            <ul className='pl-10 text-xl text-zinc-800 font-medium'>
              <li className='hover:bg-yellow-200 transition duration-300 mt-2'>
                <a href='/' className='pl-3 py-3 block '>Restaurants</a>
              </li>
              <li className='hover:bg-yellow-200 transition duration-300'>
                <a href='/' className='pl-3 py-3 block'>Orders</a>
              </li>
              <li className='hover:bg-yellow-200 transition duration-300'>
                <a href='/' className='pl-3 py-3 block'>Sign Up</a>
              </li>
              <li className='hover:bg-yellow-200 transition duration-300'>
                <a href='/' className='pl-3 py-3 mb-5 block'>Sign In</a>
              </li>
            </ul>
          </div>
        ):null}

      </div>
      
      





    </>
  );

};

export default MenuButton;