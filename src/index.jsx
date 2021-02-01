// client/src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/main-view/main-view';

// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class BanbaApp extends React.Component {
  render() {
    return (
<div>
    <h1>Hello</h1>
    <MainView />
    </div>
    )
    
  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(BanbaApp), container);