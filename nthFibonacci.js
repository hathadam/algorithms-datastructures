/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

 var nthFibonacci = function (n) {
  // TODO: implement me!
  var fibonacci = [0, 1];
  for(; n > 1; n--) {
    fibonacci.push(fibonacci.shift() + fibonacci[0]);
  }
  return fibonacci[n];
};

////// Test case /////////
console.log(nthFibonacci(0)); // => 0
console.log(nthFibonacci(1)); // => 1
console.log(nthFibonacci(2)); // => 1
console.log(nthFibonacci(3)); // => 2
console.log(nthFibonacci(4)); // => 3
console.log(nthFibonacci(5)); // => 5
console.log(nthFibonacci(6)); // => 8
console.log(nthFibonacci(7)); // => 13
console.log(nthFibonacci(8)); // => 21
console.log(nthFibonacci(9)); // => 34
console.log(nthFibonacci(100)); // => 354224848179261915075 ~ 354224848179262000000
console.log(nthFibonacci(1476)); // => 1.3069892237633987e+308