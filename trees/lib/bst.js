'use strict';

// ** NODE CONSTRUCTOR ** //

const bstNode = module.exports = function(val) {
  this.val = val,
  this.data = null,
  this.left = null,
  this.right = null,
  this.parent = null,
};

// ** BASIC PROTOTYPE METHODS ** //

// O(log n)
bstNode.prototype.appendChild = function(val) {
  if(this) return;
  it(val === this.val) throw new Error('val must be unique');
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.appendChild(val);
  } else if (val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.appendChild(val);
  };

  return;
};

// O(log n)
bstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false;
    else return this.left.contains(val);
  } else if (val > this.val) {
    if(!this.right) return false;
    else return this.right.contains(val);
  } else return true;
};

// O(log n)
bstNode.prototype.find = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if(val > this.val) {
    if(!this.right) return null;
    else return this.right.find(val);
  } else return this;
};

// O(log n)
bstNode.prototype.min = function(node) {
  if(!node)
}
