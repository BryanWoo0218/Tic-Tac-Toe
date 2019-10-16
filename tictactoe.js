//  <<<< 3X3 Tic Tac Toe game >>>>
var boxes = document.querySelectorAll('.tic-box')
var clickCounter = 0
var gameFinish = document.querySelector('.finish')
var restartBtn = document.querySelector('.restart')

var clicked = function(event){
  if (event.target.classList[1] !== 'ticked'&& gameFinish.textContent !== 'finished') {
    clickCounter++
    if(clickCounter % 2 === 1) {
      event.target.classList.add('ticked')
      // event.target.classList.add('player1')
      event.target.textContent = 'X' 
      winningChecker('X')
    } else {
      event.target.classList.add('ticked')
      // event.target.classList.add('player2')
      event.target.textContent = 'O'
      winningChecker('O')
    }
  } else {
    clickCounter+=0
  }  
}

var winningChecker =function(playerMark) {
  if(clickCounter === 9){
    finish('N')
  } else {
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
        console.log('yay')
        finish(playerMark)
      } else {} 
    }
  }
} 

var finish = function (playerMark) {
  gameFinish.textContent = 'finished'
  if (playerMark === 'X') {
    console.log('player1 won the game')
  } else if(playerMark === 'O'){
    console.log('player2 won the game')
  } else if(playerMark === 'N'){
    console.log('nowinner')
  } else {}
}

var clickMonitor = function(clicking) {
  clicking.addEventListener('click',clicked)
}

var reset = function (){
  clickCounter = 0
  gameFinish.textContent = ''
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = ''
    boxes[i].classList.remove('ticked')
  }
}

boxes.forEach(clickMonitor)
restartBtn.addEventListener('click',reset)


// var angle = 0; // Degree

// var c = document.getElementById("cumulatedView");
// var ctx = c.getContext("2d");
// // x1 = 125;
// // y1 = 125;
// // length =  100;

// // x2 = x1 + Math.cos((Math.PI / 180.0) * angle - 90) * length
// // y2 = y1 + Math.sin((Math.PI / 180.0) * angle - 90) * length

// // ctx.fillStyle = 'green';
// // ctx.fillRect(10, 10, 160, 100);

// ctx.moveTo(0, 0);
// ctx.lineTo(500, 500);
// ctx.stroke();