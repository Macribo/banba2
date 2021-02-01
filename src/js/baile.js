

$(document).ready(function () {
	setTimeout(function () {
	
		let showKeyboard = false;
		if (showKeyboard) {
			$('.col-xs-1').append(
				
				`
				
				<div id="fada-mode" class="">
				<div class="btn-group btn-group-lg" id="e-line" role="group" aria-label="...">
				  <button type="button" id="" class="btn-right btn btn-outline-dark">é</button>
				  <button type="button" id="" class="btn-left btn btn-outline-dark">ꞃ</button>
				  <button type="button" id="" class="btn-right btn btn-outline-dark">ṫ</button>
				  <button type="button" id="" class="btn btn-left btn-outline-dark">ú</button>
				  <button type="button" id="" class="btn-right btn btn-outline-dark">í</button>
				  <button type="button" id="" class="btn btn-left btn-outline-dark">ó</button>
				  <button type="button" id="" class="btn-right btn btn-outline-dark">ṗ</button>
				  </div>
				  <div class="btn-group btn-group-lg" id="a-line" role="group" aria-label="...">
					
					<button type="button" id="" class="btn-left btn btn-outline-dark">á</button>
					<button type="button" id="" class="btn-right btn btn-outline-dark">ṡ</button>
					<button type="button" id="" class="btn-left btn btn-outline-dark">ḋ</button>
					<button type="button" id="" class="btn-right btn btn-outline-dark">ḟ</button>
					<button type="button" id="" class="btn-left btn btn-outline-dark">ġ</button>
					<button type="button" id="" class="btn-right btn btn-outline-dark"></button>
					<button type="button" id="" class="btn-left btn btn-outline-dark"></button>
					
					</div>
					<div class="btn-group btn-group-lg" id="c-line" role="group" aria-label="...">
					  
					  <button type="button" id="" class="btn-right btn btn-outline-dark">ċ</button>
					  <button type="button" id="" class="btn-left btn btn-outline-dark">ḃ</button>
					  <button type="button" id="" class="btn-right btn btn-outline-dark"></button> <button type="button" id=""
					  class="btn-left btn btn-outline-dark">ṁ</button>
					  <button type="button" id="" class="btn-right btn btn-outline-dark"></button>
					  <button type="button" id="" class="btn-left btn btn-outline-dark"></button>
					  <button type="button" id="" class="btn-right btn btn-outline-dark">7</button>
					  </div>
					  <div class="btn-group btn-group-lg" id="shift-line" role="group" aria-label="...">
						
						<button type="button" id="undo" class="btn-right btn btn-outline-dark">
						  <i class="fa fa-undo"></i>
						  </button>
						  <button type="button" id="fada" class="btn-left btn btn-outline-dark">Ᵹ</button>
						  <button type="button" class="space btn btn-outline-dark"> </button>
						  <button type="button" id="copy" data-clipboard-target="#output" class="btn-left btn btn-outline-dark"> <i
							class="fa fa-copy"></i>
							</i></button>
							<button type="button" class="btn-right btn btn-outline-dark"><i class="fa fa-arrow-right"></i></button>
							</div>
							
							
							</div>
							</div>
							<div class="holdem">
							  
							  <div id="keyboard-container" class="">
								<div class="btn-group btn-group-lg" id="e-line" role="group" aria-label="...">
				  <button type="button" id="e" class="btn btn-right btn-outline-dark">e</button>
				  <button type="button" id="r" class="btn-left btn btn-outline-dark">r</button>
				  <button type="button" id="t" class="btn btn-right btn-outline-dark">t</button>
				  <button type="button" id="u" class="btn-left btn btn-outline-dark">u</button>
				  <button type="button" id="i" class="btn btn-right btn-outline-dark">i</button>
				  <button type="button" id="o" class="btn-left btn btn-outline-dark">o</button>
				  <button type="button" id="p" class="btn btn-right btn-outline-dark">p</button>
				  </div>
				  <div class="btn-group btn-group-lg" id="a-line" role="group" aria-label="...">
					
					<button type="button" id="a" class="btn-left btn btn-outline-dark">a</button>
					<button type="button" id="s" class="btn btn-right btn-outline-dark">s</button>
					<button type="button" id="d" class="btn-left btn btn-outline-dark">d</button>
				  <button type="button" id="f" class="btn-right btn btn-outline-dark">f</button>
				  <button type="button" id="g" class="btn-left btn btn-outline-dark">g</button>
				  <button type="button" id="h" class="btn-right btn btn-outline-dark">h</button>
				  <button type="button" id="l" class="btn-left btn btn-outline-dark">l</button>
				  
				  </div>
				  <div class="btn-group btn-group-lg" id="c-line" role="group" aria-label="...">
					
					<button type="button" id="c" class="btn-right btn btn-outline-dark">c</button>
					<button type="button" id="b" class="btn-left btn btn-outline-dark">b</button>
					<button type="button" id="n" class="btn-right btn btn-outline-dark">n</button>
					<button type="button" id="m" class="btn-left btn btn-outline-dark">m</button>
					<button type="button" id="," class="btn-right btn btn-outline-dark">,</button>
					<button type="button" id="." class="btn-left btn btn-outline-dark">.</button>
					<button type="button" id="?" class="btn-right btn btn-outline-dark">?/!</button>
					</div>
					<div class="btn-group btn-group-lg" id="shift-line" role="group" aria-label="...">
					  
					  <button type="button" id="undo" class="btn-right btn btn-outline-dark">
						<i class="fa fa-undo"></i>
						</button>
						<button type="button" id="fada" class="btn-left btn btn-outline-dark">Ᵹ</button>
						<button type="button" class="btn space btn-outline-dark"> </button>
						<button type="button" id="copy" data-clipboard-target="#output" class="btn-right btn btn-outline-dark">
						  <i class="fa fa-copy"></i>
						  
						  </button>
				  <button type="button" id="btnSendMsg" class="btn-left btn btn-outline-dark"><i
					class="fa fa-long-arrow-right"></i></button>
		  
					</div>
		  
					</div>
			</div>
			<div id="caps-keyboard-container" class="">
			  <div class="btn-group btn-group-lg" id="e-line" role="group" aria-label="...">
				<button type="button" id="" class="btn-right btn btn-outline-dark">E</button>
				<button type="button" id="" class="btn-left btn btn-outline-dark">R</button>
				<button type="button" id="" class="btn-right btn btn-outline-dark">T</button>
				<button type="button" id="" class="btn-left btn btn-outline-dark">B</button>
				<button type="button" id="" class="btn-right btn btn-outline-dark">I</button>
				<button type="button" id="" class="btn-left btn btn-outline-dark">O</button>
				<button type="button" id="" class="btn-right btn btn-outline-dark">P</button>
				</div>
				<div class="btn-group btn-group-lg" id="a-line" role="group" aria-label="...">
				  
				  <button type="button" id="" class="btn-left btn btn-outline-dark">A</button>
				  <button type="button" id="" class="btn-right btn btn-outline-dark">S</button>
				  <button type="button" id="" class="btn-left btn btn-outline-dark">D</button>
				  <button type="button" id="" class="btn-right btn btn-outline-dark">F</button>
				  <button type="button" id="" class="btn-left btn btn-outline-dark">G</button>
				  <button type="button" id="" class="btn-right btn btn-outline-dark">H</button>
				  <button type="button" id="" class="btn-left btn btn-outline-dark">L</button>
				  
				  </div>
				  <div class="btn-group btn-group-lg" id="c-line" role="group" aria-label="...">
					
					<button type="button" id="" class="btn-right btn btn-outline-dark">C</button>
					<button type="button" id="" class="btn-left btn btn-outline-dark">B</button>
					<button type="button" id="" class="btn-right btn btn-outline-dark">N</button>
					<button type="button" id="" class="btn-left btn btn-outline-dark">M</button>
					<button type="button" id="" class="btn-right btn btn-outline-dark"></button>
					<button type="button" id="" class="btn-left btn btn-outline-dark"></button>
					<button type="button" id="" class="btn-right btn btn-outline-dark"></button>
					</div>
					<div class="btn-group btn-group-lg" id="shift-line" role="group" aria-label="...">
					  
					  <button type="button" id="undo" class="btn-right btn btn-outline-dark">
						<i class="fa fa-undo"></i>
						</button>
						<button type="button" id="fada" class="btn-left btn btn-outline-dark">Ᵹ</button>
						<button type="button" class="space btn btn-outline-dark"> </button>
						<button type="button" class="btn-left btn btn-outline-dark caps" id="copy" data-clipboard-target="#output">
				  <i class="fa fa-copy"></i>
				  </button>
				  <button type="button" class="btn-right  btn btn-outline-dark"><i class="fa fa-arrow-right"></i></button>
				  
				  </div>
				  
				  </div>
				  
			<div id="" class="">
			  <div class="btn-group btn-group-lg" id="j-line" role="group" aria-label="...">
				
				
				</div>
				`
			)
		}
		$('#sub-title').fadeIn();
	}, 1000)
	let heroCounty="Co.Wicklow";

	$('#sub-title').html('Roghnaigh Caractéir');

	let readyToGo = false;
	let vidFwd = true;
	
	function toggleTargetVidDir() {
		if (vidFwd) {
			// vidFwd = false;
			// targetVid.currentTime = 86;
			// console.log(targetVid.currentTime)

		}
		else {
			// vidFwd = true;
			// targetVid.currentTime = 12;
			// console.log(targetVid.currentTime)
		}
	}
	let classOk = false;
	let ainmOk = false;

	let readyForCounty = false;
	let slí = '';
	let inCo = '';
	let craobh = '';
	//start music
	let endGame = false;

	let cláraighMar = { ainm: '', craobh: '', inCo: '', slí: '', avatar: '', blurb: '' }
	randomNames = ['Tomás', 'Hagarty', 'Líam', 'Fiachra', 'Osgur', 'Kevin',
		'Orlaith', 'Deirdre', 'Níomh',
		'Colm', 'Marcus',
		'Caitríona', 'Conn', 'Aideen',
		'Almaith ', 'Aoife', 'Be Bhionn',
		'Brigid', 'Chrodoara', 'Conandil',
		'Concessa', 'Conchend', 'Dubhchobhlaigh',
		'Eachraidh', 'Etromma', 'Fachraidh',
		'Etromma', 'Failend', 'Feidelm',
		'Gormfhlaith', 'Ita', 'Lasser',
		'Lassi', 'Liadan', 'Mor', 'Eoin',
		'Ornat',
		'Ronnat',
		'Sadb',
		'Saerlaith',
		'Sarnat',
		'Samthann',
		'Segnat',
		'Uallach',
		'Uasal',
		'Adomnan',
		'Aidan',
		'Aileran',
		'Ainmire',
		'Airtre',
		'Aodh',
		'Breandan',
		'Cadhla',
		'Caoimhin',
		'Cathal',
		'Ceallachan',
		'Cinneide',
		'Colman',
		'Colum',
		'Cónán',
		'Conchad',
		'Conchobhar',
		'Consaidín',
		'Cormac',
		'Crimthann',
		'Cronan',
		'Cummian',
		'Paul',
		'Diarmait',
		'Donnabhan',
		'Donn Cuan',
		'Éanna',
		'Echthighearn',
		'Eidigean',
		'Eoin',
		'Fiachtna',
		'Faelan',
		'Feidhlimidh',
		'Fergus',
		'Fianamail',
		'Findcath',
		'Finian',
		'Finsneachta',
		'Froech',
		'Guaire',
		'Lachtna',
		'Laidcend',
		'Manchan',
		'Muircheartach',
		'Muirchu',
		'Nuadu',
		'Oengus',
		'Orthanach',
		'Olchobar',
		'Oissine',
		'Orthanach',
		'Rechtabra',
		'Robartach',
		'Ronan',
		'Ruaidri',
		'Ruarcc',
		'Saerbrethach',
		'Rumann',
		'Seigine',
		'Segan ',
		'Segene ',
		'Senach',
		'Tadhg',
		'Senchan Torpeist'
		, 'Ultan'
		/*
		 a Rumann mac Colmain of Trim (died c 747) was described in an early Irish text as follows, "There are three great poets of the world: Homer of the Greeks, Virgil of the Latins, and Rumann of the Irish". (5)
		 http://www.peiraeuspubliclibrary.com/names/medievalnames/early_med_eire.html
		*/
	];

	let baile = [["na gCoinnle",
		"Na Cille",
		"síos na gréinne",
		"thochail an  talamh",
		"spéire",
		"loingseoir",
		"Ar aire",
		"feichidí",
		"puipéad ",
		"neart",
		"fís",
		"síocháin",
		"Thar muir thar tír thar LAN",
		"comhchealgaire",
		"No Darker Gorm; no darker dubh.",
		"leabhair",
		"na hoiche",
		"saighead",
		"traonach",
		"sal",
		"sniper",
		"seabhach",
		"gasta",
		"tua",
		"gaire ",
		"blá",
		"mario",
		"dráíócht",
		"ríoga",
		"Publacht",
		"gilitín",
		"gaisteoir",
		"ha heallaí",
		"damhán alla | ransatheoir (gréasán)",
		"thuiscinne",
		"Francula",
		"crumtha",
		"Finscéal",
		"firey-temper ",
		"an lámh laidir",
		"saighead",
		"tfeir",
		"an ceart",
		"na shonnaigh sásta",
		"na dangain",
		"droch fhola",
		"An vúdú possie",
		"tuiscinnt",
		"folán",
		"Na críthe uasal",
		"Gloinne nár gcroithe",
		"Na Súmairí",
		"Westport",
		"pleasca an sliogán",
		"caomhnóir",
		"draíocht ",
		"Na Fomhóraigh",
		"snáth 7 snáthaid",
		"dílseacht ",
		"aolchuisne",
		"Ar mire",
		"an puc fada",
		"fios dothuigthe",
		"Cealg",
		"beacán bearaigh",
		"ag dul i neart //tarbh",
		"Abhatár",
		"Go héag",
		"sinn togha",
		"buaiteoir",
		"bolcán ",
		"haw báw báw! //bás laithreach! imir arís? ṡ / n",
		"Craoithe Daingean",
		"an Phéist Uisce",
		"deoch dhraíochta",
		"an Leon",
		"fé lámhach na bpiléar",
		"splanc",
		"smidire",
		"An gairm slógaidh"], [
		"Reaċlainn",
		"Dearḃóg",
		"Aċaḋ Eoċaille",
		"Carn Ṁéaḃla",
		"Carraig Ḟearġais",
		"Béal Feiriste",

		"Sráid na nAlbanach",
		"Craigavon",
		"Port An Dúnáin",
		"Baile Úr",
		"Baile an Ṁuilinn",
		"Lios Liath",

		"Cill Deirge",
		"Baile Uí Ṁurċú",
		"Baile Haicéid",
		"An Ḃuiríos",
		"Miseal",
		"Cill Daṁáin",
		"Doire na Criaḋ",
		"An Cnoc Rua",
		"Béal Tairbirt",
		"An Dromainn",
		"Dún an Rí",
		"Lios Cré",
		"Ceann Boirne",
		"Fíoch Rua",
		"An Tulach",
		"Cill Rois",
		"Leaba Ṡíoda",
		"Bun Raite",
		"Cill na Mallaċ",
		"Sliabh an Nóglaigh",
		"Gleann an Ṗreaċáin",
		"Beal na mḂláth",
		"Cionn tSáile",
		"An Sciobairín",
		"Doire",
		"Léim an Ṁadaiḋ",
		"Droichead Fíolta",
		"Maċaire Ráṫa",
		"An Seanṁullach",
		"Muine Mór",
		"Cionn Dhún Damh",
		"Bun na hAḃann",
		"Sléiḃte Ḋoire Ḃeatha",
		"Leitir Ceanainn",
		"Bealach Féich",
		"Na Cruaċa",
		"An Lorgain",
		"Lios na gCearrḃach",
		"An Caisleán Riaḃach",
		"An Ṁainistir Liath",
		"Dún Pádraig",
		"Cill Ċaoil",
		"Fionnġlas",
		"Cluain Dolcáin",
		"Cluain Tarbh",
		"Binn Éadair",
		"Dún Laoiġaire",
		"Deilginis",

		"An Garastún ",
		"Paiteagó",
		"Eadarnaiḋ",
		"Lios na Daróg",
		"Scriobaċ",
		"Inis Ceiṫleann",
		"Poll an Phúca",
		"Cill Cais",
		"An Spidéal ",
		"An Teach Dóite",
		"An Ċeaṫrú Rua",
		"Inis Meáin ",
		"Cathair Saiḋḃín",
		"An Daingean",
		"Gleann na bPúcaí",
		"Sliabh Mis",
		"Na Cruaċa Duḃa",
		"An tSnaidhm",
		"Co. Ċill Dara",
		"Cairbre",
		"Na Solláin",
		"Fioḋ Alúine",
		"Maigh Nuad",
		"An Currach",
		"Léim an Ḃradáin",
		"Ġráinseaċ Ċuffe",
		"Baile Ṁic Andáin",
		"Bearna na Gaoiṫe",
		"Dún Garḃáin",
		"Baile an Ṗoill",
		"Sliaḃ Rua",

		"Eiréil ",
		"Darú",
		"An Baile Fionn",
		"Baile Átha Í",
		"Cúil an tSúdaire",
		"Buiríos Mór Osraí",

		"Gleann Éada",
		"Garḃach",
		"Droim Seanḃó",
		"Aċaḋ na Síleann",
		"Fíonach",
		"Dromad",

		"Pailis Ċaonraí",
		"Poll an Phúca",
		"Caisleán Uí Ċonaill",
		"Áth na bḞuinseog",
		"An Ḟeoṫanaċ",
		"Brú Rí",

		"An Lios Breac",
		"Meathais Troim",
		"Gránard",
		"Cluain Dá Ráth",
		"Maiġ Duṁa",
		"An Ċarraig Ḃuí",

		"Dún Dealgan",
		"An Grianfort",
		"Ceann Ċloċair",
		"Baile Átha Ḟirdia",
		"Poll an Phúca",
		"Baile an Ġearlánaigh",
		"Cill Ala",
		"Caisleán an Ḃarraiġ",
		"Baile Ui Ḟiacáin",
		"An Caoláire Rua",
		"Lios an tSaṁaiḋ",
		"An Éill",
		"An Uaimh",
		"Ráth Ċairn",
		"Cill Ḃríde",
		"Teamhair",
		"Buaile na Bréachṁaí ",
		"Tigh na Sióg",
		"Co. Ṁuineaċáin",

		"Scairbh na gCaorach",
		"Cluain Eois",
		"Einistir Ḃuithe",
		"Teach an Scotaigh",
		"Crícheán Rua",
		"Carraig Ṁaċaire Rois",
		"Co. Uíḃ Ḟailí",
		"Cluain Ṁic Nóis",
		"Éadan Doire",
		"Biorra",
		"Cionn Eitigh",
		"Ráth Iomġáin",
		"Suí an Róin",

		"Cluain Fada",
		"Baile an Tobair",
		"Loch Bó Finne",
		"Scramóg",
		"Loch Bó Dearge",
		"Corr na Fola",

		"Béal Átha na gCarraigíní",
		"An Mullach Mór",
		"An Ċéis",
		"Gob Reaċla",
		"Baile Uí Ḋálaigh",
		"Tobar an Ċoire",

		"Ros Cré",
		"Durlas",
		"Faiċe Ró",
		"Sliabh na mBan",
		"Cluain Meala",
		"Tigh na Naoi Míle",

		"Caisleán na Deirge",
		"Baile Mhic Gofraidh",
		"An Ómaigh",
		"An Caisleán Glas",
		"An Ċorr Ċríochach",
		"Dún Geanainn",

		"Sléiḃte an Ċomaraigh",
		"An Baile Dubh",
		"Tullach an Iarainn",
		"Cluain Ḟia",
		"Dún Garḃán",
		"Cill Ṁíodáin",

		"Baile na gCailleach",
		"Ráth Ḟearna",
		"An Teanga",
		"Na Colúir",
		"Cill Ḃeagáin",
		"An Muileann gCearr",
		"Co. Loch Garman",

		"Poll an Ṗúca",
		"Na Cloċa Liaṫa",
		"Siol Éalaiġ",
		"Dún Ard",
		"An tInḃear Mór",
		"Aḃóca"


	]];

	let newFortunadown = true;
	// $('.holdem').fadeOut();
	let randTime;
	let currentChamp = 0
	let registrationMenuOpen = false;
	let champ = {};

	champ.class = "Neue Story";

	let vidDir = 'fwd';

	let oldX;
	let changeCountyTime;

	function changeCounty() {
		countyId = (countyId + 1) % countyNamesGaeilge.length; // use modulo to ensure we never step outside the array
		contae.innerHTML = countyNamesGaeilge[countyId];
		changeCountyTime = Date.now();
		oldX = parseInt(badge.style.backgroundPositionX || "0px");
		console.log("county changed at:", changeCountyTime, "  oldX: ", oldX);
	}


	setInterval(function () {
		if (oldX !== undefined) {
			let t = Date.now() - changeCountyTime;
			let duration = 100;
			let m = badgeWidth / duration;
			let b = oldX;
			if (t > duration) {
				oldX = undefined;
				t = duration;
			}
			badge.style.backgroundPositionX = (-m * t + b) + "px";
		}
	}, 1000 / 60);

	$('#i-am-not-btn').on('touchend', function () {
		let iAmNot = document.getElementById('i-am-not-btn')
		if (readyToGo) {
			iAmNot.addEventListener("click", changeCounty);

		}
		else {
			if (classOk) {

				$('#ainm').html(randomNames[Math.floor(Math.random() * randomNames.length)])
			}
			else { //go back to select a champion

				$('#hero').fadeOut();
				setTimeout(function () {


					$('#all-champions').fadeIn();
					readyToGo = false;
					ainmOk = false;
					classOk = false;
					haveWeStartedYet = false;
					$('#title').html('Scéal Núa');
					$('#sub-title').html('Roghnaigh Charactéir')
					$('#hero-target').fadeOut();
					$('.blurb').fadeOut();
					$('#i-am-not-btn').fadeOut();
					$('#i-am-btn').css('background-image', '');
					$('#i-am-btn').animate({ left: "25%" })

				}, 300)
			}
		}
	})

	let haveWeStartedYet = false;

	updateChamp = () => {
		if (haveWeStartedYet === false) {
			haveWeStartedYet = true;



		}


		champ = champions[currentChamp];
		if (currentChamp == -1) {
			currentChamp = champions.length - 1;
			updateChamp();
		}
		if (currentChamp == champions.length) {
			currentChamp = 0;
			updateChamp();

		}
		$('#title').html(champ.class);
		$('.blurb').html(champ.blurb);
		$('#sub-title').html(champ.classEng);

		// $('#sub-title').html(champ.name0 + " " + champ.nickname + " " + champ.name1);
		$('#hero').attr('src', champ.img0);

		let poetBG = ` <div id="pathVideo">
		<div id="vidsrc"></div>
		</div>`
		$('#pathholder').html(poetBG);
		let pathholder = document.getElementById('pathholder');
		pathholder.playbackRate = 0.1;
		$('#hero').css('background-image', "url('../" + champ.img0 + "')");
		// $('#hero-target').attr('src', champ.targetCircle);
		// $('#hero-target').fadeIn();

		// console.log("jya"+[currentChamp].name0);

	}
	let champions = [];
	$.ajax('../champions.json', { dataType: 'json' }).then(function (response) {
		champions = response;
	})
	let usrMsg;


	$('.nav-left').on('touchend', function () {
		if (registrationMenuOpen) {
			location.href = 'http://167.172.184.73:1337/baile';

		}
		$('#all-champions').fadeOut();
		// $('#
		setTimeout(() => {
			currentChamp--;
			updateChamp()
			haveWeStartedYet = true;

		}, 250)

	})
	$('.nav-right').on('touchend', function () {
		$('#all-champions').fadeOut();

		$('#pathVideo').fadeOut();
		setTimeout(() => {

			currentChamp++;
			updateChamp()
			haveWeStartedYet = true;
		}, 250)

		if (endGame) {
			setTimeout(() => {
				
				window.location.replace('http://167.172.184.73:1337/geaga');
			}, 200);

		}
	})
	$('#i-am-btn').on('click', function () {
		if (readyForCounty) {
			readyToGo = true;
			$('#title').html(champ.class);
			$('#badge_overlay').fadeIn();
			$('#an').fadeOut()

			setTimeout(function () {
				$('#badge').fadeIn();

			}, 350)
			setTimeout(function () {
			}, 1000)

			$('#i-am-btn').css('background-image', 'url(../img/playerFrame3.png)')
			// $('#i-am-not-btn').css('background-image', "url(" + champ.targetCircleIAm + ")");
			// $('#i-am-not-btn').fadeIn();

		}

		if (ainmOk) {
			// $('#contae').fadeIn().css('display','grid');

		}

	});


	let timestamps =
		[0.99,

			1.92,
			2.93,
			3.85,
			4.82,
			5.71,
			6.70,
			7.63,
			8.55,
			9.47,
			10.36,
			11.39,
			12.28,
			13.24,
			14.22,
			15.14,
			16.13,
			16.99,
			18.04,
			18.91,
			19.89,
			20.83,
			21.83,
			22.83,
			23.65,
			24.61,
			25.56,
			26.47,
			27.54,
			28.31,
			29.40,
			30.24,
			31.21,
			32.14,
			33.11,
			33.95,
			35.04,
			35.93,
			36.91,
			37.90,
			38.80,
			39.72,
			40.67,
			41.61,
			42.65,
			43.42,
			44.47,
			45.39,
			46.34,
			47.31,
			48.32,
			49.19,
			50.11,
			51.06,
			52.07,
			52.96,
			54.01,
			54.92,
			55.79,
			56.64,
			57.70,
			58.60,
			59.60,
			0
		]
	$('#i-am-btn').on("taphold", function () {


		if (haveWeStartedYet) {
			if (haveWeStartedYet === false) {
				$('#title').html('Scéal Nua');
				$('#sub-title').html('Roghnaigh Charactéir');
				$('#hero').fadeTo(1000, 1);

			}
		}

	});
	$('#i-am-btn').on("touchend", function () {


		if (readyToGo) {

			cláraighMar.ainm = $('#ainm').html();
			cláraighMar.inCo = $('#contae').html();

			cláraighMar.whereAmI = countyNamesBearla[countyId];
			cláraighMar.slí = champ.class;
			console.log(cláraighMar.whereAmI + " :cláriaghMar.whereAmI")
			localStorage.setItem("whereAmI", cláraighMar.whereAmI);
			localStorage.setItem("avatar", champ.avatar);
			console.log(champ.avatar + " :champ.avatar")

			localStorage.setItem("slí", cláraighMar.class);
			localStorage.setItem("from", cláraighMar.whereAmI);
			var test = localStorage.getItem("whereAmI")
			console.log(test + " :localStorage.whereAmI")
			
			
			slí = champ.class;
			avatar = champ.avatar;
			cláraighMar.avatar = champ.avatar;
			let clJSON = JSON.stringify(cláraighMar);
			console.log("cláraighMar.whereAmI: " + cláraighMar.whereAmI)
			// console.log("champ.whereAmI"+champ.whereAmI)
			console.log("clJSON: " + clJSON)

			window.location.replace('http://167.172.184.73:1337/geaga')
			
			$.ajax('/addPlayer', {
				type: 'POST',  // http method
				data: clJSON,  // data to submit
				success: function (results) {
					imreoir = JSON.stringify(results);
					console.log(imreoir.ainm + "<<<<imreoir")
					// location.href = 'http://167.172.184.73:1337/geaga';
				}

			});



		}
		if (haveWeStartedYet) {
			classOk = true;
			$('.blurb').fadeOut();
			$('#sub-title').fadeOut();

			setTimeout(function () {


				$('#ainm').fadeIn();

				$('.paralax-mask').fadeIn();
				$('#sub-title').html('');
				$('#title').css('top', '46%');
				$('#ainm').css('top', '59%');

			}, 600)

		}
		if (classOk) {
			if (ainmOk) {
				$('#hero').css("top", "-5%")
				$('#hero').css("left", "35%")
				
				$('#an').fadeOut();
				setTimeout(function () {

					$('.paralaxwave').fadeIn();
					$('.paralax').fadeIn();
					$('#contae').fadeIn().css('display', 'grid');
					$('#badge').fadeIn();
					$('#sub-title').fadeOut()

					readyToGo = true;
				}, 1500)


				$('#hero').fadeIn();
				$('#an').fadeOut();

				if (ainmOk) {

					$('#ainm').animate({ top: '50%' });
					$('#title').fadeOut();
					$('#an').fadeOut();
					// $('#i-am-not-btn').css('background-image','url("")')
					$('.col-xs-1').animate({ top: "30%" })
					$('#ainm').animate({ top: "50%" })
					readyToGo = true;
				}
			}
			ainmOk = true;
		}

		else {
			// alert(haveWeStartedYet)

			$('#title').html('Scéal Nua');
			$('#sub-title').html('Roghnaigh Charactéir');
		}
	});
	$('#i-am-btn').on('touchstart', function () {

		if (haveWeStartedYet === false) {

			$('#title').html('New Story');
			$('#sub-title').html('Select Character');



		} else {

			$("#i-am-btn").css('background-image', '../img/ciorcal4.png');


		}

	});
	// let cuige = "Uladh"
	// 	$.ajax({
	//         url: 'locations',
	//         type: 'GET',
	// 		dataType: 'json',


	//         success: function (response) {
	// 		 console.log(response);
	//         }
	//     });
	// });





	$('#register-main').on('touchend', function () {
		$('#login-menu').fadeOut();

		$('#main-menu').fadeOut();
		setTimeout(function () {
			$('#registration-menu').fadeIn();


			$('#title').html(`Cláraigh`);

		}, 300)
	})


	$('#log-in').on('touchend', function () {
		$('#registration-menu').fadeOut();
		$('#main-menu').fadeOut();
		setTimeout(function () {
			$('#login-menu').fadeIn();
		}, 300)
	})

	$('.back-home').on('touchend', function () {
		$('#login-menu').fadeOut();

		$('#registration-menu').fadeOut();
		setTimeout(function () {
			$('#main-menu').fadeIn();


			$('#title').html(`Baile`);

		}, 300)
	})


	$('#hero').on("touchend", function () {
		$('#title').html(champ.class);
		$('#sub-title').html(champ.classEng);



		// updateChamp();
	});
	// $('#hero').on("touch",function(){


	// })
	function sreenshotIt() {

	}
	let badgeWidth = 80;



	let countyNamesBearla = ['offaly', 'louth', 'wexford', 'limerick', 'dublin', 'leitrim', 'antrim', 'donegal', 'fermanagh', 'cork', 'wicklow', 'roscommon', 'derry', 'sligo', 'tipperary', 'laois', 'waterford', 'kilkenny', 'meath', 'kerry', 'longford', 'mayo', 'westmeath', 'down', 'armagh', 'carlow', 'monaghan', 'galway', 'kildare', 'clare', 'cavan', 'tyrone', 'abroad']
	let countyNamesGaeilge = [
		'Uíḃ Ḟailí',
		'An Lú',
		'Loch Garman',
		'Luimnach',
		'Baile Átha Ċliath',
		'na Liatroma',
		'Aontroma',
		'Ḋún na nGall',
		'Ḟear Manaċ',
		'Ċorcaí',
		'Ċill Ṁantáin',
		'Ros Comáin',
		'Ḋoire',
		'Ṡligiġ',
		'Ṫiobraid Árann',
		'Laoise',
		'Ṗort Láirge',
		'Ċill Ċainniġ',
		'Na Mí',
		'Ċiarraí',
		'An Longfoirt',
		'Ṁaigh Eo',
		'Na hIarṁí',
		'An Dúin',
		'Ard Ṁaċa',
		'Ċeaṫarlaċ',
		'Ṁuineaċáin',
		'na Gailliṁe',
		'Ċill Dara',
		'An Ċláir',
		'An Caḃáin',
		'Ṫír Eoghain',
		'Tír Thar Muir'
	];
	let countyId = 0;
	if (countyId < 0) {
		countyId = countyNamesGaeilge.length - 1;
	}
	function badgeSelector() {

		const contae = document.querySelector("#contae");

		const badge = document.querySelector("#badge");
		console.log('>>>>>>>', badgeWidth);

		let oldX;
		let changeCountyTime;

		function changeCounty() {
			countyId = (countyId + 1) % countyNamesGaeilge.length; // use modulo to ensure we never step outside the array
			contae.innerHTML = countyNamesGaeilge[countyId];
			changeCountyTime = Date.now();
			oldX = parseInt(badge.style.backgroundPositionX || "0px");
			console.log("county changed at:", changeCountyTime, "  oldX: ", oldX);
		}


		setInterval(function () {
			if (oldX !== undefined) {
				let duration = 100;

				let t = Date.now() - changeCountyTime;
				let m = badgeWidth / duration;
				let b = oldX;
				if (t > duration) {
					oldX = undefined;
					t = duration;
				}
				badge.style.backgroundPositionX = (-m * t + b) + "px";
			}
		}, 1000 / 60);


	};

	badgeSelector(100);



	//gaiscí show all champions stuff:

	var stage = document.querySelector("#stage");

	//The game map 
	var map = [
		[0, 1, 2, 3],
		[4, 5, 6, 7],
		[8, 9, 10, 11]

	];

	//Map code 
	var warrior = 0;
	var troll = 1;
	var healer = 2;
	var occultist = 3;
	var druid = 4;
	var grammarian = 5;
	var rogue = 6;
	var adept = 7;
	var poet = 8;
	var temptress = 9
	var witch = 10
	var rando = 11
	//The size of each cell 
	var SIZE = 64;
	//The number of rows and columns 
	var ROWS = map.length;
	var COLUMNS = map[0].length;

	function render() {
		//Clear the stage of img cells
		//from the previous turn

		if (stage.hasChildNodes()) {
			for (var i = 0; i < ROWS * COLUMNS; i++) {
				stage.removeChild(stage.firstChild);
			}
		}

		//Render the game by looping through the map arrays
		for (var row = 0; row < ROWS; row++) {
			for (var column = 0; column < COLUMNS; column++) {

				//Create a img tag called cell
				var cell = document.createElement("img");

				//Set it's CSS class to "cell"
				cell.setAttribute("class", "cell");

				//Add the img tag to the <div id="stage"> tag
				stage.appendChild(cell);

				//Find the correct image for this map cell
				switch (map[row][column]) {
					case warrior: cell.src = "../img/characters/fianna0.png";
						break;
					case troll: cell.src = "../img/characters/bodach0.gif";
						break;
					case healer: cell.src = "../img/characters/cneasaí0.png";
						break;
					case occultist: cell.src = "../img/characters/diamhraí0.gif";
						break;
					case druid: cell.src = "../img/characters/draoi0.gif";
						break;
					case grammarian: cell.src = "../img/characters/gramadóir0.png";
						break;
					case rogue: cell.src = "../img/characters/rógaire0.png";
						break;
					case adept:
						cell.src = "../img/characters/saoi0.png";
						break;
					case poet:
						cell.src = "../img/characters/seanchaí0.png";
						break;
					case temptress:
						cell.src = "../img/characters/spéirbhean0.gif";
						break;
					case witch:
						cell.src = "../img/characters/cailleach0.png";
						break;
					case rando:
						cell.src = "../img/characters/rando0.png";
						break;


				}

				cell.style.top = row * SIZE + "px"; cell.style.left = column * SIZE + "px";


			}


			function goToChar(charId) {

				$('#all-champions').fadeOut();

				// $('#pathVideo').fadeOut();
				setTimeout(() => {

					currentChamp = charId;
					updateChamp()
					haveWeStartedYet = true;



					$('#ceist').css('opacity', 1);
					registrationMenuOpen = true;
					$('#nav-right').fadeOut();
					$('#ainm').html(randomNames[Math.floor(Math.random() * randomNames.length)])
				}, 250)
				champ = champions[charId];
				$('#i-am-not-btn').fadeIn();
				$('#i-am-btn').animate({ left: "4%" })
				$('.blurb').fadeIn();


				// $('#hero').fadeOut();
				// $('#source').attr('src', './vid/nuFortuna3.mp4');
				// $('#ainm').val('rando');
				$('#ainm').on('touchend', function () {
					$('#ainm').html('')
					showKeyboard = true;

					$('.holdem').fadeIn();
				});

				// $('#hero-target').css('background-image', champ.targetCircle);
				$('#i-am-btn').css("background-image", 'url(./img/playerFrame6.png)');
				// $('#i-am-btn').fadeTo(1, "slow");
				// $('#i-am-not-btn').fadeIn()

				$('.nav-right').fadeOut()
				$('#sub-title').html(champ.classEng);
				setTimeout(function () {

					$("#hero").fadeIn();
				}, 300)

				// $('#i-am-not-btn')
				// .css('background-image', '../playerFrame6')

			}
			$('.cell').on('touchend click', function () {

				$('.blurb').html(`<p>` + cláraighMar.blurb + `</p>`);
				$('#all-champions').fadeOut();
				let touched = this.src;
				if (touched.includes('rando')) {
					goToChar(Math.floor(Math.random() * 8))

				}
				if (touched.includes('fianna')) {
					goToChar(0)
				}
				if (touched.includes('bodach')) {
					goToChar(1)
				}
				if (touched.includes('cneas')) {
					goToChar(2)
				}
				if (touched.includes('diamh')) {
					goToChar(3)
				}
				if (touched.includes('draoi')) {
					goToChar(4)
				}
				if (touched.includes('grama')) {
					goToChar(5)
				}
				if (touched.includes('gaire')) {
					goToChar(6)
				}
				if (touched.includes('sao')) {
					goToChar(7)
				}
				if (touched.includes('seancha')) {
					goToChar(8)
				}
				if (touched.includes('irbh')) { //spéirbhean
					goToChar(9)
				}
				if (touched.includes('cail')) {
					goToChar(10)
				}


			})
		}
	}

	render();
	setTimeout(function () {
		haveWeStartedYet = false;
		$('#all-champions').fadeIn().css('display', 'grid');
		$('#i-am-btn').fadeIn();

	}, 500)
});
