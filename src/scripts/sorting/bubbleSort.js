/**
 *  Bubble Sort: Elemntary Sorting Algorithm
 *  Probobly the most simle but also the least efficient:
 * 
 * Time Complexity
 *  - Best: O(n)
 *  - Avarage: O(n^2)
 *  - Worst: O(n^2)
 * 
 *  Good Space Complexity: O(1)
 * 
 * https://www.bigocheatsheet.com/
 */


function bubbleSort(array) {

    const length = array.length;

    for (let i = 0; i < length; i++) {

        for (let j = 0; j < length; j++) {

            // compare current array element with next array element
            if (array[j] > array[j + 1]) {

                let currentValue = array[j];

                // swap current value with next array element
                array[j] = array[j + 1];
                array[j + 1] = currentValue;

            }
        }
    }

    return array;

}


console.log('Sorting: Bubble Sort - Start');

const unorderedArray = [8, 3, 7, 2, 7, 22, 5, 7, 3, 2];

console.log('bubbleSort Result: ', bubbleSort(unorderedArray));

console.log('Sorting: Bubble Sort - End');