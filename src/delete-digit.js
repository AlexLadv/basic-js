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
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let maxNumber = Math.floor(n / 10); 
  let stringNumber = String(n);
    for (let i = 0; i < stringNumber.length; i++) {
        let string = stringNumber.slice(0, stringNumber.length - i - 1) + stringNumber.slice(stringNumber.length - i);
        let number = Number(string);
        if (number > maxNumber) {
          maxNumber = number;
        }
    }
    return maxNumber;
}

module.exports = {
  deleteDigit
};
