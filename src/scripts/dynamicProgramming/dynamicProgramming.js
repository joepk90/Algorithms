/**
 * Dynamic Programming
 * 1. Can the problem be devided into sub-probems?
 * 2. Can a recursive solution be used?
 * 3. Are there repetitive sub-problems?
 * 4. can sub problems be memoized?
 */


/**
* Fibonacci Sequence Example 
* - Big O: O(2^n)
* - Slow (but no major increase in space complexity)
*/
let fbonacciCaclulationsCount = 0;
function fibonacciCalculations(n) {

    fbonacciCaclulationsCount++;

    if (n < 2) {
        return n;
    }

    return fibonacciCalculations(n - 1) + fibonacciCalculations(n - 2);

}


/**
 * Fibonacci Sequence Example using dynamic programming
 * - Big O: O(n)
 * - Much faster (but required an increase in space complexity)
 */
let fibonacciCaclulationsDynamicProgrammingCount = 0;
function fibonacciCaclulationsDynamicProgramming() {

    let cache = {};

    return function fib(n) {

        fibonacciCaclulationsDynamicProgrammingCount++;

        if (n in cache) {
            return cache[n];
        }

        if (n < 2) {
            return n;
        }

        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };

}


/**
 * Fibonacci Sequence Example using Bottom Up
 * Big O: O(n)
 */
let fibonnaciCaclulationsBottomUpCount = 0;
function fibnacciBottomUpCalculations(n) {
    let answer = [0, 1];

    for (let i = 2; i <= n; i++) {

        fibonnaciCaclulationsBottomUpCount++;

        answer.push(answer[i - 2] + answer[i - 1]);
    }

    return answer.pop();

}


console.log('Algorithms: Dynamic Programming - Start');

console.log('Fibonnaci Index (Not Optimised): ', fibonacciCalculations(5));
console.log('Fibonnaci Index (Dynamic Programming): ', fibonacciCaclulationsDynamicProgramming(5));
console.log('Fibonnaci Index (Bottom Up): ', fibnacciBottomUpCalculations(5));

console.log('Fibonnaci Calculations Count (Optimised): ', fbonacciCaclulationsCount);
console.log('Fibonnaci Calculations Count (Dynamic Programming): ', fibonacciCaclulationsDynamicProgrammingCount);
console.log('Fibonnaci Calculations Count (Bottom Up): ', fibonnaciCaclulationsBottomUpCount);

console.log('Algorithms: Dynamic Programming - End');