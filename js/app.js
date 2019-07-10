/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked

//on screen keyboard to listen
const game = new Game();
game.startGame();
console.log(`Active phrase - phrase: ${game.activePhrase.phrase}`);
//  const game = new Game();

 btn__reset.addEventListener.on("click", function(e){
     $('#overlay').show();
     startGame ();
});


$(function(){ 
    let move = 0;
    setInterval(function() {
        move+=1;
        $('.start').css('background-position', move + 'px'); 
        
    })
}) 

//physical keyboard to listen "keyup"