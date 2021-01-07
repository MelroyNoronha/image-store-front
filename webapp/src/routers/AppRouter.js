import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/index";
import CreatePage from "../CreatePage/CreatePage";
import ViewCollection from "../ViewCollection/index";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={CreatePage} />
      <Route path="/view" component={ViewCollection} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
