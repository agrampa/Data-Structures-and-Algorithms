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
    sll.append(3).append(6).append(1).append(9);

    it('should contain the value before the remove method was applied', done => {
      expect(sll.head.next).to.equal.valueOf(6);
      expect(sll).to.have.valueOf(6);
      done();
    });

    sll.remove(6);

    it('should not contain the value after the remove method was applied', done => {
      expect(sll).to.not.have.valueOf(6);
      done();
    });

    it('should contain other values prior to removal', done => {
      expect(sll).to.have.valueOf(9);
      expect(sll.head.next.next.next).to.equal.valueOf(9);
      done();
    });

    sll.remove(9);

    it('should remove additional values', done => {
      expect(sll).to.not.have.valueOf(9);
      done();
    });
  });

  describe('Testing the reverse method', function() {
    describe('Checking the starting order', function() {
      let sllReverse = new SLL();
      sllReverse.append(1).append(2).append(3).append(4);

      it('should append a value of 1', done => {
        expect(sllReverse.head).to.equal.valueOf(1);
        done();
      });

      it('should append a value of 2', done => {
        expect(sllReverse.head.next).to.equal.valueOf(2);
        done();
      });

      it('should append a value of 3', done => {
        expect(sllReverse.head.next.next).to.equal.valueOf(3);
        done();
      });

      it('should append a value of 4', done => {
        expect(sllReverse.head.next.next.next).to.equal.valueOf(4);
        done();
      });
    });

    describe('Checking the reversal', () => {
      sllReverse.reverse();

      it('should now begin with 4', done => {
        expect(sllReverse.head).to.equal.valueOf(4);
        done();
      });
      it('should then have a value of 3', done => {
        expect(sllReverse.head.next).to.equal.valueOf(3);
        done();
      });
      it('should then have a value of 2', done => {
        expect(sllReverse.head.next.next).to.equal.valueOf(2);
        done();
      });
      it('should then have a value of 1', done => {
        expect(sllReverse.head.next.next.next).to.equal.valueOf(1);
        done();
      });
    });
  });
});