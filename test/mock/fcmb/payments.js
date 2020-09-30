const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    B2btransfers: {
        payload: {
            nameEnquiryRef: faker.random.alphaNumeric(),
            destinationInstitutionCode: faker.random.alphaNumeric(),
            channelCode: faker.random.alphaNumeric(),
            beneficiaryAccountNumber: faker.random.alphaNumeric(),
            beneficiaryAccountName: faker.random.alphaNumeric(),
            beneficiaryBankVerificationNumber: faker.random.alphaNumeric(),
            beneficiaryKYCLevel: faker.random.alphaNumeric(),
            originatorAccountName: faker.random.alphaNumeric(),
            originatorAccountNumber: faker.random.alphaNumeric(),
            transactionNarration: faker.random.alphaNumeric(),
            paymentReference: faker.random.alphaNumeric(),
            amount: faker.random.alphaNumeric(),
            traceId: faker.random.alphaNumeric(),
            chargeAmount: faker.random.alphaNumeric(),
            platformType: faker.random.alphaNumeric(),
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },
    B2binternaltransfers: {
        payload: {
            debitAccountNo: faker.random.alphaNumeric(),
            creditAccountNo: faker.random.alphaNumeric(),
            amount: faker.random.number(),
            narration: faker.random.alphaNumeric(),
            remark: faker.random.alphaNumeric(),
            reportCode: faker.random.alphaNumeric(),
        },
    },
    Internaltransfers: {
        payload: {

            sourceAccount: faker.random.alphaNumeric(),
            destinationAccount: faker.random.alphaNumeric(),
            amount: faker.random.number(),
            narration: faker.random.alphaNumeric(),
            appId: faker.random.alphaNumeric(),
            stan: faker.random.alphaNumeric(),
            currency: faker.random.alphaNumeric(),
            charges: {
                amountAndCharges: [
                    {
                        fees: faker.random.alphaNumeric(),
                    },
                ],
            },
            branchCode: faker.random.alphaNumeric(),
            narration2: faker.random.alphaNumeric(),
        },
    },

    RetrieveInternaltransfers: {
        params: {
            accoutNumber: faker.random.number(),
        },

    },
};

exports.B2btransfers = {
    data: {
        responseData: {
            response: 'The operation was successful.',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};

exports.B2binternaltransfers = {
    data: {
        responseData: {
            response: 'OK',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};

exports.Internaltransfers = {
    data: {
        responseData: {
            response: 'OK',
        },
        statusCode: '200',
        description: 'Request Successful',
    },
};
