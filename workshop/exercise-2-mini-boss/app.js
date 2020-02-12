var n = (new Date()).toLocaleTimeString();

const localTime = document.querySelector('.time');
const startButton = document.getElementById('button');


localTime.innerText = n;

var seconds = 0;
let isClicked = false;

function startTimer() {
    isClicked = true;
    console.log("timer clicked");
}
startButton.addEventListener('click', startTimer);

if (isClicked = true) {
    setInterval(function() {
    const timerzz = document.getElementById('timer');
        timerzz.innerText = seconds++;
    }, 1000);
}
