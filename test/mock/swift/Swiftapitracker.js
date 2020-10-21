const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    Authorization: faker.random.alphaNumeric(),
};

exports.paymentStatusTracker = {
    Status: 'OK',
};

exports.transactionDetails = {
    uetr: '97ed4827-7b6f-4491-a06f-b548d5a7512d',
    transaction_status: 'ACCC',
    initiation_time: '2020-06-08T15:38:33.0Z',
    completion_time: '2020-06-08T19:56:31.0Z',
    last_update_time: '2020-06-08T19:56:31.0Z',
    payment_event: [
        {
            network_reference: '200608GRWLCNSHXXXA0815707108',
            message_name_identification: '103',
        },
        {
            network_reference: '200608BLKFDE33XXXA8579327826',
            message_name_identification: '103',
        },
        {
            network_reference: '200608BWWLPLPWXXXA6229109941',
            message_name_identification: '199',
        },
    ],
};

exports.cancellation = {
    Status: 'OK',
};
