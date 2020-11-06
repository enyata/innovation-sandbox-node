const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    fund: {
        amount: faker.random.number(11),
    },
};

exports.Transactions = {
    status: 'success',
    data: [
        {
            id: faker.random.number(11),
            user_id: faker.random.number(11),
            amount: faker.random.number(11),
            wallet_balance: faker.random.number(11),
            wallet_transaction_type_id: faker.random.number(11),
            payment_id: null,
            payment_state_id: faker.random.number(11),
            transaction_reference: faker.random.alphaNumeric(16),
            transfer_code: null,
            created_at: faker.date.past(),
            active_status: faker.random.number(11),
        },
        {
            id: faker.random.number(11),
            user_id: faker.random.number(11),
            amount: faker.random.number(11),
            wallet_balance: faker.random.number(11),
            wallet_transaction_type_id: faker.random.number(11),
            payment_id: null,
            payment_state_id: faker.random.number(11),
            transaction_reference: faker.random.alphaNumeric(16),
            transfer_code: null,
            created_at: faker.date.past(),
            active_status: faker.random.number(11),
        },
    ],
    pagination: {
        current_page: faker.random.number(11),
        last_page: faker.random.number(11),
        per_page: faker.random.number(11),
        total: faker.random.number(11),
        count: faker.random.number(11),
    },
};

exports.Fund = {
    status: 'success',
    data: {
        payment_url: faker.internet.url(),
        amount: faker.random.number(11),
    },
};
