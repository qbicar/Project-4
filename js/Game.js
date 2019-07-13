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
        //let lostLives = "img/lostHeart.png"
        document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = "images/liveHeart.png")
        // document.querySelectorAll(`button[disabled]`).forEach(button => {
		// 	button.disabled = false;
		// 	button.className = `key`;
		// });
    
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
      }
      handleInteraction(guessed){
        if (this.activePhrase.checkLetter()=== guessed){														//displayed else a life is removed
			this.activePhrase.showMatchedLetter()=== guessed;
			this.checkForWin();
		} else
			this.removeLife();
        //  let guessed = $(e.target).text();
       
       //  $(e.target).prop("disabled", true);
        //  if (this.activePhrase.checkLetter(guessed)){
          
        //     this.activePhrase.showMatchedLetter(guessed)
            
        //     $(event.target).addClass('chosen');
        //     if (this.checkForWin()){
        //         this.gameOver();
        //     }
        //     } else{
        //     this.removeLife();
        //     $(e.target).addClass('wrong');
        // };
        // this.checkLetter();
        // this.showMatchedLetter();
        // this.checkForWin();
        // // this.removeLife();
        // this.gameOver();
        // this.resetGame();
      }
      checkForWin(){
          let results = false;
        if (parseInt($('#phrase ul .hide').length) === 0){
            this.gameOver(true);
           results = true;
        } 
            return results;
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
            $('#game-over-message').text("''")
            overlay.className = "win"
        }
        
    }
    resetGame(){
        $('#overlay').className = "start";
        //$('#phrase ul').hide();
        //lostLives.attr("src" , lives) 
    }

}
//reset method()
