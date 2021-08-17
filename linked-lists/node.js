'use strict';

class Node {
  constructor(value, children=[]) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.children = children;
  }
}

module.exports = Node;
