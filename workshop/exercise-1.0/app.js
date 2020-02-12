// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

function clicker() {
    console.log("screen clicked");
    alert("screen clicked")
}

document.addEventListener('click', clicker);
// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------