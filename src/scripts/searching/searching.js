/**
 * Searching Algorithms
 * - Linear Search
 * - Binary Search
 * - Breadth First Search
 * - Depth First Search
 *
 * https://visualgo.net/en/dfsbfs
 *
 */





/*
 * Important Question: Is the data structure sorted?
 * - If the data structure is sorted, then we can use Devide and Conquer to improve the algorthms time complexity ()
 * - Time complexity of a search alorithm using devide and conquer will depend on the algorithm: https://stackoverflow.com/questions/29927439/algorithms-how-do-divide-and-conquer-and-time-complexity-onlogn-relate
 * - If the data structure is not sorted, will sorting it make it faster? (if not use a binary search)
 *
 *
 * Binary Search (Devide and Conquer approach)
 * - Better way then Linear search
 * - If data is sorted we can do better than linear time (O(n))
 *
 *
 * Depth First Search vs Breadth First Search
 * https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr
 * - Time Complexity is the same (O(n))
 * - When searching the tree, the aim is to avoid repeating checking the same nodes
 * - Good rule (if you have additional information about the target node)
 *      - Breath First Search is better if the target node is likely to be higher in the tree as it will search through the closest (higher) nodes first
 *      - Depth First Search is better if the target node is likely to be in a lower level of the tree.
 *
 *
 * Breadth First Search:
 * - Good for finding the shortest path
 * - Good for finding closer nodes
 * - Uses more memory
 *
 *
 * Depth First Search:
 * - Good at checking if a node exists
 * - Good at checking if the path exists between a source node and target node
 * - Uses Less memory
 * - It can get slow, especially if the treee if very deep.
 * - Not good at finding the shortest path.
 *
 */


/**
* Other Algorithms:
* - Bellman-Ford: very effe
* - Dijkstra
*
* Bellman-Ford and Dijkstra are two algorithms that solve finding the shortest path of a wieghted graph
* Depth First Search and Breadth First Search don't take weight into account
*
*
* Bellman-Ford Algorithm:
* Very effective at solving the shortest path because it can accomodate negative weights.
* - Worst case Time Complexity: O(n^2)
* - Can accommodate for a weighted graph.
* - Can accomodate for negative weights
* - Not the most efficient
*
* Dijkstra:
* - Worst case Time Complexity:
* - Can accommodate for a weighted graph.
* - Cannot accomodate for negative weights
* - More efficient than the Bellman-Ford Algorithm
*/