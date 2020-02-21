const faker = require('faker');

exports.InterbankNameEnquiry = {
    message: 'OK',
    data:
   {
     message: 'success',
     response: 'success',
     data:
      {
        AccountName: faker.name.findName(),
        sessionID: faker.random.number(1000000000000000),
        AccountNumber: faker.random.number(1000000000),
        status: faker.random.number(100),
        BVN: faker.random.number(1000000000),
        ResponseText: null
      }
    }
  }

exports.data = {
   sandbox_key: 'abcdefghijklmnop',
   params:{
    Referenceid: faker.random.number(100),
    RequestType: faker.random.number(100),
    Translocation: faker.random.number(100),
    ToAccount: faker.random.number(1000000000),
    destinationbankcode: faker.random.number(100)
   },
   subscription_key: "t",
   Appid: faker.random.number(100),
   ipval: 0
}
