var userNum = document.getElementById("height");
var userChar = document.getElementById("character");
var button = document.getElementById("grow")
// var treeSize = {
//     number: userNum,
//     character: userChar
// };
button.addEventListener("click", growTree)





function growTree() {
  var display = userNum.value + userChar.value
  console.log(display)
}