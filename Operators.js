"use strict";

//assignemnt 1
/*

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/
//assignment 1
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

//assignemnt 2
//Addition to numbers
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend);

//assignemnt 3
//Subtraction to numbers

//assignemnt 4
//write two sentences in two variables and connect them together
var abc = "my name is";
var name = "Maja";
abc += name;
console.log(abc);

//assignemnt 5
//write two variables, one number and one string. add them together
var number = 4;
var string = "number ";
string += number;
console.log(string);

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s; //20
let u = r - s; //10
let v = t / u; //2
let x = r * v; //30
let y = s % v; //1

//assignemnt 7
//Why does it not write out?
let r = 34;
let c = 28;
let x = r - 32 + c;
let y = r++ * 4;
if (x == 30 || y == 2) {
  console.log("yeah you got it");
}
//change a number in a variable, so it print out the text
//I changed let c to 28.

//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt,
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt
let first = 4;
let question = prompt("Please enter a number:", "4");
console.log(question);

//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
0.1 + 0.2;
0.1 + 0.2 === 0.3;
3 - 1;
3 + 1;
"3" - 1;
"3" + 1;
"222" - -"111";
//Because of the minus, the strings are converted into numbers.
//But the double minuses mean an addition, therefore the strings are added together as numbers.

//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year

let input = prompt("Enter a year to check if it's a leap year:", "");
if (input % 4 == 0) {
  console.log(input + " is a leap year.");
} else {
  console.log(input + " is not a leap year.");
}
