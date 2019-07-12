/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++){
            let letter = this.phrase[i];
            if (letter === ' ') 
         { const $letterSpace = $(`<li class="space"> </li>`)
         $('#phrase ul').append($letterSpace);
         } else {
           const $letterPlacement = $(`<li class ="hide letter ${letter}" > ${letter}</li>`);
        $('#phrase ul').append($letterPlacement);
        }
        }     
    }
    checkLetter(guessed){
    for (let i = 0 ; i < this.phrase.length; i++){
    let phraseLetter = this.phrase[i];
        if (guessed === phraseLetter){
         return true;
        }console.log(this.checkLetter);
    }
         return false; 
        
        //if letter matches what is clicked
    }
    showMatchedLetter(guessed){
       
    let $rightLetter = $('#phrase ul .' + guessed)
    $rightLetter.removeClass('hide')
    $rightLetter.addClass('show')
        //revels the letter on the board
    }
}
// let $rightLetter = $('#phrase ul .' + guessed)
// $rightLetter.removeClass('hide')
// $rightLetter.addClass('show')

  // if (guessed == this.phrase){
        //     $letterPlacement.show();
        // }else{
        //     $letterPlacement.hide();
        // }


//loop through 
//add phrase to display
//check letter method ()
//show matchedletter method ()