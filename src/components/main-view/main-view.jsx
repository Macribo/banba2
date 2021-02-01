import React from 'react';
import {ButtonA} from './button-a/button-a'
export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {tallyA: 0};
  }
incrementTallyA = ()=>{
  this.setState({tallyA: this.state.tallyA +=1});
  console.log("inc-tal" + this.state.tallyA)
}
  render() {
    return (
      <div>
        <h2>tally A: {this.state.tallyA}</h2>
        <ButtonA onClick={this.incrementTallyA} />
        
      </div>
    )
  }
}