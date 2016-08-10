/*variables for input fields and the grow tree button*/

var button = document.getElementById("grow")
var heightVal = document.getElementById("height")
var characterVal = document.getElementById("character")

/*event lsitener to detect when the grow tree button is pushed*/
button.addEventListener("click", userInputForTree)

/*this function is used to get the initial user input.*/
function userInputForTree() {
  var rows = heightVal.value;
  var width = characterVal.value;
  checkForProperFormat(rows, width);
}

/*checking that each input field has a value*/
function checkForProperFormat(rows, width) {
  if(!rows || !width) {
    alert("Both input fields need a value!");
  } else {
    buildTree(rows, width);
  }
}

/*function for building the tree from the user input. Then calls the treeDisplay function*/
function buildTree(rows, width) {
var treeObj = {
  char: width,
  tall: rows
};
  treeDisplay(treeObj);
}

/*function for displaying the tree after it runs through the buildTree function*/
function treeDisplay(tree) {
  var h = tree.tall;
  for (var i = 0; i < tree.tall; i++) {
    var whitespace = (h - 1) - i;
    var num = 2 * i + 1;

    console.log(" ".repeat(whitespace) + tree.char.repeat(num));
  }
}

/*event listener for the function enterKeyPressed()*/
document.addEventListener("keyPress", treeDisplay);

/*function to detect keypress when the enter||return key is pressed. Then executes the function treeDisplay()*/

function enterKeyPressed (keyPress) {
  if (keyPress.which === 13) {
    treeDisplay();
  }
}
