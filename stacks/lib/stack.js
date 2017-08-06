'use strict';

const Stack = module.exports = require('../../linked-list/lib/sll.js');

Stack.prototype.push = () => {
  this.insert(val);
  return this;
}

Stack.prototype.pop = () => {
  this.shift();
  return this;
}

Stack.prototype.peek = () => {
  return this.head.val;
}

let stringOne = '{}{{}}';

Stack.prototype.closeBracket = string =>  {
  for(let i = 0; i < string.length; i++) {
    if (stringOne.charAt(i) === '{' || stringOne.charAt(i) === '(' || stringOne.charAt(i) === '[') {
      Stack.push(stringOne.charAt(i));
    } else if (stringOne.charAt(i) === '}' || stringOne.charAt(i) === ')' || stringOne.charAt(i) === ']') {
      Stack.pop();
    } else return false;
  }
  return true;
}

let stringTwo = '{()}[)]';

Stack.prototype.mixedCharacters = string => {
  let stackOne = new Stack();
  let stackTwo = new Stack();
  let stackThree = new Stack();

  for(let i = 0; i < stringTwo.length; i++) {
    if (stringTwo.charAt(i) === '{') stackOne.push(stringTwo.charAt(i))
    else if (stringTwo.charAt(i) === '}') stackOne.pop()
    else if (stringTwo.charAt(i) === '(') stackTwo.push(stringTwo.charAt(i))
    else if (stringTwo.charAt(i) === ')') stackTwo.pop()
    else if (stringTwo.charAt(i) === '[') stackThree.push(stringTwo.charAt(i))
    else if (stringTwo.charAt(i) === ']') stackThree.pop()
    else return false
  }
  return true;
}
