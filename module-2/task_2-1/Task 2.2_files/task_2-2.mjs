"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const orgMatExp ="2+3*2-4*6";
const neWMatExp ="2+(3*2-4)*6";
const part1Answer = 2+ 3 * (2-4) * 6;
printOut(orgMatExp);
printOut(neWMatExp);
printOut(part1Answer);


printOut(newLine)

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
const millimeters =(25*1000)+ (34*10)
const milliPerInch = 25.4;
const sumPart2 = millimeters / milliPerInch
printOut ("25 meters and 34 centimeters=" + sumPart2.toFixed(2) + " inches.");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3; 
const part3Hours = 12; 
const part3Minutes = 14; 
const part3Seconds = 45;
const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut("3 days, 12 hours, 14 minutes and 45 Seconds = "+ part3Answer + "minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const totalMinutes = 6322.52;
const part4Days = Math.floor(totalMinutes/(24*60));
const remainderAfterDays = totalMinutes % (24*60);
const part4Hours = Math.floor(remainderAfterDays/60); 
const remainingMinutesAfterHours = remainderAfterDays % 60;
const part4Minutes = Math.floor(remainingMinutesAfterHours);
const part4Seconds = Math.round((remainingMinutesAfterHours - part4Minutes)*60);
printOut(`${totalMinutes} minutes = ${part4Days} days, ${part4Hours} hours, ${part4Minutes}minutes,and ${part4Seconds} seconds.`);

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const usdRate = 76/8.6;
const nokRate = 8.6/76;
const amount= 54;
const usdToNok = Math.round(amount * usdRate);
const nokToUsd = Math.round(amount*nokRate);
printOut (`${amount}USD is ${usdToNok} NOK.`);
printOut (`${amount} NOK is ${nokToUsd} USD.`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text ="There is much between heaven and we do not understand.";
printOut (`Number of characters: ${text.length}`);
printOut (`Character at position 19: ${text.charAt(19)}`);
printOut (`Character form 35 (8 charc): ${text.substring(35, 43) }`); 
printOut (`Index of 'earth': $ {text.indexOf("earth")}`);




printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);