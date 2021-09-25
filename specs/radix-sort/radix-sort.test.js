/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getNumber(num, place, largestDigit) {
  // get number of some place from number
  // If there is no number in the place, return 0
  const strNum = num.toString();
  const size = strNum.length;

  const diffDigit = largestDigit - size;
  return strNum[place - diffDigit] || 0;
}

function arrMax(a, b) {
  return Math.max(a, b);
}

function getLargestDigit(array) {
  // get largest digit
  const largestDigit= array.reduce(arrMax);
  return largestDigit.toString().length;
}

function radixSort(array) {
  const buckets = new Array(10).fill().map(() => []);

  const largestDigit= getLargestDigit(array);

  for (let i = largestDigit- 1; 0 <= i; i--) {
    while (array.length) {
      const current = array.shift();
      const num = getNumber(current, i, largestDigit);
      buckets[num].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
