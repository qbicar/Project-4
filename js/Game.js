/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */




class Game {
    constructor () {
        this.missed= 0;
        this.phrases= [
        new Phrase("Art"),
        new Phrase("Nail Polish"),
        new Phrase("Color Palette"),
        new Phrase("Balloons"),
        new Phrase("Crayons")];
        this.activePhrase= 'null'  ;
    }
    getRandomPhrase(){
        let randoPhrase = this.phrases[Math.floor(Math.random()* this.phrases.length)];
        return randoPhrase;
    }
    startGame() {
        $('#banner').show();
        $('#phrase ul ').show();
        document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = "images/liveHeart.png")
        document.querySelectorAll(`button[disabled]`).forEach(button => {
			button.disabled = false;
			button.className = `key`;
        });
        document.addEventListener('keyup', keyInt );
    //make a variable for keys and change this.handleInteraction to variable
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
      }
      handleInteraction(guessed){
        if (this.activePhrase.checkLetter(guessed)) {														//displayed else a life is removed
            this.activePhrase.showMatchedLetter(guessed)
                this.checkForWin()
                guessed.addClass('chosen')
            }else {
                this.removeLife();
                guessed.addClass('wrong');

            }    
    }
      checkForWin(){
          
        return $('#phrase ul .hide').length === 0  
  }     
      removeLife(){
       
       const lives = $('#scoreboard li');
       const lostLives = "images/lostHeart.png";
        if (this.missed < 5) {
            lives.eq(this.missed).children().attr("src",lostLives)
            this.missed ++; }
            else{
        this.gameOver(false);
        }
    }
     gameOver(){
        $('#overlay').show();
        if (this.missed === 5){
            $('.title').text("Sorry , TRY AGAIN!")
            $('#game-over-message').text("'Winners Never Quit'")
            overlay.className = "lose"
        } else {
            $('.title').text("Congrats YOU WON!")
            $('#game-over-message').text("'Winners Do What Losers Dont'")
            overlay.className = "win"
        }
        
    }
    resetGame(){
        $('#overlay').className = "start";
        $('#phrase ul .').hide();
    }
  
}
//reset method()
