


$(document).ready(function () {
	let tempInput;
	// alert();


	setTimeout(function () {
		// $('.btn').css('opacity','1 !important');
		// $('#output').html('')
		// alert();//
	}, 1300)

	new ClipboardJS('#copy');

	let keyPressed;

	let keysToShow = [];
	showWhatKeys = (keyPressed) => {
		switch (keyPressed) {
			case 'a': keysToShow.push('a');
				keysToShow.push('á');
				keysToShow.push('A');
				break;


			case 'b': keysToShow.push('b');
				keysToShow.push('ḃ');
				keysToShow.push('B');
				break;

			case 'c': keysToShow.push('c');
				keysToShow.push('ċ');
				keysToShow.push('C');
				break;

			case 'd': keysToShow.push('d');
				keysToShow.push('ḋ');
				keysToShow.push('D');
				break;

			case 'e': keysToShow.push('e');
				keysToShow.push('é');
				keysToShow.push('E');
				break;

			case 'f': keysToShow.push('f');
				keysToShow.push('ḟ');
				keysToShow.push('F');
				break;

			case 'g': keysToShow.push('g');
				keysToShow.push('ġ');
				keysToShow.push('G');
				break;

			case 'h': keysToShow.push('h');
				keysToShow.push('H');
				break;

			case 'i': keysToShow.push('i');
				keysToShow.push('í');
				keysToShow.push('I');
				break;

			case 'l': keysToShow.push('l');
				keysToShow.push('L');
				break;

			case 'm': keysToShow.push('m');
				keysToShow.push('ṁ');
				keysToShow.push('M');
				break;

			case 'n': keysToShow.push('n');
				keysToShow.push('N');
				break;

			case 'o': keysToShow.push('o');
				keysToShow.push('ó');
				keysToShow.push('O');
				break;

			case 'p': keysToShow.push('p');
				keysToShow.push('ṗ');
				keysToShow.push('P');
				break;

			case 'r': keysToShow.push('r');
				keysToShow.push('ꞃ');
				keysToShow.push('R');
				break;

			case 's': keysToShow.push('s');
				keysToShow.push('ṡ');
				keysToShow.push('S');
				break;

			case 't': keysToShow.push('t');
				keysToShow.push('ṫ');
				keysToShow.push('T');
				break;

			case 'u': keysToShow.push('u');
				keysToShow.push('ú');
				keysToShow.push('U');
				break;



			default: break;
		}

	}


	$('#fada-mode').hide();
	$('#caps-keyboard-container').hide();
	capsMode = false;


	toggleCapsMode = () => {
		if (capsMode === true) {
			$('#keyboard-container').show();
			$('#caps-keyboard-container').hide();
			capsMode = false;
		}
		else {
			$('#keyboard-container').hide();
			$('#alt-keyboard-container').hide();
			$('#caps-keyboard-container').show();

			capsMode = true;

		}
		;

	}
	fadaMode = () => {

		$('#keyboard-container').hide();
		$('#fada-mode').show();

		$('.btn').on('touchend', function (e) {
			if (keyPressed != "Ᵹ") {
				$('#keyboard-container').show();
				$('#fada-mode').hide();
			}
		})

		setTimeout(function () {

			$('#keyboard-container').show();
			$('#fada-mode').hide();
		}
			, 3000)
	}
	// 	else{
	// 		$('#keyboard-container').show();
	// 	$('#alt-keyboard-container').hide();
	// 	fadaMode=false;
	// 	}
	// }


	function holdKeyDown(e) {

		for (let i = 0; i < keysToShow.length; i++) {


			let newButton = `<button id=` + keysToShow[i] + ` onclick = "$('#ainm').append(this.id);
		" type="button" class="btn btn-right-logo btn-outline-dark">`+ keysToShow[i] + `</button>`

			$('#j-line').append(newButton)
		}

		$('#j-line').fadeIn();
		let newLeft = $('#' + keyPressed).offset().left;
		let newTop = $('#' + keyPressed).offset().top - 50;
		$('#j-line').css({ "left": newLeft });
		$('#j-line').css({ "top": newTop });
		setTimeout(function () {
			$('#j-line').fadeOut();
			// alert("removed");
		}, 2000
		)
	}
	$('.btn').on('touchstart', function () {
		$('#j-line').empty();
		keyPressed = (this.innerHTML);
		keysToShow = [];

		showWhatKeys(keyPressed);

		myVar = setTimeout(holdKeyDown, 600);

	})


	let currentBg = 0;
	let bgArray = [
		'../img/mob-map/bgs/bg0.png',
		'../img/mob-map/bgs/bg1.png',
		'../img/mob-map/bgs/bg2.png',
		'../img/mob-map/bgs/bg3.png',
	];
	refreshBG = () => {
		// $('#scfó').css('background-image','url("'+bgArray[currentBg]+'")'
		// )
		$('#output').empty();
		tempInput = $('#output').html();
		$('input').val(tempInput);
	}


	$('.btn').on('touchend', function (e) {

		if (this.id === "btnSendMsg") {
			// currentBg++;
			// $('ainm').fadeOut();
			// $('.holdem').fadeOut();

			// $('#video_overlay').fadeOut();
			// $('#hero-target').fadeOut();
			
			


			// refreshBG();


			return
		}

		clearTimeout(myVar)
		var id = this.id
		if (keyPressed === "Ᵹ") {
			fadaMode();
			// alert('alt')
		}
		else if (

			(this.id === "copy")
		) {
			// toggleCapsMode()


		}
		else
			if (id === 'undo') {
				var temp = $('#output').text();
				temp.toString();
				// alert(temp)
				str = temp.substring(0, temp.length - 1);
				// alert(str)
				$('#output').text(str);
				tempInput = $('#output').html();
				$('input').val(tempInput);
			}
			else if ($('#j-line').is(':hidden')) {
				// alert("hidden")
				$('#ainm').append(keyPressed);
				keysToShow = [];
				tempInput = $('#ainm').html();
				$('input').val(tempInput);
			}
			else {

				$('#ainm').append(keyPressed);
				tempInput = $('#output').html();
				$('input').val(tempInput);
			}

	});

	// if (id === 'undo'){
	// 	let temp = document.getElementById('#output');
	// 	alert(temp)
	// }



});











