const faker = require("faker");

exports.data = {
  sandbox_key: faker.random.alphaNumeric(),
  host: faker.internet.url(),
  id: faker.random.alphaNumeric(10),
  params: {
    ProfileQuery: {
      sex: faker.random.word(),
      date_of_birth: `${faker.date.past()}`,
      home_address: faker.address.streetAddress(),
      has_smartphone: faker.random.boolean(),
      profile_picture_filename: faker.internet.avatar(),
      hash: faker.random.alphaNumeric(),
    },

    hmoId: {
      hmo_id: faker.random.alphaNumeric(),
    },
  },
};

exports.Profile = {
  status: "success",
  data: {
    message: faker.random.words(),
    hmo_id: faker.random.alphaNumeric(),
  },
};

exports.Validate = {
  status: "success",
  data: {
    first_name: faker.name.findName(),
    last_name: faker.name.findName(),
    email_address: faker.internet.email(),
    phone_number: faker.random.number(),
    plan: {
      name: faker.name.findName(),
      cover_start_date: faker.date.past(),
      cover_end_date: faker.date.past(),
      amount: faker.random.number(),
    },
  },
};

exports.IdCard = {
  status: "success",
  data: {
    url: faker.internet.url(),
  },
  message: faker.random.words(),
};

exports.Enrollee = {
  status: "success",
  data: {
    id: faker.random.number(),
    hmo_id: faker.random.alphaNumeric(),
    first_name: faker.name.findName(),
    last_name: faker.name.findName(),
    phone_number: faker.random.number(),
    email_address: faker.internet.email(),
    plan_name: faker.random.words(),
    cover_start_date: faker.date.past(),
    cover_end_date: faker.date.past(),
    type: faker.random.word(),
    status: faker.random.word(),
    dependants: [],
  },
};
