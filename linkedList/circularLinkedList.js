/*
 * circular Linked list Demo
 */
function circularLinkedList () {
  let head = null, tail, length = 0;
  function Node (val) {
    this.val = val;
    this.next = null;
  }
  // append node into circularLinkedList
  this.append = function (element) {
    let current = head, node = new Node(element);
    if (head === null) {
      head = node;
      node.next = head;
    } else {
      while (current.next !== head) {
        current = current.next;
      }
      current.next = node;
      tail = node;
      node.next = head;
    }
    length++;
  }
  // insert node into circularLinkedList according to index
  this.insert = function (element, position) {
    let current = head, previous, flagIndex = 0, node = new Node(element);
    if (position === 0) {
      // insert into head part
      node.next = current;
      head = node;
      tail = head;
    } else if(position === length) {
      // insert into tail part0
      tail.next = node;
      node.next = head;
      tail = node;
    } else {
      // insert into center part
      while (flagIndex++ !== position) {
        previous = current;
        current = current.next;
      }
    }
    length++;
  }
  // remove node from circularLinkedList according to index
  this.removeAt = function (position) {
    let current = head, previous, flagIndex = 0;
    if (position === 0) {
      // remove head node
      tail.next = head.next;
      head = head.next;
    } else {
      // remove center node
      while (flagIndex++ < position) {
        previous = current;
        current = current.next;
      }
      if (position === length) {
        tail = previous;
      }
      previous.next = current.next;
      length--;
    }
  }
  // print linked list
  this.print = function () {
    console.log(head);
  }
}

const linkedList = new circularLinkedList();
/*linkedList.append(1);
linkedList.append(2);
linkedList.append(3); */
linkedList.insert(7, 0);
linkedList.insert(8, 1);
linkedList.insert(9, 2);
// linkedList.removeAt(0);
// linkedList.removeAt(2);
linkedList.removeAt(1);
linkedList.print();