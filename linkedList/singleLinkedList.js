/*
 * single Linked list Demo
 */
function singleLinkedList () {
  let head = null, length;
  let Node = function (val) {
    this.val = val;
    this.next = null;
  }
  // append into chain-table
  this.append = function (element) {
    let current, node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next; // 找到最后一个节点
      }
      current.next = node;
    }
    length++;
  }
  // insert into chain-table
  this.insert = function (element, position) {
    let node = new Node(element), previous, index = 0, current = head;
    if (position === 0) {
      // insert head
      node.next = current;
      head = node;
    } else {
      // insert center
      // move to next node
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
  }
  // remove node according to position
  this.removeAt = function (position) {
    let current = head, removeNode, previous, index = 0;
    if (position === 0) {
      // remove head node
      head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      length--;
    }
  }
  // get index-value of element
  this.indexOf = function (element) {
    let index = 0, current = head;
    while (current) {
      if (current.val === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // remove node according to node-value
  this.remove = function (element) {
    this.removeAt(this.indexOf(element));
  }
  // judge the chain-table whether is null
  this.isEmpty = function () {
    if (head === null) {
      return true;
    }
    return false;
  }
  // get chain-table size
  this.size = function () {
    return length;
  }
  // transform chain-table to string
  this.toString = function () {
    let current = head, stringVal = '';
    while (current) {
      stringVal += current.val;
      current = current.next;
    }
    return stringVal;
  }
  // show chain-table
  this.getHead = function () {
    return head;
  }
  // print chain-table
  this.print = function () {
    console.log(head);
  }
}
const linkedList = new singleLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.insert(8, 1);
linkedList.insert(7, 1);
linkedList.getHead();
console.log(linkedList.indexOf(8));
linkedList.remove(2);
linkedList.print();
console.log(linkedList.isEmpty());
console.log(linkedList.toString());
