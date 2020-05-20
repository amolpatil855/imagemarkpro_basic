import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import StripeCheckout from "../../../shared/components/Stripe";
import { Dialog, DialogTitle } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    heading: "BASIC",
    subheading: "",
    price:5,
    features:[
      'Select Image',
      'Add Watermark',
      'Share/Save Your Image'
    ],
    buttonText: "Upgrade Plan",
    buttonVariant: "outlined",
  },
  {
    heading: "STANDARD",
    subheading: "Most Popular",
    price:15,
    features:[
      'All BASIC plan features',
      'Select Video',
      'Share/Save Your Video'
    ],
    buttonText: "Upgrade Plan",
    buttonVariant: "outlined",
  },
  {
    heading: "PREMIUM",
    subheading: "",
    price:30,
    features:[
      'BASIC + STANDARD covered',
      'Select Streaming Platform',
      'Cutomize Your Video Screen'
    ],
    buttonText: "Upgrade Plan",
    buttonVariant: "outlined",
  },

];

export default function Pricing() {
  const classes = useStyles();
  const [upgradePlan, setUpgradePlan] = useState(false);
  const [newPlan, setNewPlan] = useState(null);
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Upgrade Your Current Plan
        </Typography>
        {/* <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography> */}
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.heading}
                  subheader={tier.subheading}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                  action={tier.heading === selectedPlan.heading ? <span className="badge badge-danger">Active</span> : null}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.features.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                    onClick={() => {
                      setNewPlan(tier);
                      setUpgradePlan(true)
                    }}
                    disabled={tier.price <= selectedPlan.price}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
          open={upgradePlan}
          onClose={() => setUpgradePlan(false)}
          maxWidth="xs"
          className="px-4"
        >
          <DialogTitle>Upgrade your plan</DialogTitle>
          <div className="container">
          <h5 className="text-danger mb-3 font-weight-light">{newPlan?.heading} PLAN - ${newPlan?.price}</h5>
          <StripeCheckout
            type="upgrade"
            plan={selectedPlan}
            newPlan={newPlan}
            email={currentUser.email}
            firstName={currentUser.firstName}
            lastName={currentUser.lastName}
          />
         
          <div className="alert alert-info">
            <div>Test Credit Card - 4242 4242 4242 4242</div>
            <div>CVC - Any 3 digits</div>
            <div>Expiry - Any future date</div>
          </div>
          </div>
        </Dialog>
      </Container>
    </React.Fragment>
  );
}
