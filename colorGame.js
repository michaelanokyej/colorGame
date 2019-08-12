let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // modeButtons event listeners 
    setUpModeButtons(); 
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for (let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // we need to check which button was clicked for the mode
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // } else{
            //     numSquares = 6;
            // }
    
            // We can write the above 4 lines with a one line tenary operator:
            this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
            // In the above command, the statement before the "?" 
            // is the condition. You read it like: this.textContent === "Easy"
            // then numSquares = 3, otherwise numSquares = 6 
    
            reset();
        });
    }  
}

function setUpSquares(){
    for(let i = 0; i < squares.length; i++){

        // add click eventListener 
        squares[i].addEventListener("click", function(){
            // grab color of clicked square and compare color to picked color
          let clickedColor = this.style.backgroundColor;
          if(clickedColor === pickedColor){
              messageDisplay.textContent = "Correct!"
              resetButton.textContent = "Play Again?"
              changeColors(clickedColor);
              h1.style.backgroundColor = clickedColor;
          }
          else{
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try again";
          }
        });
    }
}

function reset(){
     // generate all new colors
     colors = generateRandomColors(numSquares);
     // pick a new random color
     pickedColor = pickcolor();
     // change colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     messageDisplay.textContent = "";
     resetButton.textContent = "NEW COLORS";
     // change colors of squares
     for(let i = 0; i < squares.length; i++){
         if(colors[i]){
         squares[i].style.display = "block";
         squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
     }
     h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     // Generate only 3 new colors
//     colors = generateRandomColors(numSquares);
//     // We need to choose a new color for our result
//     pickedColor =  pickcolor();
//     // Now we change the color being displayed as text of 
//     // the color that has been picked
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";
//     resetButton.textContent = "NEW COLORS";
//     // Now we make a loop for the first 3 divs and change the colors of those
//     // And for the last 3 divs we will set the display property to none
//     for(let i = 0; i < squares.length; i++){
//         if (colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor =  pickcolor();
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";
//     resetButton.textContent = "NEW COLORS";

//     for(let i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
//     h1.style.backgroundColor = "steelblue";
// });


resetButton.addEventListener("click", function(){
    reset();
})


function changeColors(color){
    // loop through all squares
    for (let i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickcolor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
} 

function generateRandomColors(num){
    // make an array 
    let arr = []; 
    // repeat num times
    for (let i = 0; i < num; i++){
        arr.push(randomColor())
    // get random color and push into arr
    }
    // return that array
    return arr; 
}

function randomColor(){
    // pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

