const SLinkedList = require("../linked-list.js");
const Node = require("../node.js");

function findLoop(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return false;
  }

  slow = list.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}

let llA = new SLinkedList();
let llB = new SLinkedList();
let linkedNodes = new Node('C');
linkedNodes.next = new Node('D');
linkedNodes.next.next = new Node('E');

// Test Fail - No loop
llA.append('A').append('B').appendLinks(linkedNodes);
console.log(findLoop(llA));

// Test Fail - No loop
llB.append('A').append('B').append('C').append('D');
console.log(findLoop(llB));

// Test Pass - loop added
llA.appendLinks(linkedNodes);
console.log(findLoop(llA));