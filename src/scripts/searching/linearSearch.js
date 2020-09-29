/**
 * Linear Search (sequential search)
 * - A method for finding a target value within a list
 * - Sequentially checks each element of the list for the target value until the match is found or until all the elements have been searched
 * 
 * Best Case: O(1) - First item
 * Worst Casee (n) - loop through all the elements
 * 
 */


/**
*  Examples of Linear Searches (using JavaScript)
*/
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

const linearSearchIndexOf = beasts.indexOf('Godzilla');

const linearSearchfindIndex = beasts.findIndex(function (item) {
    return item === 'Godzilla';
});

const linearSearchfind = beasts.find(function (item) {
    return item === 'Godzilla';
});

const linearSearchIncludes = beasts.includes('Godzilla');





console.log('Algorithms: Linear Search - Start');

console.log('Linear Search - indexOf: ', linearSearchIndexOf);
console.log('Linear Search - findIndex: ', linearSearchfindIndex);
console.log('Linear Search - find: ', linearSearchfind);
console.log('Linear Search - includes: ', linearSearchIncludes);

console.log('Algorithms: Linear Search - End');