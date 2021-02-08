import React from 'react';
import {Dropdown, Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { ButtonA } from '../ui/button-a/button-a'
import  ButtonB  from '../ui/button-b/button-b'
import { ButtonC } from '../ui/button-c/button-c'
import { ButtonD } from '../ui/button-d/button-d'
import { ButtonLeft } from '../ui/directional-pad/left/left'
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
      tallyB: 0,
      menuCOpen:false,
      tallyD: 0,
      tallyX: 0,
      tallyY: 0,
      engMode: false,
      isLoggedIn: true
    };
  }
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
  incrementTallyA = () => {
    this.setState({ tallyA: this.state.tallyA += 1 });
    console.log("inc-tal" + this.state.tallyA)
    if(this.state.tallyA>0){alert()}

  }

  incrementTallyB = () => {
    this.setState({ tallyb: this.state.tallyB += 1 });
    console.log("inc-tal" + this.state.tallyB)
  }

  toggleCmenu = () => {
    this.setState({ menuCopen: this.state.menuCOpen = !this.state.menuCOpen  });
    console.log("menu c open:" + this.state.menuCOpen)
  }

  incrementTallyD = () => {
    this.setState({ tallyD: this.state.tallyD += 1 });
    console.log("inc-tal" + this.state.tallyD)
  }
  incrementY = () => {
    this.setState({ tallyY: this.state.tallyY += 1 });
    console.log("inc-talY" + this.state.tallyY)
  }
  incrementX = () => {
    this.setState({ tallyX: this.state.tallyX += 1 });
    console.log("inc-talX" + this.state.tallyX)
  }
  decrementY = () => {
    this.setState({ tallyY: this.state.tallyY -= 1 });
    console.log("dec-talY" + this.state.tallyY)
  }
  decrementX = () => {
    this.setState({ tallyX: this.state.tallyX -= 1 });
    console.log("dec-talX" + this.state.tallyX)
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

  render() {

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
          <ButtonA onClick={this.incrementTallyA} />
          <ButtonB onClick={this.incrementTallyB} onTouchEnd={this.toggleEng}
          onTouchStart={this.toggleEng}/>

        </div>
        <div className="gamepad">

          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonUp onClick={this.incrementY} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonLeft onClick={this.decrementX} />
            </div>
            <div className="grid-item"><ButtonLeft /></div>
            <div className="grid-item">      <ButtonRight onClick={this.incrementX} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonDown onClick={this.decrementY} />
            </div>
            <div className="grid-item"></div>
          </div>

        </div>
       
        <div className="prompt-hor"><h1></h1><div className=""></div></div>
      </div>




)


  }
}