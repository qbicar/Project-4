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
      handleInteraction(){
        this.checkLetter();
        this.showMatchedLetter();
        this.checkForWin();
        this.gameOver();
      }
      checkForWin(){
        if (this.phrase < 0) {return true;}
        {
    } return false ;
}
      removeLife(){
        let $lives = $('#scoreboard li');
        let $lifeToRemove = $lives.eq(this.missed);
        $lifeToRemove.attr('src','images/lostHeart.png') 
        game.forEach(this.missed += 1);
        if (this.missed === 5) {
            this.gameOver()
        }   
    }     
     gameOver(gameWon){
        $('#overlay').show();
        let $winner = $('#game-over-message').text("Congrats YOU WON!")
        $('#overlay').replaceWith().css(win)
        if (gameWon === $winner){
            return true;
        }


}

}
//reset method()
