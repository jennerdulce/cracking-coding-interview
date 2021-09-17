let Graph = require('../graph');
let Vertex = require('../vertex')

function routeBetweenNodes(graph, start, end) {

  let queue = [];
  let visited = [];
  let route = false
  queue.push(start);
  while (queue.length) {
    let currentVertex = queue.shift();
    let value = currentVertex.constructor.name === 'Edge' ? currentVertex.vertex : currentVertex;
    if (visited.includes(value)) {
      continue;
    }
    let neighbors = graph.getNeighbors(value);
    if (neighbors) {
      neighbors.forEach(vertex => {
        console.log('VERTEX.VERTEX: ', vertex.vertex.value)
        console.log('end: ', end.value)
        if (vertex.vertex.value == end.value) {
          console.log("HELLO IS TRUE")
          route = true;
        } else { 
          queue.push(vertex.vertex);
        }
      })
    }
    visited.push(value)
  }
  return route;
}

let newGraph = new Graph();
let sVertex = new Vertex('S')
let yVertex = new Vertex('Y')
let aVertex = new Vertex('A')
let xVertex = new Vertex('X')
let zVertex = new Vertex('Z')
let eVertex = new Vertex('E')
let verticies = [sVertex, yVertex, aVertex, xVertex, zVertex, eVertex]
verticies.forEach(value => {
  newGraph.addVertex(value)
})

newGraph.addDirectedEdge(sVertex, yVertex)
newGraph.addDirectedEdge(sVertex, aVertex)
newGraph.addDirectedEdge(yVertex, xVertex)
newGraph.addDirectedEdge(yVertex, aVertex)
newGraph.addDirectedEdge(aVertex, zVertex)
newGraph.addDirectedEdge(aVertex, eVertex)
newGraph.addDirectedEdge(eVertex, zVertex)

console.log(routeBetweenNodes(newGraph, sVertex, eVertex))