
// Ternary Operators
// syntax: condition ? value_if_true : value_if_false;

// Problem_1: Find Even or Odd numbers?

let num = 2;
let result = num % 2 === 0 ? "Even Number" : "Odd Number";
// console.log(result); 


// Problem_2: find Maximum?

let a =40;
let b = 30;
let maxNum = a > b ? 'A is a Maximum Number' : 'B is a Maximum Number';
// console.log(maxNum);


// Problem_3: Pass of Fail?

let score = '60';
let passFail = score >= 50 ? 'Pass' : score >= '50' ? 'Pass' :'Fail';
// console.log(passFail); // 


// Problem_4: Absolute Value?

let x = -3.142514;
let absoluteValue = x >= 0 ? 'Absolute Value' : 'Not a Absolute Value';
// console.log(absoluteValue);



// Problem_5: Positive, Negative or Zero?

let num2 = 10;
let showResult = num2 < 0 ? 'Negative' : num2 > 0 ? 'Positive' : 'Zero';
console.log(showResult);


// Problem_6: Check Leap Year

/*
📅 Leap Year Rule Recap:

A year is a leap year if:

    It is divisible by 4, and

        Not divisible by 100, unless

            It is divisible by 400.

So:
 */

let year = 2025;
let leapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 'Lear Year' : 'Not a Leap Year'
// console.log(leapYear); 


// Problem_7 : Grade from Score

let grade = 80;
let showGrade = grade >= 90 ? 'A' : grade > 79 && grade < 90 ? 'B' : grade > 69 && grade < 90 ? 'C' : grade > 59 && grade < 70 ? 'C' : 'Fail'
// console.log(showGrade);


// Problem_8 : Min of Three Numbers

let m = 10;
let n = 2;
let p = 50;

let minNumber = m < n && m < p ? 'M is Min' : n < m && n < p ? 'N is Min' : 'P is Min'
console.log(minNumber); // n
