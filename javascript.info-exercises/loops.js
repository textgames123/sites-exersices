alert("Exercise 1: Output even numbers in the loop ");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}

alert("Exercise 2: Rewrite to while loop ");

let i = 1; 
while (i <= 10) {
  if (i % 2 === 0) {
    alert(i);
  }

  i++;
}

alert("Exercise 3: Repeat until the input is correct");

let number = 0;

while (number < 100) {
  number = +prompt("Please type a number bigger than 100: ");

  if (!number) break
}

alert("Exercise 4: Output prime numbers");

const userNumber = +prompt("Type a number to get primes: ");

main:
for (let number = 1; number <= userNumber; number++) {
  if (number <= 1) continue;
  if (number % 1 !== 0 || number % number !== 0) continue;

  // We want to check other numbers than 1 or the number itself  
  for (let j = 2; j < number; j++) {
    if (number % j === 0) continue main;
  }

  alert(number);
}