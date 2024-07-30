const mainContainer = document.querySelector('.sketch-container');
let count = 0;
const gridSize = 16;
let pixelColor = 'black';
let random = false;
const containerSize = 512;

function changeGrid() {
    // Deletes current grid and creates a new one, MISSING
    let newSize = prompt("Enter size of new grid");
    if(newSize > 100){
        alert("Number must be less than 100");
        newSize = prompt("Enter size of new grid");
    }
    while(mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    createGrid(newSize);
}

function createGrid(numPixels){
    // Creates a grid based of total number of pixels
    let pixelTotal = numPixels * numPixels;
    for(let j = 0; j < pixelTotal; j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        // Had to put the width and height of every single pixel here instead of css so the grid would be created correctly.
        pixel.style.width =  containerSize/numPixels + "px";
        pixel.style.height=  containerSize/numPixels + "px";
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

    // Event to change color of pixel from color wheel
    let inputColor = document.querySelector("#color-value");
    inputColor.addEventListener('input', (e) => {
        pixelColor = inputColor.value;
    })
}

// Function to reset grid to basic 16x16
function resetGrid() {
    location.reload();
    let newGrid = document.querySelector(".sketch-container");
    newGrid;
}

// Generates a random color
function randomColor() {
    random = true;
    // Get 3 random values for rgb
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    pixelColor = "rgb(" + red + "," + blue + "," + green + ")";
}

// Calling main
main();