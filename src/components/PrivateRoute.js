import React from 'react';
import { Route , Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => { 

   const isAuthed = localStorage.getItem('currentUser');

   if(isAuthed){
     return  <Route {...rest} render={props => <Component {...props} /> } />
   }else{
    return  <Route {...rest} render={props =>  <Redirect  to={{ pathname: "/" }}  /> } />  
   }
   

return ( <Route
    {...rest}
    render={props =>
      isAuthed != null ? (
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