import { gameInfo } from "../../data/gameInfo";
import "./Home.css";


export const Home = ({ parentNode }) => {
  const home = document.createElement("div");
  home.className = "home";
  const h1 = document.createElement("h1");
  h1.innerText = "GAMES";
  const ulElement = document.createElement("ul");
  for (let link in gameInfo) {
    const liElement = document.createElement("li");
    liElement.classList.add(gameInfo[link].name);
    const aElement = document.createElement("a");
    aElement.textContent = gameInfo[link].name;
    aElement.href = gameInfo[link].page;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  }
  home.appendChild(h1);
  home.appendChild(ulElement);
  parentNode.appendChild(home);
};