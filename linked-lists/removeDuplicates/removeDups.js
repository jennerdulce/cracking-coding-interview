"use strict";

const SLinkedList = require("../linked-list.js");

function removeDups(list) {

  const visitedNumbers = {}
  let current = list.head

  let walk = (node) => {
    if (node) {
      if (!visitedNumbers[node.value] || null) {
        return node
      }
      return walk(node.next)
    }
  }

  while (current) {
    visitedNumbers[current.value] = true
    current.next = walk(current.next)
    current = current.next
  }
  return list
}

const newList = new SLinkedList();
newList.append(1).append(2).append(1).append(3).append(3);
console.log('ORIGINAL: ', removeDups(newList).toString())

const duplicatesList = new SLinkedList();
duplicatesList.append(1).append(2).append(1).append(2).append(2).append(4);
console.log('DUPLICATES: ', removeDups(duplicatesList).toString())

const singular = new SLinkedList();
singular.append(1).append(1).append(1).append(1).append(1).append(1);
console.log('SINGULAR: ', removeDups(singular).toString())