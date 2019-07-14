/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked


let game;

 $("#btn__reset").click(function(){
    $('#overlay').show();
    game = new Game();
     game.startGame();
     game.resetGame();
});

const buttonDisable = guessed => {	
  if	(guessed === true) {										//marks the received key
	guessed.disabled = true;
  guessed.className += ` chosen`;
  }
}


const keyInt = e =>{
  if (/^[a-zA-Z]$/.test(e.key)){											//in the game class instance
		document.querySelectorAll('.key').forEach(button => {
			if (button.textContent === e.key && !button.disabled){
				game.handleInteraction(e.key);
				buttonDisable(button);
        return;
      }
 })
    }
 }

 document.addEventListener('keydown', keyInt) = e => {
    game.handleInteraction(e);
 }
$("#qwerty .key").on('click',function(e){
  if (e.target.tagName === `BUTTON`){										//handles the interaction
	buttonDisable(e.target);
    game.handleInteraction(e.target.textContent);
    
	}
  
  });
//make variable for keys
//game win when all placeholders are correct
//
