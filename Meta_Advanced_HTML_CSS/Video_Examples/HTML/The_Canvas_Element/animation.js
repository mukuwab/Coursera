// looks up the canvas element in the html document by using
// the document.getElementById()
let canvas = document.getElementById("my_canvas");

// the result is stored in a variable named 'canvas'

// look up the 2d canvas context using canvas.getContext()
// and pass in the parameter "2d"
let context = canvas.getContext("2d");

// the result is stored in a variable named 'context'

// -------------------------------------------------------
// create variables to track the speed, position, movement
// and radius of the bouncing ball
// -------------------------------------------------------

const speed = 4;          // how fast the ball moves each frame
let radius = 40;          // radius of the ball (must be defined first)

// starting position of the ball on the x-axis
// we start at "radius" so the ball does not start off-screen
let position = radius;

// moveSpeed controls direction (+ = right, - = left)
let moveSpeed = speed;

// -------------------------------------------------------
// the moveBall() function will move the ball across the screen
// and change the direction when it reaches the left or right side
// of the screen
// -------------------------------------------------------
function moveBall() {

    // if the ball reaches the right edge of the canvas
    // reverse direction by making speed negative
    if (position + radius > canvas.width) {
        moveSpeed = -speed;
    }

    // if the ball reaches the left edge of the canvas
    // reverse direction by making speed positive
    else if (position - radius < 0) {
        moveSpeed = speed;
    }

    // update the ball's position every frame
    position += moveSpeed;
}

// -------------------------------------------------------
// drawBall() is responsible ONLY for drawing the ball
// -------------------------------------------------------
function drawBall() {

    // will clear the entire canvas so the previous frame
    // does not leave trails
    context.clearRect(0, 0, canvas.width, canvas.height);

    // set the fill color for the ball
    // fillStyle must be capital S
    context.fillStyle = "#626687";

    // draws the ball in the current condition
    context.beginPath();

    // arc(x, y, radius, startAngle, endAngle)
    // Math.PI * 2 draws a full circle
    context.arc(position, 50, radius, 0, 2 * Math.PI);

    // fill the circle with the chosen color
    context.fill();
}

// -------------------------------------------------------
// animate() runs every frame
// it updates the position and redraws the canvas
// -------------------------------------------------------
function animate() {

    // move the ball first
    moveBall();

    // then draw the ball in its new position
    drawBall();

    // schedule the animate function to run again
    // requestAnimationFrame syncs with the browser refresh rate
    window.requestAnimationFrame(animate);
}

// -------------------------------------------------------
// start the animation loop
// -------------------------------------------------------
window.requestAnimationFrame(animate);
// function being called for the first time
