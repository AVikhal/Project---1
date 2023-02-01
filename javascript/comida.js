class Comida {

    // Propiedades de los Objetos
    constructor (xPos, speed, imagen) {
        // 1. Posicion y dimensiones
        this.x0 = 330 // Añadiendo posicion incial de partida de objetos - comida
        this.x = xPos
        this.y = 0
        this.w = 60
        this.h = 60
        this.speed = speed
        this.image = new Image()
        this.imageArr = ["./imagenes/baghette.png", "./imagenes/carrot.png", "./imagenes/gallina.png", "./imagenes/Sandwich.png"]
        this.image.src = this.imageArr[imagen]

    }

    // Metodos - funcionalidades de objetos.

        // 1.dibujado de objetos.
    
    drawComida = () => {
        ctx.drawImage(this.image, this.x0, this.y, this.w, this.h)
    }

        // 2.caida de objetos
          // ---> Cambiando la funcion de caida de objetos - comida
          //      Ahora todos los objetos saldran de un mismo punto y caeran diagonalmente
          //      hasta su posicion final de caida vertical "xPos"
          //      La velocidad de caida diagonal tambien debera ser distinta de la vertical.              
    fallingComida = () => {
        if (this.x > this.x0 && this.y < 200) {
        this.y += 3
        this.x0 += 5  
        } else if (this.x < this.x0 && this.y < 200){
        this.y += 3
        this.x0 -= 5   
        } else if (this.y >= 200){
        this.y += this.speed
        }     
    }
}