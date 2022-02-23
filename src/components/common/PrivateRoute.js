import React from 'react'
import {Route, Navigate} from 'react-router-dom'

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    let isAuthenticated = !!auth.user_id
  return (
    <Route
      {...rest}
      render={props =>
          isAuthenticated ? (<Component {...props}/>)
          : (<Navigate to='/'/>)
      }
    />
  )
}


export default PrivateRoute