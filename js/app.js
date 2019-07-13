/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked


let game;

 $("#btn__reset").click(function(){
     $('#overlay').show();
     //resetGame();
    game = new Game();
     game.startGame();
});

//let $button = $(".key")

// $("#qwerty").keyup(this.handleInteraction){

// });


$("#qwerty .key").on('click',function(e){
    let button = $(e.target);
    game.handleInteraction(button)
        });


// $(button).keyup()

// });

// this.handleInteraction(button); {
//      console.log(button)
//  };
//(`.key`).forEach(button => {
  //  if (button.textContent === this && ("disabled", true))
//physical keyboard to listen "keyup"