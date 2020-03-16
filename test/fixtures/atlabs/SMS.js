const faker = require("faker");

exports.data = {
  sandbox_key: "djjdkdmdfstasjs",
  SMSService: {
    to: `+234${faker.random.number(10000000)}`,
    from: "FSI",
    message: "Hello World"
  },
  PremiumSub: {
    to: `+234${faker.random.number(10000000)}`,
    from: "FSI",
    message: "Hello World",
    keyword: "innovation-sandbox",
    linkId: `${faker.random.number(1000)}`,
    retryDurationInHours: "1"
  },
  CreatePremiumSub: {
    shortCode: `${faker.random.number(1000)}`,
    keyword: "innovation-sandbox",
    phoneNumber: `+234${faker.random.number(10000000)}`,
    checkoutToken: `CkTkn_+234${faker.random.alphaNumeric(1000)}`
  },
  DeletePremiumSub: {
    shortCode: `${faker.random.number(100)}`,
    keyword: "innovation-sandbox",
    phoneNumber: `+234${faker.random.number(10000000)}`
  },
  FetchPremiumSub: {
    shortCode: `${faker.random.number(1000)}`,
    keyword: "innovation-sandbox",
    lastReceivedId: "0"
  },
  FetchMessage: {
    lastReceivedId: "0"
  }
};

exports.SMSService = {
  SMSMessageData: {
    Message: `Sent to 1/1 Total Cost: NGN ${faker.random.number(10000)}`,
    Recipients: [
      {
        statusCode: 101,
        number: `+234${faker.random.number(10000000)}`,
        cost: `NGN ${faker.random.number(10000)}`,
        status: "Success",
        messageId: `ATXid_${faker.random.alphaNumeric(10000)}`
      }
    ]
  }
};

exports.PremiumSub = {
  SMSMessageData: {
    Message: "Sent to 1/1",
    Recipients: [
      {
        statusCode: 101,
        number: `+234${faker.random.number(10000000)}`,
        cost: "0",
        status: "Success",
        messageId: `ATXid_${faker.random.alphaNumeric(10000)}`
      }
    ]
  }
};

exports.CreatePremiumSub = {
  status: "Success",
  description: "Waiting for user input"
};

exports.DeletePremiumSub = {
  status: "Success",
  description: "Succeeded"
};

exports.FetchPremiumSub = {
  responses: []
};

exports.FetchMessage = {
  SMSMessageData: {
    Messages: []
  }
};
