import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './features/Home';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './features/AboutUs';
import ContactUs from './features/ContactUs';
const router=createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/About',
        element:<AboutUs ></AboutUs>,
      },
      {
        path:'/Contact',
        element:<ContactUs ></ContactUs>
      },
     
     
    ]
   }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <RouterProvider router={router}/>
 
 
  
);

