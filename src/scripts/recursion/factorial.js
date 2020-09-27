/**
 * Factorial Recursion
 * 5! = 5 * 4 * 3 * 2 * 1
 */

console.log('Algorithms: Factorial - Start');

/**
 * 
 * Example Recursive Function
 * 
 * Big O: O(n)
 * 
 * @param {*} number 
 */
function findFactorialRecursive(number) {

    // 1 or 2 will work, but 2 will remove an unnessecary iteration
    if (number === 2) {
        return number;
    }

    return number * findFactorialRecursive(number - 1);

}


/**
 * 
 * Example Function using loop
 * 
 * Big O: O(n)
 * 
 * @param {*} number 
 */
function findFactorialIterative(number) {

    let factorialOfNumber = number;

    // no calculation required for numbers 1 or 2:
    // 1 * 1 = 1
    // 1 * 2 = 2
    if (number === 1 || number === 2) {
        return number;
    }

    while (number) {

        if (number === 1) {
            return factorialOfNumber;
        }

        number = number - 1;

        factorialOfNumber = factorialOfNumber * number;
    }

    return factorialOfNumber;
}


console.log('findFactorialRecursive: ', findFactorialRecursive(5));
console.log('findFactorialIterative: ', findFactorialIterative(5));


console.log('Algorithms: Factorial - End');