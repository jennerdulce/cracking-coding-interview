'use strict';

const Edge = require('./edge.js');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    let adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  getNodes() {
    return this.adjacencyList.keys();
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(vertex) {
    // returns a collection of nodes in order they there were visited
    let x = [];
    let verticies = [];
    let visited = [];
    x.push(vertex);
    while (x.length) {
      let currentVertex = x.pop();
      if (visited.includes(currentVertex.value)) {
        continue;
      } else {
        verticies.push(currentVertex.value);
        visited.push(currentVertex.value);
        if (this.getNeighbors(vertex).length) {
          let list = this.getNeighbors(currentVertex);
          list.forEach(child => {
            x.push(child.vertex);
          });
        }
      }
    }
    return verticies;
  }
}



module.exports = Graph;
