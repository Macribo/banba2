
var slide = 0;
var firstPoemSlide = 7;
var lastPoemSlide = 11;
let lastSlide = 22;
let spencer1 = 19;
let spencer2 = 19;


var elem = document.documentElement;
function openFullscreen() {
    // alert('fs?');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }

}




// import TypeWriting from 'typewriting'?;
let textBottom = [

    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,

    `...`,

    `mac`,
    `file`,
    `oileán`,

    `stoirm`,
    `Dán Amergín`,
  
    `comhrac aonair`,
    `<img src="../img/About1/eye.png">`,


    `1169 AD`,
    `Strong Bow`,
    `An Pháil`,
    `1580 AD`,
    `A Veue of the present state of Irelande`,
    `A Veue of the present state of Irelande`,

    `<span style="font-family:aonchlo"><b>Uladh</b></span>`,
    `<span style="font-family:aonchlo"><b>An Teanga</b></span>`,
    `<img src="../img/About1/seabhac.png">`,
    `<img src="../img/About1/seabhac.png">`,




];

let textTop = [

    `...`,
    `'
         `,
    ``,

    ``,

    `muintir.`,

    ``,

    ``,
``,
``
,
``,
``,

    `

`,
    ``,

    ``
    ,
    ``
    ,

    ``
    ,

    `
`
    ,
``
    ,

    ``
    ,
    ``,

``,
``

];

let textEnglish = [

    `こんにちは、チカさん`,
    `
    According to legend,
    Gaelic people descend
    from an Iberian tribe
    called the Milesians. 
    `,
    `Breogán <span style="color:white">son</span> of Brath
    <span style="color:white">son</span> of Bile Galamh Míl Espáine
    had seven sons 
    `,
    `    One of whom
      was named
    <br/>Amergin <br/>
    of the Bright Knees<span style="color:orange">*</span><br/>
    Soldier of Spain <br/>
    <br/>
<h5 style="color:orange">    *Birth of Song  </h5>
    
    `,
    `Amergin 
   and the Milesians
   voyaged to the island of
    the Dé Dannan tribe.`,
    `The druids of Dé Danann 
    raised a magical <span style="color:white">storm</span> 
    to keep Amergín’s 
    expedition from reaching land. 
    `,
    `But Amergín had powers of poetry`,

    `I am the wind which breaths upon the sea<br/>
  I am the wave of the ocean<br/>
  I am the murmur of the billows`,

    `I am Stag of Seven Tines<br/>
  I am a Hawk on a Cliff<br/>
  I am a beam of the sun<br/>
  I am the fairest of plants`,

    `I am a wild boar in valor<br/>
  I am a salmon in the water<br/>
  I am a lake in the plain`,

    `I am a word of science<br/>
   I am the point of the lance of battle`,
    `...(I am) a Song on a Spear<br/>
   an Enchantment of Winds.`
    ,
    `The kings of Dé Danann 
were killed in <span style="color:white">single combat</span>
 by the sons of Míl Espáine.`

    ,

    `The Dé Danann 
retreated into the Earth,
and for thousands of years 
Gaelic civilization 
flourished in Ireland.`
    ,

    `In <span style="color:white">1169 CE</span>, deposed King Diarmait Mac Murchada solicited Norman Mercenaries to quell rebellion in Leinster.`
    ,
    `King Henry II of England used this to declare the conquered cities 
crown-land. So began 800 years of English rule in Ireland.`
    ,

    `By 1500 AD, despite centuries of military campaigning,
English law existed only around Dublin Castle.`
    ,

    `
Beseiged Gaelic Italian and Spanish forces were slaughtered at Ard na Caithne in Corca Dhuibhne, by lord Grey de Wilton.`
    ,
    `After the 'Grey faith' massacre, Edmund Spencer wrote to Queen Elizebeth, and explained why the Irish kept resisting English rule:`
    ,


    `"Soe that the speach being Irish, 
the hart must needes be Irishe; 
for out of the aboundance of the hart, 
the tonge speaketh"<br/>
<h6>A Veue of The Present State of Ireland</h6>`
    ,
    `Gaelic Ireland's final strongholds fell and as the last <span style="color:white">Ulster</span> chieftains were forced into exile, So ended the Gaelic order.`,


    `Edmund Spencer was wrong.
    The heart can be Irish, whilst the tongue speaks English. 

    `,
    `But what of the heart when the tongue is Gaelic?`, 








];
let images = [
    ``,
    ``,
    ``,
    
]

$('#next').on('touchend', function () {
    if (slide === 0) {

        openFullscreen();
    }
    slide++;
    render();
})

$('#prev').on('touchend', function () {
    if (slide === 0) {
render();
    }
    slide--;
    render();
})


$(document).ready(function () {
    $('#shield-holder').on('touchstart', function () {
        $('#shield-holder').css("background-image", "url('../img/glow.png')") 

        $('#top-content').fadeOut();
        setTimeout(function () {
            $('#top-content').css('slow')

            $('#top').empty().append(`<h4 id="top-content">${textEnglish[slide]}</h4>`);
            $('#top').css('color','white')
            $('#top-content').fadeIn('slow')

        }, 100);

    });

    $('#shield-holder').on('touchend', function () {
        $('#shield-holder').css("background-image", "url('../img/deetsFrame.png')") 


        $('#top-content').fadeOut();
        setTimeout(function () {

            $('#top').empty().append(`<h4 id="top-content">${textTop[slide]}</h4>`);
            $('#top').css('color','color:rgb(143, 125, 48)');
            $('#top-content').fadeIn('slow')

        }, 100);

    });

    render = () => {
if(slide<0){
    slide = 0;
}
        if (slide === lastSlide + 1) {
            location.href ='./geaga';

        }
        if (slide === firstPoemSlide - 1) {
            // $('#middle-hist').fadeOut();
            // alert();
            // $('#middle-hist').removeClass('sea');

        }
        if (slide >= firstPoemSlide && slide <= lastPoemSlide) {
            $('#middle-hist').empty()
            // $('#middle-hist').addClass('sea');
            $('#middle-hist').empty().css('background-image', `url('../img/About1/rún.png')`);
            // $('#middle-hist').css('margin-left','50px');

            $('#middle-hist').fadeIn();

            // $('#top-content').fadeOut();
            // $('#bottom-content').fadeOut();
            setTimeout(function () {

                $('#top').empty().append(`<h4 id="top-content">${textTop[slide]}</h4>`);
                $('#top-content').fadeIn('slow')
                // $('#bottom').empty().append(`<h4 id="bottom-content">${textBottom[slide]}</h4>`);
                // $('#bottom-content').fadeIn('fast')

            }, 600);
        }
        else if (slide === spencer1 || slide === spencer2) {

            // $('#top-content').fadeOut();

            // $('#middle').fadeOut();
            // $('#bottom-content').fadeOut();
            // $('#middle').css('background-image', `url('../img/About1/${images[slide]}')`);

            setTimeout(function () {

                // $('#middle').removeClass('sea');
                $('#top').empty().append(`<h4 id="top-content">${textTop[slide]}</h4>`);
                console.log(images[slide]);
                console.log(slide);

                // $('#top-content').fadeIn('slow')


                $('#bottom').empty().append(`<h4 id="bottom-content">${textBottom[slide]}</h4>`);
                $('#bottom-content').fadeIn('slow')
                // $('#middle').fadeIn('slow')

            }, 600);
        }
        else {

            $('#top-content').fadeOut();
            // $('#middle').fadeOut();
            // $('#bottom-content').fadeOut();

            setTimeout(function () {

                $('#middle').removeClass('sea');
                $('#top').empty().append(`<h4 id="top-content">${textTop[slide]}</h4>`);
                console.log(images[slide]);
                console.log(slide);

                $('#top-content').fadeIn('slow')

                $('#middle-hist').empty().css('background-image', `url('../img/About1/${images[slide]}')`);

                // $('#bottom').empty().append(`<h4 id="bottom-content">${textBottom[slide]}</h4>`);
                // $('#bottom-content').fadeIn('slow')
                // $('#middle').fadeIn('slow')

            }, 600);
        }



        // $('#middle-content').fadeIn()

        // $('#bottom').append(`<h2 id="bottom-content">${textBottom[slide]}</h2>`)


    }

});
