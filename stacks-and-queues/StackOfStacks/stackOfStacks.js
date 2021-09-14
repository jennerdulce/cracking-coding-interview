const Stack = require('../stack.js')

class StackOfstacks {
  constructor() {
    this.stackStorage = [];
    this.top = null;
  }

  push(item){
    let currentStack = this.stackStorage[this.stackStorage.length - 1]
    if (this.top === null || currentStack.storage.length === currentStack.limit) {
      let newStack = new Stack();
      newStack.push(item);
      this.top = item;
      this.stackStorage.push(newStack);
      return this;
    }
    currentStack.push(item);
    return this;
  }

  pop(item){
    let poppedItem = null;
    if (this.top === null) {
      return null
    }
    let currentStack = this.stackStorage[this.stackStorage.length - 1];
    poppedItem = currentStack.pop();
    if (currentStack.isEmpty) {
      this.stackStorage.pop();
      currentStack = this.stackStorage[this.stackStorage.length - 1];
      this.top = currentStack.top;
    }
    return poppedItem;
  }
}

let SOS = new StackOfstacks();
SOS.push(10).push(20).push(30).push(99)
console.log(SOS.stackStorage)
console.log(SOS.top)
console.log(SOS.pop())
console.log(SOS.stackStorage)
console.log(SOS.top)

