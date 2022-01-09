// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
let sum = 0;
let average = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
average = sum / numbers.length;
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
let maxValue = Math.max(...numbers);
console.log(maxValue);

// 5. Find the lowest number in the array and print it to the console using console.log()
let minValue = Math.min(...numbers);
console.log(minValue);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odd.push(numbers[i]);
  }
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (number of numbers) {
  if (number % 5 === 0) {
    console.log(number);
  }
}
// 9. Log all the element of the array one by one
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
// 10. Find all the number in the array that is divisible by 3
for (number of numbers) {
  if (number % 3 === 0) {
    console.log(number);
  }
}
