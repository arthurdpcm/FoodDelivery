import OrderType from "./OrderType";

interface UserType {
  id: number;
  name: string;
  address: string;
  telephone: string;
  own_restaurants: number[];
  cart: OrderType[]; 
}

export default UserType;
