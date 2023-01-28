class Game {

    // Propiedades del juego:
    constructor () {
        // 1. background
        this.background1 = new Image()
        this.background2 = new Image()
        this.background1.src = "../imagenes/background1.jpg"
        this.background2.src = "../imagenes/background2.png"
        // 2. Personaje 
        this.personaje1 = new Character()
        // 3. Objetos
        this.objetosArr = []
        //this.frames = 10
        this.tiempoEntreObjetos = 150
        
    }

    // Metodos - Funcionalidad del juego

    // 1.Background - Iamgenes de fondo.
    drawBackground = () => {

        ctx.drawImage(this.background1, 0, 0, canvas.width, canvas.height )
        ctx.drawImage(this.background2, 0, 300, canvas.width, 400)

    }

    // 2. Obtencion de objetos

    lanzandoComida = () => {
        if(this.objetosArr.length === 0) {
            let randomPosX = Math.random() * (640)
            let randomPosX2 = Math.random() * (640)

            let speeds = [2, 3, 2, 4, 3]
            let randomSpeed1 = speeds[Math.floor(Math.random()*(5))]
            let randomSpeed2 = speeds[Math.floor(Math.random()*(5))]

            let randomObject1 = Math.floor(Math.random() * 4)
            let randomObject2 = Math.floor(Math.random() * 4)

            let objeto1 = new Objeto (randomPosX, randomSpeed1, randomObject1)
            this.objetosArr.push(objeto1)

            let objeto2 = new Objeto (randomPosX2, randomSpeed2,randomObject2)
            this.objetosArr.push(objeto2)

        }
    }
    // 3. quitando objetos

    obteniendoComida = () => {
        this.objetosArr.forEach((cadaObjeto) => {
           
            if (
                this.personaje1.x <cadaObjeto.x +cadaObjeto.w &&
                this.personaje1.x + this.personaje1.w >cadaObjeto.x &&
                this.personaje1.y <cadaObjeto.y +cadaObjeto.h &&
                this.personaje1.h + this.personaje1.y >cadaObjeto.y
              ) {
                // Collision detected!
                console.log("personaje1 ha colisionado")
                this.objetosArr.shift()
                // activar el fin del juego
              } 
        })
    } 
    quitandoComida = () => {
        if(this.objetosArr[0].y > 670){
            this.objetosArr.shift()
        }
    }
    

    //  3. Clear Canvas  - Borrar Canvas 
    clearCanvas = () => {

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    gameLoop = () => {
        
        
        // 1. limpieza - borrado del canvas

        this.clearCanvas()
        // 2. Movimientos - acciones del personaje y objetos.
        this.lanzandoComida()
        this.objetosArr.forEach((eachObject) => {
            eachObject.fallingObjects()
        })
        this.quitandoComida()
        this.obteniendoComida()
      //  this.quitandoComida()

        

        // 3. Dibujado de los elementos.

        this.drawBackground()

        this.personaje1.drawCharacter()

        this.objetosArr.forEach((eachObject) => {
            eachObject.drawObjeto()
        })
        
        // 4. Recursion y control

        requestAnimationFrame(this.gameLoop)
        
    }

}

