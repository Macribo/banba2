import React from 'react'
import './button-b.scss'

function ButtonB(props) {

	return (<button className="button-b"  onClick={props.onClick}  onTouchEnd={props.onTouchEnd}
	onTouchStart={props.onTouchStart} ><p>B</p></button>)
  }
  export default ButtonB