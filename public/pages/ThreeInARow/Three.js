import "./Three.css";

export const Three = ({ parentNode }) => {
  const divThree = document.createElement("div");
  divThree.className = "three";
  divThree.classList.add("hidden");
  const playerSelector = document.createElement("div");
  playerSelector.className = "selector";
  const xButton = document.createElement("button");
  xButton.className = "x selector";
  xButton.innerText = "X";
  playerSelector.appendChild(xButton);
  const oButton = document.createElement("button");
  oButton.className = "o selector";
  oButton.innerText = "O";
  playerSelector.appendChild(oButton);
  const table = document.createElement("div");
  table.className = "table";
  for (let i = 1; i < 10; i++) {
    const spaces = document.createElement("button");
    spaces.classList.add("space" + i);
    table.appendChild(spaces);
  }
  const divReset = document.createElement("div");
  divReset.className = "resetBtnContainer";
  const resetButton = document.createElement("button");
  resetButton.innerText = "Restart";
  divReset.appendChild(resetButton);
  divThree.appendChild(playerSelector);
  divThree.appendChild(table);
  divThree.appendChild(divReset);
  parentNode.appendChild(divThree);
};