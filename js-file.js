//Number of squares
let numberOfSquares; 
let squaresPerGrid;
// Select the container
let container = document.getElementById("container");
// Select the button and ask for the square size
let numberOfSquaresBtn = document.getElementById("userGivenSquaresBtn");


// Original Grid
createGrid(16);

numberOfSquaresBtn.addEventListener("click",()=>{
    squaresPerGrid = parseInt(prompt("How many squares per grid?"))
    
    if(squaresPerGrid > 100){
        container.innerHTML = "";
        createGrid(100);
    }else if(squaresPerGrid === null || isNaN(squaresPerGrid)){
        container.innerHTML = ""
        createGrid(16);
    }
    else{
        container.innerHTML = "";
        createGrid(squaresPerGrid);
    }
    
});




function createGrid(squaresPerGrid){


let squares = [];
numberOfSquares = squaresPerGrid * squaresPerGrid;
let squareSize = container.clientWidth / squaresPerGrid;

// Creating squares
for(let i = 0; i < numberOfSquares; i++){
    squares[i] = document.createElement('div');
    squares[i].style.backgroundColor = "gray";
    squares[i].style.width = `${squareSize}px`;
    squares[i].style.height = `${squareSize}px`;
    squares[i].style.flex = `1 1 ${squareSize}px`;
    squares[i].style.border = "1px solid rgb(177,164,219)";
    container.appendChild(squares[i]);

    squares[i].addEventListener("mouseover",(event)=>{
       event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    })
}

}

// Random Color Function
function random_rgb(){
    let roundNumber = Math.round;
    let randomNumber = Math.random;


}
