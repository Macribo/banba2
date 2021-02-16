import FadeIn from "react-fade-in";

import React from 'react';
import ReactDOM from 'react-dom';
import './geaga.scss'
import Button from 'react-bootstrap/Button';


export class Geaga extends React.Component {

	constructor(props) {
		super(props);
		this.state = { charClass: '' }
		const tallyX = props.tallyX;

	}
	componentDidMount() {

		console.log(this.state)

	}
	getCharClass = (tallyX) => {
		switch (tallyX) {
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
	componentDidMount() {

		let tallyX = this.props.tallyX
		let charClass = this.getCharClass(tallyX);

		this.setState({ charClass: charClass })
		console.log(charClass)
	}
	render() {


		return (
			<div className="geaga">

				<div id="foreground-geaga">
					<div id="foreground-geaga-2"></div>

				</div>
				<FadeIn delay={2000}>

				</FadeIn>

				<div className="container geaga-container" ><>

					<div className={"portrait" + this.state.charClass}  ></div>

				</>

				</div>
				<div id="stage" className="fortuna .text-center">
				
				</div>
				
				{ this.state.charClass==' druid'?<h1>What sort of druid ar you?</h1> : <h1>Hallo?</h1>
				}
				{this.state.charClass== 'rogue' ?<h1>r</h1>:null}
				
			</div>

		)
	}
}