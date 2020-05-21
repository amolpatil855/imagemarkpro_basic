import React, { Fragment, Suspense, lazy,useEffect } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch , Redirect } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';

import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";

import PrivateRoute from './components/PrivateRoute';

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));
const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

const LandingPage = lazy(() => import("./landing"));
const LoginPage = lazy(() => import("./login"));
const RegisterPage = lazy(() => import("./register"));

 
function App() {
  useEffect(() => {
    localStorage.setItem('selectedPlan',`{"heading":"BASIC","subheading":"5","price":5,"features":["Select Image","Add Watermark","Share/Save Your Image"]}`)
    let users = JSON.parse(localStorage.getItem('users'));
    if(users) return
    localStorage.setItem('users',JSON.stringify([{
      firstName:"admin",
      lastName:"admin",
      email:"admin@admin.com",
      password:"admin"
    }]));
  })
  return (
    <BrowserRouter>
<NotificationContainer />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>

            {/* <Route exact path="/c">
              <LoggedInComponent />
            </Route> */}

            <PrivateRoute path='/c' component={LoggedInComponent} />
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

serviceWorker.register();

export default App;
