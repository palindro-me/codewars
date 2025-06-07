// ⁉️Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]
//
// ✅Solution

function digitize(n) {

  let res = []
  let str = n.toString()
  for(let i = str.length-1; i>=0; i--){
     res.push(Number(str[i]))
  }
  return res
}