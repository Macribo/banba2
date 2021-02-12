import React from 'react'
import './button-a.scss'

 export function ButtonA(props) {

	return (<button className="button-a"  onClick={props.onClick} ><p>A</p></button>)
  }
