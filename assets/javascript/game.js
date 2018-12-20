$(document).ready(function(){
    
    var randomNumber = 0;
    var greenNumber = 0;
    var redGemNmbr = 0;
    var yellowGemNmbr = 0;
    var prpleGemNbr = 0;

    function randomNumberGenerator() {
		//Generate random number and display it under Random Number on HTML doc
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19; // returns a number between 19 and 120
		console.log("The Random Number is: " + randomNumber); //Checking via console

		
		$("#randomNumberId").html(randomNumber);
}

//Create a function that generates the random numbers and assign them to each gem
function randomGemValuesGenerator() {
    //Green Diamond
 greenGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
 console.log("The Green Diamond's value is: " + greenGemNmbr); //Checking via console

 //Red Diamond
 redGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
 console.log("The Red Diamond's value is: " + redGemNmbr); //Checking via console

 //Yellow Diamond
 yellowGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
 console.log("The Yellow Diamond's value is: " + yellowGemNmbr); //Checking via console

 //Purple Diamond
 purpleGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
 console.log("The Purple Diamond's value is: " + purpleGemNmbr); //Checking via console
}

//======

//Call the functions above to start the game the first time:

 randomNumberGenerator();
 randomGemValuesGenerator();
 
//======

//Create a variable for the Total Score that will be updated
var yourScoreIs = 0;
var wins = 0;
var losses = 0;

//Everytime each crystal is clicked, add each crystal's value to the Total Score and display it
 //Green Diamond
 $("#greenGem").on("click", function() {
     yourScoreIs = yourScoreIs + greenGemNmbr;
     console.log(yourScoreIs); //Checking via console
     $("#yourScore").html(yourScoreIs);

     //Conditions for win or lose are checked after every click

         //When user wins, update wins, update message
         if (yourScoreIs === randomNumber) {
             wins = wins + 1;
             $("#wins").html("Wins: " + wins);
             $("#message").html("YOU WIN");
             console.log("YOU WIN");
             //Reset Your Score, Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }

         //When user loses, update losses, update message, reset Random Number and Gem Values
         if (yourScoreIs > randomNumber) {
             losses = losses + 1;
             $("#losses").html("Losses: " + losses);
             $("#message").html("YOU LOSE");
             console.log("YOU LOSE");
             //Reset Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }
 });

 //Red Diamond
 $("#redGem").on("click", function() {
     yourScoreIs = yourScoreIs + redGemNmbr;
     console.log(yourScoreIs); //Checking via console
     $("#yourScore").html(yourScoreIs);

     //Conditions for win or lose are checked after every click

         //When user wins, update wins, update message
         if (yourScoreIs === randomNumber) {
             wins = wins + 1;
             $("#wins").html("Wins: " + wins);
             $("#message").html("YOU WIN");
             console.log("YOU WIN");
             //Reset Your Score, Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }

         //When user loses, update losses, update message, reset Random Number and Gem Values
         if (yourScoreIs > randomNumber) {
             losses = losses + 1;
             $("#losses").html("Losses: " + losses);
             $("#message").html("YOU LOSE");
             console.log("YOU LOSE");
             //Reset Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }
 });
 
 //Yellow Diamond
 $("#yellowGem").on("click", function() {
     yourScoreIs = yourScoreIs + yellowGemNmbr;
     console.log(yourScoreIs); //Checking via console
     $("#yourScore").html(yourScoreIs);

     //Conditions for win or lose are checked after every click

         //When user wins, update wins, update message
         if (yourScoreIs === randomNumber) {
             wins = wins + 1;
             $("#wins").html("Wins: " + wins);
             $("#message").html("YOU WIN");
             console.log("YOU WIN");
             //Reset Your Score, Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }

         //When user loses, update losses, update message, reset Random Number and Gem Values
         if (yourScoreIs > randomNumber) {
             losses = losses + 1;
             $("#losses").html("Losses: " + losses);
             $("#message").html("YOU LOSE");
             console.log("YOU LOSE");
             //Reset Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }
 });

 //Purple Diamond
 $("#purpleGem").on("click", function() {
     yourScoreIs = yourScoreIs + purpleGemNmbr;
     console.log(yourScoreIs); //Checking via console
     $("#yourScore").html(yourScoreIs);

     //Conditions for win or lose are checked after every click


         //When user wins, update wins, update message
         if (yourScoreIs === randomNumber) {
             wins = wins + 1;
             $("#wins").html("Wins: " + wins);
             $("#message").html("YOU WIN");
             console.log("YOU WIN");
             //Reset Your Score, Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }

         //When user loses, update losses, update message, reset Random Number and Gem Values
         if (yourScoreIs > randomNumber) {
             losses = losses + 1;
             $("#losses").html("Losses: " + losses);
             $("#message").html("YOU LOSE");
             console.log("YOU LOSE");
             //Reset Random Number and Gem Values
             randomNumberGenerator();
             randomGemValuesGenerator();
             yourScoreIs = 0;
             $("#yourScore").html(yourScoreIs);
         }
 });

//======

//Reset Game Stats
 //When the user clicks on the reset button, reset all game stats:
 $("#reset").on("click", function() {
     wins = 0;
     losses = 0;
     yourScoreIs = 0;
     $("#wins").html("Wins: " + 0);
     $("#losses").html("Losses: " + 0);
     $("#yourScore").html(yourScoreIs);
     $("#message").html();
     randomNumberGenerator();
     randomGemValuesGenerator();
 });

// All code STOPS here:

});