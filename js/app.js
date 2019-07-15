/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked


let game;

$("#btn__reset").click(function () {
  $('#overlay').show();
  game = new Game();
  game.startGame();
  game.resetGame();
});



$("body").keydown(function (e) {
  let pattern = /^[a-zA-Z]$/;
  if (pattern.test(e.key)) {
    game.handleInteraction(e.key)
  }
});

$("#qwerty .key").on('click', function (e) {
  game.handleInteraction(e);
});


//make variable for keys
//game win when all placeholders are correct
//
