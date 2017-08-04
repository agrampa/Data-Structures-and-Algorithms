'use strict';

const expect = require('chai').expect;

const Node = require('../node.js');
const SLL = require('../sll.js');

let sll = new SLL();

describe('Testing the single linked-list methods', function() {
  describe('Instantiating a new SLL', done => {
    it('should instantiate a new linked list as an object', done => {
      expect(sll).to.be.a('object');
      done();
    });

    it('should not be null', done => {
      expect(sll).to.exist;
      done();
    });

    it('should not be empty', done => {
      expect(sll).to.not.be.empty;
      done();
    });
  });

  describe('Testing the append method', function() {
    it('should not contain the value before appending', done => {
      expect(sll).to.not.have.valueOf(2);
      done();
    });

    it('should contain the appended value', done => {
      sll.append(2);
      expect(sll).to.have.valueOf(2);
      done();
    });

    it('should add a new node at the end of the linked list', done => {
      expect(sll.head.next).to.equal.valueOf(2);
      done();
    });

    it('should add a third node to the linked list', done => {
      sll.append(3);
      expect(sll).to.have.valueOf(3);
      done();
    });

    it('should add the node at the end of the linked list', done => {
      expect(sll.head.next.next).to.equal.valueOf(3);
      done();
    });
  });


  describe('Testing the prepend method', function() {
    it('should not include the value before prepending', done => {
      expect(sll).to.not.have.valueOf(4);
      done();
    });

    it('should add a value to the list', done => {
      sll.prepend(4);
      expect(sll).to.have.valueOf(4);
      done();
    });

    it('should contain the prepended value at the beginning of the linked list', done => {
      expect(sll.head).to.equal.valueOf(4);
      done();
    });
  });

  describe('Testing the remove method', done => {
    
  })
});