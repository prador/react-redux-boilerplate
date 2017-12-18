// entry point for app containers and components for different views
import React, { Component } from 'react'
import { connect } from 'react-redux'

// navigation elements for react router
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom'

// Material UI components to set theme for application 
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Main View containers 
import Home from './Home'
import NewPage from './NewPage'

import '../../scss/App.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <HashRouter>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/NewPage' component={NewPage} />
                  <Route render={() => <h3>Page not found</h3>} />
                </Switch>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}