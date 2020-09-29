import BinarySearchTree from '../dataStructures/binarySearchTree';

/**
 * Breath First Search
 *
 * - Start with root node
 * - Then Move left to Right on each level
 *
 */


class BreadthFirstSearch extends BinarySearchTree {

    constructor() {
        super();
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift(); // return the first item in the queue
            list.push(currentNode.value);

            // duplicate code...
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;

    }

    breadthFirstSearchRecursive(queue, list) {

        if (queue.length === 0) {
            return list;
        }

        let currentNode = queue.shift();

        list.push(currentNode.value);

        // duplicate code...
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.breadthFirstSearchRecursive(queue, list);

    }

}


console.log('Algorithms: Breath First Search - Start');

const searchTree = new BreadthFirstSearch();
searchTree.insert(9);
searchTree.insert(4);
searchTree.insert(6);
searchTree.insert(20);
searchTree.insert(170);
searchTree.insert(15);
searchTree.insert(1);
// searchTree.remove(20);

/**
 * 
 * Breadth First Search Results
 * 
 *        9
 *     4     20
 *   1  6  15  170
 * 
 * Breadth First Search Results: 9,4,20,1,6,15,170
 * 
 */


console.log('Breadth First Search: ', searchTree.breadthFirstSearch());
console.log('Breadth First Search (alternative recursive method): ', searchTree.breadthFirstSearchRecursive([searchTree.root], []));

console.log('Algorithms: Breath First Search - End');