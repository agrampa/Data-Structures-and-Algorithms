'use strict';

const Queue = module.exports = require('./linked-list.js')

Queue.prototype.tail = null

Queue.prototype.enqueue = fnction(val) {
  this.insert(val)
  return this
}

Queue.prototype.dequeue = function() {
  let current = null

  _setCurrent(this.head)
  current.next = null
  return this

  function _setCurrent(node) {
    if(!node.next) return
    current = node_setCurrent(node.next)
  }
}
