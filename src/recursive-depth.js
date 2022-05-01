const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let countDepth = 1
    let max = 0
    for(const s of arr){
      if(Array.isArray(s)){
        max = Math.max(this.calculateDepth(s),max)
      }
    }
    return countDepth + max
  }
}
module.exports = {
  DepthCalculator
};
