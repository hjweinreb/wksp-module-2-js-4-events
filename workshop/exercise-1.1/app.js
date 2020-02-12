// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

let win = false;

function clicker() {
    alert("You win :)");
    win === true;
    document.removeEventListener('click', clicker);
}
console.log(win);

setTimeout(function() {
    if (win === false) {
    
    alert("You lose :(");

    document.removeEventListener('click', clicker);
    }
}, 1000);

document.addEventListener('click', clicker);




// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------