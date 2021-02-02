import React from 'react';

import { ButtonA } from '../ui/button-a/button-a'
import { ButtonB } from '../ui/button-b/button-b'
import { ButtonC } from '../ui/button-c/button-c'
import { ButtonD } from '../ui/button-d/button-d'
import { ButtonLeft } from '../ui/directional-pad/left/left'
import { ButtonRight } from '../ui/directional-pad/right/right'
import { ButtonUp } from '../ui/directional-pad/up/up'
import { ButtonDown } from '../ui/directional-pad/down/down'
import './main-view.scss'
import Poster from '../../img/poster.png'
import clip from '../../vid/j1.mp4'
export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      tallyA: 0,
      tallyB: 0,
      tallyC: 0,
      tallyD: 0,
      tallyX: 0,
      tallyY: 0,
      engMode: false
    };
  }
  incrementTallyA = () => {
    this.setState({ tallyA: this.state.tallyA += 1 });
    console.log("inc-tal" + this.state.tallyA)
  }

  incrementTallyB = () => {
    this.setState({ tallyb: this.state.tallyB += 1 });
    console.log("inc-tal" + this.state.tallyB)
  }

  incrementTallyC = () => {
    this.setState({ tallyC: this.state.tallyC += 1 });
    console.log("inc-tal" + this.state.tallyC)
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

goFullScreen = ()=>{
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
        <div className="show-champions">




          <div className="container champ-container" >
            <h1 alt="Champion">Tuairghneach</h1>
            <div id="bg2"></div>
            {/* <div id="¬water"></div> */}

            {/* <video id="county-vid" autoPlay loop muted poster={Poster}>
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </video> */}

            <div id="bg1"></div>
            <div id="characters">
              <div id="all-champions" className=".text-center">
          
          {/* <h2>tally A: {this.state.tallyA}</h2>
          <h2>tally B: {this.state.tallyB}</h2> */}
                <div id="stage">
                  <div>
                    <button variant="outline-primary" alt="rogue">Rógaire</button>{' '}
                    <button alt="Sage" variant="outline-secondary">Saoi</button>{' '}
                    <button alt="Poet" variant="outline-success">File</button>{' '}
                    <button alt="Druid" variant="outline-warning">Draoi</button>{' '}
                    <br />
                    <button alt="Sorceress" variant="outline-danger">Spéirbhean</button>{' '}
                    <button alt="Witch" variant="outline-info">Cailleach</button>{' '}
                    <button alt="Occultist" variant="outline-dark">Diamhraí</button>{' '}
                    <button alt="Warrior" variant="outline-light">Féinní</button>
                  </div>

                </div>
              </div>

              <div>
                <canvas id="main-canvas"
                  width="640px" height="480px">
                  <p>Canbhás ar iarraidh</p>
                </canvas>
                <noscript>
                  <p>javaScript ar iarraidh.</p>
                </noscript>
              </div>
            </div>
          </div>
          

        </div>


       
          <h2>tally C: {this.state.tallyC}</h2>
          <ButtonC onClick={this.incrementTallyC} />
          <h2>tally D: {this.state.tallyD}</h2>
          <ButtonD onClick={this.incrementTallyD} />
       



              <div id="a-b-buttons">
          <ButtonA onClick={this.incrementTallyA} />
          <ButtonB onClick={this.incrementTallyB} />

        </div>
        <div className="gamepad">

          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonUp onClick={this.incrementY} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonLeft onClick={this.decrementX} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonRight onClick={this.incrementX} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">      <ButtonDown onClick={this.decrementY} />
            </div>
            <div className="grid-item"></div>
          </div>

        </div>
        <button id="full-screen"onClick={this.goFullScreen}>fs</button>
      </div>
    )
  }
}