const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    client_id: 'f',
    createCustomer: {
        payload: {
            accountOfficer: faker.random.alphaNumeric(),
            address: faker.random.alphaNumeric(),
            birthDate: faker.random.alphaNumeric(),
            branchCode: faker.random.alphaNumeric(),
            bvn: faker.random.alphaNumeric(),
            transactionChannel: faker.random.alphaNumeric(),
            city: faker.random.alphaNumeric(),
            country: faker.random.alphaNumeric(),
            createdBy: faker.random.alphaNumeric(),
            customerType: faker.random.alphaNumeric(),
            email: faker.random.alphaNumeric(),
            firstName: faker.random.alphaNumeric(),
            lastName: faker.random.alphaNumeric(),
            gender: faker.random.alphaNumeric(),
            referralCode: faker.random.alphaNumeric(),
            loyaltyPoints: faker.random.alphaNumeric(),
            mobilePhone: faker.random.alphaNumeric(),
            occupation: faker.random.alphaNumeric(),
            otherName: faker.random.alphaNumeric(),
            platformId: faker.random.alphaNumeric(),
            secondaryMobilePhone: faker.random.alphaNumeric(),
            State: faker.random.alphaNumeric(),
            identificationId: faker.random.alphaNumeric(),
            walletCustomerStatus: faker.random.alphaNumeric(),
            password: faker.random.alphaNumeric(),
            pin: faker.random.alphaNumeric(),
            transactionPassword: faker.random.alphaNumeric(),
            customerTier: faker.random.alphaNumeric(),
            customerBankLinkId: faker.random.alphaNumeric(),
            isFullyRegistered: faker.random.alphaNumeric(),
            sPassword: faker.random.alphaNumeric(),
            sPin: faker.random.alphaNumeric(),
            sTransactionPassword: faker.random.alphaNumeric(),
        },
    },

    updateCustomer: {
        payload: {
            accountOfficer: faker.random.alphaNumeric(),
            address: faker.random.alphaNumeric(),
            agentCode: faker.random.alphaNumeric(),
            birthDate: faker.random.alphaNumeric(),
            branchCode: faker.random.alphaNumeric(),
            transactionChannel: faker.random.alphaNumeric(),
            country: faker.random.alphaNumeric(),
            modifiedBy: faker.random.alphaNumeric(),
            customerType: faker.random.alphaNumeric(),
            email: faker.random.alphaNumeric(),
            firstName: faker.random.alphaNumeric(),
            lastName: faker.random.alphaNumeric(),
            gender: faker.random.alphaNumeric(),
            referralCode: faker.random.alphaNumeric(),
            loyaltyPoints: faker.random.alphaNumeric(),
            mobilePhone: faker.random.alphaNumeric(),
            occupation: faker.random.alphaNumeric(),
            otherName: faker.random.alphaNumeric(),
            secondaryMobilePhone: faker.random.alphaNumeric(),
            state: faker.random.alphaNumeric(),
            identificationNumber: faker.random.alphaNumeric(),
            subAgentCode: faker.random.alphaNumeric(),
            city: faker.random.alphaNumeric(),
            bvn: faker.random.alphaNumeric(),
            customerStatus: faker.random.alphaNumeric(),
            customerTier: faker.random.alphaNumeric(),
            customerBankLinkId: faker.random.alphaNumeric(),
        },
    },
    getCustomerByMobileNo: {},

    updateCustomerMobileNo: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            newMobileNo: faker.random.alphaNumeric(),
        },
    },

    nameEnquiry: {
        params: {
            mobileNo: faker.random.alphaNumeric(),
            internalAcctNumber: faker.random.alphaNumeric(),
        },
    },

    setPin: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            newPin: faker.random.alphaNumeric(),
        },
    },

    setTransactionPassword: {
        payload: {
            ustomerId: faker.random.alphaNumeric(),
            newPassword: faker.random.alphaNumeric(),
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
