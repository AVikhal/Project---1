class Comida {

    // Propiedades de los Objetos
    constructor (xPos, speed, imagen) {
        // 1. Posicion y dimensiones
        this.x = xPos
        this.y = 0
        this.w = 60
        this.h = 60
        this.speed = speed
        this.image = new Image()
        this.imageArr = ["/imagenes/baghette.png", "/imagenes/carrot.png", "/imagenes/gallina.png", "/imagenes/Sandwich.png"]
        this.image.src = this.imageArr[imagen]

    }

    // Metodos - funcionalidades de objetos.

        // 1.dibujado de objetos.
    
    drawComida = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

        // 2.caida de objetos
    fallingComida = () => {
        this.y += this.speed 
    }
}