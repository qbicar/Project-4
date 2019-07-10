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
        let letterPlacement = $(`<li class="hide letter">${letter}</li>`);
        // let letterSpace = $(`<li class="space"> </li>`)
        $('#phrase').append(letterPlacement);
        }     
    }
}
    //     <li class="hide letter h">h</li>
    //     <li class="hide letter o">o</li>
    //     <li class="hide letter w">w</li>
    //     <li class="space"> </li>
    //     <li class="hide letter a">a</li>
    //     <li class="hide letter r">r</li>
    //     <li class="hide letter e">e</li>
    //     <li class="space"> </li>
    //     <li class="hide letter y">y</li>
    //     <li class="hide letter o">o</li>
    //     <li class="hide letter u">u</li>
    // </ul>
//add black boxes to display phrase
//loop through 
//add phrase to display
//check letter method ()
//show matchedletter method ()