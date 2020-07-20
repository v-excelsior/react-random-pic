import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import mainPage from "./views/mainPage";
import catsPage from "./views/catsPage";
import dogsPage from "./views/dogsPage";

export default function SidebarExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route path="/cats" component={catsPage} />
          <Route path="/dogs" component={dogsPage} />
        </Switch>
      </div>
    </Router>
  );
}
