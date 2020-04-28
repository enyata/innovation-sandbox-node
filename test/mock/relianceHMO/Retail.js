const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),

    Signup: {
        Referral_code: faker.random.number(8),
        enrollees: [
            {
                payment_frequency: 'monthly',
                first_name: faker.name.findName(),
                last_name: faker.name.findName(),
                email_address: faker.internet.email(),
                phone_number: faker.random.number(8),
                plan_id: faker.random.number(8),
                can_complete_profile: true,
                dependants: [
                    {
                        first_name: faker.name.findName(),
                        last_name: faker.name.findName(),
                        email_address: faker.internet.email(),
                        phone_number: faker.random.number(8),
                        plan_id: faker.random.number(8),
                    },
                    {
                        first_name: faker.name.findName(),
                        last_name: faker.name.findName(),
                        email_address: faker.internet.email(),
                        phone_number: faker.random.number(8),
                        plan_id: faker.random.number(8),
                    },
                ],
            },
            {
                payment_frequency: 'q',
                first_name: faker.name.findName(),
                last_name: faker.name.findName(),
                email_address: faker.internet.email(),
                phone_number: faker.random.number(8),
                plan_id: faker.random.number(8),
                can_complete_profile: false,
                dependants: [],
            },
        ],
    },

    Renew: {
        enrollees: [
            {
                user_id: faker.random.number(8),
                remove: [ faker.random.number(8) ],
            },
        ],
    },
};

exports.Signup = {
    status: 'success',
    data: {
        transfer_code: faker.random.alphaNumeric(),
        enrollees: {
            successful: [
                {
                    email_address: faker.internet.email(),
                    phone_number: faker.random.number(8),
                    user_id: faker.random.number(8),
                    plan_id: faker.random.number(8),
                    payment_frequency: 'Monthly',
                    hash: faker.random.alphaNumeric(),
                    dependants: [
                        {
                            email_address: faker.internet.email(),
                            phone_number: faker.random.number(8),
                            user_id: faker.random.number(8),
                            hash: faker.random.alphaNumeric(),
                            plan_id: faker.random.number(8),
                        },
                        {
                            email_address: faker.internet.email(),
                            phone_number: faker.random.number(8),
                            user_id: faker.random.number(8),
                            hash: faker.random.alphaNumeric(),
                            plan_id: faker.random.number(8),
                        },
                    ],
                    expires_at: faker.date.past(),
                },
            ],
            failed: [
                {
                    invoice_code: faker.random.alphaNumeric(),
                    message: 'User already has a profile',
                    email_address: faker.internet.email(),
                    phone_number: faker.random.number(8),
                    dependants: [],
                },
            ],
        },
    },
};

exports.Renew = {
    status: 'success',
    data: {
        transfer_code: '',
        enrollees: {
            successful: [
                {
                    email_address: faker.internet.email(),
                    user_id: faker.random.number(8),
                    expires_at: faker.date.past(),
                    dependants: [
                        {
                            email_address: faker.internet.email(),
                            phone_number: faker.random.number(8),
                            user_id: faker.random.number(8),
                            plan_id: faker.random.number(8),
                        },
                    ],
                },
            ],
            failed: [],
        },
    },
};
