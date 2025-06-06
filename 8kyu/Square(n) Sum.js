// ⁉️ Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 12+22+22=912+22+22=9.
// ✅Solution
function squareSum(numbers){
return numbers.reduce((sum,el) => sum + el*el, 0)
}