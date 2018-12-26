/*
* graph Demo
*/
var Dictionary = require('../dictionary/index.js');

function Graph () {
  var vertices = [];
  var abjEdge = new Dictionary();
  
  this.addVertex = function (v) {
    vertices.push(v);
    abjEdge.set(v, []);
  }

  this.addEdge = function (v, w) {
    abjEdge.get(v).push(w);
    abjEdge.get(w).push(v);
  }

  this.toString = function () {
    for (var i = 0; i < vertices.length; i++) {
      var current_v = vertices[i];
      console.log(current_v + '->');
      abjEdge.get(current_v).forEach(function (edge, index) {
        console.log(edge + ' ');
      })
    }
  }
}

var graph = new Graph();
var vertices = ['A', 'B', 'C', 'D'];
vertices.forEach((el, index) => {
  graph.addVertex(el);
})
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.toString();