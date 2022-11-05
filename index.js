class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert an element at the end of the list
  // O(1)
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  // Insert element at the beginning of the list
  // O(1)
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  // O(n)
  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  // O(n)
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    while (this.head && this.head.value === value) {
      deleteNode = this.head;

      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deleteNode;
  }

  // O(n)
  insertAfter(value, prevNode) {
    if (prevNode === null) {
      return this;
    }

    const newNode = new LinkedListNode(value);

    newNode.next = prevNode.next;

    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    return this;
  }

  // O(n)
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  // O(n)
  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}

module.exports = {
  LinkedList,
};
