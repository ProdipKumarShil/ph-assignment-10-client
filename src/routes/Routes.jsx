import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from '../layout/Account/Account';
import Chefs from '../layout/Chefs/Chefs';
import Home from '../layout/Home/Home';
import Register from '../components/Account/Register/Register';
import Login from '../components/Account/Login/Login';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/account',
    element: <Account></Account>,
    children: [
      {
        path: '/account',
        element: <Login></Login>
      },
      {
        path: '/account/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/chefs',
    element: <Chefs></Chefs>
  }
]);

export default Routes;