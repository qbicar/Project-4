/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



// created a game class with a constructor with no paramter passed
class Game {
    constructor() {
        this.missed = 0;                        //missed is set to 0
        this.phrases = [                        // phrases created in a array
            new Phrase("Art"),
            new Phrase("Nail Polish"),
            new Phrase("Color Palette"),
            new Phrase("Balloons"),
            new Phrase("Crayons")];
        this.activePhrase = 'null';            //activePhrase set to null
    }
    //will randomize phrases & return one
    getRandomPhrase() {
        let randoPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randoPhrase;
    }
    //startGame is what is displayed when game starts
    startGame() {
        $('#phrase ul ').empty();               //phase ul will be empty so only placeholders will display
        $('#overlay').hide();                   // start overlay will hide & display game
        this.activePhrase = this.getRandomPhrase(); //phrase will be selected
        this.activePhrase.addPhraseToDisplay();     

    }
    //will handle the user interaction
    handleInteraction(e) {  
        let guessed = $(e.target).text();                   //guessed is eqal to e.target(e.key) and text (object)
        $(e.target).prop("disabled", true);                 //e.target will be disabled when user selects a key 
        if (this.activePhrase.checkLetter(guessed)) {			//if checkletter and show matched letter matches to guess					
            this.activePhrase.showMatchedLetter(guessed);
            $(e.target).addClass('chosen');                     //chosen will display (correct)
            if (this.checkForWin()) {                           // will check for win
                this.gameOver();                                // will display game over if won or lost
            }
        } else {
            this.removeLife();                                  // else will remove life and place wrong css on key.
            $(e.target).addClass('wrong');
        }
    }
    //will check if user won
    checkForWin() {

        return ($('#phrase ul .hide').length === 0);  //will return if phrase ul . hide is filled out completly
    }
    //remove life will remove a life when and input is incorrect
    removeLife() {

        const lives = $('#scoreboard li');              //lives is set as scoreboard li for blue heart images
        const lostLives = "images/lostHeart.png";       //lostLives is set as lost heart images (grey Hearts)
        lives.eq(this.missed).children().attr("src", lostLives) //for lives equal this.missed and its children a lostLives heart will display
        this.missed++;                                  // this missed will increase one by one until it reaches 5
        if (this.missed === 5) {                           //if 5 hearts are missed game.over will display
            this.gameOver()
        }

    }
    //game over will display message if won or lost
    gameOver() {
        $('#overlay').show();           //overlay will display
        $('#qwerty .key').prop("disabled", true);   //keyboard will be disabled on click 
        if (this.missed === 5) {            //if 5 misses game will be over and lose screen will be displayed
            $('.title').text("Sorry , TRY AGAIN!")
            $('#game-over-message').text("'Winners Never Quit'").css("color", "white");
            overlay.className = "lose"
        } else {                            //else won screen will be displayed
            $('.title').text("Congrats YOU WON!")
            $('#game-over-message').text("'Lets Play Again'").css("color", "black");
            overlay.className = "win"
        }

    }// reset game will reset the screen whenn button reset is clicked
    resetGame() {

        $('#overlay').className = "start";                  //start overlay will be displayed
        document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = "images/liveHeart.png") //hearts will reset from grey to blue hearts
        $('#qwerty .key').prop("disabled", false);          // keyboard will not be disabled
        $('#qwerty .key').removeClass('chosen');            //class of wrong and chosen colors will be removed
        $('#qwerty .key').removeClass('wrong');
    }

}
//reset method()
