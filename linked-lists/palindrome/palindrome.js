"use strict";

const SLinkedList = require("../linked-list.js");

function reverse(list) {
  let current = list.head;
  let prev = null;
  let array = [];
  while (current) {
    array.unshift(current.value);
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return array;
}

function compare(list) {
  let reversedList = reverse(list);

  let index = 0;
  let current = list.head;

  while (current) {
    if (current.value !== reversedList[index]) {
      return false;
    }
    current = current.next;
    index += 1;
  }

  return true;
}

const newList = new SLinkedList();
const otherList = new SLinkedList();

newList.append(1).append(2).append(3).append(2).append(1);
otherList.append(1).append(2).append(35).append(334).append(223).append(112);

console.log(compare(newList));
console.log(compare(otherList));