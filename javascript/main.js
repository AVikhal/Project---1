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
    if(event.code === "ArrowLeft" && games.hammerHit === false) {
        console.log ("moviendome a la izquierda")
       games.personaje1.moveCharacter("left") 
    } else if(event.code === "ArrowRight" && games.hammerHit === false){
        games.personaje1.moveCharacter("right")
    } else if (event.code === "KeyD" && games.hammerHit === false){
        
        games.personaje1.jumpCharacterRight()
        games.personaje1.character.src = games.personaje1.charArr[2]
        games.humo = true;
        games.teleport1 = new Character ()
        games.teleArr.push(games.teleport1)
       setTimeout(()=>{
        games.humo = false;
       }, 500)

    } else if (event.code === "KeyA" && games.hammerHit === false){
        games.personaje1.jumpCharacterLeft()
        games.personaje1.character.src = games.personaje1.charArr[2]
        games.humo = true;
        games.teleport1 = new Character ()
        games.teleArr.push(games.teleport1)
       setTimeout(()=>{
        games.humo = false;
       }, 500)
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

