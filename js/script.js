let currentplayer = "X";
let turnstaken = 0;
let gameover = false;



function performLogic(buttonid,tilenumber){
  $(buttonid).hide();
  $(tilenumber).html(currentplayer);
  switchPlayer();
  winner(tilenumber,"","");
  updateturn();
}

function switchPlayer(){
  if (currentplayer === "X") {
    currentplayer = "O";
  } else {
    currentplayer = "X";
  }
}

function winner(tid1,tid2,tid3){
  //console.log($(tid1).html());
  if($(tid1).html() === currentplayer && $(tid2).html() === currentplayer && $(tid3).html() === currentplayer){
    return true;
  } else{
    return false;
  }
}

function verifyvertical(){
  winner("#tile1", "#tile4", "#tile7");
  winner("#tile2", "#tile5", "#tile8");
  winner("#tile3", "#tile6", "#tile9");
}

function verifyhorizontal(){
  winner("#tile1", "#tile2", "#tile3");
  winner("#tile4", "#tile5", "#tile6");
  winner("#tile7", "#tile8", "#tile9");
}

function verifydiagonal(){
  winner("#tile1", "#tile5", "#tile9");
  winner("#tile3", "#tile5", "#tile7");
}

function updateturn(){
  turnstaken++;
  console.log(turnstaken);
  if(turnstaken === 9){
    gameover = true;
    $("h1").html("It's a draw!");
  }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

