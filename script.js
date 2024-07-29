const mainContainer = document.querySelector('.sketch-container');
let count = 0;

function createGrid(){
    for(let j = 0; j < 257; j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        mainContainer.appendChild(pixel);
    }
}

function main() {
    createGrid();

    // Event listener to color single pixel of grid
    let grid = document.querySelector(".sketch-container");
    grid.addEventListener('mouseover', (e) => {
        let pixelToFill = e.target;
        pixelToFill.style.backgroundColor = 'blue';
    })
}

function resetGrid() {
    
}

main();