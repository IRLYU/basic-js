const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1
  let s = ""
  for(let i = 1; i < str.length; i++){
    if(str[i-1] == str[i]){
      count++
    }else{
      s += `${count}${str[i-1]}`
      count = 1
    }
  }
  return s
}
console.log(encodeLine("aabbbc"))
module.exports = {
  encodeLine
};
