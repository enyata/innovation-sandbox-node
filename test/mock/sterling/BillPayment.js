const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    BillPaymentAdvice: {
        payload: {
            Referenceid: faker.random.number(10000),
            RequestType: faker.random.number(10000),
            Translocation: faker.random.number(10000),
            Amount: faker.random.number(100),
            PaymentCode: faker.random.number(100),
            Mobile: faker.random.number(100),
            SubscriberInfo: faker.random.number(100),
            ActionType: faker.random.number(100),
            Nuban: faker.random.number(3007866553),
            Email: faker.internet.email(),
        },
        subscription_key: 't',
        Appid: faker.random.number(100),
        ipval: 0,
    },
    BillerPaymentItems: {
        params: {
            Referenceid: faker.random.number(100),
            RequestType: faker.random.number(100),
            Translocation: faker.random.number(100),
            BillerId: faker.random.number(10),
        },
        subscription_key: 't',
        Appid: faker.random.number(100),
        ipval: 0,
    },
    BillersISW: {
        params: {
            Referenceid: faker.random.number(100),
            RequestType: faker.random.number(100),
            Translocation: faker.random.number(100),
        },
        subscription_key: 't',
        Appid: faker.random.number(100),
        ipval: 0,
    },
};

exports.BillPaymentAdvice = {
    message: 'OK',
    data: {
        message: 'success',
        response: 'success',
        data: {
            ResponseText: 'The list of all billing services available to a particular billing company.',
            status: '00',
        },
    },
};

exports.BillerPaymentItems = {
    message: 'OK',
    data: {
        message: 'success',
        response: 'success',
        data: {
            ResponseText: 'The list of all billing services available to a particular billing company.',
            status: '01',
        },
    },
};

exports.BillersISW = {
    message: 'OK',
    data: {
        message: 'success',
        response: 'success',
        data: {
            ResponseText: 'The list of all billing services available.',
            status: '02',
        },
    },
};
