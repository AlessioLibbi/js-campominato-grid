// 1. Creare in JavaScript una griglia 8x8 con i numeri casuali da 1 a 64
//
// Ogni volta che clicco su un quadrato questo si colora di verde.

// step 2: colorare diversamente in base se è pari o dispari

// Dichiarazioni:
// Dichiarazioni:
const numberOfSquares = 100;

// Per ogni numero generato genero le caselle della griglia
const grid = document.querySelector(".grid");
for (let i = 1; i <= numberOfSquares; i++) {
    const currentNumber = i;
    const newItem = generateGridItem(currentNumber);
    newItem.addEventListener("click", handleItemClick);
    grid.append(newItem);
}


//////////////////////////////////////////////
// FUNCTIONS

/**
 * Description: Funzione che genera un array con numbersQuantity elementi tra 1 e numbersQuantity senza repetizioni
 * @param {number} numbersQuantity
 * @returns {array}
 */
function generateRandomNumbersArray(numbersQuantity) {
    const numbersArray = [];

    while (numbersArray.length < numbersQuantity) {
        // Generare un numero
        const rndNumber = getRndInteger(1, numbersQuantity);
        // Se il numero non è presente nell'array
        //  pusho il numero
        if (!numbersArray.includes(rndNumber)) {
            numbersArray.push(rndNumber);
        }
    }
    return numbersArray;
}

// DOM related functions

function generateGridItem(text) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-item");
    newSquare.innerHTML = `<span>${text}</span>`;
    return newSquare;
}

function handleItemClick() {
    const clickedNumber = parseInt(this.querySelector("span").textContent);
    if (clickedNumber % 2 === 0) {
        this.classList.add("green");
    } else {
        this.classList.add("red");
    }
}
