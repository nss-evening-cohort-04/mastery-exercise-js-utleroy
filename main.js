var userNum = document.getElementById("number");
var userChar = document.getElementById("character");
var button = document.getElementById("grow")

button.addEventListener("click", growTree)


var obj = {
    number: userNum,
    character: userChar
};



// var treeSize = {
// tall: userNum = "",
// char: userChar = ""
// }

// console.log(treeSize)

function growTree() {
  var display = userChar.value
  console.log(display)
}