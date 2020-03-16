const faker = require('faker');


exports.InterbankTransferReq = {
    message: 'OK',
    data:
    {
       message: 'success',
       response: 'success',
       responsedata: null,
       data:
       {
           ResponseText: 'Your transaction has been submitted for processing.',
          status: '00'
      }
    }
  }

  exports.data = {
    sandbox_key: 'abcdefghijklmnop',
    payload:{
     Referenceid: faker.random.number(10000),
     RequestType: faker.random.number(10000),
     Translocation: faker.random.number(10000),
     SessionID: faker.random.number(100),
     FromAccount: faker.random.number(100),
     ToAccount: faker.random.number(100),
     Amount: faker.random.number(100),
     DestinationBankCode: faker.random.number(100),
     NEResponse: faker.random.number(100),
     BenefiName: faker.random.number(100),
     PaymentReference: faker.random.number(100),
     OriginatorAccountName: faker.random.number(100),
     translocation: faker.random.number(100)
    },
    subscription_key: "t",
    Appid: faker.random.number(100),
    ipval: 0
  }
