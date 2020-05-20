import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch , Route  } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Dashboard from "./dashboard/Dashboard";
import Posts from "./posts/Posts";
import Subscription from "./subscription/Subscription";
import PropsRoute from "../../shared/components/PropsRoute";
import Profile from './profile/profile';
import Pricing from './pricing/pricing';
import Gallary from './gallary/gallary';

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    posts,
    transactions,
    toggleAccountActivation,
    CardChart,
    statistics,
    targets,
    setTargets,
    setPosts,
    isAccountActivated,
    selectDashboard,
    selectPosts,
    selectSubscription,
    openAddBalanceDialog,
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>

     

        <Switch>
          <Route path="/c/pricing">
          <Pricing />
       
          </Route>
          <Route path="/c">
          <Profile />
   
    
          </Route>
          <Route path="/c/gallary">
          <Gallary />
          </Route>
        </Switch>
        
        <PropsRoute
          path="/c/posts"
          component={Posts}
          EmojiTextArea={EmojiTextArea}
          ImageCropper={ImageCropper}
          Dropzone={Dropzone}
          DateTimePicker={DateTimePicker}
          pushMessageToSnackbar={pushMessageToSnackbar}
          posts={posts}
          setPosts={setPosts}
          selectPosts={selectPosts}
        />
        <PropsRoute
          path="/c/profile"
          component={Profile}
          // transactions={transactions}
          // pushMessageToSnackbar={pushMessageToSnackbar}
          // selectSubscription={selectSubscription}
          // openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/c/pricing"
          component={Pricing}
          // transactions={transactions}
          // pushMessageToSnackbar={pushMessageToSnackbar}
          // selectSubscription={selectSubscription}
          // openAddBalanceDialog={openAddBalanceDialog}
        />
        <PropsRoute
          path="/"
          component={Dashboard}
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          setTargets={setTargets}
          isAccountActivated={isAccountActivated}
          selectDashboard={selectDashboard}
        />

       
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  pushMessageToSnackbar: PropTypes.func,
  setTargets: PropTypes.func.isRequired,
  setPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleAccountActivation: PropTypes.func,
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectPosts: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
