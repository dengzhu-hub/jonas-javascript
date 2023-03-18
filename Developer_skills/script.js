// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -19, -6, -1, 'error', 9, -13, 97, 15, 14, 9, 5];
const temperaturesNew = [3, -6, -6, -1, 'error', 49, 13, -17, 15, 14, 9, 39];
var sorts = temperatures.sort();
console.log(sorts);
var min = temperatures[0];
var max = temperatures[0];
// console.log(max);

// const calTempAmplitue = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     let currTmp = temp[i];
//     if (typeof currTmp === 'string') continue;
//     if (currTmp > max) max = currTmp;
//     if (currTmp < min) min = currTmp;
//   }
//   console.log(`ok, the temperatureRange is: ${max - min}😊`);
// };

// calTempAmplitue(temperatures);

// how to merge two arrays;

// const calTempAmplitueNew = function (t1, t2) {
//   const temp = t1.concat(t2);
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     let currTmp = temp[i];
//     if (typeof currTmp === 'string') continue;
//     if (currTmp > max) max = currTmp;
//     if (currTmp < min) min = currTmp;
//   }
//   console.log(max, min);
//   return `The temperatureAmpltiue is ${max - min}`;
// };

// console.log(calTempAmplitueNew(temperatures, calTempAmplitueNew));

// deBUG

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     // value: Number(prompt('Degress celsius:')),

//     // FIX
//     value: Number(prompt('Degrees celsius:')),
//   };
//   console.log(typeof measurement.value);
//   console.log(measurement.value);
//   // FIND
//   console.table(measurement);
//   console.warn(measurement.value);
//   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// const calTempAmplitueNewBug = function (t1, t2) {
//   const temp = t1.concat(t2);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temp.length; i++) {
//     let currTmp = temp[i];
//     if (typeof currTmp === 'string') continue;
//     debugger;
//     if (currTmp > max) max = currTmp;
//     if (currTmp < min) min = currTmp;
//   }
//   console.log(max, min);
//   return `The temperatureAmpltiueBug is ${max - min}`;
// };

// const amplitueBug = calTempAmplitueNewBug([1, 4, 6], [5, 7, 4]);
// // IDENTIFY
// console.log(amplitueBug);

// CODE CHALLENGE 4

// const data = [17, 21, 23];
// const dada2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < data.length; i++) {
//     str += `${arr[i]}℃ in ${i + 1} days ...`;
//   }
//   console.log(`... ${str}`);
// };
// const prints = printForecast(data);
// console.log(prints);
