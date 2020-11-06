const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    Authorization: faker.random.alphaNumeric(),
};

exports.transactions = {
    payment_transaction: [
        {
            uetr: '54806732-bfb8-43e0-9a42-44f46ca3f700',
            transaction_status: 'ACCC',
            transaction_status_reason: null,
        },
        {
            uetr: 'eb6305c9-1f7f-49de-aed0-16487c27b42d',
            transaction_status: 'ACCC',
            transaction_status_reason: null,
        },
    ],
    next: 'dXNlIHRoaXMgdmFsdWUgdG8gcmVxdWVzdCBuZXh0IHNldCBvZiBkYXRh',
};

exports.inbound = {
    payment_transaction: [
        {
            uetr: '97ed4827-7b6f-4491-a06f-b548d5a7512d',
            transaction_status: null,
            transaction_status_reason: null,
        },
        {
            uetr: null,
            transaction_status: null,
            transaction_status_reason: null,
            event_time: '2019-08-30T10:13:00.0Z',
        },
    ],
    next: null,
};
