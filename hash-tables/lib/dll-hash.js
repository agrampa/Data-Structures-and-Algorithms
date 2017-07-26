'use strict';

const DLL = require('./dll.js');

const DLLHashTable = module.exports = function(size=8192) {
  this.size = size;
  this.buckets = [...Array(this.size)];
  for(let i = 0; i < this.size; i++) {
    this.buckets[i] = new DLL();
  }
};

// O(1)
DLLHashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('Key required');

  let hash = key.split('').reduce((acc, current) => acc + current.charCodeAt(0), 0) % this.size;
  return hash;
};

// O(1)
DLLHashTable.prototype.set = function(key, value) {
  if(!key || !value) throw new Error('Key required');

  this.buckets[this.hashKey(key)].append(value);
};

// O(1)
DLLHashTable.prototype.get = function(key) {
  if(!key) throw new Error('Key required');

  if(this.buckets[this.hashKey(key)].head === null) return null;
  return this.buckets[this.hashKey(key)];
};

// O(1)
DLLHashTable.prototype.remove = function(key) {
  let address = this.hashKey(key);
  this.buckets[address] ? this.buckets[address] = new DLL() : new Error('Invalid key');
};
