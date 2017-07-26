'use strict';

const Node = function(val, next=null, prev=null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

const DLL = module.exports = function() {
  this.head = null;
  this.tail = null;
  this.length = 1;
};

// prev and next (<->) pionters from each Node
// (TAIL) <-[]<->[]<->[]<->[]-> (HEAD)
// (prepend)                    (append)

DLL.prototype.append = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.head) return this.head = this.tail = new Node(val);

  let node = new Node(val);

  this.head.next = node;
  node.prev = this.head;
  this.head = this.head.next;
  this.length++;
  return this.head;
};

DLL.prototype.prepend = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail) return this.tail = this.head = new Node(val);

  let node = new Node(val);

  this.tail.prev = node;
  node.next = this.tail;
  this.tail = this.tail.prev;
  this.length++;
  return this.tail;
};

DLL.prototype.remove = function(val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.tail || !this.head) throw new Error('This list is empty');

  if(val === this.head.val) {
    this.head = this.head.prev;
    this.length--;
  } else if(val === this.tail.val) {
    this.tail = this.tail.next;
    this.length--;
  };

  let currentNode = this.tail;

  for(let i = 0; i < this.length; i++) {
    if(currentNode.val === val) {
      let prevNode = currentNode.prev;
      let nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode.prev;
      this.length--;
      return this;
    } else {
      currentNode = currentNode.next;
    }
  }
  return this;
};
