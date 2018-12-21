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
  // insert node into BST
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
  // search node key
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
  // print BST accroding to type
  this.print = function (type) {
    switch (type) {
      case 1:
      // preorder traverse
      preOrderTraverse(root, showNode)
      break;
      case 2:
      // inorder traverse
      inOrderTraverse(root, showNode);
      break;
      case 3:
      // postorder traverse
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
  // find min or max key from BST, param zero is find min key and param one is find max key
  this.find = function (type) {
    switch (type) {
      case 0:
      console.log(findMIN(root));
      break;
      case 1:
      console.log(findMAX(root));
      break;
    }
  }
  function findMIN (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }
  function findMAX (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }
  // remove node from BST
  this.remove = function (key) {
    removeNode(root, key);
  }
  function removeNode (node, key) {
    if (node === null) {
      return null;
    }
    if (node.key > key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (node.key < key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // node.key equal width search key
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right; 
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      // two children-node situation
      var mNode = findMIN(node.right);
      node.key = mNode;
      node.right = removeNode(node.right, mNode);
      return node;
    }
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(4);
binarySearchTree.insert(12);
binarySearchTree.insert(13);
// binarySearchTree.print(1);
// binarySearchTree.print(2);
// binarySearchTree.print(3);
// binarySearchTree.print();
// search node
// console.log(binarySearchTree.search(3));
// binarySearchTree.find(0);
// binarySearchTree.find(1);
// binarySearchTree.remove(2);
binarySearchTree.print(1);
