let gridSize = 16;
let givenSize = 0;

// NOTE: EXTRA CREDIT NOT DONE
// Tasks: 1. Randomize cell color upon touch. - DONE
//        2. Implement an incremental opacity increase for each touch. 

//  Generates random hex color
const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//  Adds event listeners to each cell
const attachCellListeners = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
            cell.classList.add("hovered-cell");
            let currentOpacity = getComputedStyle(cell).getPropertyValue("opacity");
            cell.style.opacity = (currentOpacity + 0.1).toFixed(2);
        });
    });
    //  Color cell when hovered over
};

//  Create grid function
const createGrid = (gridSize) => {
    const container = document.querySelector(".container");
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

//  This only runs after DOM is loaded. This drives the game. 
document.addEventListener("DOMContentLoaded", () => {
    createGrid(gridSize);   //  Create initial grid

    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        givenSize = prompt("Enter your desired height (1-64)", "Enter height here");

        while (givenSize > 64 || givenSize < 1)
            givenSize = prompt("Invalid size given. Grid height must be between 1 and 64, inclusive!", "Enter height here")

        createGrid(givenSize);  //  Create a new grid with the given size
    });
});