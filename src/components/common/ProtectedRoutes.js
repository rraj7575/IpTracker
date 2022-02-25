import {Outlet, Navigate} from 'react-router-dom'
import React from "react";

const ProtectedRoutes = ({isAuthenticated}) => {
    return isAuthenticated ? <Outlet/> : <Navigate to={'/'}/>
}

export default ProtectedRoutes