// const fibonaccoi = (n) => {
//   const newArr = [0, 1, 2];

//   for (let i = 3; i <= n; i++) {
//     newArr[i] = newArr[i - 3] + newArr[i - 2] + newArr[i - 1];
//   }

//   return newArr;
// };

// console.log(fibonaccoi(10));

// Write your code here:
const newArr = [0, 1];
let counter = -1;
const fibonacci = (n) => {
  if (n === 0) return [0];
  if (n <= 1) return newArr;
  counter++;
  newArr.push(newArr[counter] + newArr[counter + 1]);
  return fibonacci(n - 1);
};

// console.log(fibonacci(0)); // [0]
// console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(15)); // [ 0, 1, 1, 2 ]
// console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
