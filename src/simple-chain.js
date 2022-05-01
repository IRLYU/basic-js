const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: "",
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if(this.chain.length == 0){
      this.chain += `( ${value} )`
    }else{
      this.chain += `~~( ${value} )`
    }
    return this
  },
  removeLink(position) {
    this.chain = this.chain.split('~~')
    if(position <= 0 || position > this.chain.length || typeof position == "string")
    {
      this.chain = ""
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position-1,1)
    this.chain = this.chain.join("~~")
    return this
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join("~~")
    return this
  },
  finishChain() {
    let b = this.chain
    this.chain = ""
    return b
  }
};
module.exports = {
  chainMaker
};
