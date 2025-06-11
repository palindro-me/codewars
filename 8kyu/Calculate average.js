// ⁉️⁉️Write a function which calculates the average of the numbers in a given array.
//
// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  // let sum = 0;
  
  if(array.length !==0) {
    return array.reduce((sum, el) => sum + el, 0) / array.length
  } else {
     return 0;
  }


}