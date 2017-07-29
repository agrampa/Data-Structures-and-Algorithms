'use strict';

const expect = require('chai').expect;

const BST = require('../lib/bst.js');
let bst = new BST(50);

describe('Testing binary search tree methods', function() {

  describe('Creating a tree', () => {
    it('should instantiate a new tree', done => {
      expect(bst).to.exist;
      done();
    });

    it('should be an object', done => {
      expect(bst).to.be.a('object');
      done();
    });

    it('should contain the starting value', done => {
      expect(bst.val).to.equal(50);
      done();
    });
  });

  describe('Testing the appendchild method', () => {
    it('should not contain the node before the method is invoked', done => {
      expect(bst).to.not.have.valueOf(12);
      done();
    });

    it('should add the node when the method is invoked', done => {
      bst.appendChild(12);
      expect(bst).to.have.valueOf(12);
      done();
    });

    it('should append additiona nodes when the method is invoked', done => {
      bst.appendChild(18);
      bst.appendChild(75);
      bst.appendChild(32);
      bst.appendChild(84);

      expect(bst).to.have.valueOf(18);
      expect(bst).to.have.valueOf(75);
      expect(bst).to.have.valueOf(32);
      expect(bst).to.have.valueOf(84);
      done();
    });

    it('shoudl not contain values that were not added', done => {
      expect(bst).to.not.have.valueOf(98);
      done();
    });
  });

  describe('Testing the contains method', function() => {
    bst.appendChild(25);
    bst.appendChild(6);
    bst.appendChild(9);
    bst.appendChild(15);
    bst.appendChild(93);
    bst.appendChild(64);
    bst.appendChild(55);

    it('shoudl not contain the nodes betore they are appended', done => {
      expect(bst.contains(39)).to.be.false;
      bst.appendChild(39);
      expect(bst.contains(39)).to.be.true;
      done();
    });

    it('should contain the nodes that were appended', done => {
      expect(bst.contains(50)).to.be.true;
      expect(bst.val).to.equal(50);

      expect(bst.contains(25)).to.be.true;
      expect(bst.left.val).to.equal(25);

      expect(bst.contains(6)).to.be.true;
      expect(bst.left.left.val).to.equal(6);

      expect(bst.contains(9)).to.be.true;
      expect(bst.left.left.right.val).to.equal(9);

      expect(bst.contains(15)).to.be.true;
      expect(bst.left.left.right.right.val).to.equal(15);

      expect(bst.contains(93)).to.be.true;
      expect(bst.right.val).to.equal(93);

      expect(bst.contains(64)).to.be.true;
      expect(bst.right.left.val).to.equal(64);

      expect(bst.contains(55)).to.be.true;
      expect(bst.right.left.left.val).to.equal(55);
      done();
    });

    it('should not contain nodes that were not appended', done => {
      expect(bst.contains(44)).to.be.false;
      done();
    });
  });
});
