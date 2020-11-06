const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    Authorization: faker.random.alphaNumeric(),
};

exports.entityList = {
    myEntity: [
        {
            legalName: 'GLOBAL BANK BADEN-WUERTTEMBERG',
            bic: 'GLOBDESTXXX',
        },
    ],
};

exports.counterParty = {
    myCounterparty: [
        {
            bic: 'LONGAEADXXX',
            legalName: 'LONGBRIDGE BANK N.A.',
        },
    ],
};
