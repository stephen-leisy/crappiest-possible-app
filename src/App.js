import React, { Component } from 'react'

import {
  BrowserRouter as Router,

  Route,
  Switch,
} from 'react-router-dom';
import Albumpage from './Albumpage.js';
import Listpage from './Listpage.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>

          <Router>
            <header className='header-style'>

            </header>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Listpage {...routerProps} />}
              />
              <Route
                path="/:albumId"
                exact
                render={(routerProps) => <Albumpage {...routerProps} />}
              />

            </Switch>
          </Router>
          <footer>

          </footer>
        </div>

      </div>
    )
  }
}