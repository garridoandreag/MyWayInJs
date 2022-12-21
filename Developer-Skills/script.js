`use strict`;
const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitud = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    else {
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
  }
  return max - min;
};

console.log(calcTempAmplitud(temperatures));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C) FIX
    value: Number(prompt('Degrees celsius')),
  };

  // B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    else {
      debugger;
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitudBug([3, 5, 1], [9, 4, 5]));
