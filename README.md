
# HUNGRY IGOR


## [Play the Game](www.your-deploy-url-here.com)


# Description

Hungry Igor is a game inspired in dogs appetite. The game starts with the player located in the middle-bottom part of the screen and has the difficult task of catching food for a hungry dog in order to keep the hunger bar as full as possible, the player can also move horizontally and teleport in a diagonal way for short distances. The food is falling constantly from the air in different directions, but be aware, there are also some non-food objects that the player must avoid and also the hunger bar is decreasing in time. The game ends when the hunger bar gets to 0. 


# MVP (DOM - CANVAS)

- The game has 1 Player that moves hortizontally
- Random food  and non-food objects fall from the top in random positions and different speeds.
- All objects including food fall at the begining from the same point and spread around  to different horizontal points.
- food must dissapear when collide with the player.
- non-food objects must also dissapear when colliding with the player.


# Backlog Functionalities (BONUSES)

- Ability for player to teleport in diagonals.
- hunger bar and make it decrease in time.
- Hammers that would stunn the player when colliding for 2 secs.
- Score animation when player catching foor or non-food objects.
- When player teleports, player image should change and add a short effect.
- Difficulty increas in time, hunger bar decreases faster, more non-food objects falling and also hammers quantity increases considerably.


# Proyect Structure



## main.js

- General Variables
- gaming(){
    games.gameLoop()
    }
- moveChar(){}
- newGame(){}
- addEventListener's

## game.js

- Game () {
    this.persobaje1;
}
- contadorFrames(){}
- hammersFrenzyNow(){}
- hammerHitTimer(){}
- drawBackground(){}
- .
- .
- .
- obteniendoComida(){}
- obteniendoObjetoEquivocado(){}
- gameLoop(){
    requestAnimationFrame(){}
  }

## personaje.js 

- constructor () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawTeleport (){}
- drawCharacter (){}
- moveCharacter (){}
- jumpCharacterRight (){}
- jumpCharacterLeft (){}
- gravityCharacter (){}

## objetos.js

- constructor (){}
- drawObjeto (){}
- fallingObjeto (){}

## comida.js

- constructor (){}
- drawComida (){}
- fallingComida (){}


## score.js

- constructor (){}
- drawScore (){}
- scoreAnimation (){}
- scoreMotion (){}


# States and Transitions

- Main Screen
- Game running Screen
- GameOver screen


# Extra Links

### Slides
[Link] https://avikhal.github.io/Project---1/