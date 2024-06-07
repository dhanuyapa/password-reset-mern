const crypto = require('crypto');

// Generate a random buffer
const randomBuffer = crypto.randomBytes(32);

// Convert the buffer to a hex string
const secret = randomBuffer.toString('hex');

console.log('SECRET:', secret);
