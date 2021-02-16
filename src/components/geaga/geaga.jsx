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
	
	
	let	greetings = [`Ní fheadar in Éirinn cá bhfuil mé?`]
	return (
				
				
			
			<div className="geaga">
<div className="foreground-zero"></div>
				<div id="foreground-geaga">
					<div id="foreground-geaga-2"></div>

				</div>
				<FadeIn delay={2000}>

				</FadeIn>

				<div className="container geaga-container" ><>

					<div className={"portrait" + this.state.charClass}  ></div>

				</>
{/*{this.props.engMode ? <h1>Select
						 Champion</h1> : <h1 alt="Champion">Roghnaigh Tuairghneach</h1>}*/}
				
				
				</div>
				<div id="stage" className="fortuna .text-center">
				
				{ this.state.charClass==' druid'?'' :null}
				{this.state.charClass== ' rogue' ? <h1>{greetings[0]}</h1>:null}
				{this.state.charClass== ' sage' ?<h1>Cá bhfuil do thríall?</h1>:null}
				{this.state.charClass== ' poet' ?<h1>Cá raibh as dhuit?</h1>:null}
				{this.state.charClass== ' druid' ?<h1>Cén saighs Draoi thú?</h1>:null}
				{this.state.charClass== ' gallowglass' ?<h1>Cá bhfuil do thríall?</h1>:null}

				{this.state.charClass== ' detective' ?<h1>Cá bhfuil do thríall?</h1>:null}
				{this.state.charClass== ' occultist' ?<h1>Cá raibh as dhuit?</h1>:null}
				{this.state.charClass== ' fenian' ?<h1>Beir bua.</h1>:null}
				
				</div>
								
			</div>

		)
	}
}