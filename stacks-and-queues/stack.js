class Stack {
  constructor() {
    this.top = null;
    this.minimum = null;
    this.limit = 3;
    this.storage = [];
  }

  push(item) {
    if (this.top === null) {
      this.minimum = item
    } else if (item < this.minimum) {
      this.minimum = item
    }
    this.storage.push(item);
    this.top = item;
    return this;
  }

  pop() {
    this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    return this;
  }

  peek() {
    if (!this.top) {
      return false;
    }
    return this.top;
  }

  min() {
    return this.minimum
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }
  }
}


module.exports = Stack;