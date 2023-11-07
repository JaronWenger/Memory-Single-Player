
const baseArray = ["X","X","X","X","O","O","O","O","F"];
var list = [".one",".two",".three",".four",".five",".six",".seven",".eight",".nine"];
var revealed = [];
var omega = shuffle(baseArray);
labelButtons(omega);
var win = [];

var checkSystem = [];
var blink = [];



function shuffle(array){
  let shuffledArray = [];
  let usedIndexes = [];

  let i = 0;
  while(i < array.length){
    let randomNumber = Math.floor(Math.random() * array.length);
    if(!usedIndexes.includes(randomNumber)){
      shuffledArray.push(array[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
  }
  console.log(shuffledArray);
  return shuffledArray;
}



function labelButtons(array){
let i = 0
while(i < array.length){

  var moment = omega[i];
  $(list[i]).text(moment);
  $(list[i]).hide();
i++
}
}






$(".btn").click(function(){

  var chosenBox = $(this).attr("id");

if (!revealed.includes("." + chosenBox)){
  $("#level-title").text("find a pair");
  $("#" + chosenBox).addClass("pressed");
setTimeout(function () {
  $("#" + chosenBox).removeClass("pressed");
}, 100);
  revealed.push("." + chosenBox);


  $("." + chosenBox).show();
  checkClick(chosenBox);
}
});




$(document).keypress(function(event){
  $("#level-title").text("click a box to start");
  revealed = [];
  omega = shuffle(baseArray);
  labelButtons(omega);
});

$("h1").click(function(){
  $("#level-title").text("click a box to start");
  revealed = [];
  omega = shuffle(baseArray);
  labelButtons(omega);
});









function checkClick(value){
  checkSystem.push(list.indexOf("." + value));
  blink.push(value);

  var uno = checkSystem[0];
  var dos = checkSystem[1];




  if (omega[uno] === "F"){
    gameOver();
  }
  if (omega[dos] === "F"){
    gameOver();
  }





  if (checkSystem.length === 2){

    if (omega[uno] === omega[dos]){

    checkSystem = [];
    blink = [];
    win.push("1","1");
    if (win.length === 8){
      $("#level-title").text("you win!");
    }

  }else{
    setTimeout(function(){
    $("." + value).hide();
    $(list[uno]).hide();

    revealed.pop(uno);
    revealed.pop(dos);

    $("#" + value).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#" + blink[0]).fadeIn(100).fadeOut(100).fadeIn(100);
    blink = [];
  },500);

    checkSystem = [];

  }
  }

}




function gameOver(){
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  $("#level-title").text("game over, click here to restart");

  checkSystem = [];
  blink = [];
  win = [];
  revealed.push(".one",".two",".three",".four",".five",".six",".seven",".eight",".nine");


}
