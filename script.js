function threeSum(arr, target) {
// write your code here
nums.sort((a, b) => a - b);

  // initialize the closest sum to a large number
  let closestSum = Infinity;

  // iterate through the array using a loop
  for (let i = 0; i < nums.length; i++) {
    // use a two-pointer approach to find the remaining two elements
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

	return closestSum;
}

module.exports = threeSum;
