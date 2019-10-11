import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import PokemonDescription from "./PokemonDescription";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/:name" component={PokemonDescription} />
    </Switch>
  </BrowserRouter>
);

export default Router;
