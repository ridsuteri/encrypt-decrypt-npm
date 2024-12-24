const memeEmojis = [
  "🤡", "😭", "😂", "😏", "😳", "🫡", "🤔", "🥴", "😎", "🥹",
  "🙌", "🤌", "🤝", "👏", "🫶", "👌", "👉👈",
  "🛑", "📉", "🔥", "🗿", "💀", "🧠", "🤡",
  "🐸", "🦆", "🐢", "🐐", "🌈",
  "🚩", "🍞", "🌚", "🅱️", "💯", "⚡", "🔥",
  "🌭", "🥒", "🪑", "🦖", "🛸", "🌌", "🍩", "🫣", "🍳", "🥸",
  "🪵", "🛟", "🎭", "🎰", "🪄", "💃", "🦷", "🎩", "🔮", "📀"
];

function encrypt(message) {
  return message.split("").reverse().join('').toLowerCase();
}

function decrypt(message) {
  return message.split("").reverse().join('').toLowerCase();
}

function emojify(message) {
  let emoji;
  emoji = memeEmojis[Math.floor(Math.random() * memeEmojis.length)];
  return message
    .split(" ")
    .map((word) => {
      emoji = memeEmojis[Math.floor(Math.random() * memeEmojis.length)];
      return word + emoji;
    })
    .join(""); 
}

module.exports = {encrypt, decrypt, emojify};