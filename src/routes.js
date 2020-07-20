import React from "react";
import { BrowserRouter as Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import mainPage from "./views/mainPage";
import catsPage from "./views/catsPage";
import dogsPage from "./views/dogsPage";

const history = createBrowserHistory();

const createRoutes = () => (
  <Router history={history}>
    <Route exact path="/" component={mainPage} />
    <Route path="/cats" component={catsPage} />
    <Route path="/dogs" component={dogsPage} />
  </Router>
);

export default createRoutes;
