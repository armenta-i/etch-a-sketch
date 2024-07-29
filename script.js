const mainContainer = document.querySelector('.sketch-container');
let count = 0;
let gridSize = 16;
let pixelColor = 'black';
let random = false;

function changeGrid() {
    // Deletes current grid and creates a new one, MISSING
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
    // Creates a grid based of total number of pixels
    let pixelTotal = numPixels * numPixels;
    console.log("numPixels: " + numPixels)
    console.log("Total pixels: " + pixelTotal)
    for(let j = 0; j < pixelTotal; j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style = 'width : ' + numPixels;
        pixel.style = 'height : ' + numPixels;
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
    console.log("Color: " + inputColor.value);

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
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    pixelColor = "rgb(" + red + "," + blue + "," + green + ")";
}

// Calling main
main();