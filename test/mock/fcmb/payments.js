const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    b2bSingleTransfer: {
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
    internalB2BSingleTransfer: {
        payload: {
            debitAccountNo: faker.random.alphaNumeric(),
            creditAccountNo: faker.random.alphaNumeric(),
            amount: faker.random.number(),
            narration: faker.random.alphaNumeric(),
            remark: faker.random.alphaNumeric(),
            reportCode: faker.random.alphaNumeric(),
        },
    },
    createInternalTransfer: {
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

    getInternalTransfer: {
        params: {
            accoutNumber: faker.random.number(),
        },
    },

    internalTransferDateRange: {
        params: {
            startDate: faker.random.alphaNumeric(),
            endDate: faker.random.alphaNumeric(),
            pageNum: faker.random.alphaNumeric(),
            pageSize: faker.random.alphaNumeric(),
        },
    },

    internalTransferStatus: {
        params: {
            stan: faker.random.alphaNumeric(),
        },
    },

    nipSingleFundsTransfer: {
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

    nipTransferDateRange: {
        params: {
            startDate: faker.random.alphaNumeric(),
            endDate: faker.random.alphaNumeric(),
            pageNum: faker.random.alphaNumeric(),
            pageSize: faker.random.alphaNumeric(),
        },
    },

    insertNIPCharge: {
        payload: {
            amount: faker.random.number(),
        },
    },

    getNIPBanks: {},

    nipNameEnquiry: {
        payload: {
            destinationInstitutionCode: faker.random.alphaNumeric(),
            channelCode: faker.random.alphaNumeric(),
            accountNumber: faker.random.alphaNumeric(),
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },

    nipTransferStatus: {
        params: {
            traceid: faker.random.alphaNumeric(),
        },
        accept: 'application/json',
        'content-type': 'application/json',
    },

    nibssPaymentStatus: {
        payload: {
            ScheduleId: faker.random.alphaNumeric(),
            ClientId: faker.random.alphaNumeric(),
            PageNumber: faker.random.alphaNumeric(),
            Status: faker.random.alphaNumeric(),
            Beneficiary: faker.random.alphaNumeric(),
            Amount: faker.random.alphaNumeric(),
            AccountNumber: faker.random.alphaNumeric(),
            BankCode: faker.random.alphaNumeric(),
            Narration: faker.random.alphaNumeric(),
            SerialNo: faker.random.alphaNumeric(),
            Reason: faker.random.alphaNumeric(),
            Status2: faker.random.alphaNumeric(),
        },
        accept: 'application/json',
        'content-type': 'application/json',
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
