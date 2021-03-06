function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function makeTitleCase(word){
  return(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

function computerPlay(){
  switch(getRndInteger(1, 4)) {
    case 1: return("rock");
    case 2: return("paper");
    case 3: return("scissors");
    default: return("something went horribly wrong...");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper")
    return(`You win ${playerSelection} beats ${computerSelection}!`)
  else if (playerSelection == computerSelection)
    return(`Tie you both choose ${computerSelection}!`)

  else if (playerSelection == "")
    return
  else
    return(`You lose ${computerSelection} beats ${playerSelection}!`)
}

let pScore = 0;
let cScore = 0;
let win = false;

const divs = document.querySelectorAll('div');

function play(e) {
  const choice = this.id;
  e.stopPropagation();
  const result = playRound(choice, computerPlay());
  const targetScore = 5;
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector('.computerScore');
  const output = document.querySelector('.text');

  if(win == false){

    switch(result.charAt(4)){
      case("w"):
        pScore++
        playerScore.textContent = pScore;
        break;
      case("l"):
        cScore++;
        computerScore.textContent = cScore;
    }

    output.textContent = result

    if (pScore == targetScore || cScore == targetScore) {
      if (pScore > cScore) {winner = "Player"}
      else {winner = "Computer"}
      output.textContent = `Game Over! ${winner} wins!`
      win = true;
    }
  }
};

divs.forEach(div => div.addEventListener('click', play));
