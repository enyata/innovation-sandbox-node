const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(15),
    host: faker.internet.url(),
    params: {
        ProvidersQuery: {
            state: faker.random.word(),
            plan_id: faker.random.number(2),
            tiers: `${faker.random.number(2)}`,
            page: `${faker.random.number(2)}`,
            limit: `${faker.random.number(2)}`,
        },
        BenefitsQuery: {
            plan: `${faker.random.number(2)}`,
        },
    },
};

exports.Providers = {
    status: 'success',
    data: [
        {
            id: faker.random.number(2),
            name: faker.name.findName(),
            location: faker.random.word(),
            address: faker.random.words(5),
            tier: faker.random.number(2),
        },
        {
            id: faker.random.number(2),
            name: faker.name.findName(),
            location: faker.random.word(),
            address: faker.random.words(6),
            tier: faker.random.number(2),
        },
    ],
    pagination: {
        current_page: faker.random.number(2),
        last_page: faker.random.number(2),
        per_page: faker.random.number(2),
        total: faker.random.number(2),
        count: faker.random.number(2),
    },
};

exports.Benefits = {
    status: 'success',
    data: [
        {
            name: faker.random.words(6),
            details: [
                {
                    plan: faker.name.findName(),
                    value: faker.random.number(2),
                    group: '',
                    quarter: faker.random.number(2),
                },
                {
                    plan: faker.name.findName(),
                    value: faker.random.number(2),
                    group: '',
                    quarter: faker.random.number(2),
                },
            ],
        },
    ],
};

exports.States = {
    status: 'success',
    data: [
        {
            code: faker.random.word(),
            name: faker.random.word(),
        },
    ],
};

exports.Titles = {
    status: 'success',
    data: [
        {
            id: faker.random.number(2),
            name: faker.random.word(),
            abbreviation: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
            abbreviation: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
            abbreviation: faker.random.word(),
        },
    ],
};

exports.Occupations = {
    status: 'success',
    data: [
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
    ],
};

exports.MaritalStatuses = {
    status: 'success',
    data: [
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
        {
            id: faker.random.number(2),
            name: faker.random.word(),
        },
    ],
};
