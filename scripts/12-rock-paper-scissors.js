let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId; 
function autoPlay(){

  if (!isAutoPlaying){
    intervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playgame(playerMove);
  
    }, 1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}

function playgame(playermove){
const computerMove = pickComputerMove();

let result = '';

if(playermove === 'scissors'){
  if(computerMove === 'rock'){
  result='You Lose.';
  }
  else if(computerMove === 'paper'){
  result='You Win.'
  }
  else if(computerMove === 'scissors'){
  result = 'Tie.'
  }
} 

else if (playermove==='paper'){
  if(computerMove === 'rock'){
  result='You Win.';
  }
  else if(computerMove === 'paper'){
  result='Tie.'
  }
  else if(computerMove === 'scissors'){
  result = 'You Lose.'
  }
}

else if (playermove==='rock'){
  if(computerMove === 'rock'){
    result='Tie.';
  }
  else if(computerMove === 'paper'){
    result='You Lose.'
  }
  else if(computerMove === 'scissors'){
    result = 'You Win.'
  }
}

if (result === 'You Win.') {
  score.wins++;
}

else if (result === 'You Lose.'){
  score.losses++
}

else if (result === 'Tie.'){
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();


document.querySelector('.js-result').innerHTML = result

document.querySelector('.js-moves').innerHTML =       `Your Move-->
<img src="images/${playermove}.png" class="move-icons">
<img src="images/${computerMove}.png" 
class="move-icons">
<--Computers Move`
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

}

function pickComputerMove() {
const randomnum = Math.random();

let computerMove = '';

if(randomnum>=0 && randomnum<1/3) {
computerMove = 'rock';
}
else if(randomnum >= 1/3 && randomnum<2/3){
computerMove = 'paper';
}
else if(randomnum >= 2/3 && randomnum < 1){
computerMove = 'scissors';
}

return computerMove;
}
