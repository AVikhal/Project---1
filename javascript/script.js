// VARIABLES GLOBALES :
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const startGameContainer = document.querySelector("#start-game-container")
       //BOTONES
const btnStart = document.querySelector("#start-btn")
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
    }

}




// ADD EVENT LISTERNERS - Funciones para el manejo de los botones.

btnStart.addEventListener("click", gaming)
window.addEventListener("keydown", moveChar)
//dibujarImagen()