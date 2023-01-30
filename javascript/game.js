class Game {

    // Propiedades del juego:
    constructor () {
        // 1. background
        this.background1 = new Image()
        this.background2 = new Image()
        this.igorImage= new Image ()
        this.failedImage = new Image ()
        this.background1.src = "../imagenes/background1.jpg"
        this.background2.src = "../imagenes/background2.png"
        this.igorImage.src = "../imagenes/igor-juego.png"
        this.failedImage.src = "../imagenes/failed.png"
        // 2. Personaje 
        this.personaje1 = new Character()
        // 3. Comida
        this.comidaArr = []
        // 4. Obejtos
        this.objetoArr = []
        //this.frames = 10
        this.tiempoEntreObjetos = 150
        // 5. gameover - falied 
        this.gameRunning = true;
      //  this.contadorVidas = 0;

        // 6. HungerBar
        this.barW = 400
        this.hunger = 0.25;
        
    }

    // Metodos - Funcionalidad del juego

    // 1.Background - Iamgenes de fondo.
    drawBackground = () => {

        ctx.drawImage(this.background1, 0, 0, canvas.width, canvas.height )
        ctx.drawImage(this.background2, 0, 600, canvas.width, 400)

    }

    drawIgorImage = () => {
        ctx.drawImage(this.igorImage, 0, 0 , 200, 200)
    }

    drawHungerBar = () => {
        ctx.fillStyle = "red"
        ctx.fillRect(120, 80, this.barW, 40)
    }

    drawFailedImage = () => {
        ctx.drawImage(this.failedImage, 10, 330, 680, 620)
    }

    // 2. Dejando caer comida  -  objetos

    

    lanzandoComida = () => {
        if(this.comidaArr.length === 0 || this.comidaArr.length <= 2) {
            let randomPosX = Math.random() * (640)  // intentando encontrar la falla de  por que los dos objetos(comidas) desaparecen a la vez.
            let randomPosX2 =  Math.random() * (640)

            let speeds = [2, 3, 2, 4, 3]
            let randomSpeed1 = speeds[Math.floor(Math.random()*(5))]
            let randomSpeed2 = speeds[Math.floor(Math.random()*(5))]

            let randomComida1 = Math.floor(Math.random() * 4)
            let randomComida2 = Math.floor(Math.random() * 4)

            let comida1 = new Comida (randomPosX, randomSpeed1, randomComida1)
            this.comidaArr.push(comida1)

            let comida2 = new Comida (randomPosX2, randomSpeed2,randomComida2)
            this.comidaArr.push(comida2)

        }
    }

    lanzandoObjetos = () => {
        if (this.objetoArr.length === 0 || this.objetoArr.length <=2) {
           let randomPosX1 = Math.random() * 660
           let randomPosX2 = Math.random() * 670

           let speeds = [2, 3, 2, 4, 3]
            let randomSpeed1 = speeds[Math.floor(Math.random()*(5))]
            let randomSpeed2 = speeds[Math.floor(Math.random()*(5))]

           let objeto1 = new Objeto(randomPosX1, randomSpeed1)
           this.objetoArr.push(objeto1)

           let objeto2 = new Objeto(randomPosX2, randomSpeed2)
           this.objetoArr.push(objeto2)
        }
    }
            // 2.3 Barra de hambre disminuye o aumenta segun el objeto atrapado.

    hungerBar = () => {
        if(this.barW >= 0) { 
        this.barW -= this.hunger
        } 
    }
    
    // 3. quitando objetos

    obteniendoComida = () => {
        this.comidaArr.forEach((cadaComida, index) => {
           
            if (
                this.personaje1.x <cadaComida.x +cadaComida.w &&
                this.personaje1.x + this.personaje1.w >cadaComida.x &&
                this.personaje1.y <cadaComida.y +cadaComida.h &&
                this.personaje1.h + this.personaje1.y >cadaComida.y
              ) {
                // Collision detected!
               // console.log("personaje1 obtuvo comida")
                this.comidaArr.splice(index,1)
                this.barW += 40
                
              } 
        })
    } 


    // colisionar objeto (no comida) con el personaje.
    
    obtenerObjetoEquivocado = () => {
        
        this.objetoArr.forEach((cadaObjeto, index) => {

            if (
                this.personaje1.x <cadaObjeto.x +cadaObjeto.w &&
                this.personaje1.x + this.personaje1.w >cadaObjeto.x &&
                this.personaje1.y <cadaObjeto.y +cadaObjeto.h &&
                this.personaje1.h + this.personaje1.y >cadaObjeto.y
              ) {
                // Collision detected!
                console.log("personaje1 ha colisionado")
                this.objetoArr.splice(index,1)
                this.contadorVidas ++
                this.barW -= 20
                // activar el fin del juego
              }
            
              
        })

        this.gameOver()
    }

    quitandoComida = () => {

        this.comidaArr.forEach((eachComida, index) =>{
            if(eachComida.y > 970){
                this.comidaArr.splice(index,1)
            }
        })
        
    }
    
    quitandoObjetos = () => {
        this.objetoArr.forEach((eachObjeto, index) => {
            if(eachObjeto.y > 970) {
                this.objetoArr.splice(index,1)
            }
        })
    }

    //  3. Clear Canvas  - Borrar Canvas 
    clearCanvas = () => {

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    // 4. GameOver - FAILING!
    
    gameOver = () => {
        if(this.barW <= 0) {
            this.gameRunning = false
            console.log("gameOVER!!!")

            failedGameContainer.style.display = "flex"

            
        }

    }

    // 5. orden y funcionamiento del juego 

    gameLoop = () => {
        
        
        // 1. limpieza - borrado del canvas

        this.clearCanvas()
        // 2. Movimientos - acciones del personaje y objetos.
        this.lanzandoComida()
        this.comidaArr.forEach((eachComida) => {
            eachComida.fallingComida()
        })

        this.lanzandoObjetos ()
        this.objetoArr.forEach((eachObjeto) => {
            eachObjeto.fallingObjeto()
        })
        
        this.obteniendoComida()
        this.obtenerObjetoEquivocado()

        this.personaje1.gravityCharacter()
        this.hungerBar()
      //  this.quitandoComida()
        this.quitandoComida()
        this.quitandoObjetos()
        

        // 3. Dibujado de los elementos.

        this.drawBackground()
        

        this.personaje1.drawCharacter()

        this.comidaArr.forEach((eachComida) => {
            eachComida.drawComida()
        })

        this.objetoArr.forEach((eachObjeto) => {
            eachObjeto.drawObjeto()
        })
        this.drawHungerBar()
        this.drawIgorImage()
        
        // 4. Recursion y control
        if(this.gameRunning === true) { 
        requestAnimationFrame(this.gameLoop)
        } else {
            this.drawFailedImage()
        }
        
    }

}

