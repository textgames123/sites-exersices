function sumOfTripleNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number * 3;
    } else {
      sum += number;
    }
  }

  return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(sumOfTripleNumbers(arr));