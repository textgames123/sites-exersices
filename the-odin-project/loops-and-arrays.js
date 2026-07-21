function sumOfTripleNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number * 3;
    }
  }

  return sum;
}

function sumOfTripleNumbersUsingArray(numbers) {
  let evenNumbers = numbers.filter((currentNumber) => currentNumber % 2 === 0);
  let tripledNumbers = evenNumbers.map((currentNumber) => currentNumber * 3);
  let sumOfTripledNumbers = tripledNumbers.reduce((total, currentNumber) => total + currentNumber);
  return sumOfTripledNumbers;
}


let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(sumOfTripleNumbers(arr));
console.log(sumOfTripleNumbersUsingArray(arr));