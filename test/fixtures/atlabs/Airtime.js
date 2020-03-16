const faker = require("faker");

exports.data = {
  sandbox_key: "smskfskjfsmalked",
  payload: {
    recipients: [
      {
        phoneNumber: `+234${faker.random.number(10)}`,
        amount: faker.random.number(5),
        currencyCode: "NGN"
      }
    ]
  }
};

exports.SendAirtime = {
  errorMessage: "None",
  numSent: 1,
  totalAmount: `NGN ${faker.random.number(6)}`,
  totalDiscount: `NGN ${faker.random.number(6)}`,
  responses: [
    {
      phoneNumber: `+234${faker.random.number(1000)}`,
      errorMessage: "None",
      amount: `NGN ${faker.random.number(6)}`,
      status: "Sent",
      requestId: `ATQid_${faker.random.alphaNumeric(22)}`,
      discount: `NGN ${faker.random.number(6)}`
    }
  ]
};
