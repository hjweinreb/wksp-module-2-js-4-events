// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.
let win = false;
let countdown = 10000;

function clicker(){
    win = true;
    alert("you clicked and won");

    document.removeEventListener('click', clicker);

}


setTimeout(function() {
    
    alert("You lose");

    document.removeEventListener('click', clicker);

}, countdown)

    if (countdown % 1000 === 0) console.log(countdown)

}

document.addEventListener('click', clicker);

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...
