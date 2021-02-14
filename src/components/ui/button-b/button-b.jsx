import React from 'react'
import './button-b.scss'

function ButtonB(props) {

	return (<button className="button-b" onMouseDown={props.onTouchStart} onMouseUp={props.onTouchEnd} onClick={props.onClick}  onTouchEnd={props.onTouchEnd}
	onTouchStart={props.onTouchStart} ><p>B</p></button>)
  }
  export default ButtonB