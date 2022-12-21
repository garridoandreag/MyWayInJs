////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

let massMarks = 78;
let heightMarks = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMarks / heightMarks ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

if (markHigherBMI == true) console.log("Mark's BMI is higher than John's!");
else console.log("John's BMI is higher than Mark's!");

massMarks = 95;
heightMarks = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMarks / heightMarks ** 2;
bmiJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

if (markHigherBMI == true)
  console.log(`Mark's BMI(${bmiMark}}) is higher than John's!`);
else console.log(`John's BMI(${bmiJohn}) is higher than Mark's!`);
