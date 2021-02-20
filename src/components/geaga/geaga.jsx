/*component Geaga allows player to select
character's province and county.


*/


import FadeIn from "react-fade-in";
import React from 'react';
import ReactDOM from 'react-dom';
import './geaga.scss'
import Button from 'react-bootstrap/Button';
import clip1 from '../../vid/j1.mp4';
import PosterSky from '../../img/poster-sky.png';
import { transition } from 'react-transition-group';
export class Geaga extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			charClass: ''
			// province:null
		
		
		}
		const tallyX = props.tallyX;
		const tallyProvince = props.tallyProvince
		const charClass = props.getCharClass(tallyX);
		console.log(charClass)
		console.log(tallyX + "<< tallyX from geaga")
			console.log(tallyProvince + "<< tallyProvince from geaga")
	}
	componentDidMount() {
		
		// this.setState({ charClass: charClass })
	
		// console.log(this.state)



	
		// console.log("howdy " + charClass)
	}


	addHighlight = () => {
		ReactDOM.findDOMNode(element).classList.add("highlight-champ");
		console.log('highlight-champ')
	}

	componentDidUpdate() {

	}
	render() {
		var cuige = ['Mumhan', 'Uladh', 'Laighean', 'Ċonnacht']

		var dinneen = ['Munster', 'Ulster', 'Connacht', 'Leinster'];



		let greetings = [`Ní fheadar in Éiɼinn cá bhfuil mé?`];
		let greetingsEng = [`Where in the World am I?`];
		let fortuna1 = this.props.fortuna1;
		return (



			<div className="geaga">
				<div className={"foreground-zero"}>

					{this.props.county != 'cavan' ? null : <video id="sky-vid" autoPlay loop muted poster={PosterSky}>
						<source src={clip1} type='video/mp4' />
						<source src={clip1} type="video/ogg" />
					</video>}

				</div>
				<div id={this.props.province == null ? "foreground-geaga" : "foreground-geaga-3"}>


					<div id="foreground-geaga-2"></div>
				</div>
				<FadeIn delay={2000}>

					{this.props.province == null ? <div className={"fortuna .text-center"}>
						<div onClick={this.fortuna1} onTouchEnd={this.props.fortuna1} className="o-fortuna o-fortuna1"></div>
						<div className="o-fortuna o-fortuna2" onClick={this.props.fortuna2} onTouchEnd={this.props.fortuna2}></div>
						<div className="o-fortuna o-fortuna3" onClick={this.props.fortuna3} onTouchEnd={this.props.fortuna3}></div>
						<div className="o-fortuna o-fortuna4" onClick={this.props.fortuna4} onTouchEnd={this.props.fortuna4}></div>
					</div> : null}
					<div id={this.props.province == 'munster' ?
						<h1>{cuige[0]}</h1>


						: null}>

					</div>
					<div id={this.state.province == 'ulster' ?

						<h1>{this.cuige[1]}</h1>


						: null}>

					</div>
				</FadeIn>

				<div className="container geaga-container" ><>


				</>
					{this.props.engMode ? <h1>{this.dinneen[0]}</h1> : <h1 alt="Province">{cuige[1]}</h1>}







					<div id="stage">


						{this.props.charClass == 3 ? '' : null}


						{this.props.charClass == 0 && this.props.engMode == false ? <h1>Ní fheadar in Éirinn cá bhfuil mé?</h1> : null}
						{this.props.charClass == 0 && this.props.engMode == false ? <h1>Ní fheadar in Éirinn cá bhfuil mé?</h1> : null}
					</div>
					{this.props.charClass == 1 ? <h1>Cá bhfuil do thríall?</h1> : null}
					{this.props.charClass == 2 ? <h1>Cá raibh as dhuit?</h1> : null}
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
				</div>

				<div className="dinneen">
					<div className={this.props.engMode == true ?
						' dinneen-container' : "hidden"}>

						<>
							Ulster
							</>
					</div>
				</div>

				<div id={this.props.fortuna1 == 1 ?

					<h1>Uladh</h1>


					: null}>

				</div>

				<div className={this.props.province == 'ulster' ? "counties-container" : ''} >


					< div className="county antrim" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county armagh" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county cavan" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county donegal" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county down" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county fermanagh" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county derry" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county monaghan" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county tyrone" id="" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>



				</div>


				<div className={this.props.province == 'leinster' ? "counties-container" : ''} >

					<div className="county carlow" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county dublin" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county kildare" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county kilkenny" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county laois" id="" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>

					<div className="county longford" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county louth" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
				</div>
				<div className={this.props.province == 'leinster' ? "counties-container2" : ''} >
					<div className="county meath" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county offaly" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county westmeath" id="" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county wexford" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county wicklow" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county kilkenny" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>

				</div>

				<div className={this.props.province == 'munster' ? "counties-container" : ''} >

					<div className="county clare" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div><div className="county cork" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div><div className="county kerry" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div><div className="county limerick" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div><div className="county tipperary" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div><div className="county waterford" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>

				</div>

				<div className={this.props.province == 'connacht' ? "counties-container" : ''} >
					<div className="county galway" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county leitrim" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county mayo" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county roscommon" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>
					<div className="county sligo" id="" onClick={this.countyHandler} onTouchEnd={this.countyHandler}></div>

				</div>

				{/* <Transition in={inProp} timeout={500}>
    {state => (
      <div>
        I am {state}
      </div>
    )}
  </Transition> */}
			</div>

		)
	}
}