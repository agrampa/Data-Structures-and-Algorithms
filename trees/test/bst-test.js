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

  describe('Testing the contains method', function() {
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

  describe('Testing the find method', () => {
    it('should find nodes that exist in the tree', done => {
      expect(bst.find(64)).to.have.valueOf(64);
      done();
    });

    it('should not find nodes that do not exist in the tree', done => {
      expect(bst.find(86)).to.not.have.valueOf(86);
      done();
    });

    it('should not find a node until it is added', done => {
      expect(bst.find(13)).to.not.have.valueOf(13);
      bst.appendChild(13);
      expect(bst.find(13)).to.have.valueOf(13);
      done();
    });
  });

  describe('Testing the min method', () => {
    bst.appendChild(16);
    bst.appendChild(33);
    bst.appendChild(2);
    bst.appendChild(4);

    it('should return the minimum value in the tree', done => {
      expect(bst.min(bst)).to.equal(2);
      done();
    });

    it('shoudl not return a value that is not the minimum value in the tree', done => {
      expect(bst.min(bst)).to.not.equal(50);
      expect(bst.min(bst)).to.not.equal(12);
      expect(bst.min(bst)).to.not.equal(16);
      expect(bst.min(bst)).to.not.equal(33);
      expect(bst.min(bst)).to.not.equal(4);
      done();
    });

    it('should return the new minimum value when a node of lower value is added', done => {
      expect(bst.min(bst)).to.not.equal(1);
      bst.appendChild(1);
      expect(bst.min(bst)).to.equal(1);
      done();
    });
  });

  describe('Testing the max method', () => {
    bst.appendChild(98);
    bst.appendChild(53);
    bst.appendChild(26);
    bst.appendChild(3);

    it('should return the maximum value in the tree', done => {
      expect(bst.max(bst)).to.equal(98);
      done();
    });

    it('should not return a value that is not the maximum value in the tree', done => {
      expect(bst.mad(bst)).to.not.equal(53);
      expect(bst.mad(bst)).to.not.equal(26);
      expect(bst.mad(bst)).to.not.equal(3);
      done();
    });

    it('should return the new maximum value when a node of greater value is added', done => {
      expect(bst.max(bst)).to.not.equal(99);
      bst.appendChild(99);
      expect(bst.max(bst)).to.equal(99);
      done();
    });
  });

  describe('Testing the height method', () => {
    it('should return the height of the tree', done => {
      expect(bst.height(bst)).to.equal(8);
      done();
    });
  });

  describe('Testing the fromArray method', () => {
    let arrayBST = new BST(51);
    BST.fromArray(arrayBST, [26, 6, 9, 16, 93, 64, 55]);

    it('should contain the nodes that were in the array', done => {
      expect(arrayBST.contains(51)).to.be.true;
      expect(arrayBST.val).to.equal(51);

      expect(arrayBST.contains(25)).to.be.true;
      expect(arrayBST.left.val).to.equal(25);

      expect(arrayBST.contains(6)).to.be.true;
      expect(arrayBST.left.left.val).to.equal(6);

      expect(arrayBST.contains(9)).to.be.true;
      expect(arrayBST.left.left.right.val).to.equal(9);

      expect(arrayBST.contains(15)).to.be.true;
      expect(arrayBST.left.left.right.right.val).to.equal(15);

      expect(arrayBST.contains(93)).to.be.true;
      expect(arrayBST.right.val).to.equal(93);

      expect(arrayBST.contains(64)).to.be.true;
      expect(arrayBST.right.left.val).to.equal(64);

      expect(arrayBST.contains(55)).to.be.true;
      expect(arrayBST.right.left.left.val).to.equal(55);
      done();
    });

    it('should not contain any nodes that were not in the array', done => {
      expect(arrayBST.contains(50)).to.be.false;
      expect(arrayBST.contains(99)).to.be.false;
      expect(arrayBST.contains(2)).to.be.false;
      done();
    });

    it('should return the correct height', done => {
      expect(arrayBST.height(arrayBST)).to.equal(5);
      done();
    });

    it('should return the correct minimum value', done => {
      expect(arrayBST.min(arrayBST)).to.equal(6);
      expect(arrayBST.min(arrayBST)).to.not.equal(36);
      done();
    });

    it('should return the correct maximum value', done => {
      expect(arrayBST.max(arrayBST)).to.equal(93);
      expect(arrayBST.max(arrayBST)).to.not.equal(9);
      done();
    });

    it('should be traversed, breadth-first', done => {
      expect(arrayBST.breadthFirst()).to.equal('51 25 93 6 64 9 55 15 ');
      done();
    });

    it('should be able to detect the height and determine if the tree is balanced', done => {
      expect(arrayBST.isBalanced(arrayBST)).to.be.true;
      done();
    });

    it('should no longer be balanced when additional nodes are added to one side', done => {
      arrayBST.appendChild(65);
      arrayBST.appendChild(70);
      arrayBST.appendChild(75);
      arrayBST.appendChild(90);
      expect(arrayBST.isBalanced(arrayBST)).to.be.false;
      done();
    });
  });
});
