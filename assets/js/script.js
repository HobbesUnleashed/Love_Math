// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {      //If button that was just clicked IS submit -- called by using the custom data attribute created
                //alert("You clicked Submit!");                       Show this alert!!
                checkAnswer();                                      //Call this function to find the answer
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

    if (gameType === "addition") {                                  //If game is addition
        displayAdditionQuestion(num1, num2);                        //Display addition question - passing num1 + num2 as arguments
    } else {                                                        //Otherwise
        alert(`Unknown game type: ${gameType}`);                    //Display this alert to the user
        throw `Unknown game type: ${gameType}. Aborting!`;          //Send this alert to the console
    }

}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);     //Take the value entered by the user and assign to variable
    let calculatedAnswer = calculateCorrectAnswer();                            //Run the calculateCorrectAnswer function and assign output to variable
    let isCorrect = userAnswer === calculatedAnswer[0];                         //Compare previous 2 variables to see if exactly the same and assign to variable

    if (isCorrect) {                                                            //If correct - display this message to user
        alert('Hey! You got it right! :D');
    } else {                                                                    //Otherwise show their answer and the correct
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);                                               //Run the next game using the second part of the calculatedAnswer array
}

/**
 * Gets the operands (the numbers) and the operator (+, -, *, /)
 * directly from the dom, and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);     //Get value from the DOM - ParseInt to make it a full number
    let operand2 = parseInt(document.getElementById('operand2').innerText);     //Find the value of the operand that is currently displayed (text content)
    let operator = document.getElementById('operator').innerText;               //Not a number so no ParseInt here

    if (operator === '+') {                                                     //If operator is exactly equal to
        return [operand1 + operand2, 'addition'];                               //Return the correct answer as an array [answer, nextGame]
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;     //Call the element by its ID
    document.getElementById('operand2').textContent = operand2;     //Make the content of the ID the argument that was passed
    document.getElementById('operator').textContent = "+";          //Operator will remain static for the function
    
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}