const balloon = document.getElementById('balloon');
let balloonSize = 120;
balloon.style.fontSize = (balloonSize+ "px");
const MIN_SIZE = 6;
const MAX_SIZE = 100;
const INCREMENT = 2;


function handleKeydown(event) {
    //if 'arrow up'
    if (event.key === 'ArrowUp') {
        balloonSize += INCREMENT;
        balloon.style.fontSize = (balloonSize + 'px');
}
        //balloon bigger
    //if balloon is bigger than x
        //remove eventListener
        //remove the balloon / add in explosion emoji
        //explosion grows incrementally
            //if exposion size is y
            //stop growing
            //fade out
        //if 'arrow down'
     else if (event.key === 'ArrowDown') {
        
       
        if (balloonSize > MIN_SIZE) {
            balloonSize -= INCREMENT;
            balloon.style.fontSize = (balloonSize + 'px');
        }
    }
}
      //balloon smaller
        //if balloon is z in size stop
            //balloon smaller

//event listener that listens for 'keydown'
window.addEventListener('keydown', handleKeydown);