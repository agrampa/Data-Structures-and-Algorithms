// userful for when the array is almost sorted already

// start at beginning of the list and assume that the length of the list is 1
// add more values one at a time, inserting in the correct place each time

// outer loop starts at 1 because you are starting with one item, and everything after index 0 is unsorted

// O(n) is best case, O(n^2) is worst case
const insertionSort = nums => {
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
  return nums
}
