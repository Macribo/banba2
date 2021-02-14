import FadeIn from "react-fade-in";

import React from 'react';
import ReactDOM from 'react-dom';
import './geaga.scss'
import Button from 'react-bootstrap/Button';


export class Geaga extends React.Component {

	constructor(props) {
		super(props);
		this.state = {class:''}
		const tallyX = props.tallyX;
	}
	getCharClass = (tallyX)=>{
		switch (tallyX){
		  case 0: return " rogue"; break;
		  case 1: return " sage"; break;
		  case 2: return " poet"; break;
		  case 3: return " druid"; break;
		  case 4: return " gallowglass"; break;
		  case 5: return " detective"; break;
		  case 6: return " occultist"; break;
		  case 7: return " fenian"; break;
	  
		}
	  }
	addHighlight = () => {
		ReactDOM.findDOMNode(element).classList.add("highlight-champ");
		console.log('highlight-champ')
	}
	componentDidMount(){
		
		let tallyX = this.props.tallyX
		let charClass = this.getCharClass(tallyX);	
		this.setState({class:charClass})
		console.log(charClass)	
	}
	render() {

		
		return (
			<div className="geaga">
		
		
			<div id="foreground-geaga">
		
		</div>
		<FadeIn delay={2000}>
			
				</FadeIn>
	
				<div className="container geaga-container" ><>
				
									<div className={"portrait" + this.state.class}></div>
									
				</>			
				</div>
			</div>
		
		)
	}
}