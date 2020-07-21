import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const element = (
    <header>
      <nav>
        <h1>First react app</h1>
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
      </nav>
    </header>
  );
  return element;
}

export default Header;
