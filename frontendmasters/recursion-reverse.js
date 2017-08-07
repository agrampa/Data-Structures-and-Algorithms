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
