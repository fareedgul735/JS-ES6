// clg //
// console.log("hello iam console !");
// clg //

// Alerts //

// let alerting = alert("hello user");
// console.log(alerting);

// var confirmed = confirm("Are You Muslim");
// console.log(confirmed);

// Alerts //

// three types of variables //

// var // this is a global/function scope variable //
// let // this is a blocked scoped variable but this variable permission is declaring means update your variable
// const // this is a blocked scoped variable but this is not permission for declaring this totally blocked variable

// three types of variables //

// Primitive Data Types JavaScript
//  mein woh hotay hain jo single value ko represent
// karte hain aur directly store hote hain.//

// Primitive Data Types //

// String // text ke liye

// symbol // unique value ke liye

// BigInt // bohot bare numbers ke liye

// Null //  jaan bujh kar empty ki gayi value

// undefined//  jab variable declare ho lekin koi value na mile

// Boolean // true ya false;

// Number // numbers ke liye (integer, decimal)

// Primitive Data Types //

// var str = "fareed-gul";
// console.log(typeof str,str);

// var num = 122;
// console.log(typeof num, num);

// var booleanDataType = false;
// console.log(typeof booleanDataType, booleanDataType);

// var defined;
// console.log(typeof defined, defined);

// var nullDataType = null;
// console.log(typeof nullDataType,nullDataType);

// var bigInt = 12324535667477477477447747n;
// console.log(typeof bigInt, bigInt);//JavaScript mein jab aap kisi number ke
// aakhir mein n lagate ho, iska matlab hota hai ye number BigInt type ka hai —
//  yani bohat bara number jo normal number data type handle nahi kar sakta.//

// var symbolDataType = Symbol("hello");
// console.log(typeof symbolDataType, symbolDataType.description);// advanced data type hai

// JavaScript mai 5 naming Convention matlab 5 tareqay hai liknay kay //

// Style	 Kaisa Dikhta Hai	 Kahan Use Hota Hai

// camelCase	userName	Variables, Functions

// PascalCase	UserProfile	Classes, Constructors

// snake_case	user_name	Rare, DB ya kuch libraries

// kebab-case	user-profile	HTML / CSS mein

// UPPER_CASE	MAX_USERS	Constants

// var camelCase = "hey iam camelCase !"; // Pehla word chhota, aglay har lafz ka pehla letter capital //
// console.log(camelCase); // variables or functions kay liye use hote hai //

// var PascalCase = "Hey Iam PascalCase !"; // Har word ka pehla letter capital hota hai //
// console.log(PascalCase); // Mostly class names ya constructor functions mein use hota hai

// var snake_case = "hey_iam_sanke_case!"; // Sab letters chhote, words ke darmiyan _ underscore
// console.log(snake_case); // Database ya kuch libraries mein milta hai

// var kebab-case = "hey-iam-kebab-case!"; // Words ko - se separate karte hain
// html or css mai use hota hai js mai nhi //
// console.log(kebab-case); // avaScript mein valid nahi hota variables ke liye

// var UPPER_CASE = "HEY_IAM_UPPER_CASE_!";
// console.log(UPPER_CASE); // Constant values ko represent karta hai

// JavaScript ke Non-Primitive (Reference) Data Types: //

// Ye wo data types hain jo complex ya multiple values ko hold/represent karte hain //

// object //
// Array //
// Function//

// let myObject = {
//   name: "fareed",
//   age: 19,
//   education: "intermediate",
//   experience: "frontend developer",
// };

// console.log(typeof myObject, myObject.education); // this is object

// let myArray = ["fareed", 19, "intermediate", "frontend developer"]; // startIndex (0)
// console.log(typeof myArray, myArray[2]); this is array but this datatype is object

// function myFunc(name) {
//   return name;
// }
// console.log(typeof myFunc, myFunc("fareed")); this is function but this data types is function //

// abb yaha pr 3 non-peimitive datatypes multipul value ko repersent kar rahe tay yai non-primitive
// difference primitive yai hai in don data types ka difference

// Illegal& legal variables // basic concepts //

// let legalVar = "hey iam legal var !"; this is legal var
// let legal_Var = "hey iam legal var !"; this is legal var
// let $legalVar = "hey iam legal var !"; this is legal var
// console.log(legalVar); this is legal var

// let 123IlegalVar = "hey iam ileagl var !";
// let Ilegal-Var = "hey iam ileagl var !"; is is ileagl var
// console.log(123IlegalVar); this is ileagl var

// Math Experssion Familiar Operators //

// + // addition
// - // subtraction
// * // multiplication
// / // division
// % //  modulus

// let num = 9;
// let num2 = 18;

// console.log(num + num2); // this is sum operator //

// let subtract = 65;
// let subtract2 = 54;
// let result = subtract - subtract2;
// console.log(result); // this is sub operator

// let multi = 4 * 4 ;
// console.log(multi); this is multiplication

// let expo = 10 * 10 * 10;
// console.log(expo); // this is exponantion

// let divide = 2 / 5;
// console.log(divide); // this is division

// let modulus = 2 % 5;
// console.log(modulus); //this is modulus

// Math Experssion UnFamiliar Operators //

// let num = 2;
// num++; // this is a post increment // output 3
// num--; // this is a post decrement // output 2
// console.log(num); // output 2

// let num = 4;
// --num; // this is a pre decrement // output 3 //
// ++num; // this is a pre increment // output 4 //
// console.log(num);

// Math Expressions: eliminating ambiguity //

// (BODMAS) // Border/Division/Mutiplication/Addition/Subtraction

// let number = 2 + 4 * 5;
// console.log(number); // this is a bodmas // output 22

// let number = (2 + 4) * 5;
// console.log(number); // output 30 //

// Concatenating text strings //

// let firstName = "fareed";
// let lastName = " gul";

// console.log(firstName + lastName); // this is a concatenate

// let dummyText = " Thanks";
// let dummyText2 = " For Watching";
// let dummyText3 = " !";

// let resultOfDummyText = dummyText + dummyText2 + dummyText3; // this is a concatenate
// console.log(resultOfDummyText);

// Prompts //

// let userCheck = prompt("enter your name");
// alert("Hello " + userCheck);

// let user = prompt("enter your name !");
// let userAge = +prompt("enter your age !");

// alert("userName " + user + "userAge " + userAge);

// if  else statements //

// let userAge = +prompt("enter your age !");

// if (userAge > 18 && userAge < 32) { // yaha agar condition true hogi tu if statement chal jayegi
//   alert("yes you are eligible of course");
// } else {
//   alert("sorry you are not a eligible of course !"); // or yahan pr agar if condition false hogi else statement chal jayegi
// }

// if  else statements //

// Comparison Operators //

// console.log(5 == "5"); // true // value same honi chaye hai bss datatype ahmiyat nhi rakhta ||
// console.log(5 === "5"); // false // value or datatype dono same honi chaye hai ||
// console.log(5 > 6); // false // pehle value dosri value say bari honi chaye hai ||
// console.log(5 < 6); // true // pehle value dosri value say choti honi chaye hai ||
// console.log(5 !== 5); // false // ya value same nhi ho || ya pr datatype same nhi  ho ||
// console.log(5 != "5"); // false // value same nhi honi chaye datatype ahmiyat nhi rakhta ||

// Comparison Operators //

// if else if //

// let userCheck = prompt("pakistan big city name !");

// if (userCheck === "karachi") {
//   alert("correct answer");
//   confirm("congrats you are winner 😊");
// } else if (userCheck === "") {
//   alert("please fill the field !");
// } else if (userCheck === "peshawar") {
//   alert("sorry you are close but wrong answer !");
//   confirm("best try but try again !");
// } else if (userCheck === "lahore") {
//   alert("sorry you are ver close but wrong answer !");
//   confirm("best try but try again !");
// } else {
//   alert("wrong answer !");
// }

// if else if //

// Logical Operators //

// console.log(5 > 4 && 5 < 7); // true // yaha and operator use kiya hai jho dono condition true mangta hai ||
// console.log(6 > 10 || 9 < 6); // false // yaha pr ek condition ka true hona zarori hai ||
// console.log(!(5 < 9)); // false // yai opposite return karta hai true ko false or false true kardeta hai ulat ||

// Logical Operators //

// if statement nested //

// let userAge = +prompt("Enter your age!");

// if (userAge >= 18) {
//   if (userAge <= 50) {
//     alert("You are an adult.");
//   } else {
//     alert("You are a senior citizen.");
//   }
// } else {
//   alert("You are a child.");
// }

// if statement nested //

// ternary Operators //

// let userAge = +prompt("enter your age for course!");

// let userData = userAge >= 18 ? "your allowed" : "your not allowed";

// alert(userData);

// ternary Operators //
