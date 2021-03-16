let currentplayer = "X";
let turnstaken = 0;
let gameover = false;

function performLogic(buttonid, tilenumber) {
  if (gameover == false) {
    $(buttonid).hide();
    $(tilenumber).html(currentplayer);
    verifyvertical();
    verifyhorizontal();
    verifydiagonal();
    switchPlayer();
    updateturn();
  }
}

function switchPlayer() {
  if (currentplayer === "X") {
    currentplayer = "O";
  } else {
    currentplayer = "X";
  }
}

function winner(tid1, tid2, tid3) {
  if (
    $(tid1).html() === currentplayer &&
    $(tid2).html() === currentplayer &&
    $(tid3).html() === currentplayer
  ) {
    return true;
  } else {
    return false;
  }
}

function verifyvertical() {
  if (
    winner("#tile1", "#tile4", "#tile7") ||
    winner("#tile2", "#tile5", "#tile8") ||
    winner("#tile3", "#tile6", "#tile9")
  ) {
    gameover = true;
    $("h1").html(currentplayer + " Wins!");
  }
}

function verifyhorizontal() {
  if (
    winner("#tile1", "#tile2", "#tile3") ||
    winner("#tile4", "#tile5", "#tile6") ||
    winner("#tile7", "#tile8", "#tile9")
  ) {
    gameover = true;
    $("h1").html(currentplayer + " Wins!");
  }
}

function verifydiagonal() {
  if (
    winner("#tile1", "#tile5", "#tile9") ||
    winner("#tile3", "#tile5", "#tile7")
  ) {
    gameover = true;
    $("h1").html(currentplayer + " Wins!");
  }
}
function updateturn() {
  turnstaken++;
  console.log(turnstaken);
  if (turnstaken === 9) {
    gameover = true;
    $("h1").html("It's a draw!");
  }
}

$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});

$("#reset").click(function() {
  currentplayer = "X";
  turnstaken = 0;
  gameover = false;
  $("h1").html("Tic Tac Toe");

  $("#tile9").html('<button id="button9">Tile 9</button>');
  $("#button9").click(function() {
    console.log("hello9");
    performLogic("#button9", "#tile9");
  });

  $("#tile8").html('<button id="button8">Tile 8</button>');
  $("#button8").click(function() {
    console.log("hello8");
    performLogic("#button8", "#tile8");
  });

  $("#tile7").html('<button id="button7">Tile 7</button>');
  $("#button7").click(function() {
    console.log("hello7");
    performLogic("#button7", "#tile7");
  });

  $("#tile6").html('<button id="button6">Tile 6</button>');
  $("#button6").click(function() {
    console.log("hello6");
    performLogic("#button6", "#tile6");
  });

  $("#tile5").html('<button id="button5">Tile 5</button>');
  $("#button5").click(function() {
    console.log("hello5");
    performLogic("#button5", "#tile5");
  });

  $("#tile4").html('<button id="button4">Tile 4</button>');
  $("#button4").click(function() {
    console.log("hello4");
    performLogic("#button4", "#tile4");
  });

  $("#tile3").html('<button id="button3">Tile 3</button>');
  $("#button3").click(function() {
    console.log("hello3");
    performLogic("#button3", "#tile3");
  });

  $("#tile2").html('<button id="button2">Tile 2</button>');
  $("#button2").click(function() {
    console.log("hello2");
    performLogic("#button2", "#tile2");
  });

  $("#tile1").html('<button id="button1">Tile 1</button>');
  $("#button1").click(function() {
    console.log("hello1");
    performLogic("#button1", "#tile1");
  });
});
