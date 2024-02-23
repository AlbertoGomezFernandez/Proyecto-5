import { Home } from './public/components/Home/Home';
import { Bingo } from './public/pages/Bingo/Bingo';
import { PaperRockScissors } from './public/pages/PaperRockScissors/PaperRockScissors';
import { Three } from './public/pages/ThreeInARow/Three';
import './style.css';


const divApp = document.querySelector("#app");
divApp.className = "app";

Home({ parentNode: divApp });
PaperRockScissors({ parentNode: divApp });
Bingo({ parentNode: divApp });
Three({ parentNode: divApp });

const divHome = document.querySelector(".home");
const divPaper = document.querySelector(".paper");
const divBingo = document.querySelector(".bingo");
const divThree = document.querySelector(".three");
const paperButton = document.querySelector(".Paper-Rock-Scissors");
const bingoButton = document.querySelector(".Bingo");
const threeButton = document.querySelector(".Three-In-A-Row");

const exitButton = document.createElement("button");
exitButton.className = "exit button";
exitButton.innerText = "Exit";
if (!divHome.className.includes("hidden")) {
  exitButton.classList.add("hidden");
}

divApp.appendChild(exitButton);

paperButton.addEventListener("click", (e) => {
  divHome.classList.add("hidden");
  divPaper.classList.remove("hidden");
  exitButton.classList.toggle("hidden");
});

bingoButton.addEventListener("click", (e) => {
  divHome.classList.add("hidden");
  divBingo.classList.remove("hidden");
  divApp.classList.add("bingoGame");
  exitButton.classList.toggle("hidden");
});

threeButton.addEventListener("click", () => {
  divHome.classList.add("hidden");
  divThree.classList.remove("hidden");
  exitButton.classList.toggle("hidden");
});

exitButton.addEventListener("click", () => {
  divHome.classList.toggle("hidden");
  divPaper.classList.add("hidden");
  divBingo.classList.add("hidden");
  divThree.classList.add("hidden");
  divApp.classList.remove("bingoGame");
  exitButton.classList.add("hidden");
});

// Paper, Rock, Scissors

let paperIdInterval;

const emojisButtons = document.querySelector(".emojis");
const prsText = document.querySelector(".middleText");
const pcChoice = document.querySelector(".pcChoice");
const userScore = document.querySelector(".userScore");
const pcScore = document.querySelector(".pcScore");

const savedUserScore = localStorage.getItem('userScore');
const savedPcScore = localStorage.getItem('pcScore');



userScore.innerText = savedUserScore;
pcScore.innerText = savedPcScore;

const pcSelection = () => {
  const choices = ["🖐️", "✊", "✌️"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomPlay = choices[randomIndex];
  return pcChoice.innerText = randomPlay;
};

const updateScore = (score) => {
  score++;
  return parseInt(score);
};

const resetPaper = () => {
  prsText.innerText = "Choose wisely: paper, rock, scissors";
  pcChoice.innerText = "";
  pcChoice.style = "";
  clearInterval(paperIdInterval);
};

let isChosen = false;

const handleEmojiClick = (e) => {

  if (!isChosen) {
    const userChoice = e.target.innerText;
    pcSelection();
    pcChoice.style.border = "2px" + " " + "solid" + " " + '#' + Math.floor(Math.random() * 12345678).toString(16);
    if (userChoice === pcChoice.innerText) {
      prsText.innerText = `Tie`;
    }
    else if (userChoice !== pcChoice.innerText && userChoice === "🖐️" && pcChoice.innerText === "✊") {
      prsText.innerText = `User wins!!!`;
      userScore.innerText = updateScore(userScore.innerText);
    }
    else if (userChoice !== pcChoice.innerText && userChoice === "✊" && pcChoice.innerText === "✌️") {
      prsText.innerText = `User wins!!!`;
      userScore.innerText = updateScore(userScore.innerText);
    }
    else if (userChoice !== pcChoice.innerText && userChoice === "✌️" && pcChoice.innerText === "🖐️") {
      prsText.innerText = `User wins!!!`;
      userScore.innerText = updateScore(userScore.innerText);
    } else {
      prsText.innerText = `PC wins!!!`;
      pcScore.innerText = updateScore(pcScore.innerText);
    }

    isChosen = true;

    paperIdInterval = setTimeout(() => {
      isChosen = false;
      resetPaper();
    }, 3000);


    localStorage.setItem("userScore", userScore.innerText);
    localStorage.setItem("pcScore", pcScore.innerText);

  }
};

emojisButtons.addEventListener("click", handleEmojiClick);

// Bingo    //

let isPlaying = false;

let intervalId;

const bingoNumber = document.querySelector(".bingoNumber");
bingoNumber.innerText = "0";
const cardNumbers = document.querySelectorAll(".number");


let arrayCopy = [...cardNumbers];



const bingoOn = () => {
  if (isPlaying) {
    if (arrayCopy.length > 0) {
      const randomNumber = arrayCopy[Math.floor(Math.random() * arrayCopy.length)];
      const i = arrayCopy.indexOf(randomNumber);
      arrayCopy.splice(i, 1);
      const color = "red";
      randomNumber.style.backgroundColor = color;
      bingoNumber.innerText = randomNumber.innerText;
    } else {
      arrayCopy = [...cardNumbers];
      resetBingo();
    }
  }
};

const newGameBingo = () => {
  resetBingo();
  isPlaying = true;
  intervalId = setInterval(bingoOn, 1500);

};

const resetBingo = () => {
  cardNumbers.forEach((item) => item.style.backgroundColor = "whitesmoke");
  clearInterval(intervalId);
  intervalId = undefined;
  continueButton.classList.add("hidden");
  pauseButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  bingoNumber.innerText = "0";
  isPlaying = false;
};

const pauseBingo = () => {
  continueButton.classList.toggle("hidden");
  pauseButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  isPlaying = false;
};


const continueBingo = () => {
  continueButton.classList.toggle("hidden");
  pauseButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  isPlaying = true;
};

const continueButton = document.querySelector(".continue");
continueButton.addEventListener("click", continueBingo);

const pauseButton = document.querySelector(".pause");
pauseButton.addEventListener("click", pauseBingo);

const newGameButton = document.querySelector(".newGame");
newGameButton.addEventListener("click", newGameBingo);



// Three in a row    //

let isPlayingThree = false;
let xCounter = 0;
let oCounter = 0;
let status;

const locations = { space1: "1", space2: "2", space3: "3", space4: "4", space5: "5", space6: "6", space7: "7", space8: "8", space9: "9" };

let locationsCopy = { ...locations };

const resetBtn = document.querySelector(".resetBtnContainer button");
const xSelector = document.querySelector(".x");
const oSelector = document.querySelector(".o");
const spaces = document.querySelectorAll(".table button");


const handleBoardClick = (e) => {
  e.stopPropagation();
  if (xSelector.style.backgroundColor === "green") {
    e.target.innerText = "X";
    xSelector.style.backgroundColor = "white";
    oSelector.style.backgroundColor = "green";
    xCounter += 1;
  } else if (oSelector.style.backgroundColor === "green") {
    e.target.innerText = "O";
    oSelector.style.backgroundColor = "white";
    xSelector.style.backgroundColor = "green";
    oCounter += 1;
  }
  locationsCopy[e.target.className] = e.target.innerText;
  e.target.disabled = true;

  if (xCounter >= 3 || oCounter >= 3) {
    if (!status) {
      status = gameStatus();
      if (status) {
        setTimeout(() => {
          window.alert(status);
          isPlayingThree = false;
          reset();
        }, 100);

      }
    }
  }
};


const reset = () => {
  spaces.forEach((item) => {
    item.innerText = "";
    item.disabled = false;
    item.removeEventListener("click", handleBoardClick);
  });
  xSelector.style.backgroundColor = "white";
  oSelector.style.backgroundColor = "white";
  xSelector.disabled = false;
  oSelector.disabled = false;
  status = "";
  locationsCopy = { ...locations };
  xCounter = 0;
  oCounter = 0;
  isPlayingThree = false;
};


const playerSelection = (e) => {
  e.target.style.backgroundColor = "green";
  xSelector.disabled = true;
  oSelector.disabled = true;
  isPlayingThree = true;
};

const gameStatus = () => {
  if (locationsCopy.space1 === locationsCopy.space2 && locationsCopy.space1 === locationsCopy.space3) {
    return `Player ${locationsCopy.space1} won`;
  } else if (locationsCopy.space4 === locationsCopy.space5 && locationsCopy.space4 === locationsCopy.space6) {
    return `Player ${locationsCopy.space4} won`;
  } else if (locationsCopy.space7 === locationsCopy.space8 && locationsCopy.space7 === locationsCopy.space9) {
    return `Player ${locationsCopy.space7} won`;
  } else if (locationsCopy.space1 === locationsCopy.space4 && locationsCopy.space1 === locationsCopy.space7) {
    return `Player ${locationsCopy.space1} won`;
  } else if (locationsCopy.space2 === locationsCopy.space5 && locationsCopy.space2 === locationsCopy.space8) {
    return `Player ${locationsCopy.space2} won`;
  } else if (locationsCopy.space3 === locationsCopy.space6 && locationsCopy.space3 === locationsCopy.space9) {
    return `Player ${locationsCopy.space3} won`;
  } else if (locationsCopy.space1 === locationsCopy.space5 && locationsCopy.space1 === locationsCopy.space9) {
    return `Player ${locationsCopy.space1} won`;
  } else if (locationsCopy.space3 === locationsCopy.space5 && locationsCopy.space3 === locationsCopy.space7) {
    return `Player ${locationsCopy.space3} won`;
  } else if (xCounter + oCounter === 9) {
    return "It's a tie";
  } else return "";
};


const threeOn = (e) => {
  playerSelection(e);

  if (isPlayingThree) {

    spaces.forEach(space => {
      space.addEventListener("click", handleBoardClick);
    });
  }
};




resetBtn.addEventListener("click", reset);
xSelector.addEventListener("click", threeOn);
oSelector.addEventListener("click", threeOn);




