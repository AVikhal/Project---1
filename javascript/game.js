class Game {

    // Propiedades del juego:
    constructor () {
        // 1. background
        this.background1 = new Image()
        this.background2 = new Image()
        this.igorImage= new Image ()
        

        this.igorX = 0
        this.igorY =0
        this.igorW = 200
        this.igorH =200
        this.failedImage = new Image ()
        this.background1.src = "./imagenes/background1.jpg"
        this.background2.src = "./imagenes/background2.png"
        this.igorImage.src = "./imagenes/igor-juego.png"
        this.failedImage.src = "./imagenes/failed.png"
        // 2. Personaje 
        this.personaje1 = new Character()
        // 3. Comida
        this.comidaArr = []
        // 4. Obejtos
        this.objetoArr = []
        this.hammerArr = []
        // .... Frames
        this.frames = 0
        this.tiempoEntreObjetos = 150
        // 5. gameover - falied 
        this.gameRunning = true;
      //  this.contadorVidas = 0;
        this.contador = 0
        this.hammerHit = false;

        // 6. HungerBar
        this.barW = 400
        this.spawnHammersKulls = 0
        this.spawnFood = 0
        this.hunger = 0.1
        // 7. Score
        this.scoreArr = []
        this.stunnedArr = []
        //  Activador lvls 1

        this.hammersNow = false;
        // teleport 
        
        this.humo = false
        this.teleArr = []

        
       
    }
    

    // Metodos - Funcionalidad del juego

    contadorFrames = () => {

        if(this.frames%9000 ===0){
            this.spawnHammersKulls ++
            this.contador ++
            this.hunger += 0.05
            
        }
        if (this.frames%600 === 0){
            this.contador ++
        } 

        if(this.frames%18000===0){
            this.spawnFood ++
            
        }     

    }

    

    // HAMMERR operation 
    hammersFrenzyNow = () => {
        if(this.contador >= 6 && this.contador%6 === 0){
            this.hammersNow = true
            
        } else {
            this.hammersNow = false
        }
    } 

    hammerHitTimer = () => {
        if(this.hammerHit === true && this.personaje1.character.src === this.personaje1.charArr[1]) { 
         } setTimeout(() => {
            
                this.hammerHit = false
                this.personaje1.character.src = this.personaje1.charArr[0]
            
        }, 1000)
    }
    
   
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



    // CONTROLADOR DE FRAMES Y CONTADOR :


    // 2. Dejando caer comida  -  objetos

    

    lanzandoComida = () => {
        if((this.comidaArr.length === 0 || this.frames%240 <= this.spawnFood) && this.hammersNow === false ) {
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


            let randomPosX1 = Math.random() * 660
            let randomPosX2 = Math.random() * 670
            let randomPosX3 = Math.random() * 680

            let speeds = [1, 2, 1, 3, 2]
            let randomSpeed1 = speeds[Math.floor(Math.random()*(5))]
            let randomSpeed2 = speeds[Math.floor(Math.random()*(5))]
            let randomSpeed3 = speeds[Math.floor(Math.random()*(5))]


        if ((this.objetoArr.length === 0 || this.frames%300 <= this.spawnHammersKulls) && this.contador % 2 === 0 && this.contador !== 0) {

           let objeto1 = new Objeto(randomPosX1, randomSpeed1, 0)
           this.objetoArr.push(objeto1)

           let objeto2 = new Objeto(randomPosX2, randomSpeed2, 0)
           this.objetoArr.push(objeto2)

           let objeto3 = new Objeto(randomPosX3, randomSpeed3, 0)
           this.objetoArr.push(objeto3)

        } else if(this.hammersNow === true &&  (this.hammerArr.length ===0 || this.frames%120 <= this.spawnHammersKulls)){

           let hammer1 = new Objeto(randomPosX1, randomSpeed1, 1)
           this.hammerArr.push(hammer1)

           let hammer2 = new Objeto(randomPosX2, randomSpeed2, 1)
           this.hammerArr.push(hammer2)
           
           let hammer3 = new Objeto(randomPosX3, randomSpeed3, 1)
           this.hammerArr.push(hammer3)
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
                this.personaje1.x <cadaComida.x0 +cadaComida.w &&
                this.personaje1.x + this.personaje1.w >cadaComida.x0 &&
                this.personaje1.y <cadaComida.y +cadaComida.h &&
                this.personaje1.h + this.personaje1.y >cadaComida.y && this.barW <400
              ) {
                
            
                this.comidaArr.splice(index,1) 
                
                
                this.score1 = new Score(this.personaje1.x, this.personaje1.y, 0, 40)
                this.scoreArr.push(this.score1)  

              } else if(
                this.personaje1.x <cadaComida.x0 +cadaComida.w &&
                this.personaje1.x + this.personaje1.w >cadaComida.x0 &&
                this.personaje1.y <cadaComida.y +cadaComida.h &&
                this.personaje1.h + this.personaje1.y >cadaComida.y){

                    this.comidaArr.splice(index,1)
                }
        })
    } 


    // colisionar objeto (no comida) con el personaje.
    
    obtenerObjetoEquivocado = () => {
        
        this.objetoArr.forEach((cadaObjeto, index) => {

           if (
                this.personaje1.x <cadaObjeto.x0 +cadaObjeto.w &&
                this.personaje1.x + this.personaje1.w >cadaObjeto.x0 &&
                this.personaje1.y <cadaObjeto.y +cadaObjeto.h &&
                this.personaje1.h + this.personaje1.y >cadaObjeto.y 
              ) {
        
            
                this.objetoArr.splice(index,1)
                
                this.score2 = new Score(this.personaje1.x, this.personaje1.y, 1, -40)
                this.scoreArr.push(this.score2)

              }  
            
              
        })

      //  this.gameOver()
    }

    hammerHitting = () => {
        this.hammerArr.forEach((cadaHammer, index) => {
                if(
                    cadaHammer.x0  <this.personaje1.x +this.personaje1.w &&
                    cadaHammer.x0 + cadaHammer.w >this.personaje1.x &&
                    cadaHammer.y <this.personaje1.y +this.personaje1.h &&
                    cadaHammer.h + cadaHammer.y >this.personaje1.y
                  ) { 

                   this.hammerArr.splice(index,1)
                   this.personaje1.character.src = this.personaje1.charArr[1]
                   this.score3 = new Score(this.personaje1.x, this.personaje1.y, 2, 0)
                   this.stunnedArr.push(this.score3)
                   this.hammerHit = true;
                   this.hammerHitTimer()
                   }

        })
    }

    quitandoScore = () => {
        this.scoreArr.forEach((cadaScore, index)=>{
            if(this.igorX <cadaScore.x +cadaScore.w &&
               this.igorX + this.igorW >cadaScore.x &&
               this.igorY <cadaScore.y +cadaScore.h &&
               this.igorH + this.igorY >cadaScore.y && this.barW<400) {

                    this.scoreArr.splice(index,1)
                    this.barW += cadaScore.value
                    
               } else if (this.igorX <cadaScore.x +cadaScore.w &&
               this.igorX + this.igorW >cadaScore.x &&
               this.igorY <cadaScore.y +cadaScore.h &&
               this.igorH + this.igorY >cadaScore.y ){

                    this.scoreArr.splice(index,1)
                
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
            if(eachObjeto.y >= 970) {
                this.objetoArr.splice(index,1)
            }
        })
        this.hammerArr.forEach((eachHammer, index) => {
            if(eachHammer.y >= 970) {
                this.hammerArr.splice(index,1)
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
            
            btnReStart.innerText = `
                ONLY ${this.contador}?
                IGOR IS STILL STARVING!
                `

            
        }

    }

    // 5. orden y funcionamiento del juego 

    gameLoop = () => {
        
        this.frames ++
        
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
        this.hammerArr.forEach((eachHammer) => {
            eachHammer.fallingObjeto()
        })
        
        this.obteniendoComida()
        this.obtenerObjetoEquivocado()
        this.hammerHitting()

        this.personaje1.gravityCharacter()
        this.hungerBar()
        this.scoreArr.forEach((eachScore) =>{
            if((eachScore.x > 40 || eachScore.y + eachScore.h > 40) && eachScore.value !== 0 ){ 
            eachScore.scoreMotion()
            }
        })
        
        // controlador 
        this.contadorFrames()
        this.hammersFrenzyNow()
      //  this.quitandoComida()
        this.quitandoComida()
        this.quitandoObjetos()
        this.quitandoScore()
        

        // 3. Dibujado de los elementos.

        this.drawBackground()
        

       // this.personaje1.drawCharacter()
        if(this.humo === true){
            this.teleArr.forEach((elem) =>{
                elem.x = this.personaje1.x -20
                elem.y = this.personaje1.y +50
                elem.w = 100
                elem.h = 30
                elem.drawTeleport()
            })
        }
        if(this.personaje1.y >= 920 && this.hammerHit === false){
            this.personaje1.character.src=this.personaje1.charArr[0]

        this.personaje1.drawCharacter()
        } else {
            this.personaje1.drawCharacter()
        }

        this.comidaArr.forEach((eachComida) => {
            eachComida.drawComida()
        })

        this.objetoArr.forEach((eachObjeto) => {
            eachObjeto.drawObjeto()
        })
        //agregando funcion para dibujar solo martillos (hammers)
        this.hammerArr.forEach((eachHammer)=>{
            eachHammer.drawObjeto()
        })

        this.drawHungerBar()
        this.drawIgorImage()

        this.scoreArr.forEach((eachScore)=> {
            eachScore.drawScore()
        
        })
        this.stunnedArr.forEach((eachStun)=>{ 
            eachStun.drawScore()
            
          if(this.frames % 120 ===0)
           {   this.stunnedArr.splice(eachStun, 1) }
        
        
    })
        
        
        // 4. Recursion y control
        if(this.gameRunning === true) { 
        requestAnimationFrame(this.gameLoop)
        } else {
            this.drawFailedImage()
        }
        
    }

}

