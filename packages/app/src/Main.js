import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import LayoutSettings from "./LayoutSettings";
import Hello from "./views/Hello";

const Main = () => (
  <LayoutSettings>
    <Switch>
      <Route path="/hello/:id/:sObjectName" component={Hello} />
    </Switch>
  </LayoutSettings>
);
export default hot(Main);
