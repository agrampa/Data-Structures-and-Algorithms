'use strict';

const expect = require('chai').expect;

const DLL = require('../lib/dll.js');
let dll = new DLL():

describe('Testing Hash Table methods', function() {
  describe('Instantiating a new Hash Table', () => {
    it('should create a new dll', done => {
      expect(dll).to.exist;
      done();
    });

    it('should be an object', done => {
      expect(dll).to.be.a('object');
      done();
    });

    it('should have a length property', done => {
      expect(dll.length).to.equal(1);
      done();
    });
  });

  describe('Testing the append method', function() {
    let dllAppend = new DLL();
    dllAppend.append(5);

    it('should be possible to append a node', done => {
      expect(dllAppend.head.val).to.equal(5);
      expect(dllAppend.tail.val).to.equal(5);
      done();
    });

    it('should have a "next" value of null when there is only one node', done => {
      expect(dllAppend.head.next).to.be.null;
      expect(dllAppend.tail.next).to.be.null;
      done();
    });

    it('should have a "prev" value of null when there is only one node', done => {
      expect(dllAppend.head.prev).to.be.null;
      expect(dllAppend.tail.prev).to.be.null;
      done();
    });

    describe('Appending additional nodes', function() {
      it('should append the new value', done => {
        dllAppend.append(6);
        expect(dllAppend.head.val).to.equal(6);
        done();
      });

      it('should have a reference to the old head', done => {
        expect(dllAppend.tail.value).to.equal(5);
        done();
      });

      it('should be ale to be referenced by the tail', done => {
        expect(dllAppend.tail.next.val).to.equal(6);
        done();
      });
    });
  });

  
});
