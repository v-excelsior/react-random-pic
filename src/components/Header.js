import React from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AnimalCounter from './AnimalCounter'

function Header() {
    const links = [
        { text: 'Home', path: '/', isExact: true },
        { text: 'Cats', path: '/cats', isExact: false },
        { text: 'Dogs', path: '/dogs', isExact: false },
        { text: 'Foxes', path: '/foxes', isExact: false },
        { text: 'Collection', path: '/collection', isExact: false },
    ]
    const element = (
        <header>
            <AppBar position="static">
                <Toolbar className="nav">
                    <ul className="nav__list">
                        {links.map((link, i) => (
                            <li key={i} className="nav__list-link">
                                <NavLink
                                    to={link.path}
                                    exact={link.isExact}
                                    activeClassName="active-link"
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <AnimalCounter />
                </Toolbar>
            </AppBar>
        </header>
    )
    return element
}

export default Header
