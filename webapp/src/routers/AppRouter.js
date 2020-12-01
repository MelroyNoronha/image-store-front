import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../HomePage/index'
import CreatePage from '../CreatePage/CreatePage'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={CreatePage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
