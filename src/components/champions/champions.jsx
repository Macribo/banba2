import React from 'react';
import ReactDOM from 'react-dom';
import './champions.scss'
import Button from 'react-bootstrap/Button';


export class Champions extends React.Component {
	
	constructor() {
		super();
		this.state = {}
	}
	
	render() {
			// const engMode = props.engMode;

return (
				<div className="champions">
					<div className="container champ-container" >
						
						{this.props.engMode ? <h1>Select Champion</h1>:<h1 alt="Champion">Tuairghneach</h1> }
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
										<Button alt="Sage" variant="outline-secondary">Saoi</Button>{' '}
										<Button alt="Poet" variant="outline-success">File</Button>{' '}
										<Button alt="Druid" variant="outline-warning">Draoi</Button>{' '}
										<br />
										<Button alt="Sorceress" variant="outline-danger">Spéirbhean</Button>{' '}
										<Button alt="Witch" variant="outline-info">Cailleach</Button>{' '}
										<Button alt="Occultist" variant="outline-dark">Diamhraí</Button>{' '}
										<Button alt="Warrior" variant="outline-light">Féinní</Button>
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