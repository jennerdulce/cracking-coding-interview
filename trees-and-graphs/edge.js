'use strict';
// An 'Edge' is the line between vertexes
// May be weighted. Ex: The 'weight' between vertex A and vertex B may be 20 miles. The 'weight' between verted A and vertex C may be 5 miles.

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = Edge;
