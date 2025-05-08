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

// primitive data types //

// var str = "text";
// console.log(str);

// var num = 12;
// console.log(num);

// var bigInt = 35142545n;
// console.log(typeof bigInt, bigInt);

// var undefined;
// console.log(undefined);

// var aull = null;
// console.log(aull);

// var boolean = true;
// console.log(boolean);

// var symbol = Symbol("hello dilzaib");
// console.log(symbol.description); //advance datatype

// primitive data types //

// camelCase
// PascalCase
// snake_case
// kebab-case
// UPPER_CASE

// Array //

// Array aik datastructe hai jo aik variable mai multiple values ko store karti hai //
// or yai zero indexing use karta hai or array ko hum loop ya array kay methods say bhi access karsakte hai //

// let fruits = ["mango", "banana", "pineapple", "apple"];
// console.log(fruits);

//mutator methods for array (actual array ko tabdeel karta hai) //

// let batsman = ["babar-azam", "naseem-shah", "shaheen-afridi"];
// console.log(batsman);
// batsman.push("haris-rauf", "saeed-ajmal"); // push aik array method hai us ka work array kay end value add karna multiple value aap add karsakte hai push method say
// console.log(batsman); // push method actual array ko change kar raha hai //

// let deleteValue = batsman.pop(); // yai sigle value delete karta hai array kay end say
// console.log(batsman);
// console.log(deleteValue);
// console.log(batsman); // pop bhi actual array change karta hai //

// let deletedValue = fruits.shift();
// console.log(fruits); // pop bhi actual array change karta hai //
// console.log(deletedValue);

// fruits.unshift("grapes", "nashpati");
// console.log(fruits); // pop bhi actual array change karta hai //

// fruits.splice(1, 1, "amrood", "bair");
// console.log(fruits); // actual array ko change karta hai //

// let sortingArray = fruits.sort();
// console.log(sortingArray);
// console.log(fruits); // sort array method hai uss ka work  hai woh array kay item agar alphabetic tu dictionary order mai actual array ko change karta hai or numbering sort

// let numOfArray = [1, 4, 5, 2, 8, 9];
// console.log(numOfArray);

// numOfArray.sort();
// console.log(numOfArray);

// fruits.reverse();
// console.log(fruits);

// let fill = fruits.fill("tarbooz", 0, 1);
// console.log(fill); // array kay kuch hisson ko specific value say fill karta hai //

// let copinig = fruits.copyWithin(0, 2, 3);
// console.log(copinig); // copyWithin array kay ander he copy kar kay actual array ko tabdeel karta hai //

// Array Methods (naya array return karte hai actual ko nhi change karte) //

// let numOfArray1 = [1, 2, 3, 4, 5, 6];
// let numOfArray2 = [7, 8, 9, 10];
// let numOfArray3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let mergeArray = numOfArray1.concat(numOfArray2,numOfArray3);
// console.log(mergeArray); // naya array return karta hai actual array ko change nhi karta //

// let batsman = ["babar", "fakhar", "afridi", "naseem", "haris"];

// let slicArray = batsman.slice(2, 5);
// console.log(slicArray); // array mai say aik slice nikal kar return kardega but actual array ko change nhi karta
// console.log(batsman);

// let array = [1, "#", 5, "%", "*"];
// console.log(array.includes("*")); // check karta hai kay array kay ander value mojood hai kay nhi boolean mai value return karta hai
// console.log(array);

// let array = [8, 2, , 3, 4, 5, 6, 7, 8];
// console.log(array.indexOf(8)); // kisi specific value ki phele mojdgi ka index lata hai
// console.log(array.lastIndexOf(8)); // kisi specific value ki akhri mojdgi ka index lata hai

// let array = ["fareed", "gul"];
// let joining = array.join(" | ");
// console.log(joining); // array element ko string mai convert karta or join krwana hai array woh join karta hai
// console.log(array);

// let numberOfArray = [2, 4, 1, 9, 5, 6, 7, 8, 3];
// console.log(numberOfArray);
// let ascendingOrder = numberOfArray.sort((a, b) => a - b);
// console.log(ascendingOrder);

// let numberOfArray = [2, 4, 1, 9, 5, 6, 7, 8, 3];
// console.log(numberOfArray);
// let descendingOrder = numberOfArray.sort((a, b) => b - a);
// console.log(descendingOrder);

// let array = [1, 2, 3, 4];
// // let str = array.toString(); // array ko string mai tabdeel karta hai
// let str = array.toLocaleString(); // array kay element ko specific string mai convert karta hai
// console.log(str);

// Array Other Methods //

// let array = Array("fareed", "gul");
// console.log(array); // check karta hai deya gya array jho hai woh array hai ya nhi  //

// const deletedValue = [1, 2, 3, 4, 5, 6, 7];

// let deleteItem = delete deletedValue[5];
// console.log(deleteItem); // array mai say kisi specific index ko delete karna hota hai tu delete method ka bhi us karsakte hai
// console.log(deletedValue);

// let brotherName = "fareed gul";
// let x = Array.from(brotherName);
// console.log(x); // arrray like itertable ko array mai convert karta hai //

// let nestedArrays = [1, [2, 3], [4], [5]];
// let singleArray = nestedArrays.flat();
// console.log(singleArray); // nested arrays ko aik array mai convert karta hai

// let nestedArrays = [1, [2], [4], [5]];
// let singleArray = nestedArrays.flatMap((num) => num * 2);
// console.log(singleArray); // flatMap nested arrays ko aik array mai convert karta hai or array kay her item pr function apply karta hai

// iteration methods for array //

// let myArray = [1, 2, 3, 4, 5];
// let result = myArray.forEach((num) => num % 2 === 0);
// console.log(result); // yaha pr result undefined araha hai kiyo kay forEach return kuch nhi karta //

// let myArray = [1, 2, 3, 4, 5];
// let result = myArray.map((num) => num * num);
// console.log(result); // map aik iterator method hai yai array kay her item pr function apply karta hai or aik naya array return karta hai

// let myArray = [1, 2, 3, 4, 5];
// let result = myArray.filter((num) => num % 2 !== 0);
// console.log(result, "this is a odd number !"); // filter aik iterator array method hai jho array kay her item pr function apply klarta or array ko filter kar kay array return karta hai

// let factorialNum = +prompt("enter your factorial number");

// let converting = Array.from({ length: factorialNum }, (val, i) => i + 1);
// let result = converting.reduce((acc, num) => {
//   console.log(`acc: ${acc}, num : ${num}, acc * num =  ${acc * num} `);
//   return acc * num;
// }, 1); // array kay her item pr function apply karta hia btut porey array combine kar kar aik single value return karta hai

// console.log("Final Result Of factorial Num = ", result);

// let fac = [1, 2, 3, 4, 5];
// let result = fac.reduce((acc, f) => acc * f, 1);
// console.log(result);

// let arrayRightSide = [" !", "watching", "Thanks For "];

// let result = arrayRightSide.reduceRight((acc, words) => acc + words);

// console.log(result);

// let array = [1, 2, 3, 4, 5];

// let checkArray = array.find((num) => num % 2 === 0);
// console.log(checkArray); // output 2 // single value return karta hai

// let array = [1, 2, 3, 4, 5];

// let checkArray = array.filter((num) => num % 2 === 0);
// console.log(checkArray);  // output 2,4 //

//  .find() sirf ek value dega (pehli match hone wali).
//  .filter() sari matching values ka array dega.

// let x = [1, 2, 3, 4, 5];
// let z = x.findIndex((num) => num % 2 !== 0);
// console.log(z);  // sigle value return karta hai index ka //

// let e = [2, 4, 6, 8];
// let r = e.every((num) => num % 2 === 0);
// console.log(r); // sirf boolean return karta hai jab array ka har ek element condition satisfy kare.
// Agar ek bhi element fail kare, to false return karega.//

// let e = [13, 41, 61, 8];
// let r = e.some((num) => num % 2 === 0);
// console.log(r); // irf ek bhi element condition satisfy kare to true return karega.
// Agar ek bhi satisfy nahi kare to false return hoga.//

// Objects //

// let myObj = {
//   name: "fareed",
//   age: 19,
//   married: false,
//   bankAmount: 0n,
// };

// let keys = Object.keys(myObj);
// console.log(keys); // keys array mai lakay dega //

// let values = Object.values(myObj);
// console.log(values); // values array mai lakay dega //

// let bothValues = Object.entries(myObj);
// console.log(bothValues); // her aik key or uski value aik array mai laakay dega //

// let freezeObj = Object.freeze(myObj);
// myObj.name = "saeed"; // not allowed //
// myObj.fName = "taweez gul"; // not allowed //
// delete myObj.age; // not allowed //
// console.log(freezeObj);

// let sealObj = Object.seal(myObj);

// myObj.name = "saeed"; // allowed //
// myObj.fName = "taweez gul"; // not allowed //
// delete myObj.married; // not allowed //
// console.log(sealObj);

// let hasProperty = myObj.hasOwnProperty("lasbela");
// console.log(hasProperty);  // boolean return karta hai check karta hai kay app ki property  appkay object  mojood hai kay nhi

// let firstObj = {
//   name: "fareed-gul",
// };
// let secondObj = {
//   age: 19,
// };
// let mergeObj = Object.assign(firstObj, secondObj);
// console.log(mergeObj);

// objectOfArray //

// let objectOfArray = {
//   name: "fareed",
//   age: 19,
//   myArray: ["dummyList", "hahaha", "angry"],
// };
// console.log(objectOfArray);

// Constructor Fuction //

// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new person(
//   prompt("enter your name !"),
//   +prompt("enter you age")
// );
// console.log(person1);

// function MyCars(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;

//   this.displayInfo = function () {
//     console.log(`${this.brand},${this.model},${this.year}`);
//   };
// }

// const car1 = new MyCars(
//   prompt("enter your car brand"),
//   prompt("enter your car model"),
//   +prompt("enter your car year")
// );

// car1.displayInfo();

// ProtoType //

//  Prototype ek tarika hai jisse aap objects ke andar naye functions
// ya properties add kar sakte hain bina har object ko alag define kiye.

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log(`Hello ${this.name}`);
// };

// const person1 = new Person(prompt("enter your name !"));
// console.log(person1);
// person1.sayHello();

// Classes //

// calsses is a constructor fuction of a modern & readable version //
//  Classes ka syntax simple aur readable hota hai! //

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   personInformation() {
//     console.log(`Name: ${this.name} Age: ${this.age}`);
//   }
// }

// const person1 = new Person(
//   prompt("enter your name"),
//   +prompt("enter your age")
// );
// console.log(person1);
// person1.personInformation();

// Inhertience //

// Inheritance aik class ko dosri class ko inert karleti hai apne parent class ko
// inhetience ki madad say

// class Animal {
//   constructor(animalName) {
//     this.animalName = animalName;
//   }
//   makeSound() {
//     console.log("some generic sound....");
//   }
// }

// class Dog extends Animal {
//   dark() {
//     console.log("Woff! Woff !");
//   }
// }

// const dog1 = new Dog("Tommy");
// console.log(dog1);
// dog1.makeSound();
// dog1.dark();

// Super Keyword //

// super keyword constructor ya method ko call karne kay liye hota hai //

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} make a sound...`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // parent constructor call kiya hai
//     this.breed = breed;
//   }
//   speak() {
//     super.speak; // parent class ka method call hoga
//     console.log(`${this.name} barks`);
//   }
// }

// const dog1 = new Dog("Tommy", "bardaar");
// console.log(dog1);
// dog1.speak();

// Summary //

// Concept	Kaam Kya Karta Hai?

// Constructor Function	Object banane ke liye function

// Prototype	Objects ke andar naye methods/properties add karna

// Classes	Constructor function ka modern tareeqa

// Inheritance	Ek class doosri class se features lena

// Super Keyword	Parent class ke constructor/methods ko call karna

// Loops //

// for loop //

// for loop ek traditional loop hai jo kisi bhi fixed iteration
//  ke liye use hota hai. Yeh loop
// initialization, condition, aur increment/decrement ke saath kaam karta ha //

// for (let i = 0; i < 10; i++) {
//   console.log("iteration", i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log("iteration", i);
// }

// forEach loop //

// forEach sirf arrays ke liye use hota hai. Yeh har array
//  element ko ek callback function ke through iterate karta hai.

// let array = ["emaan", "azan", "khan", "pathan"];
// console.log(array);

// array.forEach((val, ind, arr) => {
//   arr[ind] = val.toUpperCase();
// });

// console.log(array);

// For in loop //

// for...in kisi object ke keys (properties) ko iterate karne ke
// liye use hota hai.

// let myObj = {
//   name: "fareed",
//   age: 22,
//   course: "mernStack",
// };

// for (let myKeys in myObj) {
//   console.log(`${myKeys}: ${myObj[myKeys]}`);
// }

// var name1 = "fareed";
// console.log(name1);
// name1 = "gul";
// console.log(name1);

// let name1 = "fareed";
// console.log(name1);
// name1 = "gul";
// console.log(name1);

// const name1 = "fareed";
// console.log(name1);
// name1 = "gul";
// console.log(name1);

// for of loop //

// "for...of loop array ya string jaise
//  iterables par chalta hai aur har element ki value deta hai.

// let array = ["fareed", "saeed"];

// for (let myArray of array) {
//   console.log(myArray);
// }

// let str = "hello";

// for (let indexBased of str) {
//   console.log(indexBased);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let array = ["fareed"];
// console.log(array);

//  array.forEach((arrayVal, arrayInd, arr) => {
//   arr[arrayInd] = arrayVal.toUpperCase();
// });
// console.log(array);

// let myObj = {
//   name: "fareed",
// };

// for (let object in myObj) {
//   console.log(`${object} :  ${myObj[object]}`);
// }

// let myVal = "fareed Gul";

// for (let value of myVal) {
//   console.log(value);
// }

// ek for loop ke andar doosra for loop hota hai,
// usse nested for loop kehte hain.

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(`i =  ${i} j =  ${j}`);
//   }
// }

// whileLoop

// let num = 0;
// while (num < 9) {
//   console.log(`iteration : ${num}`);
//   num++;
// }

// do While loop //

// do...while loop pehle code execute karta hai,
// phir condition check karta hai. Is
//  wajah se yeh loop kam az kam ek baar zaroor
// chalega, chahe condition false ho. //

// let num = 1;

// do {
//   console.log("iteration", num);
//   num++;
// } while (num > 9);

// sawal yai ata hai kay loops hote kiya hai or kiyo use karte hai loops //

// Agar hume ek kaam 1000 baar karna ho, toh loops ke bina hume same code
//  1000 dafa likhna padega. Loops isi problem
//  ko solve karte hain aur hume automation aur iteration ki power dete hain.

// "Agar ek website pe 100 users hain, aur hume har user ka naam dikhana hai,
//  toh loops ka use karke hum
//  sirf ek short code likh kar ye kaam easily kar sakte hain."

// "Jis tarah ek waiter har table pe jaa kar order leta hai, waise hi loop
//  har data element pe jaa kar kaam karta hai."

// let userChekCity = prompt("enter your city name ");

// userChekCity = userChekCity.toLowerCase();

// let cleanCities = ["karachi", "lahore", "isalamabad"];
// let isCleanCities = false;

// for (let i = 0; i < cleanCities.length; i++) {
//   if (userChekCity === cleanCities[i]) {
//     isCleanCities = true;
//     break;
//   }
// }

// if (isCleanCities) {
//   alert("its one of the clean City");
//   console.log(userChekCity);
// } else {
//   alert("sorry this is not of clean cities");
// }

// let fName = "fareed";
// console.log(fName);

// let upperCase = fName.toUpperCase();
// console.log(upperCase);

// canging Case //  srf string datatype mai use hote hai //

// toUpperCase
// toolowerCase

// Strings:
// Measuring length
// and extracting parts

// let monthName = prompt("enter month name ");

// let charcters = monthName.length;

// if (charcters >= 2) {
//   let monthAbbre = monthName.slice(0, 3);
//   console.log(monthAbbre);
// }

// Strings:
// Finding segments

// let dummyText = "ydgqdgwegyfgwjkekwekf";

// let checkIndex = dummyText.indexOf("f");
// console.log(checkIndex);

// let dummyText = "ydgqdgwegyfgwjkekwekf";

// let checkIndex = dummyText.lastIndexOf("f");
// console.log(checkIndex);

// Strings:
// Finding a character at a location

// let myCharcter = "khankhan";

// let locationMyCharecter = myCharcter.charAt("5");
// console.log(locationMyCharecter);

// Strings:
// Replacing characters

// let r = "running";

// let c = r.replace("r", "t");
// console.log(c);

// RoundingNumber //

// let number = 25.5;

// let roundNum = Math.round(number);

// console.log(roundNum);

// let number = 25.9;

// // let roundNum = Math.ceil(number); //
// let roundNum = Math.floor(number);

// console.log(roundNum);

// RanomNumber ///

// let number = Math.random();
// let n = number * 6;
// console.log(n);

// let str = "iam string";

// let convertNum = parseFloat(str);
// console.log(typeof convertNum);

// let number = 12.33;
// let c = parseInt(number);

// console.log(c);

// let number = 12.33;
// let c = parseFloat(number);

// console.log(c);

// Converting strings to numbers, numbers to
// strings

// let str = "fareed khan";

// let number = Number(str);
// console.log(typeof number);

// let number = 5544;

// let str = String(number);
// console.log(typeof str);

// let number = 61.26765;

// let contolling = number.toFixed(3);

// console.log( typeof contolling,contolling);

// Getting the current date and time //

// let date_time = new Date();
// console.log(date_time.toISOString());

// let date_time = new Date();
// console.log(date_time.toLocaleString());

// let date_time = new Date();

// let day = date_time.getDay();

// let str = day.toLocaleString();

// console.log(str);

// let weekDays = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thrusday",
//   "friday",
//   "saturday",
// ];

// let today = new Date();

// let dayNames = today.getDay();

// let namesToday = weekDays[dayNames];

// console.log(namesToday);

// Extracting parts of the date and time //

// let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// Specifying a date and time //

// let specificDate = new Date("25 june 2005");
// console.log(specificDate);

// let check = specificDate.getTime();
// console.log(check);

// Changing elements of a date and time //

// let userBDDate = new Date();
// let userBornDate = prompt("enter your born Date !");
// let userBornMonth = prompt("enter your born Month !");
// let userBornYear = prompt("entrer your born Year !");

// userBDDate.setDate(userBornDate);
// userBDDate.setMonth(userBornMonth);
// userBDDate.setFullYear(userBornYear);

// confirm(userBDDate);

// forloop //

// for (let i = 0; i <= 4; i++) {
//   console.log(i, "<==iteration");
// }

// whileLoop //

// For Loop: Jab iterations ki tadaad pehle se maaloom ho.​

// While Loop: Jab tak koi specific shart true hai, tab tak loop chalana
// ho, aur iterations ki tadaad pehle se na maaloom ho.

// let userInput;
// while (userInput !== "yes") {
//   userInput = prompt("Type 'yes' to exit:");
// }

// "Function ek aisi technique
//  hai jisme hum kisi specific kaam ka
//   code ek block mein likhte hain, jise hum
//   bar bar use kar sakte hain. Yeh code ko modular
//    aur readable banata hai. JavaScript mein hum function keyword
//  se function define karte hain, aur usse call karke use karte hain."

// Regular function

// function dummy() {
//   alert("hello iam alert");
// }
// dummy()

// Arrow Function Es6 Mordern Function

// let dummyFunc = () => {
//   alert("hello world !");
// };

// dummyFunc();

// Anonymus Func

// let greet = function () {
//   alert("hello country !");
// };

// greet();

// IIFE Func

// (function () {
//   alert("hello city !");
// })();

// let func = (math, cs, eng) => {
//   let subjects = math + cs + eng;
//   return subjects;
// };

// let totalMarks = func(
//   +prompt("enter your math marks !"),
//   +prompt("enter your cs marks !"),
//   +prompt("enter your eng marks !")
// );

// console.log("300: ",totalMarks);

// Functions:
// Local vs. global variables

// function checkGlobalVariables() {
//   if (true) {
//     var a = "a";
//     let b = "b";
//     const c = "c";
//   }
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// checkGlobalVariables();

// switch statements:
// How to start them

// let dayOfWeek = prompt("enter your week day !");

// if (dayOfWeek === "saturday" || dayOfWeek === "sunday") {
//   alert("whoopee!");
// } else if (dayOfWeek === "thrusday") {
//   alert("TGIF");
// } else {
//   alert("Shoot Me Now !");
// }

// "Switch statement ka use tab hota hai
// jab hume kisi aik variable ki multiple
//  values ke against check karna ho. Ye
//  if...else if se zyada clean aur readable
//  hota hai. Har case ko match karne ke baad
//   break likhna zaroori hota hai, warna baaki cases bhi chal
//    jaate hain. Agar koi case match na ho to default case execute hota hai."

// let dayOfWeek = prompt("enter your week day !");

// switch (dayOfWeek) {
//   case "saturaday":
//     alert("whoopee !");
//     break;
//   case "sunday":
//     alert("whoopee !");
//     break;
//   case "friday":
//     alert("TGIF");
//     break;
//   default:
//     alert("Shoot Me Now");
// }

// what is hoisting?

// Hoisting is JavaScript's
// default behavior of moving
// variable and function declarations
// to the top of their scope before code execution.

// 📌 Matlab: JavaScript pehle variables/functions ko
// declare karke upar le jata hai, execution se pehle.

// forExample:

// console.log(a);
// var a = 10;

// js is ko aise samjta hai
// var a;
// console.log(a);
// a = 10;

// alerting();

// function alerting() {
//   alert("hello world!");
// }

// console.log(a);
// let a = 10;
// console.log(b);
// const b = 10;

// foo();
// const foo = () => {
//   alert("foo");
// };

// interpreeter ?

// An interpreter executes code
//  line by line, translating each line into machine code at runtime.

// 📌 Matlab: Interpreter har line ko turant read karke
// chalata hai, bina pura code compile kiye.

// forExample:

// let x = 10;
// let y = x + 10;
// console.log(y);

// let x = 10;
// let y = r + 10;
// console.log(y); direct he referernce error dedeya hai b

// jitc ?

// A JIT Compiler compiles
// JavaScript code into machine code at runtime,
//  improving performance over interpretation.

// 📌 Matlab: JIT runtime par code
//  ko fast banata hai by converting it into machine code on the fly.

// forExample :

// function multiply(x, y) {
//   return x * y;
// }
// for (let i = 0; i < 10000; i++) {
//   console.log(multiply(2, 3));
// }

// JS pehle line-by-line hi chalta hai (interpreter),
// phir JIT optimize karta hai wo parts jo repeat ho rahe hain.

// alert("please requirement must be first!");

// console.log("hello world!");

// var confirmation = confirm("are you sure you want to leave!");

// console.log(confirmation);

// var confirmation = prompt("are you sure you want to leave!", "yes & no");
// console.log(confirmation);

// variables //
//  kitne variable hote hai 3 variables hai js mai //
// var,let,const //

// localvariable & global //

// function checkVar() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }

//   console.log(a);
// //   console.log(b);
//   console.log(c);
// }
// // console.log(b);
// // console.log(a);
// // console.log(c);
// checkVar();

// function n() {
//   function f() {
//     var a = 10;

//   }
//   console.log(a);
//   f();
// }
// n();

// var b = 10;
// b = 12;
// console.log(b);
// var b = 10;
// console.log(b);

// let b = 10;
// b = 12;
// console.log(b);

// let b = 13;
// console.log(b);

// const b = 10;
// b = 19;
// console.log(b);

// js mai kitne tareeqo say hum likh skate hai //

// camelCase ,PascalCase,snake_case,kebab-case,UpperCase //

// primitive datatypes //

// let string = " hello ";
// let number = 12.77;
// let boolean = true;
// let nulling = null;
// let unDefined = undefined;
// let bigInt = 12n;
// let symbol = Symbol("123");

// string methods //

// console.log(string.indexOf("l"));
// console.log(string.lastIndexOf("l"));
// console.log(string.charAt("2"));
// console.log(string.includes("y")); // boolean value dekhta hai
// console.log(string.length);
// console.log(string.replace("l", "m"));
// console.log(string.replaceAll("l", "m"));
// console.log(string.slice(3, 5));
// console.log(string.split("l")); // most use ful for js
// console.log(string.startsWith("h", 0)); // boolean value return & first your varuable searching word or your variable index
// console.log(string.toLocaleLowerCase());
// console.log(string.toLocaleUpperCase()); //you're supporting international languages, prefer toLocaleUpperCase().
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// console.log(string.trim("")); // most uses for inputfields
// console.log(string.trimStart(""));
// console.log(string.trimEnd(""));
// console.log(string.valueOf());

// number methods //

// console.log(number.toString());
// console.log(number.toFixed(1));
// console.log(number.toExponential(7));
// console.log(parseInt(number)); // decimal value ko integer mai convert karta hai
// console.log(parseFloat(number));
// console.log(isNaN(number)); //  boolean value return
// console.log(Number("123"));
// console.log(Number.isFinite(100.33));
// console.log(Number.isFinite("tt"));
// console.log(Number.isInteger(100));
// console.log(Number.isInteger(100.66));

// Boolean methods //

// console.log(Boolean("")); // false
// console.log(Boolean("yudgy")); // true

// console.log(typeof null);
// console.log(typeof undefined);

// non-primitive //

// object //

// let obj = {
//   name: "fareed",
//   age: 18,
//   education: "entermediate",
//   fareedBro: [{ name: "waleedgul", age: 14, education: "hafiz-e-quran" }],
//   greet: function () {
//     console.log(`hey iam ${this.name} iam ${this.age} year old`);
//   },
// };

// // let myName = "name";

// // obj.greet();

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let freezing = Object.freeze(obj);
// obj.name = "naeem";
// obj.hobby = "boxing";
// delete obj.name;
// console.log(freezing);

// let sealing = Object.seal(obj);

// obj.name = "fareedgul";
// obj.hobby = "boxing";
// delete obj.age;

// console.log(sealing);

// let property = obj.hasOwnProperty("hobby");
// console.log(property);

// constructor function create hova hai jho aik naya object ctreate karega //

// function myCars(model, year) {
//   this.model = model;
//   this.year = year;

// //   this.brandCars = () => {
// //     console.log(`this is my favrt ${model}_& year is ${year}`);
// //   };
// }

// const myCarsCheking = new myCars("corolla", 2025);
// console.log(myCarsCheking);

// class person {
//   constructor(name, age, education) {
//     this.name = name;
//     this.age = age;
//     this.education = education;
//   }
//   greet() {
//     console.log(`Hey Iam ${this.name}`);
//   }
// }

// const person1 = new person("fareed-gul", 19, "entermediate");
// const person2 = new person("waleed-gul", 15, "hafiz-e-quran-continue");
// console.log(person1);
// console.log(person2);
// console.log(person1.greet());
// console.log(person2.greet());

// function myLaptops(laptopBrand) {
//   this.laptopBrand = laptopBrand;

//   myLaptops.prototype.sayBrandName = function () {
//     console.log(`this is my new branding laptop ${this.laptopBrand}`);
//   };
// }

// const brand1 = new myLaptops("macbook");
// console.log(brand1);
// brand1.sayBrandName();

// inheritance //

// class CultusBrand {
//   constructor(brandName) {
//     this.brandName = brandName;
//   }
//   cultus() {
//     console.log("cultus pappa hai tera ");
//   }
// }
// class CorollaBrands extends CultusBrand {
//   constructor(brandName) {
//     this.brandName = brandName;
//   }
//   corolla() {
//     console.log("corolla pappa hai tera ");
//   }
// }

// const brand1 = new CorollaBrands("corolla 2025");
// console.log(brand1);
// brand1.cultus();
// brand1.corolla();

// loops //

// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }

// let i = 0;
// while (true) {
//   console.log("123");
//   i++;
// }

// let i = 0;
// do {
//   console.log(i, "==>");
//   i++;
// } while (false);

// Array specific //

// let numOfArray = [1, 2, 3, 4, 5];

// numOfArray.forEach((num) => {
//   console.log(num);
// });

// let person = {
//   name: "fareed",
//   age: 19,
//   education: "entermeidiate",
// };

// for (let keys in person) {
//   console.log(keys + " : " + person[keys]);
// }

// let array = [1, 2, 3, 4, 5];
// for (let myArrar of array) {
//   console.log(myArrar + 2);
// }

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// let fruits = ["apple", "banana", "grapes"];

// fruits.forEach((val) => {
//   console.log(val, "==>fruits value");
// });

// let person = {
//   name: "fareed",
//   age: 19,
//   married: false,
// };

// for (let keys in person) {
//   console.log(`${keys} : ${person[keys]}`);
// }

// let fruits = ["apple", "banana", "jamun"];

// for (let array of fruits) {
//   console.log(array + " " + 1);
// }

// what is array ? //

// let array = [1, 5, 2, 3, 4, 5];
// console.log(array)

// push pop shift unshift slice splice join concat
//  sort map reduce filter find forEach from isArray flat
// some every includes copy within fill reverse

// let num = [1, [2, [3]], [2], [7]];
// let depthing = num.flat(2);
// console.log(depthing, num);

// let num = [1, 2, 3, 4, 5, 6];
// console.log(num);
// let filling = num.fill("f", 0, 4);
// console.log(filling);

// let students = ["fareed", "saeed", "osama", "dilzaib", "babar"];
// // let students2 = ["yaseen", "muzzamil", "mudassir"];

// let push = students.push("abdullah", "ayaz");
// console.log(students);
// console.log(push);

// let pop = students.pop();
// console.log(students);
// console.log(pop);

// let shift = students.shift();
// console.log(students, shift);

// let unShift = students.unshift("waleed");
// console.log(students, unShift);

// let slice = students.slice(1, 4);
// console.log(students, slice);

// let splice = students.splice(1, 1, "shaheen", "azaan", "tanveer");
// console.log(students, splice);

// let joining = students.join("|");
// console.log(students, joining);

// let concating = students.concat(students, students2);
// console.log(concating);

// let sorting = students.sort();
// console.log(students, sorting);

// let numberArray = [2, 4, 6, 7, 1, 0, 4, 5];
// console.log(numberArray);
// let asc = numberArray.sort((a, b) => b - a);
// console.log(asc, numberArray);
// console.log(students);
// let maping = students.map((val) => val + "  of matric batch");
// console.log(students, maping);
// console.log(students);

// let filtering = students.filter((val, ind) => ind > 2);
// console.log(filtering);
// console.log(students);

// let finding = students.find((val, ind) => ind > 2);
// console.log(finding);
// console.log(students);

// let numOfArry = [1, 2, 3, 4, 5];
// let r = numOfArry.reduce((acc, val) => {
//   return acc * val;
// }, 1);
// console.log(r);

// students.forEach((fr) => {
//   console.log(fr);
// });

// let num = [1, 2, 3, 4, 5];
// let c = num.some((val) => val % 2 === 0);
// console.log(c, "even");

// let num = [1, 2, 3, 4, 5];
// let c = num.every((val) => val % 2 === 0);
// console.log(c, "even");

// let array = [1, 2, 3, 4];
// console.log(array);
// let rever = array.reverse();
// console.log(rever);
// console.log(array);

// let array = [1, 2, 3, 4];
// let i = array.includes(3);
// console.log(i);

// let array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// let c = array.copyWithin(2, 0);
// console.log(c);
// console.log(array);

// let userAge = +prompt("enter your age");

// if (userAge >= 18 && userAge <= 28) {
//   alert("you are eligible");
// } else if (userAge <= 17 && userAge >=12) {
//   alert("you are very close but this is wrong");
// } else {
//   alert("you are not allowed");
// }

// let weekDays = prompt("enter the week days");

// switch (weekDays) {
//   case "monday":
//     alert("moday is happy day");
//     break;
//   case "tuesday":
//     alert("tuesday is happniest day");
//     break;
//   case "wednesday":
//     alert("wednesday is very happy day");
//     break;
//   case "thrusday":
//     alert("thrusday is happnining day");
//     break;
//   case "friday":
//     alert("friday is more happy day for muslim society");
//     break;
//   case "saturday":
//     alert("saturday is happ day");
//     break;
//   case "sunday":
//     alert("sunday is rest day");
//     break;
//   default: {
//     alert("please enter the week days ! no useless words ");
//   }
// }

// ternay operators  //

// let userAge = +prompt("enter your age");

// userAge >= 18 && userAge <= 28
//   ? alert("you are adult welcom to ____")
//   : alert("only adult allow !no childern allow & no old man allow");

// function alerting() {
//   alert("iam a function");
// }

// alerting();

// const alerting = ()=>{
//     alert("iam a funct")
// }

//  Mouse Events:

// click – jab user click kare

// dblclick – double click

// mousedown – mouse button press ho

// mouseup – mouse button chhode

// mousemove – mouse move ho

// mouseenter – mouse kisi element pe aaye

// mouseleave – mouse element se bahar jaye

// document.getElementById("box").addEventListener("click", () => {
//   alert("hoooooo!hoooo");
// });

// document.getElementById("box").addEventListener("dblclick", () => {
//   alert("hoooooo!hoooo");
// });

// document.getElementById("box").addEventListener("mousedown", () => {
//     alert("hoooooo!hoooo");
//   });

// document.getElementById("box").addEventListener("mouseup", () => {
//     alert("hoooooo!hoooo");
//   });

// document.getElementById("box").addEventListener("mousemove", () => {
//     alert("hoooooo!hoooo");
//   });

// document.getElementById("box").addEventListener("mouseenter", () => {
//     alert("hoooooo!hoooo");
//   });

// document.getElementById("box").addEventListener("mouseleave", () => {
//     alert("hoooooo!hoooo");
//   });

//  Keyboard Events:
// keydown – key press hone par

// keyup – key chhodne par

// keypress – key press + character type hone par (deprecated in modern browsers)

// document.getElementById("input").addEventListener("keydown", (e) => {
//   console.log("key press +", e.key);
// });

// document.getElementById("input").addEventListener("keyup", (e) => {
//     console.log("key press +", e.key);
//   });

// document.getElementById("input").addEventListener("keypress", (e) => {
//   console.log("key press +", e.key);
// });

//  Q1: What is DOM Manipulation?
// English:
// DOM Manipulation means changing HTML elements or content using JavaScript.

// Roman Urdu:
// DOM Manipulation ka matlab hai JavaScript se HTML elements ko change karna.

// 🔹 Q2: What is BOM?
// English:
// BOM (Browser Object Model) allows JavaScript to interact with the browser
//  (like window, location, history).

// Roman Urdu:
// BOM ka matlab hai browser ke sath interact karna (jaise window,
// location, etc) JavaScript ke zariye.

// const inputGet = document.getElementById("input");
// const inputGet = document.getElementsByClassName("input");
// const inputGet = document.getElementsByName("input");
// const inputGet = document.getElementsByTagName("input");
// const inputGet = document.querySelectorAll("input");

// const containerDiv = document.getElementById("containerCard");

// let card = `<div style="border:1px solid red;">
// <img width="100px" src= "https://abwfisafbjptoxfaxiud.supabase.co/storage/v1/object/users/public/1745257293665-8c705203-2890-4e57-a23a-2ea87083c773.png"/>
// <h1>Heading</h1>
// <p>Description</p>
// </div>`;

// containerDiv.innerHTML += card;

// alert("please must view this page!");
// location.href = "https://fareedgul735.github.io/Blogging-Web/index.html";

// Useful BOM Functions / Methods

// ✅ window object
// window.alert("Hello!") – shows alert box.

// window.confirm("Are you sure?") – shows OK/Cancel dialog.

// window.prompt("Enter your name:") – input dialog box.

// window.open(url, name, specs) – opens a new browser window.

// window.close() – closes the current window (if opened by script).

// setTimeout(function, delay) – runs function after delay (ms).

// setInterval(function, delay) – repeats function every delay (ms).

// clearTimeout(id) / clearInterval(id) – cancels timers.

// ✅ navigator
// navigator.userAgent – browser details.

// navigator.language – browser language.

// navigator.onLine – returns true if online.

// ✅ screen
// screen.width / screen.height – screen resolution.

// screen.availWidth – usable width excluding OS bars.

// ✅ location
// location.href – full URL.

// location.hostname – domain name.

// location.pathname – path of the URL.

// location.reload() – reloads the page.

// location.assign(url) – navigates to new URL.

// ✅ history
// history.back() – go to the previous page.

// history.forward() – go to the next page.

// history.go(n) – go forward/back n pages.

// Deep Copy Vs Shallow Copy //

// "Shallow copy sirf upar se copy karti hai, andar ki cheezen
//  shared hoti hain. Deep copy pura object, including nested
//  parts, alag banata hai."

// let person = {
//   name: "fareed",
//   age: 19,
// };
// let copy = person;  // this is shallow copy
// copy.name = "saeed";

// console.log(person);
// console.log(copy);

// let userId = {
//   id: 91254319,
//   userName: "sahil",

// };

// let copyUserIdRef = { ...userId };

// copyUserIdRef.userName = "nadeem";
// copyUserIdRef.id = 11256789;
// console.log(userId);
// console.log(copyUserIdRef);

// let userInformation = {
//   name: "saeed",
//   age: 34,
//   married: true,
//   childern: { name: "azan", age: 9 },
// };

// let copyRef = { ...userInformation };
// copyRef.childern.name = "humza";

// copyRef.name = "ajab";
// console.log(userInformation);
// console.log(copyRef);

// let userInformation = {
//   name: "saeed",
//   age: 34,
//   married: true,
//   childern: { name: "azan", age: 9 },
// };

// let copyRef = JSON.parse(JSON.stringify(userInformation));
// copyRef.childern.name = "humza";

// copyRef.name = "ajab";
// console.log(userInformation);
// console.log(copyRef);

// callback hell //

// Callback hell jb hum nested callback hells ka use karte hai tu ussey callbackhell kahte hai //

// document.getElementById("heading").addEventListener("dblclick", () => {
//   alert("hello world !");
// });

// function data(data, nestedCallback) {
//   setTimeout(() => {
//     console.log("=>", data);
//     if (nestedCallback) {
//       nestedCallback();
//     }
//   }, 3000);
// }
// console.log("Getting Data-1...........");
// data("Data-1", () => {
//   console.log("Getting Data-2...........");
//   data("Data-2", () => {
//     console.log("Getting Data-3...........");
//     data("Data-3", () => {
//       console.log("Data Getting SuccessFully");
//     });
//   });
// });

// function data1(cb) {
//   setTimeout(() => {
//     let data1 = "data-1";
//     console.log("==>", data1);
//     cb();
//   }, 2000);
// }
// function data2(cb) {
//   setTimeout(() => {
//     let data2 = "data-2";
//     console.log("==>", data2);
//     cb();
//   }, 2000);
// }
// function data3(cb) {
//   setTimeout(() => {
//     let data3 = "data-3";
//     console.log("==>", data3);
//     cb();
//   }, 2000);
// }
// console.log("Getting Data-1.....");
// data1(() => {
//   console.log("Getting Data-2.....");
//   data2(() => {
//     console.log("Getting Data-3.....");
//     data3(() => {
//       console.log("Data Getting SuccessFully");
//     });
//   });
// });

// Promises //

// function promise(data) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("==>", data);
//       res("Success");
//     }, 2000);
//   });
// }
// console.log("Gettig Data-1.......");
// promise("data-1").then((res) => {
//   console.log(res + " data-1 ");
//   console.log("Gettig Data-2.......");
//   promise("data-2").then((res) => {
//     console.log(res + " data-2 ");
//     console.log("Gettig Data-3.......");
//     promise("data-3").then((res) => {
//       console.log(res + " data-3 ");
//       console.log("Getting Data SuccessFully");
//     });
//   });
// });

// Recursive function wo function hota
// hai jo khud ko hi call karta hai jab tak koi base condition meet na ho jaye

// Factorial //

// function resursive(f) {
//   debugger;
//   if (f === 1) return 1;
//   return f * resursive(f - 1);
// }

// let factoraialResult = resursive(+prompt("enter your factorial number"));
// console.log(factoraialResult);

// Closure //

// Closure JavaScript ka feature hai jahan ek inner function,
//  apne outer function ke variables
//  ko access kar sakta hai even after the outer function has finished execution.

// const outer = () => {
//   let name = " Fareed";

//   const inner = () => {
//     console.log(`Hello ${name}`);
//   };
//   return inner;
// };
// const greet = outer();
// greet();

// 📌 Real-life Use Case:
// Private variables banane ke liye

// Data hiding / encapsulation

// Event handlers / setTimeout

// Functional programming

// Data-Hiding //

// function createAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     checkBalance: function () {
//       return balance;
//     },
//     deposit: function (amount) {
//       if (amount > 0) balance += amount;
//     },
//     withDraw: function (amount) {
//       if (amount <= balance) balance -= amount;
//     },
//   };
// }

// const myAccount = createAccount(+prompt("Enter your initial amount:"));
// console.log("Initial Balance:", myAccount.checkBalance());

// myAccount.deposit(+prompt("Enter deposit amount:"));
// console.log("After Deposit:", myAccount.checkBalance());

// myAccount.withDraw(+prompt("Enter withdrawal amount:"));
// console.log("After Withdrawal:", myAccount.checkBalance());
// console.log("Total Amount:", myAccount.checkBalance());

// Apis //

// let httpMethods = {
//   Get: "GET",
//   Post: "POST",
//   Put: "PUT",
//   Patch: "PATCH",
//   Delete: "DELETE",
// };

// let Get = "GET";

// let baseUrl = "https://jsonplaceholder.typicode.com";
// let photosFolder = "/photos";

// const res = fetch(baseUrl + photosFolder, {
//   method: Get,
// });
// res
//   .then((res) => {
//     console.log(res);
//     let result = res.json();
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert("Internal Server Error !");
//   });

// let containerCard = document.querySelector("#containerCard");

// const method = {
//   Get: "GET",
//   Post: "POST",
//   Put: "PUT",
//   Patch: "Patch",
//   Delete: "Delete",
// };

// let baseUrl = "https://jsonplaceholder.typicode.com";
// let getPhotosFolder = "/posts";

// let data = fetch("https://jsonplaceholder.typicode.com/posts");
// data
//   .then((res) => {
//     let result = res.json();
//     console.log(result);
//     result.then((response) => {
//       let card = response.map((post) => {
//         let readyCard = `
//         <div style = "border:1px solid red;">
//         <p>${post.userId}</p>
//         <h1>${post.id}</h1>
//         <h4>${post.title}</h4>
//         <i>${post.body}</i>
//         </div>
//         `;
//         return readyCard;
//       });
//       containerCard.innerHTML += card;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await //

// function promise(data) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("==>", data);
//       res("Success");
//     }, 2000);
//   });
// }
// console.log("Getting Data-1.....");

// async function completedData() {
//   let data_1 = await promise("data-1");
//   console.log(data_1 + " data-1");
//   console.log("Getting Data-2.....");
//   let data_2 = await promise("data-2");
//   console.log(data_2 + " data-2");
//   console.log("Getting Data-3.....");
//   let data_3 = await promise("data-3");
//   console.log(data_3 + " data-3");
//   console.log("Getting Data SuccessFully");
// }
// completedData();

// Promise.resolve("Success").then((res) => console.log(res));
// Promise.reject("Failed").catch((err) => console.log(err));

// Promise.all //

// Sabhi promises complete hone tak wait
//  karta hai. Agar koi ek bhi fail ho jaye toh catch mein chala jata hai.

// let pp1 = Promise.resolve("Hey Iam Success");
// let pp2 = Promise.resolve("Hey Iam Currently Success");

// Promise.all([pp1, pp2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.allSettled //

// Sab promises ka result dega (chahe resolve ho ya reject). //

// let p1 = Promise.resolve("Hey Iam Success");
// let p2 = Promise.reject("Hey Iam Failed");

// Promise.allSettled([p1, p2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.race //
// Jo promise pehle complete ya fail hoga usi ka result dega. //

// let p1 = new Promise((res, rej) =>
//   setTimeout(() => res("Hey Iam Success"), 50)
// );

// let p2 = new Promise((res, rej) =>
//   setTimeout(() => rej("Hey Iam Failed"), 100)
// );

// Promise.race([p1, p2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.any //

// Pehla resolve hone wala promise ka result
// return karta hai. Agar sab reject hue toh error dega.

// let p1 = Promise.reject("Hey Iam Failed");
// let p2 = Promise.reject("Hey Iam Failed");

// Promise.any([p1, p2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const sodaSrf = (saman) => {
//   let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("==>", saman);
//       res("SuccesssFully");
//     }, 2000);
//   });
//   return promise;
// };
// console.log("Getting Data1.........");

// sodaSrf(+prompt("ebter")).then((res) => {
//   console.log(res);
//   console.log("Getting Data2.........");
//   sodaSrf("data2").then((res) => {
//     console.log(res);
//   });
// });

// let baseUrl = "https://jsonplaceholder.typicode.com";
// let getPhotosFolder = "/photos";

// let outerCard = document.getElementById("containerCard");

// const fetchingData = async () => {
//   const data = fetch(baseUrl + getPhotosFolder);
//   try {
//     let rawReturn = await data;
//     console.log(rawReturn);
//     let resultData = await rawReturn.json();
//     console.log(resultData);
//     let card = resultData.map((data) => {
//       let readyCard = `
//       <div style="border:1px solid blue; width:400px; ">
//       <p>${data.albumId}</p>
//       <b>${data.id}</b>
//       <h2>${data.title}</h2>
//       <a href = "${data.url}">Read More</a>
//       <img src="${data.thumbnailUrl}" />
//       <img src="./logo-removebg-preview.png" />
//       </div>
//       `;
//       return readyCard;
//     });
//     outerCard.innerHTML += card;
//   } catch (err) {
//     console.log(err);
//     alert("Internal Server Error");
//   }
// };

// fetchingData();

// data.then((res) => {
//   console.log(res);
//   ///////////////////
//   let result = res.json();
//   result.then((lastRes) => {
//     console.log(lastRes);
//   });
// })
// .catch((err) => {
//   console.log(err);
//   alert("Internal Server Error");
// });

// what is hoisting //
// var a; // initialize
// console.log(a);
// a = "ayazbhai";
// console.log(a) // Js

// console.log(b);

// console.log(a)
// var a = "ayazbhai";
// console.log(a)

// let b = 7;

// foo();

// function foo() {
//   console.log("hello,world");
// }

// console.log(b);

// let b = 15; // hoist

// const a = () => {
//   console.log("jfgwef"); // file temprarl dead zone
// };

// a();

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let outerDiv = document.getElementById("containerCard");

// let baseUrl = "https://jsonplaceholder.typicode.com";
// let getPhotosFolder = "/photos";

// let data = fetch(baseUrl + getPhotosFolder);
// data
//   .then((res) => {
//     console.log(res);
//     let result = res.json().then((lastResponse) => {
//       console.log(result);
//       console.log(lastResponse);
//       let card = lastResponse.map((obj) => {
//         let readCard = `
//         <div style="border:1px solid blue;">
//         <h1>${obj.albumId}</h1>
//         <i>${obj.id}</i>
//         <h3>${obj.title}</h3>
//         <a href = "${obj.url}">Read More</a>
//         <img src = "./logo-removebg-preview.png" />
//         </div>
//         `;
//         return readCard;
//       });
//       outerDiv.innerHTML += card;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function factorialNum(f) {
  debugger;
  if (f === 1) return 1; // base Condition 5
  let factorailValue = f * factorialNum(f - 1); // recursive
  return factorailValue;
}

let factorialResult = factorialNum(+prompt("enter you factorial number"));
console.log(factorialResult);
