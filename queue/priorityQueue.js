/*
* priority queue Demo
 */
function PriorityQueue () {
  var queues = [];

  function createElement (el, priority) {
    this.el = el;
    this.priority = priority;
  }

  this.enqueue = function (el, priority) {
    var elem = new createElement(el, priority);
    // flag variable to judge whether already entered queues
    var flag = false;
    for (var i = 0; i < queues.length; i++) {
      if (elem.priority < queues[i].priority) {
        flag = true;
        Array.prototype.splice.call(queues, i, 0, elem);
        break;
      }
    }
    if (!flag) {
      Array.prototype.push.call(queues, elem);
    }
  }

  this.dequeue = function () {
    return Array.prototype.shift.call(queues);
  }
}

var que = new PriorityQueue();
que.enqueue('haha', 2);
que.enqueue('lala', 1);
que.enqueue('dada', 3);

console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());