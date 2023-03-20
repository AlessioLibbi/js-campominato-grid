
// Dichiarazioni:
let numberOfSquares = 0;
const button = document.querySelector(".buttone")
const grid = document.querySelector(".grid");
let value = document.getElementById("modalita")

// Per ogni numero generato genero le caselle della griglia
button.addEventListener("click", function () {
    grid.innerHTML = ""
    if (value.value === "easy") {
        numberOfSquares = 100;

    } else if (value.value === "medium") {
        numberOfSquares = 81;
    } else {
        numberOfSquares = 49;
    }
    for (let i = 1; i <= numberOfSquares; i++) {
        const currentNumber = i;
        const newItem = generateGridItem(currentNumber);
        newItem.addEventListener("click", handleItemClick);
        grid.append(newItem);
    }

})

//////////////////////////////////////////////
// FUNCTIONS
// DOM related functions

function generateGridItem(text) {
    const newSquare = document.createElement("div");
    let modalities = value.value
    newSquare.classList.add("grid-item", modalities);
    newSquare.innerHTML = `<span>${text}</span>`;
    return newSquare;

}

function handleItemClick() {
    const clickedNumber = parseInt(this.querySelector("span").textContent);
    console.log(clickedNumber);
    this.classList.add("green");
}
