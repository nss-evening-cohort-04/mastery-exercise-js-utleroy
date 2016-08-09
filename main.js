var button = document.getElementById("grow")
var output = document.getElementById("output")
var waterIt = "";

button.addEventListener("click", userInputForTree)

/*this function is used to get the initial user input to display in the console*/
function userInputForTree() {
  treeObj.height = document.getElementById("height").value;
  treeObj.character = document.getElementById("character").value;
  checkForProperFormat();
}

function enterKeyPressed (keyPress) {
  if (keyPress.which === 13) {
    treeDisplay();
  }
}
document.addEventListener("keydown", enterKeyPressed);

var treeObj = {};

function treeDisplay() {
  var incrementRows = (2*treeObj.height) - 1;
  for (var i = 0; i < treeObj.height; i++) {
    var wide = (i * 2) + 1;
    var whitespace = (incrementRows - wide) / 2;
    for (var j = 0; j < whitespace; j++) {
      waterIt += " &nbsp;"
    }
    for (var k = 0; k < wide; k++) {
      waterIt += treeObj.character
    }
    waterIt += "</p>"
  }
  output.innerHTML = waterIt;
}

function checkForProperFormat() {
  if(!treeObj.height || !treeObj.character) {
    alert("Please read the instructions!!");
  } else {
    treeDisplay();
  }
}