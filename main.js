var button = document.getElementById("grow")
var output = document.getElementById("output")


button.addEventListener("click", userInputForTree)

document.addEventListener("keydown", treeDisplay);

function checkForProperFormat() {
  if(!treeObj.height || !treeObj.character) {
    alert("Both input fields need a value!");
  } else {
    treeDisplay();
  }
}
/*this function is used to get the initial user input to display in the console*/
function userInputForTree() {
  treeObj.height = document.getElementById("height").value;
  treeObj.character = document.getElementById("character").value;
  checkForProperFormat();
}


var treeObj = {};

function treeDisplay() {
  var waterIt = "";
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

function enterKeyPressed (keyPress) {
  if (keyPress.which === 13) {
    treeDisplay();
  }
}
