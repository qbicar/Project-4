/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//created a class phrase with the constructor and passed phrase it 

class Phrase {              
    constructor (phrase){
        this.phrase = phrase.toLowerCase();         //set phrase to a variable of phrase and made the phrases lower case
    }
//this will display my phrases
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++){       //for loop created to loop through my phrases and will create boxes for the length of them
            let guessed = this.phrase[i];                   // guessed is set as my phrases and loop equation
            if (guessed === ' ')                            // if guessed is empty it will append a space which is set as variable letterspace
         { const $letterSpace = $(`<li class="space"> </li>`)
         $('#phrase ul').append($letterSpace);              
         } else {
           const $letterPlacement = $(`<li class ="hide letter ${guessed}" > ${guessed}</li>`); //if guess is the length of phrase[i] it will display empty boxes for that phrase
        $('#phrase ul').append($letterPlacement);           //will append letterplace to phrase ul section
        }
        }     
    }
    //checkLetter will check to see if my guessed (key clicked) is in the phrase
    checkLetter(guessed){                                   
    for (let i = 0 ; i < this.phrase.length; i++){
    let phraseLetter = this.phrase[i];
        if (guessed === phraseLetter ){                      //if guessed is equal to the phrase[i] it will return true , if not it will be false  
         return true;                                        
        }
    }
         return false; 
        
       
    } 
    //if letter matches what is clicked
    showMatchedLetter(guessed){
let rightLetter = $('#phrase ul .' + guessed)               //phrase ul. + guessed is where my phrase is located in placeholder and what i select to display
    rightLetter.removeClass('hide');                        // remove class 'hide' (space)
    rightLetter.addClass('show');                           // show class show (letter space)
    };
};