import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from '../HomePage/index'
import CreatePage from '../CreatePage/CreatePage'

const AppRouter = () => (
  <BrowserRouter>
    <switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={CreatePage} />
    </switch>
  </BrowserRouter>
);

export default AppRouter;
