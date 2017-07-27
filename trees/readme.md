## Binary Search Trees
The purpose of this repository is to create binary search trees and utilize methods on these trees. Binary search trees are defined as a tree data structure where each node has 0, 1, or 2 children, but no more. The tree is organized in a way so that the left child has a value that is lower than its parent and the right child has a value that is greater than its parent. When new nodes are added, this pattern is followed and the node is added at the appropriate depth to maintain the binary nature of the tree.

A binary search tree is considered to be balanced if the height difference between the left and right subtrees, at any depth, differ by no more than one level. If this difference is greater than one, the tree is considered to be unbalanced and rotation must be implemented to restore balance. Creating a method that will detect imbalance and trigger the appropriate rotation to rebalance the tree is a stretch goal of this assignment.

Some examples of this project can be displayed by typing `node index.js` in the terminal. There are many commands that are currently commented out, so the file can be edited and this command can be entered in the terminal again to show different outputs from these methods.

##### Dependencies
This project uses mocha and chai as dependencies for testing purposes. The tests can be run in the command line by typing `npm run test`. There are currently 30 passing tests with 77 expect statements.

##### Instantiating a new tree
The tree constructor instantiates a new node with a value that will become the value of the root of the tree.

```
const bstNode = module.exports = function(val) {
  this.val = val,
  this.data = null,
  this.left = null,
  this.right = null,
  this.parent = null;
};
```

A new tree can be created by typing: `let bst = new BST(50);`. In this example, the root of the tree will have a value of 50, but the user can pass in any value and the additional nodes will fall into place accordingly.

Additional nodes can be added:
```
bst.appendChild(12);
bst.appendChild(38);
bst.appendChild(46);
bst.appendChild(100);
bst.appendChild(72);
bst.appendChild(89);
```

The nodes with values of 12, 46, and 38 will be inserted on the left side of the tree because their values are less than 50. The nodes with values of 100, 72, and 89 will be inserted on the right side of the tree because their values are greater than 50.

In addition to manually creating a binary search tree one node at a time, an array can be passed in and the `appendChild` prototype method will be applied to every value in the array, inserting the nodes in the order in which they appear in the array while still following the left and right rules of the tree. The array does not need to be sorted. For example, a new tree can be instantiated with `let arrayTree = new BST(5);` and `BST.fromArray(arrayTree, [1, 15, 8, 3, 9, 2, 4])` will generate a tree with all of these values added.

The `find` prototype method takes in a value and will return the entire node if the value exists in the tree. Otherwise it will return `null`. For example, `bst.find(100);` will return a node with the value of 100, while `bst.find(200);` will return `null`.

The `contains` prototype method is similar. It also takes in a value and will return `true` if the tree contains a node with that value. Otherwise it will return `false`. For example, `bst.contains(100);` will return `true` and `bst.contains(200);` will return `false`.

The `min` and `max` prototype methods return the value of the node with either the lowest value or the greatest value, respectively. For example, `bst.min(bst);` returns a value of 12 and `bst.max(bst);` returns a value of 100.

The height of the entire tree can be determined using the recursive `height` prototype method. This method determines how many layers of children exist, including the root. For example, `arrayNode.height(arrayNode);` returns the number 4. This method can also be used in conjuction with the `find` method to return the height of a specific node in the tree. For example, `arrayNode.height(arrayNode.find(3));` returns the number 2.

The `isBalanced` method is used to determine if a tree is balanced, returning the difference as an absolute value and a Boolean. For example, `arrayNode.isBalanced(arrayNode);` returns a difference of 1 and a Boolean value of `true` because the tree is balanced. If the tree were right-heavy or left-heavy, this method will return the difference and a Boolean value of `false`.

##### Traversal

This repository includes methods for breadth-first traversal and three methods for depth-first traversal: pre-order, post-order, and in-order.

For example, the command `arrayNode.breadthFirst();` returns the string of `5 1 15 3 8 2 4 9 `.
