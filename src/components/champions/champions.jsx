import React from 'react';
import ReactDOM from 'react-dom';
import './champions.scss'
import Button from 'react-bootstrap/Button';


export class Champions extends React.Component {

	constructor(props) {
		super(props);
		this.state = {


		}
		const tallyX = props.tallyX;

	}

	addHighlight = () => {
		ReactDOM.findDOMNode(element).classList.add("highlight-champ"); 
		console.log('highlight-champ')
	}
	render() {
		var champion = ['Rogue', 'Sage', 'Poet', 'Druid', 'Gallóglaċ', 'Witch', 'Occultist', 'Warrior'];
		var laoch = ['Rógaire', 'Saoi', 'File', 'Draoi', 'fís', 'Caillach', 'Diamhraí', 'Féinní'];

		return (
			<div className="champions">
				<div className="container champ-container" >
					{this.props.engMode ? <h1>Roghnaigh Champion</h1> : <h1 alt="Champion">Select Tuairghneach</h1>}
					<div id="bg2"></div>
					<div id="characters">
						<div id="all-champions" className=".text-center">
							<div id="stage">
								<div>
								<Button className={this.props.tallyX == 0 ? 'highlight' : "rog"}>wiz</Button>
								<Button className={this.props.tallyX == 1 ? 'highlight' : "wiz"}>wiz</Button>
								<Button className={this.props.tallyX == 2 ? 'highlight' : "bar"}>wiz</Button>
								<Button className={this.props.tallyX == 3 ? 'highlight' : "wiz"}>wiz</Button>
								<Button className={this.props.tallyX == 4 ? 'highlight' : "wiz"}>wiz</Button>
								<Button className={this.props.tallyX == 5 ? 'highlight' : "wiz"}>wiz</Button>
								<Button className={this.props.tallyX == 6 ? 'highlight' : "wiz"}>wiz</Button>
								<Button className={this.props.tallyX == 7 ? 'highlight' : "wiz"}>wiz</Button>
								<Button className={this.props.tallyX == 8 ? 'highlight' : "wiz"}>wiz</Button>
				
									<Button className="" alt="bar" >bar</Button>
									<Button className="outline-info rog" alt="rog" >rog</Button>
									<Button className=" wiz" alt="wiz"  >file</Button>
									<Button className=" bar" alt="bar" >draoi</Button>
									<Button className=" rog" alt="rog" >ciaróg</Button>
									<Button className=" wiz" alt="wiz"  >wiz</Button>
									<Button className=" bar" alt="bar" >bar</Button>
									<Button className=" rog" alt="rog" >rog</Button>
									<Button className=" wiz" alt="wiz"  >file</Button>
								</div>
								{this.props.tallyX == 0 ? "" : ""};
								{this.props.tallyX == 1 ? 'outline-info' : null};
								
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
			</div>
		)
	}
}