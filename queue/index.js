/*
* Queue Demo
*/
function Queue () {
  var queues = [];

  this.enqueue = function (item) {
    Array.prototype.push.call(queues, item);
  }

  this.dequeue = function () {
    return Array.prototype.shift.call(queues);
  }

  this.size = function () {
    return queues.length;
  }

  this.getFirst = function () {
    return queues[0];
  }

  this.isEmpty = function () {
    return queues.length === 0;
  }
}

/* var que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue()); */

module.exports = Queue;