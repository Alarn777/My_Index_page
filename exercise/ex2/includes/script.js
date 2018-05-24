
//dynamic adding images to blank html file
// var ows = " oooo";
var ows = " o";
function  cube() {
    var newCube = document.createElement('div');
    var fatherObj = document.getElementById("addingPlace");   // father reference is saved to the variable
    fatherObj.appendChild(newCube);   // add the son as the last son of the father
    newCube.className = "cube_new" + ows;
    ows += "o";
    var opacity = 0.1 * Math.floor((Math.random() * 10) + 1);
    newCube.style.opacity = opacity.toString();
}

function startUp() {
    for(i=0;i < 4;i++){
        cube();
        }

    }
startUp();