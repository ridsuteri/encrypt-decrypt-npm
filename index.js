function encrypt(message) {
  return message.split("").reverse().join('').toLowerCase();
}

function decrypt(message) {
  return message.split("").reverse().join('').toLowerCase();
}

module.exports = {encrypt, decrypt};