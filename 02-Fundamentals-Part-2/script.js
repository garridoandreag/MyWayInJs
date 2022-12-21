"use strict";

// Function declaration
function calculateAge(birthyear) {
  return 2022 - birthyear;
}

const age0 = calculateAge(2000);

// Function expression
const calculateAge1 = function (birthyear) {
  return 2022 - birthyear;
};

const age1 = calculateAge1(2001);

console.log(`Age 0: ${age0} and Age 1: ${age1}`);

// Arrow function
const calculateAge2 = (birthyear) => 2022 - birthyear;

const age2 = calculateAge2(1999);

const calculateYearsUntilRetirement = (birthyear) => {
  const age = 2022 - birthyear;
  const retirement = 60 - age;
  return retirement;
};

console.log(`Age using arrow function: ${age2}`);

console.log(
  `There are ${calculateYearsUntilRetirement(
    2000
  )} years until your retirement.`
);

// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Garrido",
  2021 - 2000,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Garrido",
  age: 2021 - 2000,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends."
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends."
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonas";

const jonasObjectM = {
  firstName: "Jonas",
  lastName: "Garrido",
  birthyear: 1999,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  /*
  calcAge: function (this.birthYear) {
    return 2037 - this.birthYear;
  },*/

  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    let hasLicense =
      this.hasDriverLicense == true
        ? "has a Driver License"
        : "has not a Driver License";

    this.summary =
      this.firstName +
      " is a " +
      this.age +
      "-year old " +
      this.job +
      ", and he " +
      hasLicense;
    return this.summary;
  },
};

//Dot vs. Bracket Notation

console.log(jonasObjectM);

console.log(jonasObjectM.lastName);

const nameKey = "Name";

console.log(jonasObjectM["first" + nameKey]);

//Object Methods
console.log("Object Methods");

console.log(jonasObjectM["calcAge"](1991));
console.log(jonasObjectM.calcAge(1991));

//Object Methods More Efficient
console.log(jonasObjectM.age);

//Challenge
console.log(jonasObjectM.getSummary());

// Loop For
for (let i = 0; i < 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

// Looping Array, Breaking and continuing.
//Using jonasArray

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i] + typeof jonasArray[i]);

  types.push(typeof jonasArray[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i <= jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`--- BREAK WITH NUMBERS ---`);

for (let i = 0; i <= jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
}

// looping backwards and loops in loops
console.log(`--- LOOPING BACKWARDS ---`);
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

console.log(`--- LOOPS IN LOOPS ---`);
for (let exercise = 0; exercise < 4; exercise++) {
  console.log(`Exercise N° ${exercise}`);
  for (let rep = 0; rep < 5; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
  }
}

// While loop

let rep = 1;

while (rep <= 10) {
  console.log(`Lifthing weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
