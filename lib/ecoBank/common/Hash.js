const crypto = require('crypto');

exports.generateSecureHash = (lab_key) => {
    const hash = crypto.createHash('sha512');
    const data = hash.update(lab_key);
    const gen_hash = data.digest('hex');
    return gen_hash;
};
