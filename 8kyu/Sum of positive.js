// ⁉️
// Task
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example
// [1, -4, 7, 12] => 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// ✅Solution
function positiveSum(arr) {

return  arr.reduce((sum, el) => el > 0 ? sum+el : sum,0)
}