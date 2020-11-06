const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    retrieveWalletBalance: {
        params: {
            AccountNumber: faker.random.alphaNumeric(),
        },
    },

    updateWalletBalance: {
        payload: {
            availableBalance: faker.random.number(),
            bookBalance: faker.random.number(),
            lien: faker.random.number(),
            updatedBy: faker.random.alphaNumeric(),
            internalAccountNumber: faker.random.alphaNumeric(),
        },
    },

    createWallet: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            schemeCode: faker.random.alphaNumeric(),
            walletStatus: true,
            createdBy: faker.random.alphaNumeric(),
            accountName: faker.random.alphaNumeric(),
        },
    },

    updateWalletStatus: {
        payload: {
            internalAccountNumber: faker.random.alphaNumeric(),
            status: true,
            modifiedBy: faker.random.alphaNumeric(),
        },
    },

    validateWalletCode: {
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
