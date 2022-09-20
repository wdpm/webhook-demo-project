const crypto = require('crypto');

// 24 Bytes => hex , result length is 24 * 2 = 48
const token = crypto.randomBytes(24).toString('hex');

console.log(token, token.length)

// 1 set token in github webhook and export ENV variables to your server
// https://docs.github.com/cn/developers/webhooks-and-events/webhooks/securing-your-webhooks#setting-your-secret-token

// 2 verify token in code
// https://docs.github.com/cn/developers/webhooks-and-events/webhooks/securing-your-webhooks#validating-payloads-from-github
