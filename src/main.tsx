import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Restaurants } from './restaurants';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestaurantPage from './RestaurantPage';

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
    path: "/restaurants/:id",
    element: <RestaurantPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
