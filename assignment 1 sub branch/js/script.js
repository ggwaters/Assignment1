// STEP 1 camelCasing
//
//var someMonth
//function theMonth()
//currentMonth
//var summerMonths;
//function myLibrary()

//STEP 2 literal expresssions
//
//9.3         // numeric literal
//"Goodbye!"  // string literal
//true        // boolean literal
//null        // null literal

//STEP 3 complex / variable expressions
//
//var formulaOne = driver + (4 * tyres) + longCourse;
//var sleep = formulaOne + (twelveBeers + tv) * hours;

//STEP 4 declare 9 variables
//
//var wName, wSurname;
//var wAddress, wCity, wState, iZip;
//var iAge;
//var wReferral;
//var bContact;

////STEP 5 declaration and assigning values
//
//var wName wSurname;
//wName = "Greg";
//wSurname = "Waters";
//
//var wAddress = "6306 Caminito Luisito";
//var wCity = "San Diego";
//var wState = "CA";
//var iZip = "92111";
//
//var iAge = "47", wReferral = "email";
//
//var bContact = true;

////STEP 6 dynamic typing
//var tacos = 7;
//window.console.log("I can eat " + tacos + " street tacos for $5 in TJ");
//
//var tacoLove = true;
//window.console.log(tacoLove + "I like street tacos");
//
//var tacoFail = false;
//window.console.log(10 + tacoFail);

////STEP 7 hoisting
//
//var fillingOne = "carne asada";
//window.console.log("The best taco meats are " + fillingOne + " and " + fillingTwo);
//var fillingTwo = "al pastor";

////STEP 8 strings
//
//it is valid as long as the quotes are respective to the context. double quotes inside single quotes or vice-versa.
//
//var someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.' ";
//window.console.log(someString);

//STEP 9 null and undefined values
//
//var x = 200;
//var y = null;
//x = y;
//window.console.log(x);
//
//var x;
//window.console.log(x);

//STEP 10 typeof operators
//
//typeof name                      // string
//typeof 20;                          // number
//typeof false;                       // Boolean
//typeof [taco, burrito, quesadilla]  // object
//typeof tacoLove                     // undefined

//STEP 9 alerts and concatenation
//
//var name = "Greg Waters";
//window.alert("Hello " + name + ", welcome to the Javascript class!");

//STEP 10 line breaks
//
//var name = "Greg Waters";
//window.alert("Hello " + name + ".\nWelcome to the Javascript class!");


//STEP 11 prompt
//
//var name = window.prompt("What is your name?");
//

//STEP 12 more prompts
//
//var course = window.prompt("What class are you in?");

//STEP 13 assignments
//
//var x = 10;
//var y = 20;
//window.console.log(x + y);

//STEP 14 add and assign
//
//var x = 20;
//window.console.log(x += 20);

//STEP 15 multiply and assign
//
//var x = 20;
//window.console.log(x *= 5);

//STEP 16 assignment mess. I mean modulus
//
//var x = (20 % 3);
//window.console.log(x /= 1);

//STEP 17 comparison and logical operators
//
//var x = 7;
//var y = 3;
//var z = 1;
//window.console.log(x > y && y > z);


//STEP 18 more comparison and logical operators
//
//var x = 10;
//var y = 20;
//var z = 15;
//window.console.log(x === y && y !== z);

//STEP 19 typeof

var widget = new Object();
typeof widget;

//Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.
//Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.
//Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.