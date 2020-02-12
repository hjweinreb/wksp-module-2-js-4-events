
const buttonList = document.getElementById("buttons")




let x = 0

function changecolor(event) {
    var bnum = event.target.id;
    document.getElementById(bnum).classList.add("newcolor");
    
}


for (x = 0; x <= 20; x++) {
    var listItem = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "button number:" + x;
    button.id = x;
    
    buttonList.appendChild(listItem);
    listItem.appendChild(button);
    
    button.addEventListener('click', changecolor);


}



