import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../screens/HomePage";
import CreatePage from "../screens/CreatePage";
import ViewCollection from "../screens/ViewCollection";
import EditPage from "../screens/EditPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={CreatePage} />
      <Route path="/view" component={ViewCollection} />
      <Route path="/edit" component={EditPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
