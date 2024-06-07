const crypto = require('crypto');

// Generate a random string for the reset password key
const resetPasswordKey = crypto.randomBytes(32).toString('hex');

console.log('RESET_PASSWORD_KEY:', resetPasswordKey);
