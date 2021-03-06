import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Home from "./Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/crear" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;