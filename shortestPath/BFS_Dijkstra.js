/*
* realing search shortest path by BFS way
 */
// import asssets
var Graph = require('../graph/index.js');
var Queue = require('../queue/index.js');
// initialize graph
var graph = new Graph();
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
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
graph.addEdge('E', 'I');
// initialize queue
var queue = new Queue();
// initialize data
var isVisit = Object.create(null);
var distance = Object.create(null);
var preVertex = Object.create(null);

function Dijkstra (v, e) {
  vertices.forEach(function (el, index) {
    isVisit[el] = 0;
    distance[el] = 0;
    preVertex[el] = null;
  })
  queue.enqueue(v);
  isVisit[v] = 1;
  while(!queue.isEmpty()) {
    var u = queue.dequeue();
    var neigh = graph.getNeigh(u);
    for (var i = 0; i < neigh.length; i++) {
      var w = neigh[i];
      if (isVisit[w] === 0) {
        distance[w] = distance[u] + 1;
        preVertex[w] = u;
        queue.enqueue(w);
        isVisit[w] = 1;
      }
    }
    isVisit[u] = -1;
  }
  var findPath = new Array(e), tempPre = e;
  while(true) {
    tempPre = preVertex[tempPre];
    if (tempPre === null) {
      break;
    }
    findPath.unshift(tempPre);
  }
  return {
    minDistance: distance[e],
    preVertex: findPath
  }
}
var start = vertices[3], end = vertices[8];
console.log(Dijkstra(start, end));
