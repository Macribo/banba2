import FadeIn from "react-fade-in";
import React from 'react';
import ReactDOM from 'react-dom';
import './geaga.scss'
import Button from 'react-bootstrap/Button';
import clip1 from '../../vid/j1.mp4';
import PosterSky from '../../img/poster-sky.png'
export class Geaga extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			charClass: '',
			province: '',
			county: '',
			location: ''
		}
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
	fortuna1 = () => {
		console.log('ulster')
		this.setState({ province: 'ulster' })

	}
	componentDidMount() {

		let tallyX = this.props.tallyX
		let charClass = this.getCharClass(tallyX);

		this.setState({ charClass: charClass })
		console.log(charClass)
	}

	render() {


		let greetings = [`Ní fheadar in Éirinn cá bhfuil mé?`];
		let greetingsEng = [`Where in the world am I?`];

		return (



			<div className="geaga">
				<div className={"foreground-zero"}>

					{this.state.province==''?null:<video id="sky-vid" autoPlay loop muted poster={PosterSky}>
						<source src={clip1} type='video/mp4' />
						<source src={clip1} type="video/ogg" />
					</video>}

				</div>
				<div id={this.state.province == '' ? "foreground-geaga" : "foreground-geaga-2"}>
					<div id={this.state.province == 'ulster' ? "foreground-ulster" : null} />
					<div id="foreground-geaga-2"></div>

				</div>
				<FadeIn delay={2000}>
					<>
						<div className="fortuna .text-center">
							<div onTouchEnd={this.fortuna1} className="o-fortuna o-fortuna1"></div>
							<div className="o-fortuna o-fortuna2"></div>
							<div className="o-fortuna o-fortuna3"></div>
							<div className="o-fortuna o-fortuna4"></div>
						</div>
					</>
				</FadeIn>

				<div className="container geaga-container" ><>

					<div className={"portrait" + this.state.charClass}  ></div>

				</>
					{/*{this.props.engMode ? <h1>Select
						 Champion</h1> : <h1 alt="Champion">Roghnaigh Tuairghneach</h1>}*/}


					<div id="stage">

						{this.state.charClass == ' druid' ? '' : null}

						{/*
						
						*/}
						{this.state.charClass == ' rogue' ? <h1>Ní fheadar in Éirinn cá bhfuil mé?</h1> : null}
					</div>
					{this.state.charClass == ' sage' ? <h1>Cá bhfuil do thríall?</h1> : null}
					{this.state.charClass == ' poet' ? <h1>Cá raibh as dhuit?</h1> : null}
					{this.state.charClass == ' druid' ? <><h1>Cén saighs Draoi thú?</h1>
						{/* <div className="druids">
							<Button onTouchEnd={this.props.setTallyX}>liath le fia</Button>
						</div> */}
					</>

						: null}
					{this.state.charClass == ' gallowglass' ? <h1>Cá bhfuil do thríall?</h1> : null}

					{this.state.charClass == ' detective' ? <h1>Cá bhfuil do thríall?</h1> : null}
					{this.state.charClass == ' occultist' ? <h1>O fortuna....</h1> : null}
					{this.state.charClass == ' fenian' ? <h1>Beir bua.</h1> : null}

				</div>

			</div>

		)
	}
}