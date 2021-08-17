const SLinkedList = require("../linked-list.js");
const Node = require("../node.js");

function getCount(list) {
  let current = list.head;
  let count = 1;
  while (current.next) {
    count += 1;
    current = current.next;
  }
  return [count, current];
}

function findIntersection(nodeA, nodeB) {
  let currentA = nodeA;
  let currentB = nodeB;
  while (currentA !== currentB) {
    currentA = currentA.next;
    currentB = currentB.next;
  }
  return currentA;
}

function intersection(listA, listB) {
  let [countA, tailA] = getCount(listA);
  let [countB, tailB] = getCount(listB);
  let currentA = listA.head;
  let currentB = listB.head;
  if (tailA === tailB) {
    if (countA > countB) {
      while (countA !== countB) {
        countA -= 1;
        currentA = currentA.next;
      }
    } else {
      while (countB !== countA) {
        countB -= 1;
        currentB = currentB.next;
      }
    }
    return findIntersection(currentA, currentB);
  } else {
    return false;
  }
}

const newList = new SLinkedList();
const otherList = new SLinkedList();

const sameLengthA = new SLinkedList();
const sameLengthB = new SLinkedList();

const falseTestA = new SLinkedList();
const falseTestB = new SLinkedList();

let link = new Node(7)
link.next = new Node(2)
link.next.next = new Node(1)

otherList.append(3).append(1).append(5).append(9).appendLinks(link);
newList.append(4).append(6).appendLinks(link);

sameLengthA.append(5).append(9).appendLinks(link);
sameLengthB.append(4).append(6).appendLinks(link);

falseTestA.append(3).append(1).append(5).append(9);
falseTestB.append(3).append(1).append(5).append(9);

console.log(intersection(newList, otherList));
console.log(intersection(sameLengthA, sameLengthB));
console.log(intersection(falseTestA, falseTestB));
