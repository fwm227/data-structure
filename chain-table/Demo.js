function linkList () {
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
      node.next = current;
      head = node;
    } else {
      // move next node
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
  // remove node according to node-value
  this.remove = function (element) {

  }
  // show chian-table
  this.show = function () {
    console.log(JSON.stringify(head));
  }
}
const chainList = new linkList();
chainList.append(1);
chainList.append(2);
chainList.insert(8, 1);
chainList.removeAt(1);
chainList.show()