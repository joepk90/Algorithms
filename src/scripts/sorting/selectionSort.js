/**
 *  Selection Sort: Elemntary Sorting Algorithm
 *  Simle but not efficient:
 * 
 * Time Complexity
 *  - Best: O(n^2)
 *  - Avarage: O(n^2)
 *  - Worst: O(n^2)
 * 
 *  Good Space Complexity: O(1)
 * 
 * https://www.bigocheatsheet.com/
 */


function selectionSort(array) {

    const length = array.length;

    for (let i = 0; i < length; i++) {

        let smallestArrayIndex = i;
        let smallestValue = array[i];

        for (let j = 0; j < length; j++) {

            // skip iteration that have been set below
            if (j < i) {
                continue;
            }

            if (smallestValue > array[j]) {

                smallestArrayIndex = j;
                smallestValue = array[j];
            }

        }

        // remove smallest value from the array
        array.splice(smallestArrayIndex, 1);

        // insert smallest value into the array at the current array index
        array.splice(i, 0, smallestValue);

    }

    return array

}


console.log('Sorting: Selection Sort - Start');

const unorderedArray = [8, 3, 7, 2, 7, 22, 5, 7, 3, 2];

console.log('selectionSort Result: ', selectionSort(unorderedArray));

console.log('Sorting: Selection Sort - End');