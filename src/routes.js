import React from "react";
import Layout from "./layouts/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/authRoutes/privateRoutes";
import PublicRoute from "./components/authRoutes/publicRoutes";

import Home from "./components/home";
import SignIn from "./components/signin";
import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";
import AddEditMatch from "./components/admin/matches/addEditMatch";
import AdminPlayers from "./components/admin/players";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/signin"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
