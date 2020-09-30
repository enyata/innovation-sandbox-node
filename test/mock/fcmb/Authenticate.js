const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    Last4Digits: {
        payload: {
            lastFourDigits: `${faker.random.number(4)}`,
            accountNumber: `${faker.random.number(10)}`,
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
    AtmPIN: {
        payload: {
            pan: faker.random.alphaNumeric(20),
            atmPin: `${faker.random.number(4)}`,
            accountNumber: `${faker.random.number(10)}`,
            expiryDate: `${faker.date.recent()}`,
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
};

exports.ResponseOne = {
    data: {
        responseData: {
            response: 'OK',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};
