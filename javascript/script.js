// VARIABLES GLOBALES :
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const startGameContainer = document.querySelector("#start-game-container")
const failedGameContainer = document.querySelector("#failed-container")
       //BOTONES
const btnStart = document.querySelector("#start-btn")
const btnReStart = document.querySelector("#restart-btn")
let games;

        

// STATE MANAGEMENT FUNCTIONS - Funciones para el manejo de los estados en el juego
 
let gaming = () => {


    startGameContainer.style.display = "none";
    canvas.style.display = "block"; 
    console.log("csmre")
    
    games = new Game()
    games.gameLoop()
    
}

let moveChar = (event) => {
    if(event.code === "ArrowLeft") {
        console.log ("moviendome a la izquierda")
       games.personaje1.moveCharacter("left") 
    } else if(event.code === "ArrowRight"){
        games.personaje1.moveCharacter("right")
    } else if (event.code === "KeyD"){
        games.personaje1.jumpCharacterRight()
    } else if (event.code === "KeyA"){
        games.personaje1.jumpCharacterLeft()
    }

}

let newGame = () => {

    failedGameContainer.style.display = "none";
    canvas.style.display = "block"; 
    console.log("csmre")
    
    games = new Game()
    games.gameLoop()
}





// ADD EVENT LISTERNERS - Funciones para el manejo de los botones.

btnStart.addEventListener("click", gaming)
btnReStart.addEventListener("click", newGame)
window.addEventListener("keydown", moveChar)
//dibujarImagen()

/* window.addEventListener("keydown", (event) =>{
    if(event.code === "ArrowRight") {
        games.personaje1.controller.derecha.pressed = true
        console.log("lalala")
    }
})
window.addEventListener("keyup", (event) => {
    if(event.code === "ArrowRight") {
        games.personaje1.controller.derecha.pressed = false
        console.log("lololo")
    }

}) */