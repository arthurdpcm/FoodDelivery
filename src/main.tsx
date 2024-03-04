import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/app';
import { Restaurants } from './pages/restaurants';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestaurantPage from './pages/RestaurantPage';
import { UserContextProvider } from './contexts/UserContext';
import Profile from './pages/profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
);
