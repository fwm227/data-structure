/*
* broad first search Demo
 */
var Graph = require('./index.js');
var Queue = require('../queue/index.js');
// init graph
var graph = new Graph();
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
vertices.forEach((el, index) => {
  graph.addVertex(el);
})
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
// bfs
// initialize isVisit array, -1 indicates was accessed, 0 indicates did'nt searched, 1 indicates has been searching
var isVisit = Object.create(null);
vertices.forEach(function (el, index) {
  isVisit[el] = 0;
})
// initialize queue
var queue = new Queue();
function BFS (v, callback) {
  queue.enqueue(v);
  isVisit[v] = 1;
  while (!queue.isEmpty()) {
    var u = queue.dequeue();
    neighbors = graph.getNeigh(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (isVisit[w] === 0) {
        isVisit[w] = 1;
        queue.enqueue(w);
      }
    }
    isVisit[u] = -1;
    callback(u);
    // callback(isVisit);
  }
}
vertices.forEach((el, index) => {
  if (isVisit[el] === 0) {
    BFS (el, function (v) {
      console.log(v);
    });
  }
})