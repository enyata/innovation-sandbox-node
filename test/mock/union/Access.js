const faker = require("faker");

exports.data = {
  sandbox_key: faker.random.alphaNumeric(),
  payload: {
    client_secret: faker.random.alphaNumeric(),
    client_id: faker.random.number(5),
    grant_type: faker.random.word(),
    username: faker.name.findName(),
    password: faker.internet.url()
  },
  host: faker.internet.url()
};

exports.Token = {
  message: "OK",
  data: {
    access_token: faker.random.alphaNumeric(),
    token_type: "bearer",
    refresh_token: faker.random.alphaNumeric(),
    expires_in: faker.random.number(5),
    scope: "read"
  }
};
