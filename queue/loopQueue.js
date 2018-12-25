/*
* loop queue Demo
 */
var Queue = require('./index.js');
var que = new Queue();
function loopQueue (items) {
  // all element enter queue
  for (var i = 0; i < items.length; i++) {
    que.enqueue(items[i]);
  }
  var num;
  while (que.size() > 1) {
    num = parseInt(Math.random() * 10);
    for (var i = 0; i < num; i++) {
      que.enqueue(que.dequeue());
    }
    console.log(que.dequeue() + '被淘汰！');
  }
  console.log('获胜者', que.dequeue());
}

loopQueue(['AA', 'BB', 'CC', 'DD', 'EE', 'FF']);
