// TASK: write a function called recursionReverse that takes an array and uses recursion to return its contents in reverse
let recursionReverse = function(arr) {
  let reversedArray = [];

  let addItems = orderedArray => {
    if(orderedArray.length > 0) {
      reversedArray.push(orderedArray.pop());
      addItems(orderedArray);
    } else return;
  }

  addItems(arr)

  return reversedArray;
}

// TASK: write a function called recursiveMultiplier that takes two arguments, 'arr' and 'num', and multiplies each arr value by num and returns an array of the values

let recursiveMultiplier = function(arr, num) {
  if(arr.length === 0) return arr;

  let last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);
  return arr;
}

// TASK: implement a min stack

function minStack(capacity) {
  this.capacity = capacity;
  this.storage = {};
  this.count = 0;
  this.min = new Stack();
}

// O(1)
MinStack.prototype.push = value => {
  if(this.count < this.capacity) {
    if(this.min.peek() < value) {
      this.min.push(this.min.peek());
    } else {
      this.min.push(value);
    }

    this.storage[this.count++] = value;
    return this.count;
  }
  return 'Max capacity already reached. Remove a value before adding a new one.';
}
