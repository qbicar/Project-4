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



document.addEventListener('keydown', function (event) {
  const keyPressed = event.key.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const allKeys = document.getElementsByClassName('key');
  if (alphabet.includes(keyPressed)) {
      for (let key of allKeys) {
          if (key.innerText == keyPressed) {
              key.click();
          }
      }
  }
});



$("#qwerty .key").on('click', function (e) {
  game.handleInteraction(e);
});


//make variable for keys
//game win when all placeholders are correct
//
