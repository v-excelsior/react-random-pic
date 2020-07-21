import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import mainPage from './views/mainPage'
import catsPage from './views/catsPage'
import dogsPage from './views/dogsPage'

export default function SidebarExample() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route path="/cats" component={catsPage} />
        <Route path="/dogs" component={dogsPage} />
      </Switch>
    </Router>
  )
}
