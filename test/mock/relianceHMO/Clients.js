const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    id: faker.random.alphaNumeric(4),

    Signup: {
        transfer_code: faker.random.alphaNumeric(),
        company_name: faker.name.findName(),
        company_address: faker.address.streetAddress(),
        state_code: 'NG-LA',
        payment_frequency: 'monthly',
        company_admin: {
            first_name: faker.name.findName(),
            last_name: faker.name.findName(),
            email_address: faker.internet.email(),
            phone_number: faker.random.number(8),
        },
        enrollees: [
            {
                plan_id: faker.random.number(8),
                first_name: faker.name.findName(),
                last_name: faker.name.findName(),
                email_address: faker.internet.email(),
                phone_number: faker.random.number(8),
            },
            {
                plan_id: faker.random.number(8),
                first_name: faker.name.findName(),
                last_name: faker.name.findName(),
                email_address: faker.internet.email(),
                phone_number: faker.random.number(8),
            },
        ],
    },
    Renew: {
        transfer_code: faker.random.alphaNumeric(),
        add: [
            {
                plan_id: faker.random.number(8),
                firstname: faker.name.findName(),
                lastname: faker.name.findName(),
                email: faker.internet.email(),
                phone_number: faker.random.number(8),
            },
        ],
        remove: [ faker.random.alphaNumeric(), faker.random.alphaNumeric() ],
        update: [
            {
                plan_id: faker.random.number(8),
                user_token: faker.random.alphaNumeric(),
            },
        ],
    },
};

exports.Signup = {
    status: 'success',
    data: {
        company_name: faker.name.findName(),
        company_code: 'U1RB',
        staff_strength: faker.random.number(8),
        invoice_code: faker.random.alphaNumeric(),
        total_price: faker.random.number(8),
        expires_at: faker.date.past(),
        enrollees: [
            {
                first_name: faker.name.findName(),
                last_name: faker.name.findName(),
                email_address: faker.internet.email(),
                phone_number: faker.random.number(8),
                user_token: faker.random.alphaNumeric(),
            },
            {
                first_name: faker.name.findName(),
                last_name: faker.name.findName(),
                email_address: faker.internet.email(),
                phone_number: faker.random.number(8),
                user_id: faker.random.number(8),
                user_token: faker.random.alphaNumeric(),
            },
        ],
    },
};

exports.Renew = {
    status: 'success',
    data: {
        invoice_code: faker.random.alphaNumeric(),
        transfer_code: faker.random.alphaNumeric(),
        total_price: faker.random.number(8),
        expires_at: faker.random.number(8),
        added: [
            {
                firstname: faker.name.findName(),
                lastname: faker.name.findName(),
                email: faker.internet.email(),
                phone_number: faker.random.number(8),
                user_token: faker.random.alphaNumeric(),
            },
        ],
        removed: [ faker.random.alphaNumeric(), faker.random.alphaNumeric() ],
        updated: [
            {
                plan_id: faker.random.number(8),
                user_token: faker.random.alphaNumeric(),
            },
        ],
    },
};
