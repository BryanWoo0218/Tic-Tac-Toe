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
    var box0 = boxes[0].textContent
    var box1 = boxes[1].textContent
    var box2 = boxes[2].textContent
    var box3 = boxes[3].textContent
    var box4 = boxes[4].textContent
    var box5 = boxes[5].textContent
    var box6 = boxes[6].textContent
    var box7 = boxes[7].textContent
    var box8 = boxes[8].textContent
    var winningRow = [
      [box0,box1,box2],
      [box0,box4,box8],
      [box0,box3,box6],
      [box1,box4,box7],
      [box2,box5,box8],
      [box3,box4,box5],
      [box6,box7,box8],
      [box6,box4,box2],
    ]

    // var winningRow = [
    //   [boxes[0],boxes[1],boxes[2]],
    //   [boxes[0],boxes[4],boxes[8]],
    //   [boxes[0],boxes[3],boxes[6]],
    //   [boxes[1],boxes[4],boxes[7]],
    //   [boxes[2],boxes[5],boxes[8]],
    //   [boxes[3],boxes[4],boxes[5]],
    //   [boxes[6],boxes[7],boxes[8]],
    //   [boxes[6],boxes[4],boxes[2]],
    // ]
    //   var j =0
    //   var k = [winningRow[i][j].textContent, winningRow[i][j].textContent, winningRow[i][j].textContent]
    
    for (var i = 0; i < winningRow.length; i++) {
      if ( winningRow[i].join('') === checkId ){
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


boxes.forEach(clickMonitor) ;
restartBtn.addEventListener('click',reset)

