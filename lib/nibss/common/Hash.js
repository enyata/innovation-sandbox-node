const crypto = require('crypto');

// Encrypt BVN
const encrypt = (text, aes_key, ivkey) => {
    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(aes_key), ivkey);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([ encrypted, cipher.final() ]);

    return encrypted.toString('hex');
};


// Decrypt Response
const decrypt = (text, aes_key, ivkey) => {
    const textParts = text.split(':');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(aes_key), ivkey);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([ decrypted, decipher.final() ]);

    return decrypted.toString();
};


// Get BVN data
const BVNData = (username, password) => {
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, '');
    const signatureHeader = crypto.createHash('sha256').update(`${username}${date}${password}`).digest('hex');
    const authHeader = Buffer.from(`${username}:${password}`).toString('base64');
    const signatureMethodHeader = 'SHA256';
    return { authHeader, signatureMethodHeader, signatureHeader };
};


module.exports = {
    decrypt,
    encrypt,
    BVNData,
};
