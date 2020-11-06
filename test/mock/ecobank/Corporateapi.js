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
        access_token: faker.random.alphaNumeric(),
    },
    dynamicQrPayment: {
        payload: {
            ec_terminal_id: faker.random.alphaNumeric(),
            ec_transaction_id: faker.random.alphaNumeric(),
            ec_amount: faker.random.number(),
            ec_charges: faker.random.alphaNumeric(),
            ec_fees_type: 'P',
            ec_ccy: faker.random.alphaNumeric(),
            ec_payment_method: 'QR',
            ec_customer_id: faker.random.alphaNumeric(),
            ec_customer_name: faker.random.alphaNumeric(),
            ec_mobile_no: faker.random.alphaNumeric(),
            ec_email: faker.random.alphaNumeric(),
            ec_payment_description: faker.random.alphaNumeric(),
            ec_product_code: faker.random.alphaNumeric(),
            ec_product_name: faker.random.alphaNumeric(),
            ec_transaction_date: faker.random.alphaNumeric(),
            ec_affiliate: faker.random.alphaNumeric(),
            ec_country_code: faker.random.alphaNumeric(),
            secureHash: faker.random.alphaNumeric(),
        },
        access_token: faker.random.alphaNumeric(),
    },
    statementGeneration: {
        payload: {
            affiliateCode: faker.random.alphaNumeric(),
            corporateId: 'UNIFIED',
            accountNumber: faker.random.alphaNumeric(),
            startDate: faker.random.alphaNumeric(),
            endDate: faker.random.alphaNumeric(),
            secureHash: faker.random.alphaNumeric(),
        },
        access_token: faker.random.alphaNumeric(),
    },
    payment: {
        payload: {
            paymentHeader: {
                clientid: faker.random.alphaNumeric(),
                batchsequence: faker.random.alphaNumeric(),
                batchamount: faker.random.number(),
                transactionamount: faker.random.number(),
                batchid: faker.random.alphaNumeric(),
                transactioncount: faker.random.number(),
                batchcount: faker.random.number(),
                transactionid: faker.random.alphaNumeric(),
                debittype: faker.random.alphaNumeric(),
                affiliateCode: faker.random.alphaNumeric(),
                totalbatches: faker.random.alphaNumeric(),
                execution_date: faker.random.alphaNumeric(),
            },
            extension: [
                {
                    request_id: faker.random.alphaNumeric(),
                    request_type: faker.random.alphaNumeric(),
                    param_list: [
                        {
                            key: 'billerCode',
                            value: faker.random.alphaNumeric(),
                        },
                        {
                            key: 'billRefNo',
                            value: faker.random.alphaNumeric(),
                        },
                        {
                            key: 'cbaRefNo',
                            value: '',
                        },
                        {
                            key: 'customerName',
                            value: faker.random.alphaNumeric(),
                        },
                        {
                            key: 'customerRefNo',
                            value: faker.random.alphaNumeric(),
                        },
                        {
                            key: 'productCode',
                            value: faker.random.alphaNumeric(),
                        },
                        {
                            key: 'formDataValue',
                            value: [
                                {
                                    fieldName: 'CONSIGNEE NAME',
                                    fieldValue: faker.random.alphaNumeric(),
                                },
                                {
                                    fieldName: 'DEPOSITORS NUMBER',
                                    fieldValue: faker.random.alphaNumeric(),
                                },
                                {
                                    fieldName: 'BILL OF LADING',
                                    fieldValue: faker.random.alphaNumeric(),
                                },
                            ],
                        },
                    ],
                    amount: faker.random.number(),
                    currency: faker.random.alphaNumeric(),
                    status: '',
                    rate_type: faker.random.alphaNumeric(),
                },
            ],
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
    message: 'OK',
    data: {
        response_code: '200',
        response_message: 'success',
        response_content: {
            headerResponse: {
                affiliateCode: 'EGH',
                requestId: '',
                responseCode: '000',
                responseMessage: 'Success',
                sourceCode: 'ECOBANK_QR_API',
            },
            merchantCode: '603043343',
            qrCodeBase64: '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',
            terminalId: '32631648',
            terminalName: 'UNIFIED KIDS SHOPPING ARCADE',
            secretKey: 'JG)kVCFPy*',
        },
        response_timestamp: '2019-11-15T09:35:06.045',
    },
};

exports.dynamicQrPayment = {
    message: 'OK',
    data: {
        response_code: '200',
        response_error: '',
        response_status: 'success',
        response_content: {
            dynamicQRBase64: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAI2ElEQVR42u3dUa7bOBREQe9/08kWAoTi7b6sA8yfXmxLZGkAQuLvjySV9HMKJAFLkoAlCViSBCxJApYkYEkSsCQJWJKAJUnAkiRgSQKWJAFLkoAlCViSBCxJApYkYEkSsCQJWJKAJUnAkiRgSQKWJAFLkoAlCViSBCxJwJIkYEkSsCQBS5KAJUnAkgQsSQLWP3+p3y/mv9O/439+7+nPmLpGjeMqaRykj3tgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWAVgJX3ulgGT9Lmnz1US5FvGPbCABSxgAQtYwAIWsIAFLGABC1jAAhawgAWs5WBNDfIbE/PGuUrHaQrAqTG0ZdwDC1jAAhawgAUsYAELWMACFrCABSxgAQtYwALWJ5/r/GUBfeMaJY0/YAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAqr1w6Y/1pK/CnT7Pm68RsIBlMgALWMACFrCABSxgAQtYwAIWsIAFLGAB6xOwkqC8sWLUiF36b0sak96HBSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAHr2glsnMCOc9wXNzg7PwMLWI4DFrCA5TjHAQtYwHIcsIAFLBPJccAC1vqSVg5v3BiSVqWmQLhxjQQsYAELWMACFrCABSxgAQtYwBKwgAUsYAHrk8mfNNjS30GVPtHT34eVNDamjgMWsIAFLGABC1jAAhawgAUsYAELWMACFrCAtXyVsHHSJL3fKP1xk6nflrRBSfrYABawgAUsYAELWMACFrCABSxgAQtYwAIWsIC1HKypAZ2+OULj+5c27+J9+txvhAhYwAIWsIAFLGABC1jAAhawgAUsYAELWMAC1kKcbqzwJO0gnP6Yy9R4aUQHWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawPpmYjY9pNG7KcPrf24Js0o0QWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawRjG5MVC3TJAbSEyBtQUTYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAGh28U4MofVJPbUyR/t6xqWu+ZUMMYAELWMACFrCABSxgAQtYwAIWsIAFLGABC1iLcDr9t1OreumDN31FNf1xohtjw87PwAIWsIAFLGABC1jAAhawgAUsYAELWMAC1oNgNQ7o9MExhfFrQN/AfeNjOMACFrCABSxgAQtYwAIWsIAFLGABC1jAAhawLgMzNbBuTLgtxzWe+/S/TbrRAAtYwAIWsIAFLGABC1jAAhawgAUsYAELWMAqAGtq8Dau4N24MSTtBp2EU9KO2FNjCFjAAhawgAUsYAELWMACFrCABSxgAQtYwAJWKVivPSKT/s6jpPOcBEfSe9GABSxgAQtYwAIWsIAFLGABC1jAAhawgAUsYAErblA2rtw07tTcCGX6+AMWsIAFLGABC1jAAhawgAUsYAELWMACFrCABaxPJvrmnYYbV5vSN2qY+n5JN29gAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWIvAatyAoXHFLQmEJKCnbpjpj2MBC1jAAhawgAUsYAELWMACFrCABSxgAQtYwCoFawrA9H9vy2MujatmW3a6bkcMWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAtaH6DTuPvzad0lCNumRoPTVYmABC1jAAhawgAUsYAELWMACFrCABSxgAQtYVglHV2mSNgvYvOp4A44b3znpJu99WMACFrCABSxgAQtYwAIWsIAFLGABC1jAAtZysJLev3T639vyuVvwnLoRJr3HrOp/PoAFLGABC1jAAhawgAUsYAELWMACFrCABSxg3V3dmHokY8sqYdL1nULxtfEHLGABC1jAAhawgAUsYAELWMACFrCABSxgAcsqYcUqYfrqVdJmBpsfkUm6oQMLWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAlbFhJsagDfO1ZaJNAXvFLLehwUsYAELWMACFrCABSxgAQtYwAIWsIAFLGABaxS7KRCSBvTpz5iaSFtWE7fclIEFLGABC1jAAhawgAUsYAELWMACFrCABSxgFaAzNdis3MzdGE5/xpaNQl5BDFjAAhawgAUsYAELWMACFrCABSxgAQtYwALWwom0ZZfipAmc9LdTN6nT4zlp/AELWMACFrCABSxgAQtYwAIWsIAFLGABC1jAKoBoajOIpM0qklaR0le+tly3G/MIWMACFrCABSxgAQtYwAIWsIAFLGABC1jAAtZysE5fpKkB3Xheks5p4w7bxiSwgAUsYAELWMACFrCABSxgAcuYBJbBASxgAaticiU9NpO0ocON35b0KEgSTlO7S0+dF2ABC1jAAhawgAUsYAELWMACFrCABSxgAQtYBWAlPbqRvto0hWzju8PS381lYwpgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWE82tdNw+rugGtFJ+n43bkjAAhawgAUsYAELWMACFrCABSxgAQtYwAIWsB4Eq3Hyp8PRiGLS+7AaH+/yaA6wgAUsYAELWMACFrCABSxgAQtYwAIWsIAFrNETnf6eps3nJQnjLe//2rgxBbCABSxgAcvEBBawgAUsYAELWMACFrCABSxgBVyQpBW8xom0+TvfQLbxES1gAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMCqfWdU487ASQM/6fem70LdHrCABSxgAQtYwAIWsIAFLGABC1jAAhawgAWsR8C68f1Of0bj5gjpG0403ghtQgEsYAELWMACFrCABSxgAQtYwAIWsIAFLGABq2K1qfG4dNg2/47T38UqIbCABSxgAQtYwPI7gAUsYAELWMACFrCABSxg/fcATNr52epQ50pu+jh9GTFgAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWJIELEnAkiRgSRKwJAFLkoAlScCSBCxJApYkAUsSsCQJWJIELEnAkiRgSRKwJAFLkoAlScCSBCxJApYkAUsSsCQJWJKA5RRIApYkAUsSsCQJWJIELEnAkiRgSRKwJAFLkoAlScCSBCxJSugvOU+u/Fp1rqQAAAAASUVORK5CYII=',
            dynamicQR: '00020101021202134729202421897041553263210106426952045416530340454032005802KE5912IPAY LIMITED6007NAIROBI62250308725288450509ECDYwe009630488BF',
            successURL: 'https://dev-ci-pda.gutotal.com/pda/masterpass/api/call-callback',
            failedURL: 'http://demo.albouritech.com/ecopaydemo/callback',
            responseCode: '000',
            responseMessage: 'Success',
            transactionAmount: '200',
            transactionDescription: 'PAYMENT FOR JUMIA SHOPPING',
        },
        response_info: 'Request was successful',
        response_time: '25-10-2019 13:33:39',
    },
};

exports.statementGeneration = {
    message: 'OK',
    data: {
        response_code: '200',
        response_message: 'success',
        response_content: [
            {
                narrative: 'MOBILE TRANSFER BD1441000820520-SA Xpress Account DT0209',
                trn_REF_NO: 'H75ZEXA1923800E0',
                value_DATE: '2019-09-02 00:00:00.0',
                ac_CCY: 'GHS',
                drcr_IND: 'CR',
                lcy_AMOUNT1: '10',
                paid_OUT: null,
                paid_IN: '10',
            },
            {
                narrative: 'MOBILE TRANSFER BD1441000820520-SA Xpress Account DT0209',
                trn_REF_NO: 'H75ZEXA1923800E2',
                value_DATE: '2019-09-02 00:00:00.0',
                ac_CCY: 'GHS',
                drcr_IND: 'CR',
                lcy_AMOUNT1: '10',
                paid_OUT: null,
                paid_IN: '10',
            },
        ],
        response_timestamp: '2019-11-15T22:08:16.541',
    },
};

exports.payment = {
    message: 'OK',
    data: {
        response_code: '200',
        response_message: 'success',
        response_content: 'Request received successfully',
        response_timestamp: '2020-07-19T16:39:49.685',
    },
};
