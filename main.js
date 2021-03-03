//selects gridContainer for adding the grid to page via DOM manipulation
const gridContainer = document.querySelector('#gridContainer');
const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', resetGrid);

//sets grid rows and columns sizes within gridContainer, creates and appends these squares to grid
function makeGrid(size) {
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++) {
      let square = document.createElement("div");
      gridContainer.appendChild(square).className = "grid-item";
      square.addEventListener('mouseover', randomColor);
    };
  };
  

//makes random color for squares
function randomColor(e) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + r + "," + g + "," + b + ")";
  e.target.style.backgroundColor = randomColor;
  }

//resets grid to size that user chooses 
function resetGrid(newGridSize) {
    newGridSize = parseInt(prompt('Enter size of new grid (1-64)'));
    while (newGridSize > 64 || newGridSize < 1 || isNaN(newGridSize)) {
      newGridSize = parseInt(prompt('MUST BE BETWEEN 1 & 64!!!'));
    }
    while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
    makeGrid(newGridSize);
}

//execute function to make grid
makeGrid(16);