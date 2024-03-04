import React from 'react';
import RestaurantCard from '../components/Restaurant/RestaurantCardProfile';

interface User {
  id: number;
  name: string;
  address: string;
  telephone: string;
  own_restaurants: number[];
  cart: Card[];
}

interface Card {
  name: string;
  address: string;
  telephone: string;
  photo?: string;
}


const user: User = {
  id: 101,
  name: "John Doe",
  address: "789 Oak St",
  telephone: "555-9012",
  own_restaurants: [1],
  cart: []
}

const Profile: React.FC = () => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.address}</p>
      <p>{user.telephone}</p>
      <h2>Owned Restaurants</h2>
      <div>
        {user.own_restaurants.map((restaurantId) => (
          <RestaurantCard key={restaurantId} id={restaurantId} />
        ))}
      </div>
    </div>
  );
}

export default Profile;