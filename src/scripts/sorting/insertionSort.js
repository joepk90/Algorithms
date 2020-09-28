/**
 *  Insertion Sort: Elemntary Sorting Algorithm
 *  Simple but not efficient
 *  The Algorithm maneuvers data similar to how a human brain would sort data
 *  Optimal for small data sets or when the data is mostly sorted
 * 
 * Time Complexity
 *  - Best: O(n)
 *  - Avarage: O(n^2)
 *  - Worst: O(n^2)
 * 
 *  Good Space Complexity: O(1)
 * 
 * https://www.bigocheatsheet.com/
 * 
 */

/**
 * 
 * Insertion Sort: Consise approach
 * 
 * @param {*} array 
 */
function insertionSortConcise(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (var j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
}

/**
 * 
 * Insertion Sort: detailed approach
 * 
 * @param {*} array 
 */
function insertionSort(array) {

    const length = array.length;
    let sortedElementsCount = 0;

    for (let i = 0; i < length; i++) {

        // skip first iteration
        if (i === 0) {
            sortedElementsCount++;
            continue;
        }

        let elementToInsert = null;

        for (let j = 0; j < length; j++) {

            if (j < sortedElementsCount) {
                continue;
            }

            if (array[j] < array[j - 1]) {

                elementToInsert = array[j];

                // remove current element from array
                array.splice(j, 1);
                break;
            }

        }

        // if current element is not smaller than previous element, leave it where it is.
        if (elementToInsert === null) {
            continue;
        }

        let arrayIndexToinsert = 0;
        for (let k = 0; k < length; k++) {

            if (elementToInsert > array[k] && k < sortedElementsCount) {
                arrayIndexToinsert++;
            } else {
                break;
            }
        }

        // insert current element into array at correct position
        array.splice(arrayIndexToinsert, 0, elementToInsert);

        sortedElementsCount++;

    }

    return array

}


console.log('Sorting: Insertion Sort - Start');

const unorderedArray = [8, 3, 7, 99, 0, 2, 7, 22, 5, 7, 3, 2];

console.log('insertionSort Result: ', insertionSort(unorderedArray));

console.log('Sorting: Insertion Sort - End');