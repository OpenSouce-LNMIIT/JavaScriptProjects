const CryptoJS = require("crypto-js");

/**
 *
 * @param {string} value to encrypt.
 * @param {string} secret to use.
 */
const encrypt = async (value, secret) => {
  const encryptedValue = CryptoJS.AES.encrypt(value, secret).toString();
  return encryptedValue;
};

/**
 *
 * @param {string} value to decrypt.
 * @param {string} secret to use.
 */
const decrypt = async (value, secret) => {
  const decryptedValue = CryptoJS.AES.decrypt(value, secret);
  return decryptedValue;
};

module.exports = { encrypt, decrypt };
