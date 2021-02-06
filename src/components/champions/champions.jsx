import React from 'react';
import ReactDOM from 'react-dom';
import './champions.scss'
import { Button } from 'react-bootstrap';


export class Champions extends React.Component {

	constructor() {
		super();
		this.state = {}



	}
	render() {
		return (

				<div className="champions">




					<div className="container champ-container" >
						<h1 alt="Champion">Tuairghneach</h1>
						<div id="bg2"></div>
						{/* <div id="¬water"></div> */}

						{/* <video id="county-vid" autoPlay loop muted poster={Poster}>
		   <source src={clip} type='video/mp4' />
		   <source src={clip} type="video/ogg" />
		 </video> */}

						<div id="characters">

							<div id="all-champions" className=".text-center">

								<div id="stage">
									<div>
										<Button variant="outline-primary" alt="rogue">Rógaire</Button>{' '}
										<button alt="Sage" variant="outline-secondary">Saoi</button>{' '}
										<button alt="Poet" variant="outline-success">File</button>{' '}
										<button alt="Druid" variant="outline-warning">Draoi</button>{' '}
										<br />
										<button alt="Sorceress" variant="outline-danger">Spéirbhean</button>{' '}
										<button alt="Witch" variant="outline-info">Cailleach</button>{' '}
										<button alt="Occultist" variant="outline-dark">Diamhraí</button>{' '}
										<button alt="Warrior" variant="outline-light">Féinní</button>
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