//Javascript file

let gridSize = 4;

const createGrid = (gridSize) => {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let i = 0; i < gridSize; i++) {
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
