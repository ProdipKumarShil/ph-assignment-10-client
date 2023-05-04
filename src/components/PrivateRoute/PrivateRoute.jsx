import React, { Children, useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext)
  const location = useLocation()
  console.log(location)
  
  if(user){
    return children
  }
  else{
    return <Navigate  to='/account'></Navigate>
  }
};

export default PrivateRoute;