import { useState } from 'react';
import '../../styles/menuButton.css';
import { useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const MenuButton: React.FC = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const {user} = useUserContext()

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={` ${isOpen ? ' w-full h-full  bg-blue-500 fixed top-0 right-0' : 'mt-2'}`}>
        <div id="nav-icon3" className={` ${isOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isOpen ? (
          <div className="text-center">
            <ul className='flex flex-col text-xl text-zinc-200 font-medium mt-5 '>
              <li className='hover:bg-blue-600 hover:bg-opacity-60 transition duration-300'>
                <a href='/restaurants' className=' py-5 block'>Restaurants</a>
              </li>

              {!user ? (
                <>
                    <li className='hover:bg-blue-600 hover:bg-opacity-60 transition duration-300'>
                      <a className='cursor-pointer py-5 block' onClick={()=>navigate("/login")}>Log In</a>
                    </li>
                    <li className='hover:bg-blue-600 hover:bg-opacity-60 transition duration-300'>
                      <a className='cursor-pointer py-5 block' onClick={()=>navigate("/signup")}>Sign Up</a>
                    </li>
                  </>
              ):(
                <>
                  <li className='hover:bg-blue-600 hover:bg-opacity-60 transition duration-300'>
                    <a onClick={()=>navigate(user ? `/profile` : `/signup`)} className='cursor-pointer py-5 block'>Profile</a>
                  </li>
                  <li className='hover:bg-blue-600 hover:bg-opacity-60 transition duration-300'>
                    <a className='cursor-pointer py-5 block' onClick={()=>navigate("/login")}>Log out</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MenuButton;