import React from 'react';
import ReactDOM from 'react-dom';
import './champions.scss'
import Button from 'react-bootstrap/Button';
import FadeIn from "react-fade-in";


export class Champions extends React.Component {

	constructor(props) {
		super(props);
		this.state = { delay: 2000 }
		const tallyX = props.tallyX;
	}
	componentDidMount(){
		
		console.log(this.state)

}
	addHighlight = () => {
		ReactDOM.findDOMNode(element).classList.add("highlight-champ");
		console.log('highlight-champ')
	}
	render() {
		var champion = ['Rógaire', 'Saoi', 'Spéir-bhean', 'Draoi', 'Gallóglaċ', 'Bleachtaire', 'Diamhraí', 'Fiann'];

		// ['Rogue', 'Sage', 'Poet', 'Druid', 'Gallowglass', 'Detective', 'Occultist', 'Fenian'];
		var laoch = ['Rógaire', 'Saoi', 'Spéir-bhean', 'Draoi', 'Gallóglaċ', 'Bleachtaire', 'Diamhraí', 'Fiann'];

		var dinneen = [`a villain, a knave; often used like the English rogue, as a
		term of endearment`,
			`a sage, a scholar, a man of letters, a savant, a nobleman; a worthy, generous person; used loosely in poet. `,
			`spéir-bhean, f., a beautiful woman, a goddess, a fair lady, a universal song-word.`,
			`a druid, a wizard, a magician, a sorcerer, a man of knowledge.`,
			`a heavy armed Irish soldier, a gallowglass; a servant.`,
			` g. id., pl. -ridhe, m., a person that milks cows; a manager of milk; one who deaL in milk; a wheedler, a flatterer; a detective.`,
			`An occultist.`,
			`a Fenian, a soldier; hero, champion; one of the Fianna Éireann.`,
			` _ban-draoi, f., a druidess.`]
		return (
			<div className="champions">


				<div id="foreground-0">

				</div>
				<div className="container champ-container" >
					{this.props.engMode ? <h1>Select
						 Champion</h1> : <h1 alt="Champion">Roghnaigh Tuairghneach</h1>}
					<h1 className={this.props.tallyX == 0 && this.props.engMode == true ? "champ-class" : "hidden"}>Rógaire</h1>
					<h1 className={this.props.tallyX == 1 && this.props.engMode == true ? "champ-class" : "hidden"}>Saoi</h1>
					<h1 className={this.props.tallyX == 2 && this.props.engMode == true ? "champ-class" : "hidden"}>spéir-bhean</h1>

					<h1 className={this.props.tallyX == 3 && this.props.engMode == true ? "champ-class" : "hidden"}>Draoi</h1>
					<h1 className={this.props.tallyX == 4 && this.props.engMode == true ? "champ-class" : "hidden"}>Gallóglaċ</h1>
					<h1 className={this.props.tallyX == 5 && this.props.engMode == true ? "champ-class" : "hidden"}>Bleachtaire</h1>
					<h1 className={this.props.tallyX == 6 && this.props.engMode == true ? "champ-class" : "hidden"}>Diamhraí</h1>
					<h1 className={this.props.tallyX == 7 && this.props.engMode == true ? "champ-class" : "hidden"}>Fiann</h1>
					<div id="bg2"></div>

					<div id="characters">
						<>
							<div className={this.props.tallyX == 0 ? "portrait rogue" : null}></div>
							<div className={this.props.tallyX == 1 ? "portrait sage" : null}></div>
							<div className={this.props.tallyX == 2 ? "portrait poet" : null}></div>
							<div className={this.props.tallyX == 3 ? "portrait druid" : null}></div>
							<div className={this.props.tallyX == 4 ? "portrait gallowglas" : null}></div>
							<div className={this.props.tallyX == 5 ? "portrait detective" : null}></div>
							<div className={this.props.tallyX == 6 ? "portrait occultist" : null}></div>
							<div className={this.props.tallyX == 7 ? "portrait fenian" : null} ></div>
						</>
						<div id="all-champions" className=".text-center">
							<div id="stage">
								<div>
									<Button onTouchEnd={this.props.setTallyX} className={this.props.tallyX == 0 ? ' highlight' : ' champ'} >{this.props.engMode ? champion[0] : laoch[0]}</Button>
									<Button onTouchEnd={this.props.setTally1} className={this.props.tallyX == 1 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[1] : laoch[1]}</Button>
									<Button onTouchEnd={this.props.setTally2} className={this.props.tallyX == 2 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[2] : laoch[2]}</Button>
									<Button onTouchEnd={this.props.setTally3} className={this.props.tallyX == 3 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[3] : laoch[3]}</Button>
									<br />
									<Button onTouchEnd={this.props.setTally4} className={this.props.tallyX == 4 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[4] : laoch[4]}</Button>
									<Button onTouchEnd={this.props.setTally5} className={this.props.tallyX == 5 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[5] : laoch[5]}</Button>
									<Button onTouchEnd={this.props.setTally6} className={this.props.tallyX == 6 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[6] : laoch[6]}</Button>
									<Button onTouchEnd={this.props.setTally7} className={this.props.tallyX == 7 ? ' highlight' : ' champ'}>{this.props.engMode ? champion[7] : laoch[7]}</Button>


								</div>


							</div>
							<div className="dinneen">
								<div className={this.props.engMode == true ? ' dinneen-container' : "hidden"}>

									<>
										<div id="rogue">		{this.props.tallyX == 0 ? dinneen[0] : null}</div>
										<div id="sage">		{this.props.tallyX == 1 ? dinneen[1] : null}</div>
										<div id="poet">		{this.props.tallyX == 2 ? dinneen[2] : null}</div>
										<div id="druid">		{this.props.tallyX == 3 ? dinneen[3] + dinneen[8] : null}</div>
										<div id="gallowglas">		{this.props.tallyX == 4 ? dinneen[4] : null}</div>
										<div id="detective">		{this.props.tallyX == 5 ? dinneen[5] : null}</div>
										<div id="occultist">		{this.props.tallyX == 6 ? dinneen[6] : null}</div>
										<div id="warrior">		{this.props.tallyX == 7 ? dinneen[7] : null}</div>

										<br />
									</>

									<p> </p>
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

		)
	}
}