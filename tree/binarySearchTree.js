/*
 * Binary Search Tree Demo
 */
function BinarySearchTree () {
  var root = null;
  function Node (val) {
    this.left = null;
    this.right = null;
    this.key = val;
  }

  this.insert = function (val) {
    var newNode = new Node(val);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }
  function insertNode (parentNode, newNode) {
    if (newNode.key < parentNode.key) {
      if (parentNode.left === null) {
        parentNode.left = newNode;
      } else {
        insertNode(parentNode.left, newNode);
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        insertNode(parentNode.right, newNode);
      }
    }
  }

  this.search = function (searchKey) {
    return searchNode(root, searchKey);
  }
  function searchNode (node, key) {
    if (node === null) {
      return false;
    }
    // judge search direction either left or right
    if (node.key < key) {
      return searchNode(node.right, key);
    } else if (node.key > key) {
      return searchNode(node.left, key);
    } else {
      return true;
    }
  }
  this.print = function (type) {
    switch (type) {
      case 1:
      preOrderErgodic(root);
      break;
      case 2:
      centerOrderErgodic(root);
      break;
      case 3:
      lastOrderErgodic(root);
      break;
    }
  }
  // previous order ergodic
  function preOrderErgodic (node) {
    if (node !== null) {
      preOrderErgodic(node.left);
      preOrderErgodic(node);
      preOrderErgodic(node.right);
    }
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(12);
binarySearchTree.insert(13);
binarySearchTree.print(1);
// binarySearchTree.print();
// search node
console.log(binarySearchTree.search(3));
