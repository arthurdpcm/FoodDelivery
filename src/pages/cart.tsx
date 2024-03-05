import React, { useEffect, useState } from 'react';
import { useUserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import OrderType from '../types/OrderType';
import DishCardCart from '../components/Dish/DishCardCart';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { user } = useUserContext();
  const navigate = useNavigate()
  const [userCart, setUserCart] = useState<OrderType[] | undefined>(user?.cart);
  console.log()
  useEffect(() => {
    setUserCart((prevUserCart) => user?.cart || prevUserCart); 
  }, [user?.cart]);

  if(!user){
    navigate("/")
    return null;
  }
  return (
    
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1 className='mt-8 text-2xl font-semibold sm:text-4xl sm:font-bold'>Your Cart</h1>
        { userCart && userCart.length > 0 ? (
          <div className='flex flex-col items-center w-1/2 md:w-2/3 mx-24 md:mx-12'>
            {userCart?.map((order) => (
              <DishCardCart key={order.id} restaurant={order.restaurant} dish={order.dish} id={order.id} amount={order.amount} price={order.price} />
            ))}
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      
    </div> 
  ) 
};

export default CartPage;
