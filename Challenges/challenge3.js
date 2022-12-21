////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let dolphinsTeam = (96 + 108 + 89) / 3;
let koalasTeam = (88 + 91 + 110) / 3;

if (dolphinsTeam > koalasTeam) {
  console.log(
    `The winning team is Dolphins with an average score of ${dolphinsTeam}`
  );
} else if (dolphinsTeam > koalasTeam) {
  console.log(`The winning is Koalas with an average score of ${koalasTeam}`);
} else if (dolphinsTeam === koalasTeam) {
  console.log(`Both teams win the trophy.`);
}

dolphinsTeam = (97 + 112 + 101) / 3;
koalasTeam = (109 + 95 + 123) / 3;

if (dolphinsTeam > 100 && koalasTeam > 100) {
  if (dolphinsTeam > koalasTeam) {
    console.log(
      `The winning teams is Dolphins with an average score of ${dolphinsTeam}`
    );
  } else if (dolphinsTeam > koalasTeam) {
    console.log(`The winning is Koalas with an average score of ${koalasTeam}`);
  } else {
    console.log(`Nobody wins the trofy`);
  }
}

dolphinsTeam = (97 + 112 + 101) / 3;
koalasTeam = (109 + 95 + 106) / 3;

if (dolphinsTeam > 100 && koalasTeam > 100) {
  if (dolphinsTeam > koalasTeam) {
    console.log(
      `The winning is Dolphins with an average score of ${dolphinsTeam}`
    );
  } else if (dolphinsTeam > koalasTeam) {
    console.log(`The winning is Koalas with an average score of ${koalasTeam}`);
  } else {
    console.log(`There is a draw, so nobody wins the trofy`);
  }
}
