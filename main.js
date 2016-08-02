var button = document.getElementById("grow")
var treeObj = {};

button.addEventListener("click", userInputForTree)

/*this function is used to get the initial user input to display in the console*/
function userInputForTree() {
  treeObj.height = document.getElementById("height").value;
  treeObj.character = document.getElementById("character").value;
  var showUserInputInConsole = treeObj.height + treeObj.character
  console.log("user input:", showUserInputInConsole)
  treeDisplay()
}

function treeDisplay() {
  var waterIt = "";
  var incrementRows = (2*treeObj.height) - 1;
  for (var i = 0; i < treeObj.height; i++) {
    var wide = (i * 2) + 1;
    // waterIt;
    console.log(wide)
  }
}