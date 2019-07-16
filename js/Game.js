/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */




class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Art"),
            new Phrase("Nail Polish"),
            new Phrase("Color Palette"),
            new Phrase("Balloons"),
            new Phrase("Crayons")];
        this.activePhrase = 'null';
    }
    getRandomPhrase() {
        let randoPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randoPhrase;
    }
    startGame() {
        //$('#banner').show();
        $('#phrase ul ').empty();
        //make a variable for keys and change this.handleInteraction to variable
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }
    handleInteraction(e) {
        let guessed = $(e.target).text();
        $(e.target).prop("disabled", true);
        if (this.activePhrase.checkLetter(guessed)) {									//displayed 
            this.activePhrase.showMatchedLetter(guessed);
            $(e.target).addClass('chosen');
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            this.removeLife();
            $(e.target).addClass('wrong');
        }
    }
    checkForWin() {

        return ($('#phrase ul .hide').length === 0);
    }
    removeLife() {

        const lives = $('#scoreboard li');
        const lostLives = "images/lostHeart.png";
        lives.eq(this.missed).children().attr("src", lostLives)
        this.missed++;
        if (this.missed === 5) {
            this.gameOver()
        }

    }
    gameOver() {
        $('#overlay').show();

        if (this.missed === 5) {
            $('.title').text("Sorry , TRY AGAIN!")
            $('#game-over-message').text("'Winners Never Quit'")
            overlay.className = "lose"
        } else {
            $('.title').text("Congrats YOU WON!")
            $('#game-over-message').text("'Winners Do What Losers Dont'")
            overlay.className = "win"
        }

    }
    resetGame() {

        $('#overlay').className = "start";
        document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = "images/liveHeart.png")
        $('#qwerty .key').prop("disabled", false);
        $('#qwerty .key').removeClass('chosen');
        $('#qwerty .key').removeClass('wrong');
    }

}
//reset method()
