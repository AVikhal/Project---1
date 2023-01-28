class Character {
    
    // Propiedades del personaje - Character

    constructor () {
        this.x = 330
        this.y = 600 // 600 base
        this.h = 95
        this.w = 70
        this.character = new Image()
        this.character.src = "../imagenes/personaje1.png"
        this.moveSpeed = 12;

    }


    // Metodos del personaje - Character

        // 1. Dibujar al Personaje
    
    drawCharacter = () => {
        ctx.drawImage(this.character, this.x, this.y, this.w, this.h)
    }

        // 2. movimiento del personaje.
    
    moveCharacter = (direction) => {
       if (direction === "left") {
         this.x -= this.moveSpeed
        } else if (direction === "right"){
            this.x += this.moveSpeed
        }

    }
}
