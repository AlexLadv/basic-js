const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let message;
  if (typeof sampleActivity === 'string' && Number(sampleActivity) > 0) {
      const lg2 = 0.693;
      const a = lg2 / HALF_LIFE_PERIOD;
      const res = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / a;
      message = Math.ceil(res);
    if (message < 0){
      return false;
    }
    } else {
      return false;
    }
  return message;
}

module.exports = {
  dateSample
};
