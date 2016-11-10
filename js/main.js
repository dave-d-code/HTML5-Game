// Main JS file for describing and drawing on the Canvas

var canvas = document.getElementById('canvas');
// get the 2d context of canvas
var context = canvas.getContext('2d');

// load in a "frog avatar" as a JS object
imgFrog = new Image();
imgFrog.src = "images/froggie.png";

// wait until the browser has loaded.. similar to Jquery $(f) ready
imgFrog.addEventListener("load", init, false);

// find the browser's animation object, fall back to JS if null
var requestAnimFrame = 
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000/60);
		};

// set x & y co-ordinations for the frog
var frogX = 65;
var frogY = 65;


// redraw the frames using the update method below
function init() {
	requestAnimFrame(update);
}

// update the window frames

function update() {

	// move the frog
	frogY += 3;
	// clear the whole canvas and redraw
	context.clearRect(0, 0, 400, 400);

	// draw 'walls' on the canvas using the following shapes
	context.drawImage(imgFrog, frogX, frogY, 30, 28);
	context.fillRect(10, 10, 40, 380, "#000000");
	context.fillRect(10, 10, 280, 20, "#000000");
	context.fillRect(10, 130, 280, 20, "#000000");
	context.fillRect(280, 10, 40, 280, "#000000");
	context.fillRect(150, 10, 20, 50, "#000000");

	// forms a recursive method by calling itself
	requestAnimFrame(update);
}