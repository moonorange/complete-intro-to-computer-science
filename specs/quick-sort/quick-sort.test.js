/*

  Quick Sort!

  Name your function quickSort.

  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // base case, array of length 0 or 1
  const length = nums.length
  if (length < 2) return nums;

  // choose a pivot
  const pivotIdx = Math.floor(Math.random() * length)
  const pivot = nums.splice(pivotIdx, 1)

  // separate into left and right arrays
  let left = []
  let right = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  // call quick sort on left and right arrays
  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)

  // return left.concat(pivot, right)
  return sortedLeft.concat(pivot, sortedRight)
}


// unit tests
test("quickSort", function () {
  const numSort = (a, b) => {
    return a - b
  }

  let input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  let copyInput = input.map(ele => ele)
  let answer = quickSort(input);

  expect(answer).toEqual(copyInput.sort(numSort));

  input = createRandomArray(100);
  copyInput = input.map(ele => ele)
  answer = quickSort(input);

  expect(answer).toEqual(copyInput.sort(numSort));
});

function createRandomArray(max) {
  const array = []
  for (let i = 0; i < max; i++) {
    array.push(Math.floor(Math.random() * Math.floor(max)));
  }
  return array
}
