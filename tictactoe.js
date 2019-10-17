//  <<<< 3X3 Tic Tac Toe game >>>>
var boxes = document.querySelectorAll('.tic-box')
var clickCounter = 0
var gameInfo = document.querySelector('.info-display')
var restartBtn = document.querySelector('.restart')
var wonIndicate = document.querySelector('.strike')
var wonIndicateW = document.querySelector('.strikeW')
var winnerInfo = document.querySelector('.winner')
var gameBoard = document.querySelector('main')
var player1Turn = document.querySelector('.player1')
var player2Turn = document.querySelector('.player2')


var clicked = function(event){
  if (event.target.classList[1] !== 'ticked'&& gameInfo.textContent !== 'Winner!') {
    clickCounter++
    if(clickCounter % 2 === 1) {
      event.target.classList.add('ticked')
      event.target.textContent = 'X' 
      gameInfo.textContent = 'Play2, your turn'
      player2Turn.classList.add('active')
      player1Turn.classList.remove('active')
      winningChecker('X')
    } else {
      event.target.classList.add('ticked')
      event.target.textContent = 'O'
      gameInfo.textContent = 'Play1, your turn'
      player1Turn.classList.add('active')
      player2Turn.classList.remove('active')
      winningChecker('O')
    }
  } else {
    clickCounter+=0
  }  
}

var winningChecker =function(playerMark) {
  var checkId = `${playerMark}${playerMark}${playerMark}`
  var winningCombination = [
    [boxes[0],boxes[1],boxes[2]],    // boxLocation --> 0 1 2 //
    [boxes[0],boxes[4],boxes[8]],    //                 3 4 5 //
    [boxes[0],boxes[3],boxes[6]],    //                 6 7 8 //
    [boxes[1],boxes[4],boxes[7]],
    [boxes[2],boxes[5],boxes[8]],
    [boxes[3],boxes[4],boxes[5]],
    [boxes[6],boxes[7],boxes[8]],
    [boxes[6],boxes[4],boxes[2]],
  ]

  for (var i = 0; i < winningCombination.length; i++) {
    var winningLine = [winningCombination[i][0].textContent, winningCombination[i][1].textContent, winningCombination[i][2].textContent]
    if ( winningLine.join('') === checkId ){
      if(i === 0 || i === 5 ||i === 6) {
      wonIndicateW.classList.add(`strikeW-${i}`)
      } else {
      wonIndicate.classList.add(`strike-${i}`)
      } 
      finish(playerMark)
      i = 8
    } else if(clickCounter === 9){
      finish('N')
    } else {}
  }
} 

var finish = function (playerMark) {
  if (playerMark === 'X') {
    winnerInfo.textContent = 'Player1 is'
    gameInfo.textContent = 'Winner!'
    player1Turn.classList.add('active')
    player2Turn.classList.remove('active')
  } else if(playerMark === 'O'){
    winnerInfo.textContent = 'Player2 is'
    gameInfo.textContent = 'Winner!'
    player1Turn.classList.remove('active')
    player2Turn.classList.add('active')
  } else if(playerMark === 'N'){
    winnerInfo.textContent = 'DRAW!'
    gameInfo.textContent = "Let's Play Again!"
    player1Turn.classList.remove('active')
    player2Turn.classList.remove('active')
  } else {}
}

var clickMonitor = function(clicking) {
  clicking.addEventListener('click',clicked)
}

var reset = function (){
  clickCounter = 0
  gameInfo.textContent = 'Waiting...For Start'
  winnerInfo.textContent = ''
  player1Turn.classList.remove('active')
  player2Turn.classList.remove('active')
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = ''
    boxes[i].classList.remove('ticked')
    wonIndicate.classList.remove(`strike-${i}`)
    wonIndicateW.classList.remove(`strikeW-${i}`)
  }
}

var playStart = function() {
  if(clickCounter === 0) {
    gameInfo.textContent = 'Play1 starts the game'
  }
}
boxes.forEach(clickMonitor)
restartBtn.addEventListener('click',reset)
gameBoard.addEventListener('mousemove', playStart)