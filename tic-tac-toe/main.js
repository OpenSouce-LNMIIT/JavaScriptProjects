//hide utility functions
function hide(elem) {
  elem.hide();
}

//show utility functions
function show(elem) {
  elem.fadeIn(500);
}

//initialize data-blocked attribute for all cells
function initBlockStatus(){
  for(var i=1;i<=9;i++) {
      $("#ttt"+i).data("data-blocked", false);
  }
}

//shuffle players
function shufflePlayers(activeTurn, inactiveTurn, player1, player2) {
  /*console.log("player1: "+player1.text());
  console.log("player2: "+player2.text());
  console.log("activeTurn: "+activeTurn.text());
  console.log("inactiveTurn: "+inactiveTurn.text());*/
  if (activeTurn == player1) {
    activeTurn = player2;
    inactiveTurn = player1;
  } else {
    activeTurn = player1;
    inactiveTurn = player2;
  }
}

//display whose turn
function updateTurnDisplay(pactive, pinactive) {
  //console.log("TurnDisplay:: " +pactive.text() + " | " + pinactive.text());
  pactive.addClass("active");
  pinactive.removeClass("active");
}

//colors cells to visually identify win
function colorCells(o1,o2,o3){
  o1.addClass('win');
  o2.addClass('win');
  o3.addClass('win');  
}

//decide game mode - hard/easy
function decideGameMode(){
  //console.log("Inside decideGameMode");
  var randomNo = Math.floor(Math.random()*2),
      gameMode="";
  if (randomNo === 0) {
    gameMode = "easy";
  } else if(randomNo === 1) {
    gameMode = "hard";
  } else {
    decideGameMode();
  }
  //console.log("gameMode: " +gameMode);
  return gameMode;
}

//AI player's random cell
function getRandomCell(){
   var randomCellID="", randomAI="", isBlocked="";
  do {
    randomAI = Math.floor(Math.random()*9);
  randomAI++;
  randomCellID = "ttt" + randomAI;
  //console.log("getRandomCell: " +randomCellID);
    isBlocked = isCellBlocked(randomCellID);
  if (isBlocked===true){
    //console.log("Blocked: " +randomCellID);
  }
  } while (isBlocked===true);
  
  if (isBlocked===false){
    //console.log("Not blocked: " +randomCellID);
    return randomCellID;
  }
}

//check if game is over and return winner symbol
function gameOver() {
  var returnSymbol = "";
  var c1 = $("#ttt1").text(),
      c2 = $("#ttt2").text(),
      c3 = $("#ttt3").text(),
      c4 = $("#ttt4").text(),
      c5 = $("#ttt5").text(),
      c6 = $("#ttt6").text(),
      c7 = $("#ttt7").text(),
      c8 = $("#ttt8").text(),
      c9 = $("#ttt9").text();
  //console.log("Gameover check");
  
  //check all rows
  if (c1===c2 && c2===c3 && c1 !== "") {
    //console.log("1");
    returnSymbol = $("#ttt1").text();
    colorCells($("#ttt1"),$("#ttt2"),$("#ttt3"));
  } else if (c4===c5 && c5===c6 && c4 !== "") {
    //console.log("2");
    returnSymbol = $("#ttt4").text();
    colorCells($("#ttt4"),$("#ttt5"),$("#ttt6"));
  } else if (c7===c8 && c8===c9 && c7 !== "") {
    //console.log("3");
    colorCells($("#ttt7"),$("#ttt8"),$("#ttt9"));
    returnSymbol = $("#ttt7").text();
  }
  
  //check all columns
  if (c1===c4 && c4===c7 && c1 !== "") {
    //console.log("4");
    colorCells($("#ttt4"),$("#ttt7"),$("#ttt1"));
    returnSymbol = $("#ttt1").text();
  } else if (c2===c5 && c5===c8 && c2 !== "") {
    //console.log("5");
    colorCells($("#ttt2"),$("#ttt5"),$("#ttt8"));
    returnSymbol = $("#ttt2").text();
  } else if (c3===c6 && c6===c9 && c9 !== "") {
    //console.log("6");
    colorCells($("#ttt3"),$("#ttt6"),$("#ttt9"));
    returnSymbol = $("#ttt3").text();
  } 
  
  //check diagonals
  if (c1===c5 && c5===c9 && c1 !== "") {    
    //console.log("7");
    colorCells($("#ttt1"),$("#ttt5"),$("#ttt9"));
    returnSymbol = $("#ttt1").text();
  } else if (c3===c5 && c5===c7 && c3 !== "") {
    //console.log("8");
    colorCells($("#ttt3"),$("#ttt5"),$("#ttt7"));
    returnSymbol = $("#ttt3").text();
  }
  
  //Game is not over, check if draw or playable cells
  if (returnSymbol==="") {
    //console.log("inside for");
    var i=1;
    for(i=1;i<=9;i++) 
    {
      //console.log("i:" + i);
      //console.log($(("#ttt")+i).text());
      if ((($(("#ttt")+i)).text() == "X") || (($(("#ttt") + i)).text() == "O"))
        { 
          //console.log("inside if of for");
          continue; 
        }
      else {
        //console.log("return C");
        returnSymbol = "C";
        break;
      //  return returnSymbol;
      }
    }
    if (returnSymbol==="") {
    //console.log("return D");
      returnSymbol = "D";
    }
  }
  //console.log("returnSymbol: " + returnSymbol);
  return returnSymbol;
}

//Check if cell is already used
function isCellBlocked(whichCellID) {
  var blockTest;
  switch (whichCellID) {
    case "ttt1":
      blockTest = $("#ttt1").data("data-blocked");
      break;
    case "ttt2":
      blockTest = $("#ttt2").data("data-blocked");
      break;
    case "ttt3":
      blockTest = $("#ttt3").data("data-blocked");
      break;
    case "ttt4":
      blockTest = $("#ttt4").data("data-blocked");
      break;
    case "ttt5":
      blockTest = $("#ttt5").data("data-blocked");
      break;
    case "ttt6":
      blockTest = $("#ttt6").data("data-blocked");
      break;
    case "ttt7":
      blockTest = $("#ttt7").data("data-blocked");
      break;
    case "ttt8":
      blockTest = $("#ttt8").data("data-blocked");
      break;
    case "ttt9":
      blockTest = $("#ttt9").data("data-blocked");
      break;
  }
  //console.log("blockTest: " +blockTest);
  return blockTest;
}

//Block cell for reuse until game resets
function blockCell(whichCellID) {
  switch (whichCellID) {
    case "ttt1":
      $("#ttt1").data("data-blocked", true);
      break;
    case "ttt2":
      $("#ttt2").data("data-blocked", true);
      break;
    case "ttt3":
      $("#ttt3").data("data-blocked", true);
      break;
    case "ttt4":
      $("#ttt4").data("data-blocked", true);
      break;
    case "ttt5":
      $("#ttt5").data("data-blocked", true);
      break;
    case "ttt6":
      $("#ttt6").data("data-blocked", true);
      break;
    case "ttt7":
      $("#ttt7").data("data-blocked", true);
      break;
    case "ttt8":
      $("#ttt8").data("data-blocked", true);
      break;
    case "ttt9":
      $("#ttt9").data("data-blocked", true);
      break;
  }
  //console.log("cell blocked: " +whichCellID);
}

$(document).ready(function() {
  var playerCount = 0,
    activeTurn = "",
    inactiveTurn = "",
    player1 = "",
    player2 = "",
    playerSymbol="",
    randomAI=0,
    p1Score=0,
    p2Score=0,
    turnCount=0,
    p1Sym = "",
    p2Sym = "",
    boardArr = ["","","","","","","","",""],
    whichCell = "",
    whichCellID = "",
    gameStatus = "",
    winnerName = "",
    gameBoardFlag = false,
    cell1 = false,
    cell2 = false,
    cell3 = false,
    cell4 = false,
    cell5 = false,
    cell6 = false,
    cell7 = false,
    cell8 = false,
    cell9 = false,
    AITurn = false,
    p1Turn = $("#p1Turn"),
    p2Turn = $("#p2Turn"),
    info = $("#info"),
    start = $("#start"),
    chooseSymbol = $("#chooseSymbol"),
    gameBoard = $("#board"),
    scoreBox = $("#scoreBox"),
    p1ScoreSpan = $("#p1Score"),
    p2ScoreSpan = $("#p2Score"),
    square = $(".square"),
    turnDiv = $("#turns"),
    startGameButton = $("#startGameButton"),
    restartBtn = $("#restartBtn"),
    playAgainBtn = $("#playAgainBtn"),
    gamefinalStatus = $("#gamefinalStatus"),
    p1 = $("#p1"),
    p2 = $("#p2"),
    symX = $("#x"),
    symO = $("#o");

  //choose 1-player game
  p1.click(function(){
    playerCount=1;
    p2Turn.text("AI");
    player1 = "human";
    player2 = "ai";
    hide(start);
    show(chooseSymbol);
  });

  //choose 2-players game
  p2.click(function() {
    playerCount = 2;
    p1Sym = "X";
    p2Sym = "O";
    player1 = "human";
    player2 = "human";
    activeTurn = p1Turn;
    inactiveTurn = p2Turn;
    p2Turn.text("Player 2");
    hide(start);
    show(startGameButton);
  });

  //choose "X"
  symX.click(function() {
    p1Sym = symX.text();
    p2Sym = "O";
    activeTurn = p1Turn;
    inactiveTurn = p2Turn;
    hide(chooseSymbol);
    show(startGameButton);
  });

  //choose "O"
  symO.click(function() {
    p1Sym = symO.text();
    p2Sym = "X";
    activeTurn = p2Turn;
    inactiveTurn = p1Turn;
    hide(chooseSymbol);
    show(startGameButton);
  });
  
  //reset game
  function restart() {
    activeTurn = "";
    inactiveTurn = "";
    whichCell = "";
    whichCellID = "";
    gameStatus = "";
    winnerName = "";
    turnCount = 0;
    gameBoardFlag = false;
    boardArr = [];
    cell1 = false;
    cell2 = false;
    cell3 = false;
    cell4 = false;
    cell5 = false;
    cell6 = false;
    cell7 = false;
    cell8 = false;
    cell9 = false;

    square.removeClass("win");
    hide(gamefinalStatus);
    show(p1Turn);
    show(p2Turn);
   
    for(var i=1;i<=9;i++) {
      $("#ttt"+i).text("");
      $("#ttt"+i).data("data-blocked", false);
    }
  }

  //restarts the game, new players
  restartBtn.click(function() {
    restart();
    playerCount = 0;
    player1 = "";
    player2 = "";
    p1Sym = "";
    p2Sym = "";
    playerSymbol = "";
    p1Score = 0;
    p2Score = 0;
    p1ScoreSpan.text(p1Score);
    p2ScoreSpan.text(p2Score);
    hide(gameBoard);
    hide(turnDiv);
    hide(playAgainBtn);
    hide(restartBtn);
    hide(scoreBox);
    show(start);
  });

  //play again, same players
  playAgainBtn.click(function() {
    restart();
    activeTurn = p1Turn;
    inactiveTurn = p2Turn;
    hide(playAgainBtn);
    hide(restartBtn);
    updateTurnDisplay(p1Turn, p2Turn);
  });
  
  //starts the game
  startGameButton.click(function() {
    gameBoardFlag = true;
    //boardArr.fill("_");
    //alert(boardArr);
    hide(startGameButton);
    show(gameBoard);
    show(turnDiv);
    initBlockStatus();
    updateTurnDisplay(activeTurn, inactiveTurn);
    
    if(playerCount===1) {
      //console.log("activeTurn: " +activeTurn.text());
      if(activeTurn === p1Turn) {
        //Human plays first, wait for click event; Do nothing
      } else if(activeTurn === p2Turn) {
        //AI plays first; randomly decide gamemodx=easy or hard
        var gameMode = decideGameMode();
        //for testing
        gameMode = "easy";
        if(gameMode === "easy") {
          //use random numbers
          randomAI = Math.floor(Math.random()*9);
          //console.log("randomAI: " +randomAI);
          whichCellID = "ttt" + randomAI;
          AITurn = false;
          updateBoard(activeTurn, whichCellID, p2Sym);
        } else if(gameMode === "hard") {
          //use minimax algorithm
        }
      }
    }
  });
  
  //click of a cell (player's turn)
  square.click(function() {
    if (gameStatus === true) {
      gamefinalStatus.text("GAME OVER!");
    } else {
      whichCellID = $(this).attr("id");
      if (!isCellBlocked(whichCellID)) {
        if(playerCount==1) {
          AITurn = true;
          updateBoard(activeTurn, whichCellID, p1Sym);
        } else if (playerCount==2) {
          console.log("square click");
          console.log("activeTurn: " +activeTurn.text());
          console.log("p1Turn: " +p1Turn.text());
          if(activeTurn == p1Turn) {
            playerSymbol = "X";  
          } else {
            playerSymbol = "O";
          }
          updateBoard(activeTurn, whichCellID, playerSymbol);
          if(activeTurn == p1Turn) {
            activeTurn = p2Turn;
            inactiveTurn = p1Turn;
          } else {
            activeTurn = p1Turn;
            inactiveTurn = p2Turn;
          }
          
          
        }
      } else {
        alert("You can't play that. Choose another cell.");
      }
    }
  });

  //updates the game board
  function updateBoard(whoseTurn, whichCellID, playerSymbol) {
    turnCount++;
    whichCell = $("#" + whichCellID);
    //console.log("updateBoard: " +whoseTurn.text()+ " | Symbol: " +playerSymbol+ "| Cell: "+whichCellID);
    whichCell.text(playerSymbol);
    //alert(whichCellID);

    //block cell for further use unless reset
    blockCell(whichCellID);

    //update turn notifications
    updateTurnDisplay(inactiveTurn, whoseTurn);

    //evaluate game
    winnerName = gameOver();
    if (winnerName == p1Sym) {
      p1Score++;
      p1ScoreSpan.text(p1Score);
      gamefinalStatus.text('"' +p1Sym+ "\" WINS!");
      gameStatus = true;
      hide(p1Turn);
      hide(p2Turn);
      show(restartBtn);
      show(playAgainBtn);
      show(gamefinalStatus);
      show(scoreBox);
    } else if (winnerName == p2Sym) {
      p2Score++;
      p2ScoreSpan.text(p2Score);
      gamefinalStatus.text('"' +p2Sym+ "\" WINS!");
      gameStatus = true;
      hide(p1Turn);
      hide(p2Turn);
      show(restartBtn);
      show(playAgainBtn);
      show(gamefinalStatus);
      show(scoreBox);
    } else if (winnerName == "D") {
      gamefinalStatus.text("IT'S A DRAW!");
      gameStatus = true;
      hide(p1Turn);
      hide(p2Turn);
      show(restartBtn);
      show(playAgainBtn);
      show(gamefinalStatus);
      show(scoreBox);
    } else if (winnerName == "C") {
      //console.log("activeTurn: " + activeTurn.text());
      //console.log("inactiveTurn: " + inactiveTurn.text());
      gameStatus = false;
      
      //shuffle players
      /*if (playerCount==2) {
        shufflePlayers(activeTurn, inactiveTurn, p1Turn, p2Turn); 
      }*/
      
      //AI Turn
      if(playerCount == 1) {
        if (AITurn) { 
          AITurn = false;
          whichCellID = getRandomCell();
          //console.log("Cell returned: "+whichCellID);
          updateTurnDisplay(activeTurn, inactiveTurn);
          updateBoard(inactiveTurn, whichCellID, p2Sym);
        }
      }
    }
  }
});
