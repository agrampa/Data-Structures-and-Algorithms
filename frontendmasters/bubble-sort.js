// Outer loop will run as long as something was swapped in the previous iteration

// example: [5, 7, 6, 4] -> [5, 6, 7] then [5, 6, 4, 7]
// swap occurred so run outer loop again
// [5, 6] then [5, 4, 6, 7]
// swap occurred so run outer loop again
// [4, 5, 6, 7]
// swap occurred so run outer loop again
// now in order, so stop

// TASK: Write a bubble sort function to compare two adjacent numbers and then swap their places if the smaller index's value is larger than the larger index's value. Continue looping until all numbers are in order

const bubbleSort = nums => {
  do {
    let swapped = false;
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
