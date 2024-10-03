//Wait for the DOM to finish loading before running this game
//Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {   //If button that was just clicked IS submit -- called by using the custom data attribute created
                alert('You clicked submit');                     //Show this alert!!
            } else {                                             //Otherwise do the following
                let gameType = this.getAttribute('data-type');   //Take the custom attribute and assign it to a variable
                alert(`You clicked ${gameType}`);                //Pass an alert to say which game was picked -- using template literals and the variable
            }
        })
    }
})

/**
 * The main game 'loop' called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {
    //Creates two random numbers between 1-25
    let num1 = Math.floor(Math.random()*25);
    let num2 = Math.floor(Math.random()*25);
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion) {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}