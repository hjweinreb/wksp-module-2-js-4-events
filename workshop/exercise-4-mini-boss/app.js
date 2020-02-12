
const buttonList = document.getElementById("buttons");
const startButton = document.getElementById("start");




let i = Math.random()*10;
let z = Math.floor(i);
let x = 1;
let clickerCount = 0;
let win = false;

function gamePart(event) {
    var bnum = event.target.id;
    currentButton = document.getElementById(bnum);
    console.log(currentButton);
    clickerCount++;
    console.log(clickerCount);
    console.log("z =" + z)
        if (clickerCount === z) {
            win = true;
            alert("You won!");
        } 
    console.log(win);

    currentButton.removeEventListener('click', gamePart);
}


function deleteStart() {
    document.getElementById("start").classList.add("make-invisible");

    startButton.removeEventListener('click', deleteStart);
}
    startButton.addEventListener('click', deleteStart);

function buttonTime() {
    for (x >= 1; x <= z; x++) {
    var listItem = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "button number:" + x;
    button.id = x;
    
    buttonList.appendChild(listItem);
    listItem.appendChild(button);
    
    //button.addEventListener('click', changecolor);
    startButton.removeEventListener('click', buttonTime);
    button.addEventListener('click', gamePart);
    

    }
}
    
    startButton.addEventListener('click', buttonTime);



setTimeout(function() {
        if (win === false) {
        
        alert("You lose :(");
    
        document.removeEventListener('click', clicker);
        }
}, 20000);





