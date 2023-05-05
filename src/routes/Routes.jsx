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
import SingleChef from '../components/another/SingleChef/SingleChef';
import ErrorPage from '../components/shared/ErrorPage/ErrorPage';
import Loader from '../components/shared/Loader/Loader';
import Blog from '../components/shared/Blog/Blog';
import About from '../components/shared/About/About';
import Main from '../layout/Main/Main';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about_us',
        element: <About></About>
      }
    ]
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
      },
      {
        path: '/chefs/:id',
        element: <SingleChef></SingleChef>,
        loader:({params}) => fetch(`https://indiana-chef-server-prodipkumarshil.vercel.app/chefs/${params.id}`)
      }
    ]
  }
]);

export default Routes;