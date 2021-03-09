/* eslint-disable max-classes-per-file */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  draw() {
    let current = this.head;
    let res = '';
    if (current) {
      while (current) {
        res += `${current.data}->`;
        current = current.next;
      }
    }
    return `${res}null`;
  }

  reverse(){
      
  }
}

const node1 = new ListNode(2);
const node2 = new ListNode(5);
node1.next = node2;
const list = new LinkedList(node1);
console.log(list.draw());
