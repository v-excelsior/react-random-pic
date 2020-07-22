import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const links = [
    { text: 'Home', path: '/', isExact: true },
    { text: 'Cats', path: '/cats', isExact: false },
    { text: 'Dogs', path: '/dogs', isExact: false },
    { text: 'Foxes', path: '/foxes', isExact: false },

  ]
  const element = (
    <header>
      <nav>
        <h1>First react app</h1>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path} exact={link.isExact} activeClassName="active-link">
                {link.text}
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
