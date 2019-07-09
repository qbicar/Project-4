/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game to be clicked

//on screen keyboard to listen

 btn__reset.addEventListener("click", function(e){

});


$(function(){ 
    let move = 0;
    setInterval(function() {
        move+=1;
        $('.start').css('background-position', move + 'px'); 
        
    })
}) 

//physical keyboard to listen "keyup"