/**
 * Sorting:
 * - Bubble Sort
 * - Insertion Sort
 * - Selection Sort
 * - Merge Sort
 * - Quick Sort
 * 
 * https://www.toptal.com/developers/sorting-algorithms
 * https://www.youtube.com/user/AlgoRythmics/videos
 * 
 */

/**
 * Language Sorting Issues
 */

console.log('Sorting: Start');

const letters = ['g', 'c', 'y', 'f', 'g', 'a', 'd',];
console.log(letters.sort());
// result: ["a", "c", "d", "f", "g", "g", "y"]

const numbers = [1, 6, 7, 2, 8, 2, 55, 22];
console.log(numbers.sort());
// result: [1, 2, 2, 22, 55, 6, 7, 8]

numbers.sort(function (a, b) {
    return a - b;
});

// sort method converts numbers to string
// https://unicode-table.com/en/#0036
console.log('2'.charCodeAt(0)); // return 50 (2 = 50)
console.log('65'.charCodeAt(0)); // return 54 (5 = 54)
console.log('34'.charCodeAt(0)); // return 51 (3 = 51)
console.log('7'.charCodeAt(0)); // return 55 (7 = 55)

const spanishWords = ['único', 'fútbol', 'cosas', 'àrbol'];
console.log(spanishWords.sort());

spanishWords.sort(function (a, b) {
    return a.localeCompare(b);
});

console.log('Sorting: End');


/**
 * Elentary Sorts (simple sorting algorithms):
 * - Bubble Sort: Most simle but least efficient: best: O(n), Avarage and worst: O(n^2)
 * - Insertion Sort
 * - Selection Sort
 *
 * Complex Sorting Algorithms (Devide and Conquer)
 * - Merge Sort
 * - Quick Sort
 *
 * Devide and Conquer
 * - Usually gives an O(n log n) advantage
 *
 *
 * Stable Sorting
 * When elements with duplciate array values uses for the algorithm calculation maintian their order after the the algorithm has completed
 * https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
 *
 */