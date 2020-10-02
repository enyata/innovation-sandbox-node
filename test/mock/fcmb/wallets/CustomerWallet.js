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

    Balance: {
        payload: {
            availableBalance: faker.random.number(),
            bookBalance: faker.random.number(),
            lien: faker.random.number(),
            updatedBy: faker.random.alphaNumeric(),
            internalAccountNumber: faker.random.alphaNumeric(),
        },
    },

    Create: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            schemeCode: faker.random.alphaNumeric(),
            walletStatus: true,
            createdBy: faker.random.alphaNumeric(),
            accountName: faker.random.alphaNumeric(),
        },
    },

    Customerwallet: {
        payload: {
            internalAccountNumber: faker.random.alphaNumeric(),
            status: true,
            modifiedBy: faker.random.alphaNumeric(),
        },
    },

    ValidateCode: {
        params: {
            code: faker.random.alphaNumeric(),
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
