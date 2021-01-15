import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import HomePage from "../screens/HomePage";
// import CreatePage from "../screens/CreatePage";
// import ViewCollection from "../screens/ViewCollection";
// import EditPage from "../screens/EditPage";
import Playground from "../screens/Playground";

const PlaygroundRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Playground} exact={true} />
    </Switch>
  </BrowserRouter>
);

export default PlaygroundRouter;
