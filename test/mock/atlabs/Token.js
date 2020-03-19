const faker = require("faker");

exports.data = {
  sandbox_key: "smskfskjfsmalked",
  payload: {
    phoneNumber: `+234${faker.random.number(10)}`
  }
};

exports.CreateCheckoutToken = {
  description: "Success",
  token: `CkTkn_${faker.random.alphaNumeric(13)}`
};
