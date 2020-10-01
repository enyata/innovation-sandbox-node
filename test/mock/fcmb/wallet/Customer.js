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

    CreateCustomer: {
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

    UpdateCustomer: {
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
    MobileNo: {},

    UpdateMobileNo: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            newMobileNo: faker.random.alphaNumeric(),
        },
    },

    Name: {
        params: {
            mobileNo: faker.random.alphaNumeric(),
            internalAcctNumber: faker.random.alphaNumeric(),
        },
    },

    Pin: {
        payload: {
            customerId: faker.random.alphaNumeric(),
            newPin: faker.random.alphaNumeric(),
        },
    },

    Password: {
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
