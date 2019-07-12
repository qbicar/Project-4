/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked


let game;

 $("#btn__reset").click(function(){
     $('#overlay').show();
    game = new Game();
     game.startGame();
});

let $button = $(".key")

// $("#qwerty").keyup(this.handleInteraction){

// });


$("#qwerty .key").on('keyup',function(e){
    game.this.handleInteraction(e);
});


// $(button).keyup()

// });

// this.handleInteraction(button); {
//      console.log(button)
//  };

//physical keyboard to listen "keyup"