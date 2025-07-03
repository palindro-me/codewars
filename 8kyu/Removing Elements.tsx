// ⁉️Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// ✅Solution:
function removeEveryOther(arr){
  //your code here
  const newArray =[]
  for(let i = 0;  i < arr.length; i++) {
    if( i % 2 ===0) {
      newArray.push(arr[i])
    }

  }
  return newArray
}

// function removeEveryOther1(arr) {
//     return arr.filter((el, index) => index % 2 === 0)
// }