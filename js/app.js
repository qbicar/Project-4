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

$('.key').keyup(function(){
game.handleInteraction();
});


//physical keyboard to listen "keyup"