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
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
      }
      handleInteraction(e){
          let $guessed = $(e.target).text();
          $(e.target).prop("disabled", true);
        if (this.activePhrase.checkLetter($guessed)){
            this.activePhrase.showMatchedLetter($guessed)
            $(event.target).addClass('chosen');
            if (this.checkForWin()){
                this.gameOver();
            }
            } else{
            this.removeLife();
            $(e.target).addClass('wrong');
        };
        // this.checkLetter();
        this.showMatchedLetter();
        this.checkForWin();
        // this.removeLife();
        this.gameOver();
        this.resetGame();
      }
      checkForWin(){
          let results = false;
        if (parseInt($('#phrase ul .hide').length) === 0){
            this.gameOver();
           results = true;
        } 
            return results;
    }     

      removeLife(){
        
       const lives = $('#scoreboard li');
       const lostLives = "images/lostHeart.png";
        let lifeToRemove = lives.eq(this.missed);
        let newHeart = lifeToRemove.children().first();
        newHeart.attr("src" , lostLives) ;
        this.missed +=1; 
        if (this.missed === 5) {
        this.gameOver();
        }
    }
     gameOver(){
        $('#overlay').show();
        if (this.missed === 5){
            $('#game-over-message').text("Sorry , TRY AGAIN!")
            overlay.className = "lose"
        } else {
            $('#game-over-message').text("Congrats YOU WON!")
            overlay.className = "win"
        }

    }
    resetGame(){
        $('#overlay').show();
        $('#phrase ul').hide();
    }

}
//reset method()
