const faker = require('faker');


exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    'content-type': 'application/json',
    token: {
        payload: {
            userId: faker.random.alphaNumeric(),
            password: faker.random.alphaNumeric(),
        },
    },
    card: {
        payload: {
            paymentDetails: {
                requestId: faker.random.alphaNumeric(),
                productCode: faker.random.alphaNumeric(),
                amount: faker.random.alphaNumeric(),
                currency: faker.random.alphaNumeric(3),
                locale: faker.random.alphaNumeric(7),
                orderInfo: faker.random.alphaNumeric(),
                returnUrl: faker.random.alphaNumeric(),
            },
            merchantDetails: {
                accessCode: faker.random.alphaNumeric(),
                merchantID: faker.random.alphaNumeric(),
                secureSecret: faker.random.alphaNumeric(),
            },
            secureHash: faker.random.alphaNumeric(),
        },
        access_token: faker.random.alphaNumeric(),
    },
    momoPayment: {
        payload: {
            affiliateCode: faker.random.alphaNumeric(),
            telco: faker.random.alphaNumeric(),
            channel: 'UNIFIED',
            token: 'SBRC/3MJMGmz1WuHiRpmikk6SWgBj/Tt',
            content: {
                countryCode: faker.random.alphaNumeric(),
                transId: faker.random.alphaNumeric(),
                productCode: faker.random.alphaNumeric(),
                senderName: faker.random.alphaNumeric(),
                senderAccountNo: faker.random.alphaNumeric(),
                senderPhoneNumber: faker.random.alphaNumeric(),
                branch: faker.random.alphaNumeric(),
                transRef: faker.random.alphaNumeric(),
                bankref: faker.random.alphaNumeric(),
                receiverPhoneNumber: faker.random.alphaNumeric(),
                receiverFirstName: faker.random.alphaNumeric(),
                receiverLastName: faker.random.alphaNumeric(),
                receiverEmail: faker.random.alphaNumeric(),
                receiverBank: faker.random.alphaNumeric(),
                currency: faker.random.alphaNumeric(),
                amount: faker.random.alphaNumeric(),
                transDesc: faker.random.alphaNumeric(),
                transType: faker.random.alphaNumeric(),
            },
            secureHash: faker.random.alphaNumeric(),
        },
        access_token: faker.random.alphaNumeric(),
    },
    merchantCategoryCode: {
        payload: {
            requestId: faker.random.alphaNumeric(),
            affiliateCode: faker.random.alphaNumeric(),
            requestToken: '/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV',
            sourceCode: faker.random.alphaNumeric(),
            sourceChannelId: faker.random.alphaNumeric(),
            requestType: 'CREATE_MERCHANT',
        },
        access_token: faker.random.alphaNumeric(),
    },
    merchantQrCreation: {
        payload: {
            headerRequest: {
                requestId: '',
                affiliateCode: faker.random.alphaNumeric(),
                requestToken: '/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV',
                sourceCode: 'ECOBANK_QR_API',
                sourceChannelId: faker.random.alphaNumeric(),
                requestType: 'CREATE_MERCHANT',
            },
            merchantAddress: faker.random.alphaNumeric(),
            merchantName: faker.random.alphaNumeric(),
            accountNumber: faker.random.alphaNumeric(),
            terminalName: faker.random.alphaNumeric(),
            mobileNumber: faker.random.alphaNumeric(),
            email: faker.random.alphaNumeric(),
            area: faker.random.alphaNumeric(),
            city: faker.random.alphaNumeric(),
            referralCode: faker.random.alphaNumeric(),
            mcc: '0000',
            dynamicQr: 'Y',
            callBackUrl: faker.random.alphaNumeric(),
            secureHash: faker.random.alphaNumeric(),
        },
    },
};

exports.token = {
    message: 'OK',
    data: {
        username: 'iamaunifieddev103',
        token: 'eyJhbGciOiJSUzI1NiJ9',
    },
};

exports.card = {
    message: 'OK',
    data: {
        response_code: '200',
        response_message: 'success',
        response_content:
  'https://migs-mtf.mastercard.com.au/vpcpay?vpc_AccessCode=79742570&vpc_Amount=50035&vpc_Version=1&vpc_MerchTxnRef=4466&vpc_OrderInfo=255s353&vpc_Command=pay&vpc_Currency=GBP&vpc_Merchant=ETZ001&vpc_Locale=en_AU&vpc_ReturnURL=https%3A%2F%2Funifiedcallbacks.com%2Fcorporateclbkservice%2Fcallback%2Fqr&vpc_SecureHash=D425374E5B303A7DE48938253EDAA3CE26B49C8BD0D6FF32592ED445F5FB5ECF&vpc_SecureHashType=SHA256',
    },
};

exports.momoPayment = {
    message: 'OK',
    data: {
        response_code: '200',
        response_message: 'success',
        response_content: {
            responseCode: '0000',
            transactionRef: 'MMOMODR1910259929503',
            responseMessage: 'Transaction accepted',
        },
    },
};

exports.merchantCategoryCode = {
    message: 'OK',
    data: {
        headerRequest: {
            requestId: '123344',
            affiliateCode: 'EGH',
            requestToken: '/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV',
            sourceCode: 'ECOBANK_QR_API',
            sourceChannelId: 'KANZAN',
            requestType: 'CREATE_MERCHANT',
        },
        mcc: [
            {
                mcc: '3354',
                mccName: 'Action Auto Rental',
            },
            {
                mcc: '3441',
                mccName: 'Advantage Rent-A-Car',
            },
            {
                mcc: '3420',
                mccName: 'Ansa International',
            },
        ],
    },
};

exports.merchantQrCreation = {

};
