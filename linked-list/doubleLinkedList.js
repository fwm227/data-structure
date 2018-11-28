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
      tail = node;
    } else {
      while (current) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.prev = previous;
      tail = node;
      length++;
    }
  }
  // insert node according to index
  this.insert = function (element, index) {
    let current = head, previous, flagIndex = 0, node = new Node(element);
    if (index === 0) {
      current.pre = node;
      node.next = current;
      head = node;
    } else {
      while (current && flagIndex++ < index) {
        previous = current
        current = current.next
      }
      node.prev = previous;
      previous.next = node;
      node.next = current;
      current.prev = node;
    }
  }
  // remove node according to index
  this.removeAt = function (index) {
    let current = head, removeNode = null, previous, nextnode, flagIndex = 0;
    if (index === 0) {
      // remove head-node
      current = current.next;
      current.prev = null;
      head = current
    } else if (index === length) {

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
/*linkedList.removeAt(0);
linkedList.removeAt(1);*/
linkedList.print();
