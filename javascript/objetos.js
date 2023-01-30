class Objeto {
    // Propiedades de obejtos (estos son como enenmigos)
    constructor(posX, speed) {
        this.x = posX
        this.y = 0
        this.w = 40
        this.h = 40
        this.image = new Image ()
        this.image.src = "../imagenes/skull.png"
        this.speed = speed
    
    }

    // Metodos de los Objetos - funcionalidad

    drawObjeto = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
    }

    fallingObjeto = () => {
        this.y += this.speed
    }
}