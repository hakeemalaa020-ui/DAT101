"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
const wakeUpTime1 =7; 
if (wakeUpTime1 ===7 ) {
    printOut ("part 1 - wake up time" + wakeUpTime1+ ": I can catch the bus to school."); 
}
const wakeUpTime2 = 8; 
if (wakeUpTime2 ===7){
    printOut ("part2 - wake up time" + wakeUpTime2 + ":I can take the bus to school.");
} else {
    printOut ("part2 wake up time" + wakeUpTime2 + ":I have take the car to school.");
}
const wakeUpTime3 = 8; 
if (wakeUpTime3 ===7){
    printOut("part3 - wake up time" + wakeUTime3+ ":I can take the bus.");
}else if (wakeUpTime3 ===8){
    printOut ("part3 - wake up time"+ wakeUpTime3 + ":I can take the train."); 
} else{
    printOut ("part3 - wke up time"+ wakeUpTime3+ ":I have to take the car.");
}


printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
const testNumber4  = -5; 
if (testNumber4 >= 0){
    printOut ("part4 - The number"+testNumber4+ "is: Positive");
} else {
    printOut ("part4 - The number4"+ "is: Negative"); 
}
const testNumber5 = 0;
if (testNumber5 >0){
    printOut ("part5 - The number" + testNumber5+ "is: Positive"); 
} else if (testNumber5 < 0){
    printOut("part5 - The number"+ testNumber5 + "is: Negative.");
} else {
    printOut("part5 - The number" + testNumber5+ "is: Zero.");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let imageSize6 = Math.floor (Math.random()* 8)+1; 
printOut ("part6 - Uploaded image size:" + imageSize6+ "MP");
if (imageSize6 >=4){
    printOut("Thank you");
} else {
    printOut ("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let imageSize7 = Math.floor(Math.random()* 8)+1;
printOut ("part7 - Uploaoded image size:"+ imageSize7 + "MP"); 
if (imageSize7>= 6){
    printOut("Image is too large"); 
} else if (imageSize7 >= 4){
    printOut ("Thank you"); 
} else{
    printOut ("The image is too samll"); 

}


printOut(newLine);
printOut("---Part8-------------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length; 
const monthName = monthList[Math.floor(Math.random()* noOfMonth)]; 
printOut ("part8 - Selected month:"+ monthName); 
if (monthName.includes("r")|| monthName.includes("R")){
    printOut ("You munst take vitamin D"); 
} else {
    printOut ("You do not need to take vitamin D");

}
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let daysInMoth = 0; 
if (monthName === "February"){
    daysInMoth = 28; 
} else if (monthName === "April" || monthName === "Jun" || monthName=== "November"){
    daysInMoth = 30; 
} else{
    daysInMoth = 31; 
}
printOut ("part 9 - Days in " + monthName + ":" + daysInMoth + "days.");


printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
if (monthName === "Mars"|| monthName === "Mai"){
    printOut ("part10 - Status in" +monthName + ": The gallery is closed for refurbishment.");
} else if (monthName === "April"){
    printOut ("part10 - Status in" + monthName + ": The gallery is open in temporary premiese next door.");
} else {
    printOut ("part10 - Status in" + monthName + ": The gallery is open as usual.");
}

printOut(newLine);
