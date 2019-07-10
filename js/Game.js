/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */




class Game {
    constructor () {
        this.missed= 0;
        this.phrases= [
        new Phrase("Sun"),
        new Phrase("Milky Way"),
        new Phrase("Jupiter"),
        new Phrase("Black Hole"),
        new Phrase("Shooting Star")];
        this.activePhrase= `null`  ;
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
}

//startgame()

//reset method()
//handleInteraction()
//checkfor win()
//remove life()
//game over ()