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


// from repl:
// console.log(nums[i])
// console.log(left)
// console.log(right)

quickSort([4, 7, 2, 8, 9, 6])

4
left [ 4 ]
right []
7
left [ 4 ]
right [ 7 ]
2
left [ 4, 2 ]
right [ 7 ]
8
left [ 4, 2 ]
right [ 7, 8 ]
9
left [ 4, 2 ]
right [ 7, 8, 9 ]
4
left []
right [ 4 ]
7
left [ 7 ]
right []
8
left [ 7, 8 ]
right []
7
left [ 7 ]
right []
=> [ 2, 4, 6, 7, 8, 9 ]
