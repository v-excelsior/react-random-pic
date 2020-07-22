import React from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

function Header() {
    const links = [
        { text: 'Home', path: '/', isExact: true },
        { text: 'Cats', path: '/cats', isExact: false },
        { text: 'Dogs', path: '/dogs', isExact: false },
        { text: 'Foxes', path: '/foxes', isExact: false },
    ]
    const element = (
        <header>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <nav className='nav'>
                            <ul className='nav__list'>
                                {links.map((link, i) => (
                                    <li key={i} className='nav__list-link'>
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
                        </nav>
                    </Toolbar>
                </AppBar>
            </div>
        </header>
    )
    return element
}

export default Header
