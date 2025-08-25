import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './Components/HomeLayout';
import Home from './Components/Home';
import Blog from './Components/Blog';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: 'contact' },
      { path: 'media', element: 'media' },
      { path: '/blog', element: <Blog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
