// client/src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainView } from './components/main-view/main-view';
import { Champions } from './components/champions/champions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class BanbaApp extends React.Component {

  constructor() {
    super();
    this.state = {
      tallyB: 0,
      tallyX: 0,

      engMode: false,
    }
  }

  incrementX = () => {
    this.setState({ tallyX: this.state.tallyX += 1 });
    console.log("inc-talX" + this.state.tallyX)
    if (this.state.tallyX >= 8) {
      this.setState({ tallyX: 0 })
    }
  }
  decrementX = () => {
    this.setState({ tallyX: this.state.tallyX -= 1 });
    console.log("dec-talX" + this.state.tallyX)
    if (this.state.tallyX <= -1) {
      this.setState({ tallyX: 7 })
    }
  }

  incrementTallyB = () => {
    this.setState({ tallyb: this.state.tallyB += 1 });
    console.log("inc-tal" + this.state.tallyB)
  }
  toggleEng = () => {
    this.setState({ engMode: this.state.engMode = !this.state.engMode })
    console.log(">>" + this.state.engMode)
  }

  setTallyX = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 0 });


  }
  setTally1 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 1 });


  }
  setTally2 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 2 });


  }
  setTally3 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 3 });


  }
  setTally4 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 4 });


  }
  setTally5 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 5 });


  }
  setTally6 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 6 });


  }
  setTally7 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 7 });


  }
  setTally8 = () => {
    console.log('helo from setTally X')
    this.setState({ tallyX: 8 });


  }
  upAndDown = () => {
    console.log("tallyX: " + this.state.tallyX)
    if (this.state.tallyX == 0) {
      this.setState({ tallyX: 4 })
    }
    if (this.state.tallyX == 1) {
      this.setState({ tallyX: 5 })
    }
    if (this.state.tallyX == 2) {
      this.setState({ tallyX: 6 })
    }
    if (this.state.tallyX == 3) {
      this.setState({ tallyX: 7 })
    }
    if (this.state.tallyX == 4) {
      this.setState({ tallyX: 0 })
    }
    if (this.state.tallyX == 5) {
      this.setState({ tallyX: 1 })
    }
    if (this.state.tallyX == 6) {
      this.setState({ tallyX: 2 })
    }
    if (this.state.tallyX == 0) {
      this.setState({ tallyX: 4 })
    }
  }
  render() {

    return (
      <Router>
        <Route exact path="/">
          <MainView incrementX={this.incrementX} decrementX={this.decrementX} toggleEng={this.toggleEng} engMode={this.state.engMode} upAndDown={this.upAndDown} />
        </Route>

        <Route exact path="/champions" >

          <Champions engMode={this.state.engMode} tallyX={this.state.tallyX}
            setTally1={this.setTally1}
            setTally2={this.setTally2}
            setTally3={this.setTally3}
            setTally4={this.setTally4}
            setTally5={this.setTally5}
            setTally6={this.setTally6}
            setTally7={this.setTally7}
            setTally8={this.setTally8}



          />


          <MainView incrementX={this.incrementX} decrementX={this.decrementX} toggleEng={this.toggleEng} engMode={this.state.engMode} upAndDown={this.upAndDown} />



        </Route>
      </Router>
    )

  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(BanbaApp), container);