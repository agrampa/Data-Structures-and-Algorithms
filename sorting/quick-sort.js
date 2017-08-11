// divide-and-conquer, recursive method

// last element in the list is the pivot, everything smaller than the pivot moves into a "left" list and everything greater moves into a "right" list
// then call quick sort on both the left and right lists
// concatenate the sorted left list, the pivot, the sorted right list, in that order


// O(n log n)
const quickSort = nums => {
  if(nums.length <= 1) return nums

  const pivot = nums[nums.length - 1]
  const left = []
  const right = []

  for(let i = 0; i < nums.length-1; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
