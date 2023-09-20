import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import RootLayout from './Components/RootLayout/RootLayout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products',
        loader: () => fetch('https://dummyjson.com/products'),
        element: <Products />,
      },
      {
        path: '/product/:productId',
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.productId}`),
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
