import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const routes = [
    { text: 'Home', path: '/', isExact: true },
    { text: 'Cats', path: '/cats', isExact: false },
    { text: 'Dogs', path: '/dogs', isExact: false },
  ]
  const element = (
    <header>
      <nav>
        <h1>First react app</h1>
        <ul>
          {routes.map((route, i) => (
            <li key={i}>
              <NavLink to={route.path} exact={route.isExact} activeClassName="active-link">
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
  return element
}

export default Header
