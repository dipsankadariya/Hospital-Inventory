import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Doctors from './Doctors';
import Appointments from './Appointments';
import Services from './Services';
import Departments from './Departments';
import Navbar from './Navbar';
import Queue from './Queue';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/home",  
        element: <Home />
      },
      {
        path: "/doctors",  
        element: <Doctors />
      },
      {
        path: "/appointments", 
        element: <Appointments />
      },
      {
        path: "/services",  
        element: <Services />
      },
      {
        path: "/departments",  
        element: <Departments />
      },
      {
        path: "/contact", 
        element: <Contact />
      },
      {
        path: "/about", 
        element: <About />
      },
      {
       path:"/queue",
       element:<Queue/>
      },
    ]
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;