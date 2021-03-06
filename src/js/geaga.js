$(document).ready(function () {
    let playerOverLocation = false;
    
    $.getJSON('mapData.json', function (county) {

        $.each(county, function (key, val) {
            // console.log("val " + val.co)
            // console.log("val.county " + val.county)

            if (val.co === imreoir.whereAmI) {
                $('#output').html(val.county)
                // console.log("line 112:" + val.county);
                map = JSON.parse(val.mapData);
                // console.log(val.mapData);

                $('.countyMap').css('left', val.left)
                $('.countyMap').css('top', val.top)
                $('.countyMap').css('background-image', val.countyBG)
                $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');


                // console.log("line 123" + val.co)
                newLocations = val.locations;
                // console.log(newLocations)

                setTimeout(function () {

                    $('.countyMap').fadeIn();
                    let whichSea = Math.floor(Math.random() * 3)

                    if (localStorage.whereAmI == 'antrim' || localStorage.whereAmI == 'down' || localStorage.whereAmI == 'louth' || localStorage.whereAmI == 'dublin' || localStorage.whereAmI == 'wicklow' || localStorage.whereAmI == 'wexford') {
                        $('.sea').css('background-image', 'url("../img/tonnta4.gif")')
                    } else {
                        if (whichSea === 2) { $('.sea').css('background-image', 'url("../img/tonnta2.gif")') }
                        if (whichSea === 1) { $('.sea').css('background-image', 'url("../img/tonnta1.gif")') }
                        if (whichSea === 3) { $('.sea').css('background-image', 'url("../img/tonnta3.gif")') }
                    }
                    setTimeout(function () {

                        $('.sea').fadeIn();
                    }, 100)

                    render()

                    console.log("whichSea" + whichSea)
                }, 300)
            }
            else {
                console.log("does" + imreoir.whereAmI + " match " + "error loading map.")
            }


        });


    })
    let newLocations;
    let allCounties;
    $.getJSON('/whichCounty', function (data) {
        allCounties = data.naContae;
        console.log(allCounties);

    })

    let nowIn = {};
    let imreoir = {
        ainm: "Uallach", craobh: "", from: "Ċill Ċainniġ", slí: "Draoi", avatar: "./img/characters/rando0.png", whereAmI: 'donegal'
    }
    console.log(imreoir.whereAmI + ": new imreoir whereAmI");
    /*big function to handle which map to go to*/

    /*big function to handle where to position player after map change*/
    let imreoirJSON = JSON.stringify(imreoir);

    function setMap() {
        // console.log(gameObjects)
        $('.countyMap').css('left', imreoir.whereAmI.left)
        $('.countyMap').css('top', imreoir.whereAmI.top)
        $('.countyMap').css('background-image', "url('../img/countyMaps/" + imreoir.whereAmI + ".png")

        $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');



    }
    function loadMap(direction) {
        switch (imreoir.whereAmI) {

            case 'wexford':

                if (direction === N) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;

                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap()

                }


                if (direction === NE) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    render();
                    setMap();



                };
                if (direction === E) {


                };
                if (direction === SE) {
                };
                if (direction === S) {

                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 7;
                    render();
                    setMap();


                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 7;
                    render();
                    setMap();


                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "carlow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();


                };


                break;

            case 'offaly':

                if (direction === N) {
                    localStorage.setItem("whereAmI", "westmeath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "laois");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "galway");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 9;
                    animatePlayer();
                    render();
                    setMap();

                };
                break;
            case 'cavan':
                if (direction === N) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {

                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "westmeath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "leitrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                }; break;
            case 'clare':
                if (direction === N) {
                    localStorage.setItem("whereAmI", "galway");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "limerick");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {

                };
                if (direction === SW) {

                };
                if (direction === W) {

                };
                if (direction === NW) {

                }; break;
            case 'kildare':
                if (direction === N) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "dublin");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "carlow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "laois");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();


                }; break;
            case 'galway':
                if (direction === N) {
                    localStorage.setItem("whereAmI", "mayo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "clare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SW) {


                };
                if (direction === W) {

                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "mayo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();


                }; break;
            case 'monaghan':
                if (direction === N) {

                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "louth");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();


                }; break;
            case 'carlow':

                if (direction === N) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "wexford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "wexford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === NW) {

                    localStorage.setItem("whereAmI", "laois");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };



                break;
            case 'armagh':

                if (direction === N) {
                    localStorage.setItem("whereAmI", "antrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 9;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "down");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "down");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "louth");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "louth");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SW) {

                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 9;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();


                }; break;
                break;
            case 'down': if (direction === N) {
                localStorage.setItem("whereAmI", "antrim");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 6;
                playerColumn = 9;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {

                };
                if (direction === E) {

                };
                if (direction === SE) {


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "louth");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "antrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 9;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'westmeath': if (direction === N) {
                localStorage.setItem("whereAmI", "cavan");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 9;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SW) {

                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();


                }; break;
            case 'mayo': if (direction === N) {

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "sligo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "galway");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "galway");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "galway");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();


                };
                if (direction === W) {

                };
                if (direction === NW) {

                }; break;
            case 'longford':
                if (direction === N) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "westmeath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "westmeath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'kerry': if (direction === N) {

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "limerick");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {

                };
                if (direction === SW) {

                };
                if (direction === W) {

                };
                if (direction === NW) {

                }; break;
            case 'meath': if (direction === N) {
                localStorage.setItem("whereAmI", "monaghan");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "louth");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {

                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "dublin");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "westmeath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'kilkenny': if (direction === N) {
                localStorage.setItem("whereAmI", "laois");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "laois");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "carlow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "wexford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "waterford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "waterford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'waterford': if (direction === N) {
                localStorage.setItem("whereAmI", "tipperary");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {

                };
                if (direction === SE) {

                };
                if (direction === S) {

                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'laois': if (direction === N) {
                localStorage.setItem("whereAmI", "offaly");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 4;
                playerColumn = 6;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "carlow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'sligo': if (direction === N) {

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "leitrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "leitrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "mayo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "mayo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {

                }; break;
            case 'derry': if (direction === N) {

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "antrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "antrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "antrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "donegal");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {


                }; break;
            case 'roscommon': if (direction === N) {
                localStorage.setItem("whereAmI", "sligo");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 7;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "leitrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "westmeath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 7;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "offaly");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "galway");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "mayo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "sligo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'wicklow':

                if (direction === N) {
                    localStorage.setItem("whereAmI", "dublin");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;

                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap()

                }


                if (direction === NE) {

                };
                if (direction === E) {

                };
                if (direction === SE) {

                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "wexford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;

                    playerRow = 1
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap()
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "carlow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;

                    playerRow = 1;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap()

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;

                    playerRow = 4;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap()
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;

                    playerRow = 3;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap()

                };
                break;
            case 'cork': if (direction === N) {
                localStorage.setItem("whereAmI", "limerick");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 5;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "waterford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {

                };
                if (direction === S) {
                };
                if (direction === SW) {

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "kerry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "kerry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'fermanagh': if (direction === N) {
                localStorage.setItem("whereAmI", "donegal");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 6;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "leitrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "donegal");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 8;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'donegal': if (direction === N) {

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "derry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "tyrone");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 2;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 4;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "leitrim");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {

                };
                if (direction === NW) {
                }; break;
            case 'antrim': if (direction === N) {

            };
                if (direction === NE) {

                };
                if (direction === E) {

                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "down");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "down");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "derry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "derry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 7;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'leitrim': if (direction === N) {
                localStorage.setItem("whereAmI", "donegal");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 8;
                playerColumn = 3;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 3;
                    playerColumn = 1;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 3;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "longford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "roscommon");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 2;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "sligo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 4;
                    playerColumn = 8;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "sligo");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'dublin': if (direction === N) {
                localStorage.setItem("whereAmI", "meath");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 7;
                playerColumn = 7;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {

                };
                if (direction === E) {

                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 6;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "wicklow");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 1;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "kildare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'limerick': if (direction === N) {

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "clare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "tipperary");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "kerry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "kerry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {


                }; break;
            case 'louth':

                if (direction === N) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === NE) {


                };
                if (direction === E) {

                };
                if (direction === SE) {

                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "meath");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "cavan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'tipperary': if (direction === N) {
                localStorage.setItem("whereAmI", "offaly");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 5;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "laois");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "kilkenny");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "waterford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "waterford");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "cork");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "limerick");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "clare");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                }; break;

            case 'tyrone': if (direction === N) {
                localStorage.setItem("whereAmI", "derry");
                imreoir.whereAmI = localStorage.getItem("whereAmI");

                gameObjects[playerRow][playerColumn] = 0;
                playerRow = 5;
                playerColumn = 5;
                animatePlayer();
                render();
                setMap();

            };
                if (direction === NE) {
                    localStorage.setItem("whereAmI", "derry");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === E) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === SE) {
                    localStorage.setItem("whereAmI", "armagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === S) {
                    localStorage.setItem("whereAmI", "monaghan");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === SW) {
                    localStorage.setItem("whereAmI", "fermanagh");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                };
                if (direction === W) {
                    localStorage.setItem("whereAmI", "donegal");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();
                };
                if (direction === NW) {
                    localStorage.setItem("whereAmI", "donegal");
                    imreoir.whereAmI = localStorage.getItem("whereAmI");

                    gameObjects[playerRow][playerColumn] = 0;
                    playerRow = 5;
                    playerColumn = 5;
                    animatePlayer();
                    render();
                    setMap();

                }; break;
            case 'abroad': break;

            default: break;
        }
        $.getJSON('mapData.json', function (county) {

            $.each(county, function (key, val) {
                console.log("val " + val.co)
                console.log("val.county " + val.county)

                if (val.co === imreoir.whereAmI) {
                    $('#output').html(val.county)
                    console.log("line 112:" + val.county);
                    map = JSON.parse(val.mapData);
                    console.log(val.mapData);

                    $('.countyMap').css('left', val.left)
                    $('.countyMap').css('top', val.top)
                    $('.countyMap').css('background-image', val.countyBG)
                    console.log('imreoir where am I?' + imreoir.whereAmI)
                    $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');


                    console.log("line 123" + val.co)
                    newLocations = val.locations;
                    console.log(newLocations)
                }
                else {
                    console.log("does" + imreoir.whereAmI + " match " + "error loading map.")
                }


            });


        })

    }
    let playerDetails = {};


    $.getJSON('mapData.json', function (county) {

        $.each(county, function (key, val) {
            console.log("val " + val.co)
            console.log("val.county " + val.county)

            if (val.co === imreoir.whereAmI) {
                console.log("line 112:" + val.county);
                map = JSON.parse(val.mapData);
                console.log(val.mapData);

                $('.countyMap').css('left', val.left)
                $('.countyMap').css('top', val.top)
                $('.countyMap').css('background-image', val.countyBG)
                console.log('imreoir where am I?' + imreoir.whereAmI)
                $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');


                console.log("line 123" + val.co)

            }
            else {
                console.log("does" + imreoir.whereAmI + " match " + "error loading map.")
            }


        });


    })

    console.log("line 108" + imreoir.whereAmI);
    imreoir.whereAmI = localStorage.getItem("whereAmI")
    imreoir.avatar = localStorage.getItem("avatar")
    console.log("imreoir.avatar: " + imreoir.avatar)
    imreoir.slí = localStorage.getItem("slí")
    imreoir.from = localStorage.getItem("from")


    travel = (direction) => {
        console.log('travelling...' + direction)
        imreoir.whereAmI = localStorage.getItem("whereAmI");
        console.log('whereAmI...' + imreoir.whereAmI);

        switch (direction) {
            case 2:
                break;
            case 9: playerDetails.whereAmI = 'derry';
                console.log('travelling to Derry...')

                break;
            case 8: playerDetails.whereAmI = 'tyrone';
                break;
            case 7: playerDetails.whereAmI = 'fermanagh';
                break;
            case 6: playerDetails.whereAmI = 'leitrim'
                break;
            case 5:
                break;
            case 4:
                break;
            case 3:
                break;
            case N:
                alert(playerDetails.whereAmI)

                break;
            case NE:
                alert(playerDetails.whereAmI)

                break;
            default:
                break;


        }
        // alert('now ajax put...')
        $.ajax('/updatePlayer', {
            type: 'POST',
            data: playerDetails,
            success: function (res) {
                imreoir = JSON.stringify(res);
                console.log(imreoir + "hey here")
                window.location.replace('http://167.172.184.73:1337/geaga');
            }
        })
    }


    var playerRow;
    var playerColumn;

    for (var row = 0; row < ROWS; row++) {
        for (var column = 0; column < COLUMNS; column++) {
            if (gameObjects[row][column] === PLAYER) {
                playerRow = row;
                playerColumn = column;
            }

            if (gameObjects[row][column] === GEAGA) {

                geagaRow = row;
                geagaColumn = column;
            }


        }
        gameObjects[playerRow][playerColumn] = '../img/characters/feitheamh1.gif'
        gameObjects[geagaRow][geagaColumn] = '../img/geaga.png'
        console.log("geaga xy" + gameObjects[geagaRow][geagaColumn])
    }


    //Get a reference to the stage and output
    var stage = document.querySelector("#stage");
    var output = document.querySelector("#output");
    function readyLocation(loc) {
        $('#loc').html(newLocations[loc])
        
        $('.big-btn-img').fadeIn();
        playerOverLocation = true;
    }

    function clearLocation() {
        $('#loc').html("")
        $('.big-btn-img').fadeOut();
        playerOverLocation = false;

    }
    //Add a keyboard listener
    window.addEventListener("keydown", keydownHandler, false);
    let mapMenuIsVisible = false;
    let keyboardActive = true;
    //The game map
    var map =
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

    //The game objects map
    var gameObjects =
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, "P", 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    var lastPressed = ''; //what was the last key pressed?

    // leave player facing the last touched direction:

    //   var playerFacing='../img/characters/feitheamh1.gif'

    //Map code
    var EXIT = "*"; 
    var EMPTY = 0;
    var BLOCKED = 1;
    var N = 2;
    var NE = 9;
    var E = 8;
    var SE = 7;
    var S = 6;
    var SW = 5;
    var W = 4;
    var NW = 3;
    var PLAYER = "P";
    var GEAGA = "G";
    var CONTACT = "C"; //a
    var location0 = 30;
    var location1 = 31;
    var location2 = 32;
    var location3 = 33;
    var location4 = 34;
    var location5 = 35;
    //The size of each cell
    var SIZE = 10;

    //The number of rows and columns
    var ROWS = map.length;
    var COLUMNS = map[0].length;

    //Arrow key codes
    var UP = 38;
    var DOWN = 40;
    var RIGHT = 39;
    var LEFT = 37;

    //An automatic way of setting the player's start position
    var playerRow;
    var playerColumn;
    var geagaRow;
    var geagaColumn;
    var contactColumn;
    var contactRow;

    for (var row = 0; row < ROWS; row++) {
        for (var column = 0; column < COLUMNS; column++) {
            if (gameObjects[row][column] === PLAYER) {
                playerRow = row;
                playerColumn = column;
            }
            if (gameObjects[row][column] === CONTACT) {
                contactRow = row;
                contactColumn = column;
            }
            if (gameObjects[row][column] === GEAGA) {
                geagaRow = row;
                geagaColumn = column;
            }


        }
    }

    $('#north').on('touchend', function () {
        playerFacing = imreoir.avatar;

        if (playerRow > 0) {
            lastPressed = 'up';

            gameObjects[playerRow][playerColumn] = 0;

            playerRow--;
            animatePlayer();
            keydownHandler('up');

        }


    });

    $('#south').on('touchend', function () {
        !keyboardActive;
        handleFirstDown = () => {
            keyboardActive;
            $('#océ').css('visibility', 'visible');
        }
        setTimeout(handleFirstDown, 2000);
        //override bug where player moves south then turns to face south with this jq :
        $('#hero').attr('src', imreoir.avatar);

        playerFacing = imreoir.avatar;

        if (keyboardActive) {
            if (playerRow < ROWS - 1) {

                lastPressed = 'down';
                gameObjects[playerRow][playerColumn] = ROWS - 0;
                playerRow++;
                animatePlayer();
                keydownHandler('down');
            }

        }
    });
    $('#east').on('touchend', function () {
        playerFacing = imreoir.avatar;

        if (playerColumn < COLUMNS - 1) {
            gameObjects[playerRow][playerColumn] = 0;
            playerColumn++;

            lastPressed = 'right';
            animatePlayer();
        }

        keydownHandler('right');

    });
    $('#west').on('touchend', function () {

        playerFacing = imreoir.avatar;

        if (playerColumn > 0) {
            gameObjects[playerRow][playerColumn] = 0;
            playerColumn--;
            lastPressed = 'left';
            animatePlayer();
        }
        keydownHandler('left');


    });


    render();
    // jQuery.fx.off = false;

    //   render();
    // jQuery.fx.off = false;
    animatePlayer = () => {
        let cellWidth = Math.floor(document.getElementById("stage").clientWidth / 10);
        let cellHeight = Math.floor(document.getElementById("stage").clientHeight / 10);
        console.log(cellHeight)
        console.log(cellWidth)
        setTimeout(function () {
            // alert('waiting...')
            render();
        }, 210);
        if (lastPressed === 'left') {
            $('#hero').attr('src', imreoir.avatar)
            $('#hero').animate({ left: playerColumn * cellWidth }, 200, 'linear');

        } else if (lastPressed === 'right') {
            $('#hero').attr('src', imreoir.avatar)

            $('#hero').animate({ left: playerColumn * cellWidth }, 200, 'linear');
        } else if (lastPressed === 'up') {
            $('#hero').attr('src', imreoir.avatar)

            $('#hero').animate({ top: playerRow * cellHeight }, 200, 'linear');
        } else if (lastPressed === 'down') {
            $('#hero').animate({ top: playerRow * cellHeight }, 200, 'linear');
        }

        gameObjects[playerRow][playerColumn] = PLAYER;
        // gameObjects[geagaRow][geagaColumn] = GEAGA;
        // gameObjects[contactRow][contactColumn] = CONTACT
        // if (gameObjects[contactRow][contactColumn] === gameObjects[playerRow][playerColumn]) {
        //     window.location.replace('http://167.172.184.73:1337/contact');
        // }

    };

    function keydownHandler(direction) {
        if (keyboardActive) {
            switch (event.keyCode) {
                case UP:
                    if (playerRow > 0) {
                        lastPressed = 'up';

                        gameObjects[playerRow][playerColumn] = 0;

                        playerRow--;
                        animatePlayer();

                    }
                    break;

                case DOWN:
                    if (playerRow < ROWS - 1) {
                        lastPressed = 'down';
                        gameObjects[playerRow][playerColumn] = ROWS - 0;
                        playerRow++;
                        animatePlayer();
                    }
                    break;

                case LEFT:
                    if (playerColumn > 1) {
                        gameObjects[playerRow][playerColumn] = 1;
                        playerColumn--;
                        lastPressed = 'left';
                        animatePlayer();
                    }
                    break;

                case RIGHT:
                    if (playerColumn < COLUMNS - 1) {
                        gameObjects[playerRow][playerColumn] = 0;
                        playerColumn++;

                        lastPressed = 'right';
                        animatePlayer();
                    }
                    break;
            }

            //find out what kind of cell the player is on
            switch (map[playerRow][playerColumn]) {
                case EMPTY:
                    clearLocation();
                    break;
                case N:
                    loadMap(N)
                    break;

                case NE:
                    loadMap(NE)
                    break;
                case E:
                    loadMap(E)
                    break;
                case SE:
                    loadMap(SE)
                    break;
                case S:
                    loadMap(S)
                    break;
                case SW:
                    loadMap(SW)
                    break;
                case W:
                    loadMap(W)
                    break;
                case NW:
                    loadMap(NW)

                    break;
                case location0:
                    readyLocation(0)

                    break;

                case location1:
                    readyLocation(1)

                    break;
                case location2:
                    readyLocation(2)

                    break;
                case location3:
                    readyLocation(3)

                    break;
                case location4:
                    readyLocation(4)

                    break;
                case location5:
                    readyLocation(5)

                    break;
                    case EXIT:
returnToCounty();                        break
                default: break;
            }

            //Find out if the ship is touching the monster

        }
        if (!mapMenuIsVisible) {
            switch (map[playerRow][playerColumn]) {

                case BLOCKED:
                    //Undo last key press
                    //   alert('blocked!');
                    //   alert('Blocked' + lastPressed + Cookies.get('locationID'));
                    blockPath();
                    break;

                case N: travel(N); break;
                case NE: travel(NE); break;
                case E: travel(E); break;
                case SE: travel(SE); break;
                case S: travel(S); break;
                case SW: travel(SW); break;
                case W: travel(W); break;
                case NW: travel(NW); break;
                default: break;


            }
        }
    }


    goBackOneSquare = () => {
        if (lastPressed === 'up') {
            gameObjects[playerRow][playerColumn] = 0;
            playerRow++;
            gameObjects[playerRow][playerColumn] = PLAYER;
        } else if (lastPressed === 'down') {
            gameObjects[playerRow][playerColumn] = 0;
            playerRow--;
            gameObjects[playerRow][playerColumn] = PLAYER;
        } else if (lastPressed === 'left') {
            gameObjects[playerRow][playerColumn] = 0;
            playerColumn++;
            gameObjects[playerRow][playerColumn] = PLAYER;
        } else if (lastPressed === 'right') {
            gameObjects[playerRow][playerColumn] = 0;
            playerColumn--;
            gameObjects[playerRow][playerColumn] = PLAYER;
        }
    };

    blockPath = () => {
        switch (lastPressed) {
            case 'down':

                gameObjects[playerRow][playerColumn] = BLOCKED;

                playerRow--;

                //Apply the player's new updated position to the array
                gameObjects[playerRow][playerColumn] = PLAYER;

                break;

            case 'up':
                gameObjects[playerRow][playerColumn] = BLOCKED;

                playerRow++;
                gameObjects[playerRow][playerColumn] = PLAYER;

                break;

            case 'right':
                gameObjects[playerRow][playerColumn] = BLOCKED;

                playerColumn--;
                gameObjects[playerRow][playerColumn] = PLAYER;

                break;

            case 'left':
                gameObjects[playerRow][playerColumn] = BLOCKED;

                playerColumn++;
                gameObjects[playerRow][playerColumn] = PLAYER;
                break;
        }
        render()


    }
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
                cell.setAttribute("id", "cell");

                //Add the img tag to the <div id="stage"> tag
                stage.appendChild(cell);

                //Find the correct image for this map cell
                switch (map[row][column]) {


                    case EMPTY:
                        cell.src = "../img/mob-map/empty.png";
                        break;

                    case BLOCKED:
                        cell.src = "../img/mob-map/empty.png";
                        break;
                    case EMPTY:
                        cell.src = "../img/mob-map/empty.png";
                        break; case NE:
                        cell.src = "../img/mob-map/empty.png";
                        break; case E:
                        cell.src = "../img/mob-map/empty.png";
                        break; case SE:
                        cell.src = "../img/mob-map/empty.png";
                        break; case S:
                        cell.src = "../img/mob-map/empty.png";
                        break; case SW:
                        cell.src = "../img/mob-map/empty.png";
                        break; case W:
                        cell.src = "../img/mob-map/empty.png";
                        break; case NW:
                        cell.src = "../img/mob-map/empty.png";
                        break;

                        break; case N:
                        cell.src = "../img/mob-map/empty.png";
                        break;

                    case GEAGA:
                        cell.src = "../img/geaga.png";
                        break;
                    case CONTACT:
                        cell.src = "../img/contact.png";
                        break;
                    case location0:
                        cell.src = "../img/locationDetails/town.png"
                        break;
                    case location1:
                        cell.src = "../img/locationDetails/town.png"
                        break;
                    case location2:
                        cell.src = "../img/locationDetails/town.png"
                        break;
                    case location3:
                        cell.src = "../img/locationDetails/town.png"
                        break;
                    case location4:
                        cell.src = "../img/locationDetails/town.png"
                        break;
                    case location5:
                        cell.src = "../img/locationDetails/town.png"
                        break;
                        case EXIT:
                        cell.src = "../img/mob-map/empty.png";

                        break;
                }

                //Add the player from the gameObjects array
                switch (gameObjects[row][column]) {
                    case PLAYER:
                        cell.src = imreoir.avatar;
                        cell.id = 'hero';

                        break;
                    case GEAGA:
                        cell.src = "../img/geaga.png";
                        break;
                    case CONTACT:
                        cell.src = "../img/contact.png"

                }

                //Position the cell 
                cell.style.top = row * SIZE + "%";
                cell.style.left = column * SIZE + "%";


            }

        }


    }

    setTimeout(function () {
        // $('#stage').css('opacity', '0.6');

        $('#stage').fadeIn();
        $('.toolbar').fadeIn();

    }, 1300)
    //   document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        alert();
        //   document.querySelector("#myVideo > source").src = "./vid/map1.mp4"
        // What you want to do after the event
    }




 //item5 onclick toggle mode
 let overworldModeB, overworldModeA;
 overworldModeB = true; overworldModeA = false;
 toggleOverWorldMode = () => {
	 if (overworldModeB) {
		 overworldModeA = true;
		 console.log('overworldmodeB = ' + overworldModeB)
		 console.log('overworldmodeA = ' + overworldModeA)
		 $('#shield-holder').fadeIn()
		 $('#stage').addClass('shiroi')
		 $('#stageBG').addClass('shiroi')


		 overworldModeB = false;
	 } else {
		 $('#stage').removeClass('shiroi')

		 overworldModeB = true;
		 overworldModeA = false;
		 console.log('overworldmodeA = ' + overworldModeA)
		 console.log('overworldmodeB = ' + overworldModeB)
		 $('#shield-holder').fadeOut()

	 }

 }


 $('.item5').on('touchend', function () {
	 if (playerOverLocation) {
		 enterLocation(loc)
	 }
	 else {
		 toggleOverWorldMode()
	 }
 })


	let whereAbouts;
    function returnToCounty(){

        $.getJSON('mapData.json', function (county) {

            $.each(county, function (key, val) {
                console.log("val " + val.co)
                console.log("val.county " + val.county)

                if (val.co === imreoir.whereAmI) {
                    $('#output').html(val.county)
                    console.log("line 112:" + val.county);
                    map = JSON.parse(val.mapData);
                    console.log(val.mapData);

                    $('.countyMap').css('left', val.left)
                    $('.countyMap').css('top', val.top)
                    $('.countyMap').css('background-image', val.countyBG)
                    console.log('imreoir where am I?' + imreoir.whereAmI)
                    $('.countyMap').css('animation', 'zoom-to-' + imreoir.whereAmI + ' 1s forwards ease-in');


                    console.log("line 123" + val.co)
                    newLocations = val.locations;
                    console.log(newLocations)
                }
                else {
                    console.log("does" + imreoir.whereAmI + " match " + "error loading map.")
                }


            });


        })
        imreoir.whereAmI = localStorage.getItem("whereAmI");

        gameObjects[playerRow][playerColumn] = 0;
        playerRow = 5;
        playerColumn = 5;
        animatePlayer();
        render();
        setMap();     
    }
    function enterLocation(location) {
		whereAbouts = $('#loc').html()
		// alert(whereAbouts);
    
        $.getJSON('whereAbouts.json', function (whereAbouts) {

            $.each(whereAbouts, function (key, val) {

                if($('#loc').html() === val.whereAbouts){


                    // console.log("val " + val.co)
                    // console.log("val.county " + val.county)
                    $('.countyMap').css('background-image', val.background)
                    // map = val.map;
                    map =
                    [
                        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", 0, 0, 0, 0, 0, 0, 0, 0, "*"],
                        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
                    ];           
                                    render();
         
                }
            });
    
    
        })
	}

   
});