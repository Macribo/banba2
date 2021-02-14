import React from 'react';
import { Dropdown, Container, Row, Col } from 'react-bootstrap'
import { Redirect, BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { ButtonA } from '../ui/button-a/button-a'
import ButtonB from '../ui/button-b/button-b';

import { ButtonC } from '../ui/button-c/button-c'
import { ButtonD } from '../ui/button-d/button-d'
import { ButtonLeft } from '../ui/directional-pad/left/left'
import { ButtonMiddle } from '../ui/directional-pad/mid/button-middle'
import { ButtonRight } from '../ui/directional-pad/right/right'
import { ButtonUp } from '../ui/directional-pad/up/up'
import { ButtonDown } from '../ui/directional-pad/down/down'
import './main-view.scss'
// import Poster from '../../img/poster.png'
// import clip from '../../vid/j1.mp4'

import { Champions } from '../champions/champions';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      tallyA: 0,
      menuCOpen: false,
      tallyD: 0,

      tallyY: 0,
      isLoggedIn: true
    };
  }
  bBtnTouchEnd = () => {
    console.log('end');
  }
  bBtnTouchStart = () => {
    console.log('start');
  }

  incrementTallyA = () => {
    if (this.state.tallyA === 0) {
      console.log('btn A ok')
    }
    this.setState({ tallyA: this.state.tallyA += 1 });
    console.log("inc-tal" + this.state.tallyA)
    if (this.state.tallyA == 1) {
      // alert("Update in development - March 1st 2021")
    //  return(<h1> hi</h1>)
    }

  }


  toggleCmenu = () => {
    this.setState({ menuCopen: this.state.menuCOpen = !this.state.menuCOpen });
    console.log("menu c open:" + this.state.menuCOpen)
  }

  incrementTallyD = () => {
    this.setState({ tallyD: this.state.tallyD += 1 });
    console.log("inc-tal" + this.state.tallyD)
  }
  incrementY = () => {
    this.setState({ tallyY: this.state.tallyY += 1 });
    console.log("inc-talY" + this.state.tallyY)
    this.props.upAndDown;

  }

  decrementY = () => {
    this.setState({ tallyY: this.state.tallyY -= 1 });
    console.log("dec-talY" + this.state.tallyY)
  }


  goFullScreen = () => {
    var elem = document.getElementById('main-view')
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  setTallyX = () => {
    console.log('helo from setTally X')
    // this.setState({tallyX: this.state.tallyX = tally})

  }


  render() {
   const setTallyX  = this.props.setTallyX; 
    const toggleEng = this.props.toggleEng;
    const incrementX = this.props.incrementX;
    const decrementX = this.props.decrementX;
    const upAndDown = this.props.upAndDown;
    return (

      <div id="main-view">

        <div id="select-start">
          <Container>
            <Row>
              <Col>
                <ButtonD onClick={this.incrementTallyD} />
              </Col>
              <Col>
                <Dropdown >
                  <Dropdown.Toggle id="dropdown-basic" className="button-c">

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" id="full-screen" onClick={this.goFullScreen}>Full Screen</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">About Project</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Credits</Dropdown.Item>
                    <Dropdown.Item href="#/action-4"></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
          {/* 
        <h2>tally C: {this.state.tallyC}</h2>
        <h2>tally D: {this.state.tallyD}</h2> */}


        </div>


        <div id="a-b-buttons">
          <>
            <ButtonA onClick={this.incrementTallyA}
            />
            <ButtonB onClick={this.incrementTallyB} onTouchEnd={toggleEng} onTouchStart={toggleEng} />
            {this.state.tallyA >= 1 ? <Redirect to="/champions" /> : null}
            {this.state.tallyA == 2 ? <Redirect to="/geaga" /> : null}
          </>

        </div>
        <div className="gamepad">

          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonUp onClick={upAndDown}  />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonLeft onClick={decrementX} />
            </div>
            <div className="grid-item"><ButtonMiddle /></div>
            <div className="grid-item">      <ButtonRight onClick={incrementX} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonDown onClick={upAndDown} />
            </div>
            <div className="grid-item"></div>
          </div>

        </div>

        <div className="prompt-hor"><h1></h1><div className=""></div></div>
      </div>




    )


  }
}