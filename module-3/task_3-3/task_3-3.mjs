"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function printNorwegianDate (){
    const today = new Date();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const norwegianDate = today.toLocaleDateString ('no-NB', options);
    printOut (norwegianDate);
}
printNorwegianDate();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function getNorweginDate (){
    const today = new Date();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const norwegianDate = today.toLocaleDateString ('no-NB',options);
    return today;
}
function getCountdown(){
    const today = new Date();
    const launchDate = new Date ('14-4-2025');
    const differenceInMs = launchDate - today;
    const daysLeft = Math.ceil (differenceInMs / (1000*60*60*24));
    return daysLeft;
}
function grandReveal (){
    getNorweginDate ();
    const daysRemaining = getCountdown();
    printOut("Days until 2XKO launch:" + daysRemaining + "days.");
}
grandReveal();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function calculateCircle (radius){
    const diameter = 2* radius;
    const circumference =2*Math.PI*radius;
    const area = Math.PI * Math.pow (radius, 2);
    printOut ("Circle with radius" + radius + ":");
    printOut (" Diameter:" + diameter.toFixed (2));
    printOut ("Circumference:"+ circumference.toFixed(2));
    printOut ("Area:" + area.toFixed (2));
}
calculateCircle(5);



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function calculateRectangle (rectObject){
    const circumference = (2*rectObject.width) + (2*rectObject.height);
    const area = rectObject.width * rectObject.height;
    printOut ("Rectangle(" +rectObject.width + "x" + rectObject.height + "):");
    printOut ("Circumference:" + circumference);
    printOut ("Area:" + area);
}
const myRectangle = {width:10, height: 5};
calculateRectangle(myRectangle);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
function convertTemperature(value, type){
    let celsius, fahrenheit, kelvin;
    const lowerType = type.toLowerCase();
    if(lowerType === "celsius" || lowerType === "c"){
        celsius = value;
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
    } else if (lowerType === "fahrenheit" || lowerType === "f"){
        fahrenheit = value;
        celsius =(value -32)*5/9;
        kelvin = celsius + 273.15; 
    } else if (lowerType === "kelvin" || lowerType === "k"){
        kelvin = value;
        celsius =value - 273.15;
        fahrenheit = (celsius * 9/5)+ 32; 
    } else{
        printOut("Unknown temperatue scale:" + type);
        return; 
    }
    printOut(value + "° " + type + " is equal to:");
printOut(" Celsius: " + Math.round(celsius) + "°C");
printOut(" Fahrenheit: " + Math.round(fahrenheit) + "°F");
printOut(" Kelvin: " + Math.round(kelvin) + "K");
}
convertTemperature(25, "Celsius");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function calculateNetprice (gross, vatGroup){
    let netprice; 
    const group = vatGroup.toLowerCase ();
    switch (group) {
        case "normal":
            netprice = gross /1.25;
            break;
            case "food":
                netprice = gross /1.15;
                break;
                case "hotel": 
                case "trasport":
                    case "cinema":
                        netprice =gross /1.10;
                        break;
                        default:
                            printOut ("Unknown VAT group!");
                            return NaN;

    }
    printOut ("Gross price" + gross + "with VAT group'" + vatGroup + "'equals net price:" + netprice.toFixed(2));
    return netprice;
}
calculateNetprice (125, "normal");
calculateNetprice (115, "food"); 
calculateNetprice (110, "hotel");
calculateNetprice (100, "unknown_text");



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function calculatePhysics (distance, time, speed){
    let missingCont = 0; 
    if (distance === undefined || distance === null) missingCont++;
    if (time === undefined || time === null) missingCont++;
    if (speed === undefined || speed ===null) missingCont++;
    if (missingCont > 1){
        printOut ("Error: More than one parameter is missing!");
        return NaN;
    }
    if (speed ===undefined || speed === null){
        speed = distance / time;
        printOut ("Calculated Speed:" + speed.toFixed(2) + "km/h");
        return speed;
    } else if (distance === undefined || distance === null){
        distance =speed * time;
        printOut ("Calculated Distance:" + distance.toFixed(2)+ "km");
        return distance;
    } else if (time === undefined || time === null){
        time = distance / speed;
        printOut ("Calculated Time:" + time.toFixed(2)+ "hours");
        return time; 
    }
}
calculatePhysics(100, 2, null);
calculatePhysics(null, 2, 50);
calculatePhysics(100, null, 50);
calculatePhysics(null, null, 50);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function padText(text, maxCount, char, leading){
    let currentText = String(text);
    if (currentText.length>= maxCount){
        printOut(currentText);
        return currentText;
    }
    const paddingNeeded =maxCount- currentText.length;
    const paddingString = char.repeat (paddingNeeded); 
    let paddedResult;
    if (leading === true){
        paddedResult=paddingString+currentText;//
    } else{
        paddedResult = currentText + paddingString; // 
    }
    printOut (paddedResult);
    return paddedResult;
}
padText("Java", 8, "*", true);
padText("Script", 10, "-", false);
padText("Hello", 4, "", true);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testMathPattern(){
    let currenNumber = 1; //
    let ispatternValid = true;
    for (let line= 1; line <= 200; line ++){
        let leftSum = 0; 
        let rightSum = 0; 
        const leftCount = line + 1;
        for (let i = 0; i < leftCount; i++){
            leftSum += currenNumber;
            currenNumber++;
        }
        const rightCount = line; 
        for (let j = 0; j < rightCount; j++){
            rightSum += currenNumber;
            currenNumber++;
        }
        if (leftSum !== rightSum){
            printOut("pattern failed at line:" + line);
            ispatternValid = false; 
            break
        }

    }
    if (ispatternValid) {
        printOut ("Maths fun!");
    }
}
testMathPattern();


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial (n) {
    if (n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}
const factorialResult = factorial(5);
printOut("Factorial of 5 is:"+ factorialResult);


printOut(newLine);
