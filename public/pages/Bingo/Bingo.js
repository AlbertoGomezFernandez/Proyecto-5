import "./Bingo.css";

export const Bingo = ({ parentNode }) => {
  const divBingo = document.createElement("div");
  divBingo.className = "bingo";
  divBingo.classList.add("hidden");

  const bingoNumber = document.createElement("div");
  bingoNumber.className = "bingoNumberDiv";
  divBingo.appendChild(bingoNumber);

  const number = document.createElement("h1");
  number.className = "bingoNumber";
  number.innerText = "";
  bingoNumber.appendChild(number);

  const bingoCard = document.createElement("div");
  bingoCard.className = "bingoCard";
  divBingo.appendChild(bingoCard);
  for (let index = 1; index < 91; index++) {
    const cardNumber = document.createElement("p");
    cardNumber.className = `number ${index}`;
    cardNumber.innerText = index;
    bingoCard.appendChild(cardNumber);
  }

  const divButton = document.createElement("div");
  divButton.className = "divButton";

  const continueButton = document.createElement("button");
  continueButton.className = "continue button";
  continueButton.classList.add("hidden");
  continueButton.innerText = "Continue";
  divButton.appendChild(continueButton);

  const pauseButton = document.createElement("button");
  pauseButton.className = "pause button";
  pauseButton.classList.add("hidden");
  pauseButton.innerText = "Pause";
  divButton.appendChild(pauseButton);

  const newGameButton = document.createElement("button");
  newGameButton.className = "newGame button";
  newGameButton.innerText = "New Game";
  divButton.appendChild(newGameButton);

  divBingo.appendChild(divButton);

  parentNode.appendChild(divBingo);
};