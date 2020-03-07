import {Route, Router, Switch} from "react-router";
import Callback from "./redux/routes/callback";
import {AdminRoute, ProtectedRoute, WitnessRoute} from "./redux/components/route";
import {Challenges} from "./challenges";
import {AllGames} from "./games";
import {SeasonMatches} from "./matches";
import {AllSeasons} from "./seasons";
import {SeasonById} from "./seasons/season";
import {AllUsers} from "./users";
import {UserById} from "./users/user";
import React from "react";
import {history} from './redux/store';
import {SilentRenew} from "./redux/routes/silent-renew";
import Login from "./redux/routes/login";
import Logout from "./redux/routes/logout";
import {WitnessMatch} from "./witness";
import {GameById} from "./games/game";
import AdminPanel from "./admin";
import {Home} from "./home";

const Routes = () => {
  return (
    <Router history={history}>
      <Route path="/silent_renew" component={SilentRenew}/>
      <Switch>
        {/* Authentication Routes */}
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/callback' exact component={Callback}/>
        {/* Administration Routes */}
        <AdminRoute path='/admin' exact component={<AdminPanel/>}/>
        <ProtectedRoute path='/challenges' exact component={<Challenges/>}/>
        <WitnessRoute path='/witness' component={<WitnessMatch/>}/>
        {/* Public Routes */}
        <Route path='/games/:id' component={GameById}/>
        <Route path='/games' component={AllGames}/>
        <Route path='/matches' component={SeasonMatches}/>
        <Route path='/seasons/:id' component={SeasonById}/>
        <Route path='/seasons' component={AllSeasons}/>
        <Route path='/users/:username' component={UserById}/>
        <Route path='/users' component={AllUsers}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
};

export {Routes};