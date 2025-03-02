let gridSize = 16;
let givenSize = 0;

// NOTE: EXTRA CREDIT NOT DONE
// Tasks: 1. Randomize cell color upon touch. 
//        2. Implement an incremental opacity increase for each touch. 

const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;   // Generates random hex color
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
        givenSize = prompt("Enter your desired height: ", "Enter height here");
        while (givenSize > 64 || givenSize < 1)
            givenSize = prompt("Invalid size given. Grid height must be between 1 and 64, inclusive!", "Enter height here")

        createGrid(givenSize)
    });
});

//  Adds event listeners to each cell
const attachCellListeners = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            // cell.classList.add("hovered-cell");
            cell.style.backgroundColor = getRandomColor();  //works!!
        });
    });
    //  Color cell when hovered over
};


const createGrid = (gridSize) => {
    const container = document.querySelector(".container");
    let child = container.lastElementChild; //get last child in list

    container.innerHTML = "";
    //  Remove previous grid to create new one

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
    attachCellListeners();
}


createGrid(gridSize);
