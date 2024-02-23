import "./PaperRockScissors.css";


export const PaperRockScissors = ({ parentNode }) => {
  const divPaper = document.createElement("div");
  divPaper.className = "paper";
  divPaper.classList.add("hidden");
  const counter = document.createElement("div");
  counter.className = "counter";
  const userTag = document.createElement("p");
  userTag.className = "userTag";
  userTag.innerText = "user";
  const userScore = document.createElement("h1");
  userScore.className = "userScore";
  userScore.innerText = 0;
  const pcTag = document.createElement("p");
  pcTag.className = "pcTag";
  pcTag.innerText = "pc";
  const pcScore = document.createElement("h1");
  pcScore.className = "pcScore";
  pcScore.innerText = 0;
  const middleText = document.createElement("h2");
  middleText.className = "middleText";
  middleText.innerText = "Choose wisely: paper, rock, scissors";
  const pcChoice = document.createElement("h3");
  pcChoice.className = "pcChoice";
  const choices = document.createElement("div");
  choices.className = "emojis";
  const paper = document.createElement("h3");
  paper.className = "paperEmoji";
  paper.innerText = "🖐️";
  choices.appendChild(paper);
  const rock = document.createElement("h3");
  rock.className = "rockEmoji";
  rock.innerText = "✊";
  choices.appendChild(rock);
  const scissors = document.createElement("h3");
  scissors.className = "scissorsEmoji";
  scissors.innerText = "✌️";
  choices.appendChild(scissors);
  counter.appendChild(userTag);
  counter.appendChild(userScore);
  counter.appendChild(pcScore);
  counter.appendChild(pcTag);
  divPaper.appendChild(counter);
  divPaper.appendChild(middleText);
  divPaper.appendChild(pcChoice);
  divPaper.appendChild(choices);
  parentNode.appendChild(divPaper);
}

