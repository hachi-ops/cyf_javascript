// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multiplyByHundred(number) {
  return number * 100;
}

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map(multiplyByHundred); // complete this statement

console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/