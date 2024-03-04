import React from 'react';
import RestaurantCard from '../components/Restaurant/RestaurantCardProfile';
import { useUserContext } from '../contexts/UserContext';
import Header from '../components/Header';



const Profile: React.FC = () => {

  const {user} = useUserContext()

  return (
    <>
      <Header/>
      <div>
        <h1>{user?.name}</h1>
        <p>{user?.address}</p>
        <p>{user?.telephone}</p>
        <h2>Owned Restaurants</h2>
        <div>
          {user?.own_restaurants.map((restaurantId) => (
            <RestaurantCard key={restaurantId} id={restaurantId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;