// clg//
// console.log("hello iam console !");
// clg//

// Alerts //

// alert("hello user");

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
