class Character {
    
    // Propiedades del personaje - Character

    constructor () {
        this.x = 330
        this.y = 925 // 600 base
        this.h = 70
        this.w = 50
        this.character = new Image()
        this.character.src = "../imagenes/personaje1.png"
        this.moveSpeed = 12;
        this.gravity = 3
        
        
    }


    // Metodos del personaje - Character

        // 1. Dibujar al Personaje
    
    drawCharacter = () => {
        ctx.drawImage(this.character, this.x, this.y, this.w, this.h)
    }

        // 2. movimiento del personaje.
    
    moveCharacter = (direction) => {
       if (direction === "left" && this.x > 0) {
         this.x -= this.moveSpeed
        } else if (direction === "right" && this.x + this.w < canvas.width){
            this.x += this.moveSpeed
        }

    }
    executeMove = () => {
        this.controller.forEach(key=>{
            key.pressed && key.func
        }) 
    }

   jumpCharacterRight = () => {
        if(this.y + this.h <= 997 && this.y > 920 && this.x + this.w <= canvas.width - 200) {
            this.y -= 200
            this.x += 200
            console.log("saltando")
        
        } else if (this.y + this.h <= 997 && this.y > 920 && canvas.width - (this.x + this.w) < 200){
            this.y -= 200
            this.x = canvas.width - this.w
        }
        
    }

    // Salto a la izquierda

    jumpCharacterLeft = () => {
        if(this.y + this.h <= 997 && this.y > 920 && this.x >= 200){
            this.y -= 200
            this.x -= 200
        } else if(this.y + this.h <= 997 && this.y > 920 && this.x <200){
            this.y -= 200
            this.x = 0;
        }
    } 

    jumpCharacter = () => {
        if(this.y + this.h <=997 && this.y > 920){
            this.y -= 200
        }
    }

    

    gravityCharacter = () => {
        if(this.y + this.h <= 994){
            this.y += this.gravity
        }
    }


}

