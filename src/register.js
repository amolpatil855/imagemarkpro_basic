import React, { Component, memo } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
} from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "./shared/components/NavigationDrawer";

import StripeCheckoutButton from "./shared/components/Stripe";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginPage extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirect: false,
      selectedPlan: null,
    };
  }

  componentDidMount() {
    let selectedPlan = { ...JSON.parse(localStorage.getItem("selectedPlan")) };
    this.setState({ selectedPlan });
  }

  signUpUser = () => {
    console.log("signup by ", this.state);
    let users = JSON.parse(localStorage.getItem("users"));
    users = users ? [...users] : [];
    console.log("users",users)
    let {firstName, lastName, email, password} = this.state;
    let user = {
        firstName,
        lastName,
        email,
        password
    }

    users.push(user);

    localStorage.setItem('users',JSON.stringify(users));
    this.setState({redirect:true},() => this.renderRedirect());
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/c" />;
    }
  };

  render() {
    const menuItems = [
      {
        link: "/",
        name: "Home",
        icon: <HomeIcon className="text-white" />,
      },
      {
        link: "/blog",
        name: "Blog",
        icon: <BookIcon className="text-white" />,
      },
      {
        link: "/register",
        name: "Register",
        icon: <BookIcon className="text-white" />,
      },
      {
        name: "Login",
        link: "/login",
        icon: <LockOpenIcon className="text-white" />,
      },
    ];

    const {
      classes,
      openRegisterDialog,
      openLoginDialog,
      handleMobileDrawerOpen,
      handleMobileDrawerClose,
      mobileDrawerOpen,
      selectedTab,
    } = this.props;

    return (
      <div className={classes.root}>
        {this.renderRedirect()}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div>
              <a class="navbar-brand" href="/">
                <img src="images/IMP_Logo.png" alt="Image Mark Pro" />
              </a>
            </div>
            <div>
              <Hidden mdUp>
                <IconButton
                  className={classes.menuButton}
                  onClick={handleMobileDrawerOpen}
                  aria-label="Open Navigation"
                >
                  <MenuIcon color="primary" />
                </IconButton>
              </Hidden>
              <Hidden smDown>
                {menuItems.map((element) => {
                  if (element.link) {
                    return (
                      <Link
                        key={element.name}
                        to={element.link}
                        className={classes.noDecoration}
                        onClick={handleMobileDrawerClose}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          classes={{ text: classes.menuButtonText }}
                        >
                          {element.name}
                        </Button>
                      </Link>
                    );
                  }
                  return (
                    <Button
                      color="secondary"
                      size="large"
                      onClick={element.onClick}
                      classes={{ text: classes.menuButtonText }}
                      key={element.name}
                    >
                      {element.name}
                    </Button>
                  );
                })}
              </Hidden>
            </div>
          </Toolbar>
        </AppBar>
        <NavigationDrawer
          menuItems={menuItems}
          anchor="right"
          open={mobileDrawerOpen}
          selectedItem={selectedTab}
          onClose={handleMobileDrawerClose}
        />

        <div style={{ marginTop: "100px" }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      value={this.state.lastName}
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                

                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
              <div className={classes.form}>
              <div className="d-flex alert alert-info">
                  <div>selected Plan - {this.state.selectedPlan?.heading}</div>
                </div>
                
              <div className="alert alert-info">
                  {" "}
                  <div>
                      <div>Test Credit Card - 4242 4242 4242 4242</div>
                      <div>CVC - Any 3 digits</div>
                      <div>Expiry - Any future date</div>
                  </div>
                </div>
              <div className="center">
                  {" "}
                  <StripeCheckoutButton plan={this.state.selectedPlan} signUpUser={() => this.signUpUser()}/>
                </div>
                </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(LoginPage));
