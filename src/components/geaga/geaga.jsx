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
			province:null
		}
		const tallyX = props.tallyX;

	}
	componentDidMount() {

		// console.log(this.state)

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

		// 	console.log(charClass)
	}
componentDidUpdate(){
	// let provinceX = this.props.province;

	// this.setState({ province: provinceX })
}
	render() {



		let greetings = [`Ní fheadar in Éirinn cá bhfuil mé?`];
		let greetingsEng = [`Where in the world am I?`];
		let fortuna1 = this.props.fortuna1;
		return (



			<div className="geaga">
				<div className={"foreground-zero"}>

					{this.props.county != 'cavan' ? null : <video id="sky-vid" autoPlay loop muted poster={PosterSky}>
						<source src={clip1} type='video/mp4' />
						<source src={clip1} type="video/ogg" />
					</video>}

				</div>
				<div id={this.province == null ? "foreground-geaga" : "foreground-geaga-3"}>


					<div id="foreground-geaga-2"></div>
				</div>
				<FadeIn delay={2000}>

				{this.props.province == null ? <div className={"fortuna .text-center"}>
						<div onClick={this.fortuna1} onTouchEnd={this.props.fortuna1} className="o-fortuna o-fortuna1"></div>
						<div className="o-fortuna o-fortuna2" onClick={this.props.fortuna2} onTouchEnd={this.props.fortuna2}></div>
						<div className="o-fortuna o-fortuna3" onClick={this.props.fortuna3} onTouchEnd={this.props.fortuna3}></div>
						<div className="o-fortuna o-fortuna4" onClick={this.props.fortuna4} onTouchEnd={this.props.fortuna4}></div>
					</div> : null}
					<div id={this.props.fortuna1 == 1 ?

						<h1>Uladh</h1>


						: null}>



					</div>


					<div id={this.props.province == 'ulster' ?

						<h1>Uladh</h1>


						: null}>

					</div>
					<div id={this.state.province == 'ulster' ?

						<h1>Uladh</h1>


						: null}>

					</div>
				</FadeIn>

				<div className="container geaga-container" ><>

					<div className={"portrait" + this.props.charClass}  >



					</div>

				</>
					{/*{this.props.engMode ? <h1>Select
						 Champion</h1> : <h1 alt="Champion">Roghnaigh Tuairghneach</h1>}
						 
						 
						 
						 
						 */}


					<div id="stage">

						{this.props.charClass == ' druid' ? '' : null}

						{/*
						
						*/}
						{this.props.charClass == ' rogue' ? <h1>Ní fheadar in Éirinn cá bhfuil mé?</h1> : null}
					</div>
					{this.props.charClass == ' sage' ? <h1>Cá bhfuil do thríall?</h1> : null}
					{this.props.charClass == ' poet' ? <h1>Cá raibh as dhuit?</h1> : null}
					{this.props.charClass == ' druid' ? <><h1>Cén saighs Draoi thú?</h1>
						{/* <div className="druids">
							<Button onTouchEnd={this.props.setTallyX}>liath le fia</Button>
						</div> */}
					</>

						: null}
					{this.props.charClass == ' gallowglass' ? <h1>Cá bhfuil do thríall?</h1> : null}

					{this.props.charClass == ' detective' ? <h1>Cá bhfuil do thríall?</h1> : null}
					{this.props.charClass == ' occultist' ? <h1>O fortuna....</h1> : null}
					{this.props.charClass == ' fenian' ? <h1>Beir bua.</h1> : null}

				</div>
				<div id={this.props.fortuna1 == 1 ?

<h1>Uladh</h1>


: null}>

</div>

<div className={this.props.province == 'ulster' ? "counties-container" : ''} >

						 					
< div className="county antrim"   onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county armagh"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county cavan"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county donegal"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county down"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county fermanagh"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county derry"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county monaghan"  onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
<div className="county tyrone" id="" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>



</div>


			</div>

		)
	}
}