//Javascript file

let gridSize = 4;

const createGrid = (gridSize) => {
    // console.log("Create grid was called!");
    const container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        // console.log("Creating a row!");
        const row = document.createElement("div");
        row.classList.add("row");
        // row.textContent = "THIS IS A ROW";
        container.appendChild(row);

        for (let i = 0; i < gridSize; i++) {
            // console.log("Creating cells!");
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = "CELL";
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
