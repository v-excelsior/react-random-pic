import React from "react";
import { BrowserRouter as  Route } from "react-router-dom";
import mainPage from "./views/mainPage";
import catsPage from "./views/catsPage";
import dogsPage from "./views/dogsPage";

const routes = (
  <Route exact path="/" component={mainPage}>
    <Route path="/cats" component={catsPage} />
    <Route path="/dogs" component={dogsPage} />
  </Route>
);

export default routes;

