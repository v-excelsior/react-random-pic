import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import createRoutes from "./routes.js";
const routes = createRoutes();

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>

          <Switch>{routes}</Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
