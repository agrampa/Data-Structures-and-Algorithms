'use strict';

// ** NODE CONSTRUCTOR ** //

const bstNode = module.exports = function(val) {
  this.val = val,
  this.data = null,
  this.left = null,
  this.right = null,
  this.parent = null;
};

// ** BASIC PROTOTYPE METHODS ** //

// O(log n)
bstNode.prototype.appendChild = function(val) {
  if(this) return;
  if(val === this.val) throw new Error('val must be unique');
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
  }

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
  if(!node) return null;

  if(node.left) return this.min(node.left);

  return node.val;
};

// O(log n)
bstNode.prototype.max = function(node) {
  if(!node) return null;

  if(node.right) return this.max(node.right);

  return node.val;
};

// O(log n)
bstNode.prototype.height = function(node) {
  if(!node) return 0;

  let leftHeight = this.height(node.left);
  let rightHeight = this.height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
};

// O(n)
bstNode.fromArray = function(node, array) {
  if(!array) return null;

  for(let i = 0; i < array.length; i++) {
    node.appendChild(array[i]);
  }
  return node;
};

// O(n)
bstNode.prototype.isBalanced = function(node) {
  if(!node) return null;

  let leftHeight = this.height(node.left);
  let rightHeight = this.height(node.right);

  let difference = leftHeight - rightHeight;

  if(Math.abs(difference) > 1) {
    return false;
  } else {
    return true;
  }
};

// ** ROTATIONS ** //
bstNode.prototype.rotateRight(node) {
  if(!node) return;

  let temp = node.right;
  node.right = temp.left;
  temp.left = node;

  return temp;
}

bstNode.prototype.rotateLeft(node) {
  if(!node) return;

  let temp = node.left;
  node.left = temp.right;
  temp.right = node;

  return temp;
}

bstNode.prototype.rotateLR(node) {
  if(!node) return;

  node.left = rotateRight(node.left);
  return rotateLeft(node);
}

bstNode.prototype.rotateRL(node) {
  if(!node) return;

  node.right = rotateLeft(node.right);
  return rotateRight(node);
}

// ** TRAVERSAL METHODS ** //

// O(n)
bstNode.prototype.breadthFirst = function() {
  let queue = [this];
  let result = '';
  let current;

  while(queue.length > 0) {
    current = queue.pop();
    result += current.val + '';
    if(current.left) queue.unshift(current.left);
    if(current.right) queue.unshift(current.right);
  }
  return result;
};

// O(n)
bstNode.prototype.preOrder = function(cb) {
  _walk(this);

  function _walk(node) {
    if(!node) return;
    cb(node);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  }
};

// O(n)
bstNode.prototype.postOrder = function(cb) {
  _walk(this);

  function _walk(node) {
    if(!node) return;
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    cb(node);
  }
};

bstNode.prototype.inOrder = function(cb) {
  _walk(this);

  function _walk(node) {
    if(!node) return;
    if(node.left) _walk(node.left);
    cb(node);
    if(node.right) _walk(node.right);
  }
};

// Demo code from Front End Masters

bstNode.prototype.updateInNewLocation = function() {
  if(!this.right && !this.left) {
    this.height = 1;
  } else if (!this.right || (this.left && this.right.height < this.left.height)) {
    this.height = this.left.height + 1;
  } else { // if(!this.left || this.right.height > this.left.height)
    this.height = this.right.height + 1;
  }
}

bstNode.prototype.rotateRR = function() {
  const valueBefore = this.value;
  const leftBefore = this.left;

  this.value = this.right.value;
  this.left = this.right;
  this.right = this.right.right;
  this.left.right = this.left.left;
  this.left.left = leftBefore;
  this.left.value = valueBefore;
  this.left.updateInNewLocation();
  this.updateInNewLocation();
};

bstNode.prototype.rotateLL = function() {
  const valueBefore = this.value;
  this.rightBefore = this.right;
  this.value = this.left.value;
  this.right = this.left;
  this.left = this.left.left;
  this.right.left = this.right.right;
  this.right.right = rightBefore;
  this.right.value = valueBefore;
  this.right.updateInNewLocation();
  this.updateInNewLocation();
}
