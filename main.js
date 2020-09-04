const items = document.querySelectorAll(".playground__item");
const panel = document.querySelector(".panel__paragraph");
const button = document.querySelector(".playground__button");

let activePlayer;

let gameActive;

let fields;

const setDefault = () => {
  activePlayer = "X";
  gameActive = true;
  fields = ["", "", "", "", "", "", "", "", ""];
};

setDefault();

const winingConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const displayWinMessage = () => {
  panel.innerText = `Gratulacje ${activePlayer}, wygrałeś!`;
};

const displayTieMessage = () => {
  panel.innerText = "Remis!";
};

const validateGame = () => {
  let gameWon = false;
  for (let i = 0; i <= 7; i++) {
    const [posA, posB, posC] = winingConditions[i];
    const value1 = fields[posA];
    const value2 = fields[posB];
    const value3 = fields[posC];

    if (value1 !== "" && value1 === value2 && value1 === value3) {
      gameWon = true;
      break;
    }
  }
  if (gameWon) {
    gameActive = false;
    displayWinMessage();
  }
};

const handleItemClick = (e) => {
  const { pos } = e.target.dataset;

  if (gameActive && fields[pos] === "") {
    fields[pos] = activePlayer;

    e.target.classList.add(`playground__item--field-${activePlayer}`);
    validateGame();
    activePlayer = activePlayer === "X" ? "O" : "X";
  }
};

items.forEach((item) => {
  item.addEventListener("click", handleItemClick);
});

const clearMessage = () => {
  panel.innerText = "";
};

const clearPlayground = () => {
  items.forEach((item) => {
    item.classList.remove(
      "playground__item--field-X",
      "playground__item--field-O"
    );
  });
};

function handleButtonClick() {
  setDefault();
  clearMessage();
  clearPlayground();
}

button.addEventListener("click", handleButtonClick);
