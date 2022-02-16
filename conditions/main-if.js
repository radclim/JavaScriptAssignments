/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/
let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 11) {
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13) {
  textHolder.innerHTML = "It is lunch time";
} else if (hour == 17) {
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) {
  textHolder.innerHTML = "It is dinner time";
} else if (hour >= 20 && hour <= 22) {
  textHolder.innerHTML = "It is snacktime";
} else {
  textHolder.innerHTML = "Goodnight";
}

/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/
if (hour >= 6 && hour < 8) {
  textHolder.innerHTML = "Good morning! Time to get ready for school.";
} else if (hour == 8) {
  textHolder.innerHTML = "Quick! You need to leave for school.";
} else if (hour == 12) {
  textHolder.innerHTML = "Time for lunch. Enjoy!";
} else if (hour >= 15 && hour <= 16) {
  textHolder.innerHTML = "Time to head home. What a productive day!";
} else if (hour >= 18 && hour <= 19) {
  textHolder.innerHTML = "Time to make dinner. Have fun!";
} else if (hour > 19 && hour <= 23) {
  textHolder.innerHTML =
    "Homework and gaming. Living the high life, aren't you?";
} else if (hour > 23 && hour < 6) {
  textHolder.innerHTML = "Sleepy time!";
} else {
  textHolder.innerHTML = "Nothing to do right now. Enjoy your day!";
}

/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/
let first = prompt("Enter the first number:", "");
let second = prompt("Enter the second number:", "");

if (first > second) {
  textHolder.innerHTML = first + " is the bigger number.";
} else if (second > first) {
  textHolder.innerHTML = second + " is the bigger number.";
} else if (first == second) {
  textHolder.innerHTML = "The numbers are equal.";
}
/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
    
*/
let num1 = 457546;
let num2 = 1;
let num3 = 33;

if (num1 > num2 && num1 > num3 && num2 > num3) {
  textHolder.innerHTML =
    num1.toString() + ", " + num2.toString() + ", " + num3.toString();
} else if (num1 > num2 && num1 > num3 && num2 < num3) {
  textHolder.innerHTML =
    num1.toString() + ", " + num3.toString() + ", " + num2.toString();
} else if (num2 > num1 && num2 > num3 && num1 > num3) {
  textHolder.innerHTML =
    num2.toString() + ", " + num1.toString() + ", " + num3.toString();
} else if (num2 > num1 && num2 > num3 && num1 < num3) {
  textHolder.innerHTML =
    num2.toString() + ", " + num3.toString() + ", " + num1.toString();
} else if (num3 > num1 && num3 > num2 && num1 > num2) {
  textHolder.innerHTML =
    num3.toString() + ", " + num1.toString() + ", " + num2.toString();
} else if (num3 > num1 && num3 > num2 && num2 > num1) {
  textHolder.innerHTML =
    num3.toString() + ", " + num2.toString() + ", " + num1.toString();
}
