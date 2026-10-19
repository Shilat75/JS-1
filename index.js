

// console.log("hello");
// const age=10;
// const name="Shilat";
// const address="פאני מוגרבי 35"
// const vagan= true;
// const N_Kids=0;


// console.log(`My name is: ${name} \nmy age is : ${age}\n and my address: ${address}\n Are you Vagan: ${vagan}\n Number your kids is: ${N_Kids}\n` );

// console.log(typeof age,typeof name)


//part-1
// print just String from 1q
console.log("js Hello");
//print my name and adress -String and Number 2026
console.log("My name is:Shilat\n My City is:Beer sheva\n 2026");

const city= "Beer Sheva";
//print my city -String
console.log(`My city is ${city}`);

let Score=0;
//print number 0
console.log(`${Score}`);
Score=10;
//after chenge print number 10
console.log(`${Score}`)
//print String and number
console.log(`Score:`,Score);




//Part 2

const pi=3.14;
// pi = 3;
//TypeError: Assignment to constant variable. Const is not can change

//q8
let color="blue";
color="red"
//it's work because of let is not consy he can change

//q9
let a =1;
// let a =2;
//EROR because of let a its keep we can just chang the 'a'

//q10
 var b=1;
 var b=2;
//its working because of the variable Var is Value that can be changed and why use var? not uising usully but we cab just to know to use in carrfuly.
  
//q11
console.log ("==q11");
let total;
 console.log (`${total}`);
 //undefined

 //q12

 const dateB="15/07/2001";
 let scoreGame=16;
 let lastName="Hakimi";
 let mone=20;

 //Part 3
//q13


let userName = "Shilat"; // חוקי
// let 2fast = 10;       //  לא חוקי אסור להתחיל במספר
// let my var = 5;       // לא חוקי אסור רווחים
let _count = 3;          // חוקי
let $price = 100;        // חוקי
// let let = 5;          // לא חוקי מילה שמורה
// let first-name = "";  // לא חוקי אסור להשתמש במקף 
let totalPrice = 200;    // חוקי
let Total = 50;          // חוקי
// let class = 10;       // לא חוקי מילה שמורה של מחלקה 

//q14
let fast2 = 10;          // במקום 2fast
let myVar = 5;           // במקום my var
let letValue = 5;        // במקום let
let firstName = "Dan";   // במקום first-name
let className = "A";     // במקום class

//q15

let age=15;
let Age=17;
//two another variables
console.log (`${age} AND ${Age} `);

//q16

const Product_Price=14;
const User_logIn=true;
const Num_child=7;
//חשוב להבין כי לשם של המשתנה יש משמעות וזה אמור להיות קריא בקוד למי שמהצד יסתכל וירצה לעבוד או להיכנס לקוד לכן צריך שמות מובנים ולפי המוסכמות 

//Part4

//q17
const User_SignUp=true;
const Num_fly=7;
const NameShop="Zara";
//q18

const string1='Hey1';
const string2="Hey2";
const string3=`Hey3`;
console.log(`${string1} ${string2} ${string3}`)

//q19
const str1=`it's me`;
const str2="it"+("'")+"s" +" " +"me";
console.log(`${str1} ${str2}`)

//q20

const num=3;
const numF=3.5;
console.log(`${num}${numF}`)
//שניהם מטיפוס Nוumber


//q21
console.log(5+10);
console.log(5-10);
console.log(5*10);
console.log(4/10);
console.log(3%10);
//% מודולו זהו אופרטור שמחזיר את השארית לדוגמא 5%2==1 השארית 

//q22
const isStudent=true;
const isVegan1=true;
console.log(`${isStudent} ${isVegan1}`);

//q23
console.log(3<5);
console.log(3>5);
console.log(5===5);
//  טיפוס בוליאני מאחר וזה בולייאן ותנאים אז כמובן התשובה תיהיה אמת או שקר 

//q24
let stri1 = '';
let stri2 = ' ';
console.log(stri1);
console.log(stri2);

// הם לא אותו דבר!
// str1 הוא מחרוזת ריקה באורך 0
// str2 הוא מחרוזת המכילה רווח אחד באורך 1


//Part5
//q25
let u;
console.log(`${u}`)
//undefined

//q26
const middleName = null
console.log(middleName); // null

// null - ערך ריק שהוגדר בכוונה
// undefined - משתנה שהוגדר אך לא קיבל ערך

//q27

console.log(null == undefined);  // true
console.log(null === undefined); // false

// == בודק שוויון עם אפשרות להמרת טיפוסים
// null ו-undefined נחשבים שווים בהשוואה זו

// === בודק שוויון ללא המרת טיפוסים
// null ו-undefined הם ערכים מטיפוסים שונים ולכן התוצאה false


//q28
//const name= null;
//const isStudent=true;
//const num=3;
//const name="Shilat";
//const num; -undefined

//Part 6
//q29
console.log(typeof(42),typeof(null),typeof(undefined),typeof(true),typeof("hello"), typeof("NaN"));
//number object undefined boolean string

//q30 
//  object  לא ציפיתי כי נולל זה כלום זה ריק ואובגקט זה משהו שכן לכאורה יש ערך .כתובת 

//q31
// string    NUMBERזה גם מפתיע כי זה משתנה מטיפוס 

//q32
console.log( typeof(typeof(42)));
//string

//q33

let age1 = 25;
let name = "Shilat";
let isStudent1 = true;
let middleName1 = null;
let city1;

console.log("age:", typeof age1);             // number
console.log("name:", typeof name);           // string
console.log("isStudent:", typeof isStudent1); // boolean
console.log("middleName:", typeof middleName1); // object
console.log("city:", typeof city1);           // undefined

// null הוא ערך פרימיטיבי, אבל typeof null מחזיר object
// בגלל התנהגות היסטורית של JavaScript

//q34

let value = 5;

console.log(typeof value); // number

value = '5';

console.log(typeof value); // string

// ב-JavaScript משתנה יכול להכיל ערכים מטיפוסים שונים
// הטיפוס נקבע לפי הערך הנוכחי של המשתנה


//Part 7
//q35

 const myName = "Shilat";
 const myAge = 25;

 console.log(`My name is ${myName} and I am ${myAge} years old.`);

 // q36
 console.log("My name is " + myName + " and I am " + myAge + " years old.");

 // Backticks are more readable because we don't need to use +


 // q37
 console.log(`The sum of 3 and 4 is ${3 + 4}`);
 // Output: The sum of 3 and 4 is 7


 // q38
 const price = 80;
 const quantity = 3;

 console.log(`Total: ${price * quantity}`);
 // Output: Total: 240


 // q39
 console.log(`Hello 
World`);

 console.log("Hello\nWorld");

 // Both print the text in two lines
 // Backticks allow us to write multiple lines directly


 // q40
 const isVegan = true;
 const numberOfKids = 2;

 console.log(`Vegan: ${isVegan}, kids: ${numberOfKids}`);
 // Output: Vegan: true, kids: 2


 
 // Part 8

 // q41
 console.log(Number('42'));         // 42
 console.log(typeof Number('42'));  // number
 // Convert string to number


 // q42
 console.log(String(123));          // "123"
 console.log(typeof String(123));   // string
 // Convert number to string


 // q43
 console.log(Number('12px'));        // NaN
 console.log(typeof Number('12px')); // number
 // Cannot convert '12px' to a valid number
 // NaN means Not a Number


 // q44
 console.log(Number(true));       // 1
 console.log(Number(false));      // 0
 console.log(Number(null));       // 0
 console.log(Number(undefined));  // NaN
 console.log(Number(''));         // 0

 // true = 1, false = 0
 // null and empty string = 0
 // undefined = NaN


 // q45
 console.log(String(true));       // "true"
 console.log(String(null));       // "null"
 console.log(String(undefined));  // "undefined"

 // Convert values to strings


 // q46
 const input = '25';

 console.log(input + 5);          // "255"
 console.log(Number(input) + 5);  // 30

 // Without conversion: string concatenation
 // With Number(): mathematical addition


 // q47
 console.log('5' + 1);   // "51"
 console.log('5' - 1);   // 4
 console.log('5' * 2);   // 10
 console.log('10' / 2);  // 5

 // + can concatenate strings
 // -, *, / convert numeric strings to numbers

 
 // Part 9

 // q48
 console.log('5' + 5); // "55"
 // String + number = concatenation


 // q49
 console.log('5' - 2); // 3
 // String converts to number


 // q50
 console.log('5' + true); // "5true"
 // true converts to string


 // q51
 console.log(true + 1); // 2
 // true converts to number 1


 // q52
 console.log(typeof (5 + '5')); // string
 // 5 + '5' = "55" (string)


 // q53
 console.log(typeof null, typeof undefined);
 // object undefined


 // q54
 let x;
 console.log(x, typeof x);
 // undefined undefined
 // Variable declared without a value


 // q55
 console.log(Number('abc'), typeof Number('abc'));
 // NaN number
 // NaN is a value of type number


 // q56
 console.log(true === 'true'); // false
 // Boolean and string are different types


 // q57
 const n = 5;
 // n = 6;
 // console.log(n);

 // TypeError: Assignment to constant variable
 // const cannot be reassigned

 
 // Part 10

 // q58 - Identity Card
 const personName = "Shilat";
 const personAge = 25;
 const personCity = "Beer Sheva";
 const student = true;
 const likesCoffee = true;

 console.log(`
 Name: ${personName}
 Age: ${personAge}
 City: ${personCity}
 Student: ${student}
 Likes coffee: ${likesCoffee}
 `);

 console.log(typeof personName);  // string
 console.log(typeof personAge);   // number
 console.log(typeof personCity);  // string
 console.log(typeof student);     // boolean
 console.log(typeof likesCoffee); // boolean


 // q59 - Invoice
 const price1 = 20;
 const quantity1 = 2;

 const price2 = 15;
 const quantity2 = 3;

 const price3 = 10;
 const quantity3 = 4;

 const total1 = price1 * quantity1;
 const total2 = price2 * quantity2;
 const total3 = price3 * quantity3;

 const totalAll = total1 + total2 + total3;

 console.log(`
 Invoice:
 Product 1: ${total1}
 Product 2: ${total2}
 Product 3: ${total3}
 Total: ${totalAll}
 `);

 // Total: 125


// q60 - Celsius to Fahrenheit
 const celsius = 25;
 const fahrenheit = celsius * 9 / 5 + 32;

 console.log(`${celsius}C = ${fahrenheit}F`);
 console.log(typeof fahrenheit); // number

 // Output: 25C = 77F


 // q61 - Convert input values
 const ageInput = '30';
 const heightInput = '1.75';

 console.log(ageInput, typeof ageInput);
 console.log(heightInput, typeof heightInput);
 // Before conversion: string

 const convertedAge = Number(ageInput);
 const convertedHeight = Number(heightInput);

 console.log(convertedAge, typeof convertedAge);
 console.log(convertedHeight, typeof convertedHeight);
 // After conversion: number


 // q62 - Type Museum
 const values = [
     "Hello",
     "JavaScript",
     10,
     3.14,
     true,
     false,
     null,
     null,
     undefined,
     undefined
 ];

 for (const item of values) {
     console.log(`Value: ${item}, Type: ${typeof item}`);
 }

 // Five primitive types:
 // string, number, boolean, null, undefined
 // typeof null returns "object"

 
 // q63
 console.log(0.1 + 0.2);
 // Output: 0.30000000000000004

 // JavaScript uses binary floating-point numbers.
 // Some decimal numbers cannot be represented exactly.
 // This causes small precision errors.

 
 // q64
 console.log('b' + 'a' + +'a' + 'a');

 // Step 1: 'b' + 'a' = 'ba'
 // Step 2: +'a' = NaN
 // Step 3: 'ba' + NaN = 'baNaN'
 // Step 4: 'baNaN' + 'a' = 'baNaNa'

 // Output: baNaNa
