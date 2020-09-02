const items = document.querySelectorAll(".playground__item");

let activePlayer = "X";

const fields = ["", "", "", "", "", "", "", "", ""];

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const { pos } = e.target.dataset;

    if (fields[pos] === "") {
      fields[pos] = activePlayer;

      e.target.classList.add(`playground__item--field-${activePlayer}`);
      activePlayer = activePlayer === "X" ? "O" : "X";
    }
  });
});
