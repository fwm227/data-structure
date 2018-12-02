function doubleLinkedList () {
  let head = null, tail = null, length = 0;
  let Node = function (val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
  // append node to tail of doublelinkedlist
  this.append = function (element) {
    let current = head, previous, node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      while (current) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.prev = previous;
    }
    tail = node;
    length++;
  }
  // insert node according to index
  this.insert = function (element, index) {
    let current = head, previous, flagIndex = 0, node = new Node(element);
    if (index === 0) {
      // insert into head of linkedlist
      current.prev = node;
      node.next = current;
      head = node;
    } else if (index === length) {
      // insert into tail of linkedlist
      tail.next = node;
      node.prev = tail;
      tail = node;
    } else {
      // insert into center of linkedlist
      while (current && flagIndex++ < index) {
        previous = current
        current = current.next
      }
      node.prev = previous;
      previous.next = node;
      node.next = current;
      current.prev = node;
    }
    length++;
  }
  // remove node according to index
  this.removeAt = function (index) {
    let current = head, removeNode = null, previous, nextnode, flagIndex = 0;
    if (index === 0) {
      // remove head-node
      head = head.next;
      if (length === 1) {
        tail = null;
      } else {
        head.prev = null;
      }
    } else if (index === length) {
      // remove tail node
      previous = tail.prev;
      previous.next = null;
      tail = previous;
    } else {
      // remove center-node
      while (flagIndex++ < index) {
        previous = current;
        current = current.next;
      }
      nextnode = current.next;
      previous.next = nextnode;
      nextnode.prev = previous;
    }
    length--;
  }
  this.print = function () {
    console.log(head);
  }
}

const linkedList = new doubleLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insert(7, 0);
linkedList.insert(8, 4);
linkedList.removeAt(0);
linkedList.removeAt(1);
linkedList.removeAt(3);
linkedList.print();
