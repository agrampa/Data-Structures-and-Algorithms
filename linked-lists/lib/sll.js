'use strict';

const Node = require('./node.js');

const SLL = module.exports = function() {
  this.head = null;
};

// O(n)
SLL.prototype.prepend = function(value) {
  let node = new Node(value);

  if(!this.head) {
   this.head = node;
   return this; 
  }

  node.next = this.head;
  this.head = node;
  return this;
};

// O(n)

SLL.prototype.append = function(value) {
  let node = new Node(value);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  };

  _setLastNode(this.head) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

// O(1)
SLL.prototype.remove = function(value) {
  let currentNode = this.head;

  if(this.head.val === value) this.head = this.head.next;

  let nextNode = currentNode.next;

  if(currentNode.next.val == value) {
    currentNode.next = nextNode.next;
    return;
  } else {
    currentNode = nextNode;
    nextNode = nextNode.next;
    return;
  }
};

// O(n)
SLL.removeSpecificNode = function(n) {
  let nodeBefore = this.head;
  let targetNode;

  for(let i = 0; i < n; i++) {
    targetNode = nodeBefore.next;
    return targetNode;
  }
};

// O(n)
SLL.prototype.reverse = function() {
  let current = this.head;
  let previous = null;
  let nextNode;

  while(current !== null) {
    nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }
  this.head = previous;
  return this.head;
}