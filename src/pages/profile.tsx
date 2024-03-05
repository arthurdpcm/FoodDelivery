import React from 'react';
import RestaurantCard from '../components/Restaurant/RestaurantCardProfile';
import { useUserContext } from '../contexts/UserContext';
import Header from '../components/Header';


const Profile: React.FC = () => {
  const { user } = useUserContext();
  // const navigate = useNavigate()
    


  return (
    <>
      <Header />
     
      <div className="mx-8 my-8 flex flex-col justify-center items-center ">
        <div className='my-5 p-8 bg-gray-100 rounded-lg shadow-2xl border-l-2 border-b-4 border-blue-600'>
            <h1 className="text-4xl font-bold mb-2">{user?.name}</h1>
            <p className="text-lg mb-1">{user?.address}</p>
            <p className="text-lg mb-4">{user?.telephone}</p>

        </div>
        <h2 className="mt-5 text-2xl font-bold mb-2">Your Restaurants</h2>
        {user && user.own_restaurants.length > 0 ? (
          <div className="flex flex-col">
            {user?.own_restaurants.map((restaurantId) => (
              <RestaurantCard key={restaurantId} id={restaurantId} />
            ))}
          </div>
        ) : (
          <p className="text-lg">You don't own any restaurants yet.</p>
        )}
      </div>
    </>
  );
};

export default Profile;