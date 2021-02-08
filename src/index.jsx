// client/src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainView } from './components/main-view/main-view';
import { Champions } from './components/champions/champions';
import  ButtonB  from './components/ui/button-b/button-b';
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
  
      constructor() {
        super();
        this.state = {
          tallyB: 0,
          engMode: false,
        }}
        bBtnTouchEnd = ()=>{
          console.log('end');
        }
        bBtnTouchStart = ()=>{
          console.log('start');
        }
        toggleEng = () =>{
          this.setState({engMode :this.state.engMode = !this.state.engMode})
          console.log(this.state.engMode)
        }

  incrementTallyB = () => {
    this.setState({ tallyb: this.state.tallyB += 1 });
    console.log("inc-tal" + this.state.tallyB)
  }
  render() {
    
    return (
      <Router>
        <Route exact path="/">
          <MainView />
        </Route>

        <Route exact path="/champions">
          <MainView />
          <Champions  engMode={this.state.engMode}  />
          <ButtonB onClick={this.incrementTallyB} onTouchEnd={this.toggleEng}
          onTouchStart={this.toggleEng}/>

          
        </Route>
      </Router>
    )

  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(BanbaApp), container);