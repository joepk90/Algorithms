/**
 * String Reversal: Recursion and Iteration Examples
 */


/**
 * 
 * Example String Reversal using Iteration
 * 
 * @param {*} number 
 */
function stringReversalIteration(str) {

    let reversedString = '';

    const stringLength = str.length;

    for (let i = stringLength - 1; i !== -1; i--) {

        reversedString = reversedString + str[i];

    }

    return reversedString;

}

/**
 * 
 * Example String Reversal using Recursion
 * 
 * @param {*} number 
 */
function stringReversalRecursion(str) {

    if (str.length === 0) {
        return str;
    }

    let stringMiusLastChar = str.substring(0, str.length - 1);

    return str[str.length - 1] + stringReversalRecursion(stringMiusLastChar);

}

console.log('Algorithms: String Reversal - Start');

console.log('stringReversalIteration: ', stringReversalIteration('Hello World'));
console.log('stringReversalRecursion: ', stringReversalRecursion('Hello World'));


console.log('Algorithms: String Reversal - End');