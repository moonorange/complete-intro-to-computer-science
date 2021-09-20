/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // base case, return array when array length is 0 or 1
  if (nums.length < 2) return nums;

  // split array into two arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const right = nums.slice(0, middle);
  const left = nums.slice(middle);

  const sortedRight = mergeSort(right);
  const sortedLeft = mergeSort(left);

  return merge(sortedRight, sortedLeft)
};

const merge = (right, left) => {
  let results = []
  while (right.length && left.length) {
    if (right[0] <= left[0]) {
      results.push(right.shift());
    } else {
      results.push(left.shift());
    }
  }

  return results.concat(right, left);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
