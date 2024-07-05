//Number of squares
let numberOfSquares; 
// Select the container
let container = document.getElementById("container");
// Select the button and ask for the square size
let numberOfSquaresBtn = document.getElementById("userGivenSquaresBtn");

numberOfSquaresBtn.addEventListener("click",()=>{
    numberOfSquares = parseInt(prompt("How many squares per grid?"))
    
});

console.log(numberOfSquares);




let squares = [];

// Creating squares
for(let i = 0; i < numberOfSquares; i++){
    squares[i] = document.createElement('div');
    squares[i].style.width = "100px";
    squares[i].style.height = "100px";
    squares[i].style.backgroundColor = "blue";
    squares[i].style.margin = "3px";
    squares[i].style.flexShrink = "0";
    container.appendChild(squares[i]);

    squares[i].addEventListener("mouseover",(event)=>{
       event.target.style.backgroundColor = "red";

    })


    
}