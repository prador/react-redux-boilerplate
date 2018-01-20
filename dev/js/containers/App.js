import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Home from './Home'

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
            <Route render={() => <h3>Page not found</h3>} />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}