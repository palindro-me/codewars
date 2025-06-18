// ⁉️Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

function invert(array) {
return  array.map(el => el > 0?  -Math.abs(el) : Math.abs(el))

}