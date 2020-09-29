import BinarySearchTree from '../dataStructures/binarySearchTree';

/**
 * Depth First Search
 * Like searching a maze
 *
 * - Lower memory requirement than Depth First Search (not neccesary to store all thh chiild node pointers)
 *
 * - The search traverses one branch of the tree down as many levels as possible, until the target node is found or th end is reached
 * - If/when the search can't go on any further it continues at the nearest ansecsotr with an unexplcored child
 *
 * 3 ways to Implement Depth First Search
 * - in-order - starts at the bottom level and traverses upwards (returing a result ordered by value)
 * - pre-order
 * - post-order
 * 
 */




/**
* Depth First Search: In Order
* 
*        9
*     4     20
*   1  6  15  170
* 
* In Order: 1,4,6,9,15,20,170
* 
* @param {*} node 
* @param {*} list 
*/
function traverseInOrder(node, list) {

    if (node.left) {

        // find bottom left node
        traverseInOrder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {

        // find bottom right node
        traverseInOrder(node.right, list);
    }

    return list;

}


/**
* Depth First Search: Pre Order
* 
*        9
*     4     20
*   1  6  15  170
* 
* In Order: 9,4,1,6,20,15,170
* 
* @param {*} node 
* @param {*} list 
*/
function traversePreOrder(node, list) {

    list.push(node.value);

    if (node.left) {

        // find bottom left node
        traversePreOrder(node.left, list);
    }

    if (node.right) {

        // find bottom right node
        traversePreOrder(node.right, list);
    }

    return list;

}


/**
* Depth First Search: Post Order
* 
*        9
*     4     20
*   1  6  15  170
* 
* In Order: 1,6,4,15,170,20,9
* 
* @param {*} node 
* @param {*} list 
*/
function traversePostOrder(node, list) {

    if (node.left) {

        // find bottom left node
        traversePostOrder(node.left, list);
    }

    if (node.right) {

        // find bottom right node
        traversePostOrder(node.right, list);
    }

    list.push(node.value);

    return list;

}


class DepthFirstSearch extends BinarySearchTree {

    constructor() {
        super();
    }

    depthFirstSearchInOrder() {

        return traverseInOrder(this.root, []);

    }

    depthFirstSearchPostOrder() {

        return traversePostOrder(this.root, []);

    }

    depthFirstSearchPreOrder() {

        return traversePreOrder(this.root, []);

    }

}


console.log('Algorithms: Depth First Search - Start');

const searchTree = new DepthFirstSearch();
searchTree.insert(9);
searchTree.insert(4);
searchTree.insert(6);
searchTree.insert(20);
searchTree.insert(170);
searchTree.insert(15);
searchTree.insert(1);
// searchTree.remove(20);

// console.log('Node Lookup: ', searchTree.lookup(20));



/**
* Depth First Search Results
* 
*        9
*     4     20
*   1  6  15  170
* 
* In Order: 1,4,6,9,15,20,170
* 
* Pre-Order: 9,4,1,6,20,15,170 (useful for recreating a tree)
* 
* Post-Order: 1,6,4,15,170,20,9
* 
*/

console.log('Depth First Search - In Order: ', searchTree.depthFirstSearchInOrder(searchTree.root, []));
console.log('Depth First Search - Pre Order: ', searchTree.depthFirstSearchPreOrder(searchTree.root, []));
console.log('Depth First Search - Post Order: ', searchTree.depthFirstSearchPostOrder(searchTree.root, []));

console.log('Algorithms: Depth First Search - End');



