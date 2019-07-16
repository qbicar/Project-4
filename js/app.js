/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked


let game;   //game is set to an empty variable

$("#btn__reset").click(function () {  //event click for btn reset button . on click button will display
  $('#overlay').show();               // the overlay,
  game = new Game();                  // will set game to call a new game ,
  game.startGame();                   // game will startgame method & 
  game.resetGame();                   // will reset game.
});

// keydown Event listenter to listen to the keyboard
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key.toLowerCase();           //event.key = button .key objects
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';        //a-z pattern to match keyboard
  const allKeys = document.getElementsByClassName('key'); //all keys is set as an variable to identify  key .button for all keys
  if (alphabet.includes(keyPressed)) {                    // if alphabelet includes e.key (objects) 
    for (let key of allKeys) {                          // for html element key of all html keys,
      if (key.innerText == keyPressed) {              // & if the event key that is pressed is = to the letter on the keyboard 
        key.click();
      }
    }
  }
});

// on click for on screen keyboard & will perform activity that is in my hndle Interaction (disable, etc)
$("#qwerty .key").on('click', function (e) {
  game.handleInteraction(e);
});


//make variable for keys
//game win when all placeholders are correct
//
