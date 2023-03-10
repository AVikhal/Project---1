class Score {
    // propiedades de la puntuacion
    constructor (posX, posY, number, value ) {
        this.x = posX
        this.y = posY
        this.w = 30
        this.h = 20
        this.animationSpeed = 2
        this.image = new Image ()
        this.scoreArr = ["./imagenes/40positivo.png", "./imagenes/20negativo.png", "./imagenes/2sec.png"]
        this.image.src = this.scoreArr[number]
        this.value = value
    }

    // 2. metodos y funcionalidad de los scores

    // 2.1 dibujar scores

    drawScore = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        if(this.w <= 150 && this.h >= -180){ 
        this.scoreAnimation()
    
        }
    }

    // 2.2 dinamismo del score

    scoreAnimation = () => {
        
        this.w += this.animationSpeed
        this.h -= this.animationSpeed
        
    }

    scoreMotion = () => {
        if (this.x >40 ){
            this.x -=5
            this.y -=5
        } else if( this.x >=0 && this.y + this.h >60){
            this.y -=5
            
        }
    }

}