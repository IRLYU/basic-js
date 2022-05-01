const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// remove line with error and write your code here
function deleteDigit(n) {
  n = n.toString().split('')
  let sec = Object.assign([], n)
  let max = 0
  for(let i = 0; i < n.length; i++){
    n = Object.assign([], sec)
    n.splice(i,1)
    if(max > +n.join('')){
      n = Object.assign([], sec)
    }else{
      max = +n.join('')
      n = Object.assign([], sec)
    }
  }
  return max
}
module.exports = {
  deleteDigit
};
