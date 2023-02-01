class Objeto {
    // Propiedades de obejtos (estos son como enenmigos)
    constructor(posX, speed, objetoX ) {
        this.x0 = 330
        this.x = posX
        this.y = 0
        this.w = 40
        this.h = 40
        this.image = new Image ()
        this.objetosArr = ["/imagenes/skull.png", "/imagenes/martillo.png"]
        this.image.src = this.objetosArr[objetoX]
        this.speed = speed
    
    }

    // Metodos de los Objetos - funcionalidad

    drawObjeto = () => {
        ctx.drawImage(this.image, this.x0, this.y, this.w, this.h )
    }

    fallingObjeto = () => {

          // ---> Cambiando la funcion de caida de objetos - comida
          //      Ahora todos los objetos saldran de un mismo punto y caeran diagonalmente
          //      hasta su posicion final de caida vertical "xPos"
          //      La velocidad de caida diagonal tambien debera ser distinta de la vertical. 
     if(this.x0 < this.x && this.y < 200) {    
        this.y += this.speed
        this.x0 += 3
     } else if (this.x0 > this.x && this.y < 200){
        this.y += this.speed
        this.x0 -= 3
     } else if (this.y >=200) {
        this.y += this.speed
     }
    }
}