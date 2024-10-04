// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {      //If button that was just clicked IS submit -- called by using the custom data attribute created
                alert("You clicked Submit!");                       //Show this alert!!
            } else {                                                //Otherwise do the following
                let gameType = this.getAttribute("data-type");      //Take the custom attribute and assign it to a variable
                //alert(`You clicked ${gameType}`);                   Pass an alert to say which game was picked -- using template literals and the variable
                runGame(gameType);                                  //Start the game with whatever gameType was selected - removes need for previous line
            }
        });
    }
    //Addition game to start as soon as the game is loaded
    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {                                        //gameType passed as an argument for the function

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;                  // Math.floor = round down
    let num2 = Math.floor(Math.random() * 25) + 1;                  // Math.random = 0-1 as decimals
    // * 25 to make it 0-25. +1 to make it 1-25

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}