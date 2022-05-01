const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str)
  let c = ""
  if(options.separator == undefined){
    options.separator = "+"
  }
  if(options.additionSeparator == undefined){
    options.additionSeparator = "|"
  }
  if(typeof options.additionRepeatTimes != "number"){
    options.additionRepeatTimes = 1
  }
  if(options.addition === undefined){
    options.addition = ""
  }else if(typeof options.addition != "string"){
    options.addition = `${options.addition}`
  }
  if(options.repeatTimes == undefined){
    options.repeatTimes = 1
  }
  let repeat = 0
  let s = 0
  while( repeat < options.repeatTimes){
    let count = 0
    c += str
    while( count < options.additionRepeatTimes){
      c += options.addition
      if(s < options.additionRepeatTimes - 1){
        c += options.additionSeparator
        s++
      }
      count++
    }
    if(repeat < options.repeatTimes - 1){
      c += options.separator
    }
    s = 0
    count = 0
    repeat++
  }
  let b = c
  c = ""
  return b
}
console.log(repeater(null, {repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!'}))
module.exports = {
  repeater
};
