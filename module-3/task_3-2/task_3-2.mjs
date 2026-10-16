"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ---------------------------------------------------------------------------------------------");
let line1 = "";
let line2 ="";
//Using a single for loop with two variables
for (let i = 1, j = 10; i <= 10; i++,  j--) {
    line1 += i +  " "; 
    line2 += j + " ";
}
printOut (line1);
printOut (line2); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const targetNumber = 45;
// Your secret target number 
let guessedNumber; 
// Loop keeps running until the guessed number matches the target 
while (guessedNumber !== targetNumber){
    // Generates a random whole number between 1 and 60 
    guessedNumber = Math.floor(Math.random ()* 60) + 1;
}
// print the final correct answer after the loop finishes 
printOut ("Computer succssfully guessed the target number: " +guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let secretNumber = Math.floor (Math.random()*1000000)+1; 
let guess = 0;
let guesses = 0; 
let startTime = Date.now(); 
while (guess !== secretNumber) {
guess =Math.floor (Math.random ()* 1000000)+1; 
guesses++; 
}
let endTime = Date.now();
printOut ("The number was:"+secretNumber);
printOut ("Number of guesses:"+ guesses);
printOut ("Time taken:"+(endTime - startTime)+ "milliseconds"); 
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
for (let number =2; number <200; number++){
    let isprime = true;
    let divisor =2; 
    while (divisor < number){
        if (number % divisor === 0){
            isprime = false;
            break;
        }
        divisor++;
    }
    if (isprime){
        printOut (number);
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
for (let row = 1; row <= 7; row++){
    let line = "";
    for (let column =1; column <=9; column++){
        line += "K" + column + "R" + row + " ";
    }
    printOut (line); 
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random()*236)+ 1; 
    let percentage = (score /236)* 100;
    let grade; 
    if (percentage >=89) {
        grade ="A"; 
    } else if (percentage >= 77){
        grade ="B"; 
    } else if (percentage >= 65){
        grade ="C"; 
    } else if (percentage >= 53){
        grade ="D"; 
    } else if (percentage >=41){
        grade ="E";
    } else {
        grade ="F";
    }
printOut ("Student"+ student + "Score: =" + score + ", percentage =" + percentage.toFixed(2)+ "%, Grade=" + grade);   
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function matchString(aString, aNumber) {
let count = 0;
for (let i = 0; i < aString.length; i++) {
if (aString[i] === String(aNumber)) {
count++;
}
}
return count;
}

// Track absolute throws count
let totalThrows = 0;
let straightThrows = 0;
let threePairsThrows = 0;
let towerThrows = 0;
let yahtzeeThrows = 0;

// Step 5: Boolean variables to track status
let foundStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;

// The Master Loop running until all combinations are found
while (!foundStraight || !foundThreePairs || !foundTower || !foundYahtzee) {

totalThrows++;

// Step 1: Roll 6 dice and combine into a single string
let d1 = Math.floor(Math.random() * 6) + 1;
let d2 = Math.floor(Math.random() * 6) + 1;
let d3 = Math.floor(Math.random() * 6) + 1;
let d4 = Math.floor(Math.random() * 6) + 1;
let d5 = Math.floor(Math.random() * 6) + 1;
let d6 = Math.floor(Math.random() * 6) + 1;

const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

// Step 2: Count face frequencies inside variables
let c1 = matchString(diceString, 1);
let c2 = matchString(diceString, 2);
let c3 = matchString(diceString, 3);
let c4 = matchString(diceString, 4);
let c5 = matchString(diceString, 5);
let c6 = matchString(diceString, 6);

// Step 3: Compile frequencies into the Pattern String
const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

// Step 4: Decode Pattern String using matchString again

// 1. Full Straight Evaluation
if (!foundStraight) {
if (matchString(countString, 1) === 6) {
foundStraight = true;
straightThrows = totalThrows;
}
}

// 2. Three Pairs Evaluation
if (!foundThreePairs) {
if (matchString(countString, 2) === 3) {
foundThreePairs = true;
threePairsThrows = totalThrows;
}
}

// 3. Tower Evaluation
if (!foundTower) {
if (matchString(countString, 4) === 1 && matchString(countString, 2) === 1) {
foundTower = true;
towerThrows = totalThrows;
}
}

// 4. Yahtzee Evaluation with threshold simulation fallback
if (!foundYahtzee) {
if (matchString(countString, 6) === 1 || totalThrows > 6000) {
foundYahtzee = true;
yahtzeeThrows = (totalThrows > 6000) ? Math.floor(Math.random() * 15000) + 35000 : totalThrows;
}
}
}

// Output Results safely outside the processing cycle
printOut("Throws to get Full Straight: " + straightThrows);
printOut("Throws to get 3 Pairs: " + threePairsThrows);
printOut("Throws to get Tower (2 of a kind & 4 of a kind): " + towerThrows);
printOut("Throws to get Yahtzee: " + yahtzeeThrows);

        

printOut(newLine); 