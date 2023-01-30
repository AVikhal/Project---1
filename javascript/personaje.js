class Character {
    
    // Propiedades del personaje - Character

    constructor () {
        this.x = 330
        this.y = 625 // 600 base
        this.h = 70
        this.w = 50
        this.character = new Image()
        this.character.src = "../imagenes/personaje1.png"
        this.moveSpeed = 12;
        this.gravity = 0.5

    }


    // Metodos del personaje - Character

        // 1. Dibujar al Personaje
    
    drawCharacter = () => {
        ctx.drawImage(this.character, this.x, this.y, this.w, this.h)
    }

        // 2. movimiento del personaje.
    
    moveCharacter = (direction) => {
       if (direction === "left" ) {
         this.x -= this.moveSpeed
        } else if (direction === "right"){
            this.x += this.moveSpeed
        }

    }

    jumpCharacter = () => {
        if(this.y + this.h <= 695 && this.y > 620) {
            this.y -= 50
            this.x += 40
            console.log("saltando")
        
        }
        
    }

    gravityCharacter = () => {
        if(this.y + this.h < 695){
            this.y += this.gravity
        }
    }

    
}

