var colors = [];
var pickedColor;
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");

// loading the page

init()
function init()
{
	modeButtonListener();
	squareListener();
	reset();
}


function squareListener()
{
	//setting up our squares
	for(var i = 0; i < squares.length; i++)
	{

		squares[i].addEventListener("click",function()
			{
				//grab color of picked square.
				var clickedColor = this.style.background;

				if (clickedColor === pickedColor) 
				{
					h1.style.background = clickedColor;
					//change all squares to match the clicked color
					changeColor(clickedColor);   
					messageDisplay.textContent = "Correct";
					//reset button
					resetButton.textContent = "Play Again?"
				}
				else
					{
						this.style.background = "#232323";
						messageDisplay.textContent = "Try Again";
					}
	
			});  
	}

}

 function modeButtonListener()
 {

	//loop tru the buttons mode
	for (var i = 0; i<modeButton.length; i++)
	{
		modeButton[i].addEventListener("click", function()
		{
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			//figure how many squares to display
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset()

			//pick new color
		});
	}
 }
function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue"
	messageDisplay.textContent = "";
	resetButton.textContent="new colors";

	for (var i = 0; i < squares.length; i++) 
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{squares[i].style.display = "none";}
	}
}

  
resetButton.addEventListener("click", function(){reset();});


function changeColor(color)
{
	for(var i = 0; i < squares.length; i++)
	 {
	 	// loop tru squares and change each color to match a given  color
	 	squares[i].style.background = color; 
	 	
	 }
}
function pickColor()
{
	//form a random number and return the index of the color array
	var random = Math.floor(Math.random() * colors.length);
	//position of the sqaure color
	return colors[random ];
}

function generateRandomColors(num)
{
	var arr = []
	for(var i =0; i < num; i++)
	{
		//get random color and push into arra
		arr.push(randomColor());
	}

	return arr;
}
function randomColor()
{
	// pick a red from o to 255 etc...
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

