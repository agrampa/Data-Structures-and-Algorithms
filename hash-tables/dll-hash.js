'use strict';

const DLL = require('./dll.js');

const DLLHashTable = module.exports = function(sixe=8192) {
  this.size = size;
  this.buckets = [...Array(this.size)];
  for(let i = 0; i < this.size; i++) {
    this.buckets[i] = new DLL():
  }
};

// O(1)
DLLHashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('Key required');

  let hash = kep.split('').reduce((acc, current) => acc + current.charCodeAt(0), 0) % this.size;
  return hash;
};
