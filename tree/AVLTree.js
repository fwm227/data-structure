/*
* AVL tree, order to balance binary search tree 
*/
function AVL () {
  var root = null;
  function Node (val) {
    this.left = null;
    this.right = null;
    this.key = val;
  }
  // insert into AVL tree
  this.insert = function (key) {
    root = insertNode(root, key);
  }
  function getNodeHeight (node) {
    if (node === null) {
      return -1;
    } else {
      return Math.max(getNodeHeight(node.left), getNodeHeight(node.right)) + 1;
    }
  }
  function rotationLL (node) {
    var temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  function rotationRR (node) {
    var temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  function rotationLR (node) {
    node.left = rotationRR(node.left);
    node = rotationLL(node);
    return node;
  }
  function rotationRL (node) {
    node.right = rotationLL(node.right);
    node = rotationRR(node);
    return node;
  }
  function insertNode (node, key) {
    if (node === null) {
      node = new Node(key);
    } else if (node.key > key) {
      node.left = insertNode(node.left, key);
      // judge whether to balance tree
      if (getNodeHeight(node.left) - getNodeHeight(node.right) > 1) {
        // judge balance type
        if (node.key > key) {
          // excute rotationLL balance function
          node = rotationLL(node);
        } else if (node.key < key) {
          // excute rotationLR balance function
          node = retationLR(node);
        }
      }
    } else if (node.key < key) {
      node.right = insertNode(node.right, key);
      if (getNodeHeight(node.right) - getNodeHeight(node.left) > 1) {
        if (node.key < key) {
          node = rotationRR(node);
        } else if (node.key > key) {
          node = rotationLR(node);
        }
      }
    }
    return node;
  }
  // print tree
  this.print = function () {
    inOrderTraverse(root, function (node) {
      console.log(node.key);
    })
  }
  function inOrderTraverse (node, callback) {
    if (node !== null) {
      callback(node);
      inOrderTraverse(node.left, callback);
      inOrderTraverse(node.right, callback);
    }
  }
}

var AVLTree = new AVL();
AVLTree.insert(6);
AVLTree.insert(1);
AVLTree.insert(3);
AVLTree.insert(4);
AVLTree.insert(5);
AVLTree.print();
