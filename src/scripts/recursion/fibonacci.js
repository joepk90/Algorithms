/**
 * Fibonacci Sequence Recursion
 * https://stackoverflow.com/questions/35959100/explanation-on-fibonacci-recursion
 * 
 * Pattern: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 * The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
 * 
 * 
  * Exercise:
  * Given a number (n) return the index value of the Fibonacci sequence
  * 
  * For example, if n = 6, the return value should equal 8.
  */


/**
 * 
 * First Example Function using while loop
 * 
 * Big O: O(n)
 * 
 * @param {*} number 
 */
function fibonacciFindIndexLoop(n) {

    let currentFibonacciValue = 0;
    let nextFibonacciValue = 1;

    let count = 0;
    while (count !== n) {

        let placeHolderCurrentFibonacciValue = currentFibonacciValue;

        currentFibonacciValue = nextFibonacciValue;
        nextFibonacciValue = nextFibonacciValue + placeHolderCurrentFibonacciValue

        count++;

    }

    return currentFibonacciValue;

}


/**
 * 
 * Second Example Function array values
 * 
 * Big O: O(n)
 * 
 * @param {*} number 
 */
function fibonacciFindIndexArray(n) {

    let fibonacciValues = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        fibonacciValues.push(fibonacciValues[i - 2] + fibonacciValues[i - 1]);
    }

    return fibonacciValues[n];

}


/**
 * 
 * Example Recursive Function
 * 
 * Big O: Exponential: O(2^n)
 * 
 * @param {*} number 
 */
function fibonacciRecursive(n) {

    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

}


console.log('Algorithms: Fibonacci - Start');

console.log('fibonacciFindIndexLoop Result: ', fibonacciFindIndexLoop(5));
console.log('fibonacciFindIndexArray Result: ', fibonacciFindIndexArray(5));
console.log('fibonacciRecursive Result: ', fibonacciRecursive(6));


console.log('Algorithms: Fibonacci - End');