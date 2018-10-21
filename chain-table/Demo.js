function linkList () {
  let head = null, current, length;
  let node = function (val) {
    this.val = val;
    this.next = null;
  }
  this.append = function (element) {
    const appendNode = new node(element);
    if (head === null) {
      head = appendNode;
    } else {
      current = head;
      while (current.next) {
        current = current.next; // 找到最后一个节点
      }
      current.next = appendNode;
    }
    length++;
  }
  this.show = function () {
    console.log(head);
  }
}
const chainList = new linkList();
chainList.append(1);
chainList.append(2);
chainList.append(3);
chainList.show()