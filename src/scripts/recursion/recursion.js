/**
 * Recursive Function's
 * 1 - Identify the base case
 * 2 - Identify the recursie case
 * 3 - get closer and closer and return when needed. usually 2 returns will be required (for basecase and recursive case)
 *
 * Therom:
 * Anything that can be done with recursion, can be doen iterativly (using a loop)
 *
 * Recursion Positives:
 * - DRY
 * - Readibility
 *
 *  Recursion Negatives:
 * - Large Stack (Stack Overflows)
 *
 *
 *
 * Tail Call Optimisation (included in many languages i.e. JS ES6): https://2ality.com/2015/06/tail-call-optimization.html
 * Allows recursions to called without increasing the call stack
 * There are other ways of writing recursions that are more memory efficient (large stack issues can be resolved during production)
 *
 *
 * Recusion Guidelines - When to use Recursion
 *
 * Every time you are using a tree, or converting something into a tree, consider recursion: for example:
 * - The solution can be devided into a  umber of subproblmes that are smaller instances of the same problem
 * - Each insance of the subproblem is identical in nature
 * - The solutions of each subproblem can be combined to solve the problem at hand
 *
 * Devide and Conquer is a good example of using recursion (searching a phone book)
 *
 * Recursions can make tasks very easy, which is why they can eb so benficial
 *
 *
 * Real World example:  https://stackoverflow.com/questions/105838/real-world-examples-of-recursion
 *
 */