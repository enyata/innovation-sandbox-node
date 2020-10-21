const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    Authorization: faker.random.alphaNumeric(),
    verification: {
        payload: {
            correlation_identifier: 'SCENARIO1-CORRID-002',
            context: [ 'BENR', 'PAYM', 'RFPP' ],
            uetr: 'b916a97d-a699-4f20-b8c2-2b07e2684a27',
            creditor_account: 'GB3112000000001987426375',
            creditor_name: 'John Doe',
            creditor_address: { country: 'GB' },
            creditor_organisation_identification: { any_bic: 'BANABEBB' },
        },
    },
};

exports.verification = {
    correlation_identifier: 'SCENARIO1-CORRID-002',
    response: {
        account_validation_status: 'FAIL',
        creditor_account_match: 'NMTC',
        creditor_name_match: 'NOAP',
        creditor_address_match: 'NOAP',
        creditor_organisation_identification_match: 'NOAP',
    },
};
