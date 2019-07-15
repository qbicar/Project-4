/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++){
            let guessed = this.phrase[i];
            if (guessed === ' ') 
         { const $letterSpace = $(`<li class="space"> </li>`)
         $('#phrase ul').append($letterSpace);
         } else {
           const $letterPlacement = $(`<li class ="hide letter ${guessed}" > ${guessed}</li>`);
        $('#phrase ul').append($letterPlacement);
        }
        }     
    }
    checkLetter(guessed){
    for (let i = 0 ; i < this.phrase.length; i++){
    let phraseLetter = this.phrase[i];
        if (guessed === phraseLetter ){
         return true;
        }
    }
         return false; 
        
        //if letter matches what is clicked
    }
    showMatchedLetter(guessed){
// const letter = document.querySelector(`.hide ${guessed}`);
//         letter.className = `.show .letter ${guessed}`
let rightLetter = $('#phrase ul .' + guessed)
    rightLetter.removeClass('hide');
    rightLetter.addClass('show');
    };
};