import React from "react";
import Layout from "./layouts/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/authRoutes/privateRoutes";
import PublicRoute from "./components/authRoutes/publicRoutes";

import Home from "./components/home";
import SignIn from "./components/signin";
import Dashboard from "./components/admin/Dashboard";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
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
