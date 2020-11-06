const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',

    getTransactionHistory: {
        params: {
            internalAccountNumber: faker.random.alphaNumeric(),
        },
    },

    retrieveWalletTransactionDetails: {
        params: {
            tranCategoryId: faker.random.alphaNumeric(),
        },
    },

    wallet2AccountTransfer: {
        payload: {
            transactionChannel: faker.random.alphaNumeric(),
            sourcePhone: faker.random.alphaNumeric(),
            destinationAccountNumber: faker.random.alphaNumeric(),
            amount: faker.random.alphaNumeric(),
            narration: faker.random.alphaNumeric(),
            sourceSchemeCode: faker.random.alphaNumeric(),
            tranType: faker.random.alphaNumeric(),
            referenceNo: faker.random.alphaNumeric(),
            tranCategoryId: faker.random.alphaNumeric(),
            hasFee: true,
            tranId: faker.random.alphaNumeric(),
            solId: faker.random.alphaNumeric(),
            charges: [
                {
                    account: faker.random.alphaNumeric(),
                    fee: faker.random.alphaNumeric(),
                },
            ],
        },
    },

    balanceEnquiry: {
        params: {
            schemeCode: faker.random.alphaNumeric(),
        },
    },

    createBankLink: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            bankCode: faker.random.alphaNumeric(),
            bankAccountNumber: faker.random.alphaNumeric(),
            status: faker.random.alphaNumeric(),
            createdBy: faker.random.alphaNumeric(),
        },
    },

    getDataPlan: {
        params: {
            anyString: `${faker.random.number()}`,
        },
    },

    airtimeTopUp: {
        payload: {
            amount: faker.random.alphaNumeric(),
            requestId: faker.random.alphaNumeric(),
            network: faker.random.alphaNumeric(),
            paymentId: faker.random.alphaNumeric(),
            paymentMode: faker.random.alphaNumeric(),
            channel: faker.random.alphaNumeric(),
            sourceAccount: faker.random.alphaNumeric(),
            destinationPhone: faker.random.alphaNumeric(),
        },
    },

    transferData: {
        payload: {
            paymentId: faker.random.alphaNumeric(),
            requestId: faker.random.alphaNumeric(),
            channel: faker.random.alphaNumeric(),
            paymentMode: faker.random.alphaNumeric(),
            sourceAccount89: faker.random.alphaNumeric(),
            destinationPhone: faker.random.alphaNumeric(),
            dataplan: faker.random.alphaNumeric(),
            sourcePhone: faker.random.alphaNumeric(),
            schemeCode: faker.random.alphaNumeric(),
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
