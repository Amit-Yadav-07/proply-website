import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './Components/HomeLayout';
import Home from './Components/Home';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: 'contact' },
      { path: 'media', element: 'media' },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
