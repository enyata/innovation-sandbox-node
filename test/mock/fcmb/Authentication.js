const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    ValidateByCustomerId: {
        payload: {
            tokenCode: faker.random.alphaNumeric(100),
            customerId: faker.random.alphaNumeric(10),
            appId: faker.random.alphaNumeric(4),
            appToken: faker.random.alphaNumeric(80),
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
};

exports.ValidateByCustomerId = {
    data: {
        responseData: {
            response: 'OK',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};
