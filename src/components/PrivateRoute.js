import React from 'react';
import { Route , Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => { 
  
  

    const isAuthed = localStorage.getItem('currentUser_imagemarkpro');



return ( <Route
    {...rest}
    render={props =>
      isAuthed && isAuthed.email !== "" ? (
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