/*
* depth first search demo
 */
var Graph = require('./index.js');
// init graph
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
graph.addEdge('I', 'H');
// dfs
// initial access status, 0 indicates 
!function DFS () {
  var isVisit = Object.create(null);
  vertices.forEach(function (el, index) {
    isVisit[el] = 0;
  })
  for (var i = 0; i < vertices.length; i++) {
    if (isVisit[vertices[i]] === 0) {
      DFSVisit(vertices[i], isVisit, function (v) {
        console.log(v)
      });
    }
  }
  function DFSVisit (v, isVisit, callback) {
    isVisit[v] = 1;
    callback(v);
    var neighbors = graph.getNeigh(v);
    for (var i = 0; i < neighbors.length; i++) {
      var u = neighbors[i];
      if (isVisit[u] === 0) {
        DFSVisit(u, isVisit, callback);
      }
    }
    isVisit[v] = -1;
  }
}();
