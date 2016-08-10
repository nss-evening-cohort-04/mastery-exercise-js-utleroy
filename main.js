var button = document.getElementById("grow")
var heightVal = document.getElementById("height")
var characterVal = document.getElementById("character")

button.addEventListener("click", userInputForTree)

/*checking that each input field has a value*/
function checkForProperFormat() {
  if(!heightVal || !characterVal) {
    alert("Both input fields need a value!");
  } else {
    treeDisplay();
  }
}

/*this function is used to get the initial user input to display in the console*/
function userInputForTree() {
  heightVal = document.getElementById("height").value;
  characterVal = document.getElementById("character").value;
  checkForProperFormat();
}

/*this is creating the empty tree object and the waterTree empty string*/
var treeObj = {};
var waterTree = "";

/*function for building the tree from the user input.*/
function buildTree(rows, width) {
  var rows = (2*heightVal) - 1;
  for (var i = 0; i < heightVal; i++) {
    var width = (i * 2) + 1;
    for (var k = 0; k < width; k++) {
      waterTree += characterVal
    }
    console.log(waterTree)
  }
}

/*function for displaying the tree after it runs through the buildTree funciton*/
function treeDisplay(rows, width) {
  var whitespace = (rows - width) / 2;
  for (var j = 0; j < whitespace; j++) {
    waterTree += " &nbsp;"
  }
  buildTree()
}

document.addEventListener("keyPress", treeDisplay);

function enterKeyPressed (keyPress) {
  if (keyPress.which === 13) {
    treeDisplay();
  }
}
