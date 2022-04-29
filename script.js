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

