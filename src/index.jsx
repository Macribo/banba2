// client/src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/main-view/main-view';
import { Champions } from './components/champions/champions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class BanbaApp extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <MainView />
        </Route>

        <Route exact path="/champions">
          <MainView />
          <Champions />
        </Route>
      </Router>
    )

  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(BanbaApp), container);