'use strict';

const expect = require('chai').expect;
const faker = require('faker');
const HashTable = require('../lib/hash.js');

describe('Testing the Hash Table Module', function() {
  before(done => {
    this.fakeKeys = [...Array(100)].map(key => key = faker.hacker.phrase());
    done();
  });

  after(done => {
    delete this.fakeKeys;
    done();
  });

  beforeEach(done => {
    this.hashTable = new HashTable();
    done();
  });

  afterEach(done => {
    this.hashTable = null;
    done();
  });

  describe('Instantiate a new HashTable', () => {
    it('should instantiate a new empty hash table', done => {
      expect(this.hashTable).to.not.be.null;
      expect(this.hashTable).to.be.instanceOf(HashTable);
      done();
    });

    it('should have a default size of 8192', done => {
      expect(this.hashTable.buckets.length).to.equal(8192);
      done();
    });

    it('should hbe able to create a new has table of specified size', done => {
      this.hashTable = new HashTable(1024);
      expect(this.hashTable.buckets.length).to.equal(1024);
      done();
    });

    it('should have a default buckets property with an assigned array', done => {
      expect(this.hashTable.buckets).to.be.instanceOf(Array);
      done();
    });
  });

  describe('Testing the hash function', () => {
    it('should hash a key', done => {
      let expectHash = this.hashTable.hashKey('test');
      let actualHash = 448;
      expect(expectHash).to.equal(actualHash);
      done();
    });

    it('should always has a key to less than the size', done => {
      this.fakeKeys.forEach(key => {
        expect(this.hashTable.hashKey(key)).to.be.lessThan(8192);
      });
      done();
    });
  });

  describe('Testing the set method', () => {
    it('should add a new value to the hash table', done => {
      let expectKey = this.hashTable.hashKey('test key');
      this.hashTable.set('test key', 'test value');
      expect(this.hashTable.buckets[expectKey]).to.equal('test value');
      done();
    })
  });

  describe('Testing the get method', () => {
    it('should retrieve a value from the hash table by the key', done => {
      this.hashTable.set('test key', 'test value');
      let expectVal = 'test value';
      let actualVal = this.hashTable.get('test key');
      expect(expectVal).to.equal(actualVal);
      done();
    });
  });

  describe('Testing the remove method', () => {
    it('should remove an item from the hash table', done => {
      this.hashTable.set('test key', 'test value');
      let expectKey = this.hashTable.hashKey('test key');
      let expectVal = 'test value';
      let actualVal = this.hashTable.get('test key');
      expect(expectVal).to.equal(actualVal);
      this.hashTable.remove('test key');
      expect(this.hashTable.buckets[expectKey]).to.be.undefined;
      done();
    });
  });
});
