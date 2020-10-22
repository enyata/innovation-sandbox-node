const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    oauthAuthorization: {
        payload: {
            username: faker.random.alphaNumeric(),
            password: faker.random.alphaNumeric(),
            grant_type: 'password',
        },
        'Content-Type': 'application/json',
        consumer_key: faker.random.alphaNumeric(29),
        consumer_secret: faker.random.alphaNumeric(17),
    },
};

exports.oauth2 = {
    refresh_token_expires_in: '86399',
    token_type: 'Bearer',
    access_token: faker.random.alphaNumeric(7),
    refresh_token: 'GosRkFVb8a06TiuMiCagSnjSmtsJy844',
    idm_service: 'KYC_API',
    expires_in: '1799',
};
