/**
 *  Merge Sort: Complext Sorting Algorithm
 * 
 * Time Complexity
 *  - Best: O(n log(n))
 *  - Avarage: O(n log(n))
 *  - Worst: O(n log(n))
 * 
 *  Okay Space Complexity: O(n)
 * 
 * https://www.bigocheatsheet.com/
 * 
 */

function mergeSort(array) {

    if (typeof array === 'undefined' || array.length === 1) {
        return array;
    }

    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {

    const result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    // loop through arrays until both arrays have been completed
    while (leftIndex < left.length && rightIndex < right.length) {

        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

    }

    // console.log('merge left: ', left);
    // console.log('merge right: ', right);

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}



console.log('Sorting: Merge Sort - Start');

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('mergeSort Result: ', mergeSort(numbers));

console.log('Sorting: Merge Sort - End');