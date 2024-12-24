# Encrypt Decrypt  🔐

A minimalist and fun package for text manipulation and adding a quirky twist to your messages with random emojis! Perfect for meme creators and developers looking for quick text utilities.

---

## Features ✨

- **Encrypt**: Returns encrypted string from a string message
- **Decrypt**: Returns decrypted string back from an encrypted string
- **Emojify**: Appends random quirky emojis to each word in a given message.

---

## Installation 🚀

Install the package using npm:

```bash
npm install meme-tools
```

## Usage/Examples 🛠️
```javascript
const { encrypt, decrypt, emojify } = require('encrypt-decrypt');

// encrypt message
const encrypted = encrypt("Hello World");
console.log(encrypted); // Output: "dlrow olleh"

// decrypt message
const decrypted = decrypt("dlrow olleh");
console.log(decrypted); // Output: "hello world"

// emojify a message
const emojified = emojify("Coding is fun");
console.log(emojified); // Output: "Coding🎭is🦖fun🔥" (emojis vary)

```



## Author ✍️

- [@ridsuteri](https://www.github.com/ridsuteri)


