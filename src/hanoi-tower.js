const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumber,time) {
  let move = 2
  let k = 3
  while(move < diskNumber){
    k = k + k + 1
    move += 1
  }
  time = 3600 / time
  time = time * k
  return{turns: k,seconds: Math.floor(time)}
}


module.exports = {
  calculateHanoi
};
