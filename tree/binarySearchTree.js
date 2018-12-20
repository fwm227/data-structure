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
      preOrderTraverse(root, showNode)
      break;
      case 2:
      inOrderTraverse(root, showNode);
      break;
      case 3:
      postOrderTraverse(root, showNode);
      break;
    }
  }
  function showNode (val) {
    console.log(val);
  }
  function preOrderTraverse (node, cb) {
    if (node !== null) {
      cb(node.key);
      preOrderTraverse(node.left, cb);
      preOrderTraverse(node.right, cb);
    }
  }
  function inOrderTraverse (node, cb) {
    if (node !== null) {
      inOrderTraverse(node.left, cb);
      cb(node.key);
      inOrderTraverse(node.right, cb);
    }
  }
  function postOrderTraverse (node, cb) {
    if (node !== null) {
      postOrderTraverse(node.left, cb);
      postOrderTraverse(node.right, cb);
      cb(node.key);
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
binarySearchTree.print(2);
binarySearchTree.print(3);
// binarySearchTree.print();
// search node
console.log(binarySearchTree.search(3));
