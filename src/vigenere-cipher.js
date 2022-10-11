const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse;
  };

  encrypt(message = null, key = null) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';

    key = key.toUpperCase();
    message = message.toUpperCase();

    while (key.length <= message.length) {
      key += key;
    };

    for (let i = 0; i < message.length; i++) {
      let symMes = message[i];
      let symKey = key[i];

      if (symMes.match(/[A-Z]/gm)) {
        let addr = ((str.length + str.search(symMes) + str.search(symKey)) % str.length);
        res += str[addr % str.length];
      } else {
        res += symMes;
        key = key.slice(0, i) + symMes + key.slice(i);
      }
    }

    return this.reverse ? res : res.split('').reverse().join('');
  };
  
  decrypt(message = null, key = null) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error(`Incorrect arguments!`);
  
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let res = '';
  
      key = key.toUpperCase();
      message = message.toUpperCase();
  
      while (key.length <= message.length) {
        key += key;
      };
  
      for (let i = 0; i < message.length; i++) {
        let symMes = message[i];
        let symKey = key[i];
  
        if (symMes.match(/[A-Z]/gm)) {
          let addr = ((str.length + str.search(symMes) - str.search(symKey)) % str.length);
          res += str[addr % str.length];
        } else {
          res += symMes;
          key = key.slice(0, i) + symMes + key.slice(i);
        }
      }
  
      return this.reverse ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
