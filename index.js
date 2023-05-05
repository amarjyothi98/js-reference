// 1. Ways to print in JavaScript

// console.log("Hello World");
// document.write("this is document write")
// alert("me");

// 2. JavaScript console API(Application Programming Interface)

// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// 3. JavaScript variables
// What are variables? - Container to store data values.

var number1 = 32;
var number2 = 28;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.5;

// String
var str1 = "this is a string";
var str2 = "this is also a string";

// Booleans

var a = true;
var b = false;
// console.log(a);

// --------------------------------------
// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
// --------------------------------------

/*
At a very high level, there are two types of datatypes in Javascript.
1.primitive data types: undefined, null, number, string, boolean, symbol.
2.reference data types: arrays and objects.

*/

// 5. Arrays.
var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// 6.Objects.
var marks = {
  atul: 77,
  aamir: 54,
  haha: 34,
};
// console.log(marks);


// OPERATORS IN JAVASCRIPT.----------------------------------------------------------------

// 1.Arithmetic operators

var a = 12;
var b = 78;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);
// console.log("The value of a / b is", a / b);


// 2.Assignment Operators\

var c = b;
c += 2; // c = c+2
c -= 2; // c = c-2
c *= 2; // c = c*2
c /= 2; // c = c/2
// console.log(c);


// 3.Comparision Operators

var x = 76;
var y = 43;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);


// 4.Logical Operators

// --Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// --Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// --Logical not
// console.log(!false);
// console.log(!true);

// FUNCTIONS IN JAVASCRIPT--------------------------------------------------------------

// DRY = do not repeat yourself.

function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

c1 = avg(4, 7);
c2 = avg(14, 17);
// console.log(c1, c2);

// CONDITIONAL STATEMENTS IN JAVASCRIPT-------------------------------------------------

// Single if statement

var age = 34;
if (age > 8) {
  console.log('You are not a kid');
}

// if-else statement

var age = 34;
if (age > 8) {
  console.log('You are not a kid');
}

else{
  console.log('You are a kid');
}

// if-else ladder statement
 
if (age > 56){
  console.log("You are not a kid");
}
else if(age>34){
  console.log("You are not a kid");
}
else if(age>26){
  console.log("You are not a kid");
}
else if(age>18){
  console.log("You are not a kid");
}
else {
  console.log("You are a kid");
}
console.log("End of ladder");

// eg-----------------(This is an error)-----------------------
// Was trying to make a funtion to examine the age 

/*
function age(a){
  if (a > 18){
    return console.log("You are an adult");
  }  
}

c1 = age(34);
console.log(c1);
*/

// -------------------------------------------------------------


// LOOPS IN JAVASCRIPT---------------------------------------------------------------------------

// for loop
var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element);
// })

// ------------------------------------
// let j=0;
// const ac=0;
// ac++ ;
// ------------------------------------


// while loop
let j=0;
// while (j < arr.length){
//   console.log(arr[j]);
//   j++;
// }


// do while loop
// do{
//    console.log(arr[j]);
// }while(j < arr.length)

// BREAK AND CONTINUE STATEMENTS IN JAVASCRIPT-----------------------------------------

var arr = [1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++){
  if (i==2){
    // break;
    continue;
  }
  // console.log(arr[i]);
}

// ARRAY METHODS------------------------------------------------------------------------

let myArr = ["fan", "camera", 34, null, true];
// myArr.pop();--- takes out an element from the end of the array.
// myArr.push("Amar");--- pushes an element in the end of the array.
// myArr.shift();--- takes out an element from the begining of the Array
// myArr.unshift("Amar");--- puts an element in the begining of the Array.
// myArr.toString();--- converts the array into String.
// console.log(myArr);


// STRING METHODS IN JAVASCRIPT----------------------------------------------------------

let myLovelyString = "Amar is a good boy boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("boy"));
// console.log(myLovelyString.lastIndexOf("boy"));

// console.log(myLovelyString.slice(2,4));

// The following method replaces the first word with the second------
d= myLovelyString.replace("good", "great");
d= d.replace("Amar", "haha");
// console.log(d);


// DATES IN JAVASCRIPT--------------------------------------------------------------------

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());


// DOM MANIPULATION (DOCUMENT OBJECT MODEL)------------------------------------------------

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn = document.getElementsByTagName("div");
console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is a created paragraph";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ----> removes an element.

// Selecting using query -------------

sel = document.querySelector('.container');
console.log(sel);

sel = document.querySelectorAll;('.container'); // selects all the containers.
console.log(sel);


// Events in JavaScript--------------------------------------------------------------------------

// onclick event-----------
function clicked(){
  console.log("The button was clicked");
}
// ----------------------------

window.onload = function(){
  // console.log('This document was loaded.')
}

firstcontainer.addEventListener('click', function(){
  // console.log("click hua");
})

firstcontainer.addEventListener('mouseover', function(){
  // console.log("mouse over");
})

firstcontainer.addEventListener('mouseout', function(){
  // console.log("mouse out of container");
})


firstcontainer.addEventListener('mouseup', function(){
  console.log("mouse up when clicked on container");
})

firstcontainer.addEventListener('mousedown', function(){
  console.log("mouse down when container");
})


// ARROW FUNCTIONS--------------------------------------------------------

function summ(a,b){
  c = a+b;
  return c;
}

summ1 = (a,b)=>{          //the above function can also be written as this arrow function.
  c = a+b;
  return c;

}



// JAVASCIPT SET TIMEOUT AND SET INTERVAL------------------------------------------------------------

logkaro = ()=>{
  console.log("I am your log");
}
setTimeout(logkaro, 2000);   //2000 millisecond = 2 seconds. //it executes the logkaro function after 2sec of refreshing the page.
clr1 = setTimeout(logkaro, 2000);
// by using clearTimeout(clr1) in the console we can stop the function from executing.

setInterval(logkaro, 2000);     // it repeats the logkaro function in an interval of 2000 ms or 2sec.
clr = setInterval(logkaro, 2000);     
// by using clearInterval(clr) in the console we can stop the function from executing.



// JAVASCRIPT LOCAL STORAGE-------------------------------------------------------------------------







// JSON(javascript object notation)-----------------------------------------------------------------

obj = {name: "amar", length:1};
js = JSON.stringify(obj);
console.log(js);
console.log(typeof js);

parsed = JSON.parse({name: "amar", length:1}); // idk why it's not working.
console.log(parsed);


// tempelate literals - backticks

a = 34;
console.log("this number is &{a}")      // idk why it's not working.









