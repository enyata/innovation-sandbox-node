const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(15),
    host: faker.internet.url(),

    params: {
        PlansQuery: {
            type: faker.random.word(),
            package: faker.random.word(),
        },

        EnrolleesQuery: {
            page: `${faker.random.number(3)}`,
            limit: `${faker.random.number(3)}`,
        },

        ConsultationsQuery: {
            patient_id: `${faker.random.number(3)}`,
            reason: faker.random.words(),
        },

        UploadQuery: {
            file_use: faker.random.word(),
            file: faker.random.word(),
        },
    },

    payload: {
        EnrolleesBody: [
            {
                enrollees: [
                    {
                        payment_frequency: faker.random.word(),
                        first_name: faker.name.firstName(),
                        last_name: faker.name.firstName(),
                        email_address: faker.internet.email(),
                        phone_number: `${faker.random.number(3)}`,
                        plan_id: faker.random.number(3),
                        can_complete_profile: faker.random.word(),
                        profile: {
                            sex: faker.random.word(),
                            date_of_birth: `${faker.date.past()}`,
                            first_name: faker.name.firstName(),
                            last_name: faker.name.firstName(),
                            primary_phone_number: `${faker.random.number(3)}`,
                            home_address: faker.random.words(),
                            has_smartphone: faker.random.word(),
                            profile_picture_filename: faker.random.word(),
                            enrollee_type: faker.random.number(3),
                            hmo_id: '',
                        },
                        dependants: [
                            {
                                first_name: faker.name.firstName(),
                                last_name: faker.name.firstName(),
                                email_address: faker.internet.email(),
                                phone_number: `${faker.random.number(3)}`,
                                plan_id: faker.random.number(3),
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

exports.Plans = {
    status: 'success',
    data: {
        plans: [
            {
                id: `${faker.random.number(3)}`,
                class: faker.random.number(3),
                type: faker.random.word(),
                name: faker.random.words(),
                no_of_dependants: faker.random.number(3),
                has_pec: true,
                provider_tiers: [ faker.random.number(3), faker.random.number(3) ],
                summary: [
                    {
                        name: faker.random.words(),
                        value: faker.random.words(),
                    },
                    {
                        name: faker.random.words(),
                        value: faker.random.words(),
                    },
                    {
                        name: faker.random.words(),
                        value: faker.random.words(),
                    },
                    {
                        name: faker.random.words(),
                        value: faker.random.words(),
                    },
                    {
                        name: faker.random.word(),
                        value: faker.random.words(),
                    },
                    {
                        name: faker.random.word(),
                        value: faker.random.words(),
                    },
                    {
                        name: faker.random.words(),
                        value: faker.random.number(3),
                    },
                    {
                        name: faker.random.words(),
                        value: faker.internet.url(),
                    },
                ],
                price: {
                    monthly: `${faker.random.number(3)}`,
                    quarterly: `${faker.random.number(3)}`,
                    yearly: `${faker.random.number(3)}`,
                },
            },
        ],
    },
};

exports.EnrolleesPost = {
    status: 'success',
    data: {
        transfer_code: faker.random.alphaNumeric(5),
        enrollees: {
            successful: [
                {
                    email_address: faker.internet.email(),
                    phone_number: `${faker.random.number(3)}`,
                    user_id: faker.random.number(3),
                    plan_id: faker.random.number(3),
                    payment_frequency: faker.random.word(),
                    hash: faker.random.alphaNumeric(5),
                    dependants: [
                        {
                            email_address: faker.internet.email(),
                            phone_number: `${faker.random.number(3)}`,
                            user_id: faker.random.number(3),
                            hash: faker.random.alphaNumeric(5),
                            plan_id: faker.random.number(3),
                        },
                        {
                            email_address: faker.internet.email(),
                            phone_number: `${faker.random.number(3)}`,
                            user_id: faker.random.number(3),
                            hash: faker.random.alphaNumeric(5),
                            plan_id: faker.random.number(3),
                        },
                    ],
                    expires_at: `${faker.date.past()}`,
                },
            ],
            failed: [
                {
                    invoice_code: faker.random.alphaNumeric(5),
                    message: faker.random.words(),
                    email_address: faker.internet.email(),
                    phone_number: `${faker.random.number(3)}`,
                    dependants: [],
                },
            ],
        },
    },
};

exports.EnrolleesGet = {
    status: 'success',
    data: [
        {
            id: faker.random.number(3),
            hmo_id: null,
            profile_hash: null,
            first_name: faker.name.firstName(),
            last_name: faker.name.firstName(),
            phone_number: `${faker.random.number(3)}`,
            email_address: faker.internet.email(),
            plan_name: faker.random.words(),
            type: faker.random.word(),
            status: faker.random.word(),
            cover_start_date: `${faker.date.past()}`,
            cover_end_date: `${faker.date.past()}`,
            dependants: [
                {
                    id: faker.random.number(3),
                    hmo_id: null,
                    first_name: faker.name.firstName(),
                    last_name: faker.name.firstName(),
                    phone_number: `${faker.random.number(3)}`,
                    email_address: faker.internet.email(),
                    plan_name: faker.random.words(),
                    type: faker.random.word(),
                    status: faker.random.word(),
                },
            ],
        },
        {
            id: faker.random.number(3),
            hmo_id: null,
            first_name: faker.name.firstName(),
            last_name: faker.name.firstName(),
            phone_number: `${faker.random.number(3)}`,
            email_address: faker.internet.email(),
            plan_name: faker.random.words(),
            type: faker.random.word(),
            status: faker.random.word(),
            dependants: [],
        },
    ],
    meta: {
        pages: faker.random.number(3),
        current_page: faker.random.number(3),
        per_page: faker.random.number(3),
        total: faker.random.number(3),
    },
};

exports.Wallet = {
    status: 'success',
    data: {
        balance: `${faker.random.number(3)}`,
    },
};

exports.Consultations = {
    status: 'success',
    data: {
        consultation_id: faker.random.number(3),
        created_at: `${faker.date.past()}`,
    },
};

exports.Upload = {
    status: 'success',
    data: {
        filename: faker.internet.avatar(),
    },
};
