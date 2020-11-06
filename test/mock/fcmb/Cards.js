const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    insertCardType: {
        payload: {
            cardName: `${faker.name.firstName() + faker.name.lastName()}`,
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
    retrieveCardType: {
        accept: 'application/json',
        'content-type': 'application/json',
    },
    updateCardType: {
        payload: {
            id: faker.random.number(20),
            cardName: `${faker.name.firstName() + faker.name.lastName()}`,
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
    createCardRequest: {
        payload: {
            reasonRequestId: faker.random.number(20),
            cardProductId: faker.random.number(20),
            deliveryTypeId: faker.random.number(20),
            accountNumber: `${faker.random.number(10)}`,
            accountName: `${faker.name.firstName() + faker.name.lastName()}`,
            branchSOL: faker.random.alphaNumeric(),
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
    retrieveCardRequest: {
        accept: 'application/json',
        'content-type': 'application/json',
    },
};

exports.ResponseOne = {
    data: {
        responseData: {
            response: 'The operation was successful.',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};

exports.ResponseTwo = {
    data: {
        responseData: {
            response: 'OK',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};
