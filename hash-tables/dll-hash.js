'use strict';

const DLL = require('./dll.js');

const DLLHashTable = module.exports = function(sixe=8192) {
  this.size = size;
  this.buckets = [...Array(this.size)];
  for(let i = 0; i < this.size; i++) {
    this.buckets[i] = new DLL():
  }
};
