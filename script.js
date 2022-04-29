function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function makeTitleCase(word){
  return(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
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
  const rawAnswer = prompt("Rock, Paper, or Scissors?");
  const player = makeTitleCase(rawAnswer);
  const computer = computerPlay();
  const result = playRound(player, computer)
  const targetScore = 3;

  switch(result.charAt(4)){
    case("W"):
      pScore++;
      break;
    case("L"):
      cScore++;
      break;
    }

  if (pScore == targetScore || cScore == targetScore) {
    if (pScore > cScore) {winner = "Player"}
    else {winner = "Computer"}
    console.log(result)
    console.log(`Game Over! ${winner} wins! Final score=> Computer:${cScore} | Player:${pScore}`)}
  else {
    console.log(`${result}  Score=> Computer:${cScore} | Player:${pScore}`)
    game(pScore, cScore)}
}

game(0, 0);
