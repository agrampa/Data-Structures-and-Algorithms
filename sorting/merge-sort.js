// use recursion

// most often the one that will be used for sorting
// 99% of the time is used by the .sort method under the hood
// very consistent/dependable

// take one list, and divide into two smaller lists, call merge sort on both of them
// called recursively, so the list is continuously divided into smaller and smaller lists

// O(n log n) {space complexity is O(n)}

const mergeSort = nums => {
  if(nums.length < 2) return nums

  const length = nums.length
  const middle = Math.floor(length / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle, length)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const results = []

  while (left.length && right.length) {
    if(left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  while(left.length) {
    results.push(left.shift())
  }

  while(right.length) {
    results.push(right.shift())
  }

  return results
}