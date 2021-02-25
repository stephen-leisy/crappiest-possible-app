import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,

  Route,
  Switch,
} from 'react-router-dom';
import Albumpage from './Albumpage.js';
import Listpage from './Listpage.js';
import Header from './Header.js';
import Create from './Create.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <div>

          <Router>
            <header className='header-style'>
              <Header />
            </header>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Listpage {...routerProps} />}
              />
              <Route
                path="/albums"
                exact
                render={(routerProps) => <Listpage {...routerProps} />}
              />
              <Route
                path="/albums/:albumId"
                exact
                render={(routerProps) => <Albumpage {...routerProps} />}
              />
              <Route
                path="/create"
                exact
                render={(routerProps) => <Create {...routerProps} />}
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