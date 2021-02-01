import React from 'react';
import {ButtonA} from './button-a/button-a'
export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {color: "red"};
  }

  render() {
    return (
      <div>
        <ButtonA />
        hello
      </div>
    )
  }
}