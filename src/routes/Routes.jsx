import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from '../layout/Account/Account';
import Chefs from '../layout/Chefs/Chefs';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/account',
    element: <Account></Account>
  },
  {
    path: '/chefs',
    element: <Chefs></Chefs>
  }
]);

export default Routes;