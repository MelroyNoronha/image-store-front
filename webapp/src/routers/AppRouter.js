import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from '../HomePage/index'
import CreatePage from '../HomePage/CreatePage'

const AppRouter = () => (
  <BrowserRouter>
    <switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={CreatePage} />
    </switch>
  </BrowserRouter>
);

export default AppRouter;
