const mainContainer = document.querySelector('.sketch-container');
let count = 0;
let gridSize = 16;
let pixelColor = 'black';

function changeGrid() {
    let newSize = prompt("Enter size of new grid");
    if(newSize > 100){
        alert("Number must be less than 100");
        newSize = prompt("Enter size of new grid");
    }
    gridSize = Number(newSize);
    while(mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.firstChild);
        console.log("child removed")
    }
    createGrid(gridSize);
}

function createGrid(numPixels){
    let pixelTotal = numPixels * numPixels;
    console.log("Total pixels: " + pixelTotal)
    for(let j = 0; j <= pixelTotal; j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        mainContainer.appendChild(pixel);
    }
}

function main() {
    createGrid(gridSize);

    // Event listener to color single pixel of grid
    let grid = document.querySelector(".sketch-container");
    grid.addEventListener('mouseover', (e) => {
        let pixelToFill = e.target;
        pixelToFill.style.backgroundColor = pixelColor;
    })
}

function resetGrid() {
    location.reload();
    let newGrid = document.querySelector(".sketch-container");
    newGrid;
}

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let randomColor = "rgb(" + red + "," + blue + "," + green + ")";
    return randomColor;
}

main();