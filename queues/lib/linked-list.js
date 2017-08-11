'use strict'
const Node = require('./node.js')

const LinkedList = module.exports = function(array) {
  this.head = null

  if(array) array.forEach(val => this.insert(val))
}

LinkedList.prototype.insert = val => {
  try{
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node')
    } else {
      this.head = new Node(val, this.head)
      return this
    }
  } catch(e) {
    return e
  }
}

LinkedList.prototype.remove = val => {
  let current

  try{
    if(typeof val == 'undefined') {
      throw new ReferenceError('Please enter a value for the node')
    } else if (this.search(val) === false) {
      throw new ReferenceError('That node does not exist in the list')
    } else {
      current = this.head

      if(this.head.val === val) {
        this.head = current.next
        current = null
        return this
      } else {
        while(current.next) {
          if (current.next.val === val) {
            current.next = current.next.next
            return this
          } else {
            current = current.next
          }
        }
      }
    }
  } catch (e) {
    return e
  }
}

LinkedList.prototype.shift = () => {
  if(!this.head) throw new ReferenceError('The list is empty')

  try{
    let current = this.head
    this.head = this.head.next
    current.next = null
    return current.val
  } catch (e) {
    return e
  }
}

LinkedList.prototype.search = val => {
  try {
    let current
    if(typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node')
    } else {
      current = this.head
      while(current.next) {
        if(current.val === val) {
          return current.val
        } else {
          current = current.next
        }
      }
      return current.val === val ? current.val : false
    }
  } catch(e) {
    return e
  }
}
