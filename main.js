//selects container for adding the grid to page via DOM manipulation
const container = document.querySelector('#container');
const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', resetGrid);

//create set rows and cols and then append new divs to make grid
function makeGrid(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++) {
      let square = document.createElement("div");
      container.appendChild(square).className = "grid-item";
      square.addEventListener('mouseover', randomColor);
    };
  };
  
//makes random color for squares
function randomColor(e) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var randomColor = "rgb(" + r + "," + g + "," + b + ")";
  e.target.style.backgroundColor = randomColor;
  }

//resets to default grid
function resetGrid() {
    while (container.firstChild) container.removeChild(container.firstChild);
    makeGrid(16);
}

//execute function to make grid
makeGrid(16);