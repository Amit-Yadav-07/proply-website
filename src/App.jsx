import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './Components/HomeLayout';
import Home from './Components/Home';
import Blog from './Components/Blog';
import AboutPage from './Components/About';
import Contact from './Components/Contact';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: 'contact', element: <Contact /> },
      { path: 'media', element: 'media' },
      { path: '/blog', element: <Blog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
