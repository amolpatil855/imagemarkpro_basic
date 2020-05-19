import React from 'react';
import { Route , Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => { 

   const isAuthed = localStorage.getItem('currentUser');

return ( <Route
    {...rest}
    render={props =>
      isAuthed  ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
    }
  />)

}

export default PrivateRoute