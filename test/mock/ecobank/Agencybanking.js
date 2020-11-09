const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    'content-type': 'application/json',
    airtimeBillers: {
        payload: {
            header: {
                affcode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                requestToken: 'ab104d4f4fbff91be354a49f26ab8991610c4174233447ef4101f61f09879371e0b8d2ae8eb3edabe45cb30be88ec2390deeeab6607bbbd8faa5b7c0fb82a35b',
                sourceCode: 'TEST',
                sourceIp: '1.2.3.4',
                channel: faker.random.alphaNumeric(),
                requesttype: 'VALIDATE',
                agentcode: faker.random.alphaNumeric(),
            },
        },
    },
    buyAirtime: {
        payload: {
            billercode: faker.random.alphaNumeric(),
            mobileno: faker.random.alphaNumeric(),
            amount: faker.random.alphaNumeric(),
            transactiontoken: '488bdead4dae96d90a6b170992d8335cf56e8baa1ce0887ab72f917b86668f7477331b8f8e1702a576d9cf58aa9cc2505c3d31fac93cd5c6806fd2efe9316634',
            ccy: faker.random.alphaNumeric(),
            header: {
                affcode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                requestToken: 'ab104d4f4fbff91be354a49f26ab8991610c4174233447ef4101f61f09879371e0b8d2ae8eb3edabe45cb30be88ec2390deeeab6607bbbd8faa5b7c0fb82a35b',
                sourceCode: 'TEST',
                sourceIp: '1.2.3.4',
                channel: faker.random.alphaNumeric(),
                requesttype: 'VALIDATE',
                agentcode: faker.random.alphaNumeric(),
            },
        },
    },
    getAccountBalance: {
        payload: {
            header: {
                affcode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                requestToken: 'f5b6003ebd6a25e8e837ff7fca4a7ee42f22f0f3b8313c5a9e6ac4cb0f250c55e30111a330c6fc46a1067176b3c4baea2f6317ce99af5e2a39d11125552e6bdb',
                sourceCode: 'KAZANG',
                sourceIp: '10.8.245.9',
                channel: faker.random.alphaNumeric(),
                requesttype: 'VALIDATE',
                agentcode: faker.random.alphaNumeric(),
            },
            transactiontoken: 'dfd9f14d926b54c2bf06b197969624a575e84727e67fbeea6746788b05e7afa838e0d60c48fb5d9825cbece019ef52f57853dbad543bf233e4d43a5cf2a5e74e',
        },
    },
    customerAccDetails: {
        payload: {
            accountno: faker.random.alphaNumeric(),
            header: {
                affcode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                requestToken: 'b3ea5445f84d8464c4e03b43f994e7ee36655144622f22b296ec7b47979460b91ad059199b4b5dcc1d9851e3a04edd9d250119ee295b7b69ef709c791e779bb6',
                sourceCode: 'KAZANG',
                sourceIp: '10.8.245.9',
                channel: faker.random.alphaNumeric(),
                requesttype: 'VALIDATE',
                agentcode: faker.random.alphaNumeric(),
            },
        },
    },
};

exports.airtimeBillers = {
    message: 'OK',
    data: {
        json: {
            airtimebillers: [
                {
                    billercode: 'Glo TOPUP',
                    billername: 'GLO',
                    category: 'GLO',
                    serialNo: 1,
                },
                {
                    billercode: 'Etisalat TOPUP',
                    billername: '9Mobile',
                    category: '9Mobile',
                    serialNo: 2,
                },
                {
                    billercode: 'Airtel TOPUP',
                    billername: 'Airtel',
                    category: 'Airtel',
                    serialNo: 3,
                },
                {
                    billercode: 'MTN_NG',
                    billername: 'MTN',
                    category: 'MTN',
                    serialNo: 4,
                },
            ],
        },
        header: {
            requestId: 'A190320093921731',
            responsecode: '000',
            responsemessage: 'SUCCESS',
        },
    },
};

exports.buyAirtime = {
    message: 'OK',
    data: {
        json: {
            cbareferenceno: 'A190320093921731',
            externalrefno: ' A190320093921731',
        },
        header: {
            requestId: '00123456789',
            responsecode: '000',
            responsemessage: 'SUCCESS',
        },
    },
};

exports.getAccountBalance = {
    message: 'OK',
    data: [
        {
            ccy: 'NGN',
            commAccountBalance: 3247.25,
            commAccountNo: '2151106841',
            servicename: 'Agent to Agent',
            tradingAccountBalance: 7837519.97,
            tradingAccountNo: '0011001594',
        },
        {
            ccy: 'NGN',
            commAccountBalance: 3247.25,
            commAccountNo: '2151106841',
            servicename: 'Cash Out',
            tradingAccountBalance: 7837519.97,
            tradingAccountNo: '0011001594',
        },
        {
            ccy: 'NGN',
            commAccountBalance: 3247.25,
            commAccountNo: '2151106841',
            servicename: 'Token Cash Out',
            tradingAccountBalance: 7837519.97,
            tradingAccountNo: '0011001594',
        },
    ],
};

exports.customerAccDetails = {
    message: 'OK',
    data: {
        header: {
            requestId: 'A190320093921731',
            responsecode: '000',
            responsemessage: 'SUCCESS',
        },
        json: {
            customername: 'Nana Pun',
        },
    },
};
