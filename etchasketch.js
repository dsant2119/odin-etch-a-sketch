let gridSize = 16;
let givenSize = 0;

const button = document.getElementById("button");
button.addEventListener("click", () => {
    givenSize = prompt("Enter your desired height: ", "Enter height here");
    while (givenSize > 64 || givenSize < 1)
        givenSize = prompt("Invalid size given. Grid height must be between 1 and 64, inclusive!", "Enter height here")

    createGrid(givenSize)
});

const createGrid = (gridSize) => {
    const container = document.querySelector(".container");
    let child = container.lastElementChild; //get last child in list

    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
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

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.classList.add("hovered-cell");
        });
    });
}


createGrid(gridSize);
