const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    GetBalance: {
        params: {
            AccountNumber: faker.random.alphaNumeric(),
        },
    },

    getCustomerKYC: {},

    createCustomerKYC: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            identificationId: faker.random.alphaNumeric(),
            identificationNumber: faker.random.alphaNumeric(),
            picture: faker.random.alphaNumeric(),
            signature: faker.random.alphaNumeric(),
            bvn: faker.random.alphaNumeric(),
            representativeType: faker.random.alphaNumeric(),
            status: faker.random.alphaNumeric(),
            representativePhoneNo: faker.random.alphaNumeric(),
            representativeEmail: faker.random.alphaNumeric(),
        },
    },

    updateCustomerKYC: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            identificationNumber: faker.random.alphaNumeric(),
            bvn: faker.random.alphaNumeric(),
            representativeType: faker.random.number(),
            status: true,
            representativePhoneNo: faker.random.alphaNumeric(),
            representativeEmail: faker.random.alphaNumeric(),
        },
    },

    updateKYCStatus: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            status: faker.random.alphaNumeric(),
        },
    },
};

exports.responseOne = {
    data: {
        responseData: {
            response: 'The operation was successful.',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};

exports.responseTwo = {
    data: {
        responseData: {
            response: 'OK',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};
