import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import "./App.css"
import ColorForm from './ColorForm'
import ColorPage from './ColorPage'
import Home from "./Home"



export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/colorForm" component={ColorForm} />
          <Route exact path="/colorPage/:color" component={ColorPage} />
        </Switch>
      </div>
    )
  }
}
