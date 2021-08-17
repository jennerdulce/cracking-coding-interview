'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  delete(value) {
    let current = this.head;
    if (this.head.value === value) {
      let newHead = this.head.next;
      this.head = newHead;
      return this;
    }
    while (current.next) {
      if (current.next.value === value) {
        let updateNode = current.next.next;
        current.next = updateNode;
        return this;
      }
      current = current.next;
    }
    return `${value} is not in the Linked List`;
  }

  insertFront(value) {
    let node = new Node(value);
    // if empty
    if (!this.head) {
      this.head = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    return this;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      // start at the beginning traverse to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let node = new Node(newValue);
    if (current.value === value) {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      return this;
    } else {
      while (current.next) {
        if (current.next.value === value) {
          node.next = current.next;
          current.next = node;
          return this;
        }
        current = current.next;
      }
    }
    return `${value} is not in the Linked List`;
  }


  insertAfter(value, newValue) {
    let current = this.head;
    let node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return this;
    } else {
      while (current) {
        if (current.value === value) {
          // target newly created node's 'NEXT' property
          node.next = current.next;
          current.next = node;
          return this;
        } else {
          current = current.next;
        }
      }
    }
    return `${value} is not in the Linked List`;
  }

  includes(value) {
    if (!this.head) {
      return false;
    } else {
      // start at the head
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

  length() {
    let counter = this.head;
    let length = 0;
    while (counter) {
      counter = counter.next;
      length++;
    }
    return length;
  }

  kthFromEnd(k) {
    let current = this.head;
    let length = this.length();
    while (current) {
      if (length < k) {
        console.log('length of Linked List is too small');
        return false;
      }
      if (length - 1 === k) {
        console.log(current.value);
        return current.value;
      }
      length--;
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;

