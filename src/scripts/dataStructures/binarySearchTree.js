class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {

        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (true) {

            if (value < currentNode.value) {

                if (currentNode.left === null) {

                    currentNode.left = newNode;
                    return;

                }

                currentNode = currentNode.left;

            } else if (value > currentNode.value) {

                if (currentNode.right === null) {

                    currentNode.right = newNode;
                    return;

                }

                currentNode = currentNode.right;

            } else {
                console.log('this number already exists');
                return false;
            }

        }
    }

    lookup(value) {

        let currentNode = this.root;

        while (currentNode !== null) {

            if (value < currentNode.value) {

                currentNode = currentNode.left;

            } else if (value > currentNode.value) {

                currentNode = currentNode.right;

            } else if (value === currentNode.value) {

                return currentNode;

            }

            return false;

        }

    }

    mergeNodes(targetNode, parentNode) {

        // find the right child's left most child
        let leftMostNode = targetNode.right.left;
        let leftMostParent = targetNode.right;

        while (leftMostNode.left !== null) {
            leftMostParent = leftMostNode;
            leftMostNode = leftMostNode.left;
        }

        // parent's left subtree is now left most node's right subtree
        leftMostParent.left = leftMostNode.right;
        leftMostNode.left = targetNode.left;
        leftMostNode.right = targetNode.right;

        if (parentNode === null) {
            this.root = leftMostNode;
        } else {
            if (targetNode.value < parentNode.value) {
                parentNode.left = leftMostNode;
            } else if (targetNode.value > parentNode.value) {
                parentNode.right = leftMostNode;
            }
        }

        return parentNode;

    }

    // returns the target node to delete and the parent of the target node
    findTargetNodeAndParent(value) {

        let currentNode = this.root;
        let parentNode = null;
        let targetNode = null;
        while (currentNode !== null) {

            if (currentNode.left !== null && value < currentNode.value) {

                parentNode = currentNode;
                currentNode = currentNode.left;

            } else if (currentNode.right !== null && value > currentNode.value) {

                parentNode = currentNode;
                currentNode = currentNode.right;

            } else if (currentNode.value !== null && currentNode.value === value) {

                targetNode = currentNode;
                break;

            } else {
                return false;
            }

        }

        return {
            parentNode,
            targetNode
        };
    }


    reorderNodes(targetNode, parentNode, direction = 'left') {

        // if the target node is the root and the child node indended direction does not exist, 
        // delete the root node and move the node in the opporsite direction into it's place
        if (parentNode === null) {
            this.root = targetNodes[direction];
        }

        // if parent is greater then current value, make current left child a child of the parent
        if (targetNode.value < parentNode.value) {
            parentNode.left = targetNode[direction];
        } else if (targetNode.value > parentNode.value) {
            parentNode.right = targetNode[direction];
        }

    }

    remove(value) {

        if (!this.root) {
            return false;
        }

        const targetNodes = this.findTargetNodeAndParent(value);

        if (targetNodes === false) {
            return false;
        }

        let { parentNode, targetNode } = targetNodes;

        if (targetNode.right === null) {

            this.reorderNodes(targetNode, parentNode, 'left');

        } else if (targetNode.right.left === null) {

            targetNode.right.left = targetNode.left;

            this.reorderNodes(targetNode, parentNode, 'right');

        } else {

            this.mergeNodes(targetNode, parentNode);

        }
    }

}

export default BinarySearchTree;