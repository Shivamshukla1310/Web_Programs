// This program is written to see the factorial of given number

function fact(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  console.log(`Factorial of ${num} = ${sum}`);
}

fact(10);
