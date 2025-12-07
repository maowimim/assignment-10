import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loader from '../pages/Loader';

const PrivateRouter = ({ children }) => {
    const { user ,loading } = use(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;