let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click eventListener 
    squares[i].addEventListener("click", function(){
        // grab color of clicked square and compare color to picked color
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
          document.body.style.backgroundColor = pickedColor;
      }
      else{
          this.style.backgroundColor = "#232323";
      }
    });
}