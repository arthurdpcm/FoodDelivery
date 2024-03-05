import React from 'react';
import RestaurantCard from '../components/Restaurant/RestaurantCardProfile';
import { useUserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import { Navigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user } = useUserContext();

  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="mx-8 my-4">
        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg mb-1">{user.address}</p>
        <p className="text-lg mb-4">{user.telephone}</p>
        <h2 className="text-2xl font-bold mb-2">Owned Restaurants</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {user.own_restaurants.map((restaurantId) => (
            <RestaurantCard key={restaurantId} id={restaurantId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
