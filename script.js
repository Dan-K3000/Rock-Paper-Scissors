function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function computerPlay(){
  switch(getRndInteger(1, 4)) {
    case 1: return("Rock");
    case 2: return("Paper");
    case 3: return("Scissors");
    default: return("something went horribly wrong...");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors" ||
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection == "Scissors" && computerSelection == "Paper")
    return(`You Win! ${playerSelection} Beats ${computerSelection}`)
  else if (playerSelection == computerSelection)
    return(`Tie! You both choose ${computerSelection}`)
  else
    return(`You Lose! ${computerSelection} Beats ${playerSelection}`)
}

function game(pScore, cScore){
  const choice = prompt("Rock, Paper, or Scissors?");
  const player = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  const computer = computerPlay();
  const results = playRound(player, computer)

  switch(results.charAt(4)){
    case("W"):
      pScore++;
      break;
    case("L"):
      cScore++;
      break;
    }

  if (pScore + cScore == 5) {
    if (pScore > cScore) {winner = "Player"}
    else {winner = "Computer"}
    console.log(`Game Over! ${winner} wins! Final score=> Computer:${cScore} | Player:${pScore}`)}
  else {
    console.log(`${results}  Score=> Computer:${cScore} | Player:${pScore}`)
    game(pScore, cScore)}
}

game(0, 0);
