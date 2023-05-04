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
import ChefPage from '../components/another/ChefPage/ChefPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

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
    element: <PrivateRoute><Chefs></Chefs></PrivateRoute>,
    children: [
      {
        path: '/chefs',
        element: <ChefPage></ChefPage>
      }
    ]
  }
]);

export default Routes;