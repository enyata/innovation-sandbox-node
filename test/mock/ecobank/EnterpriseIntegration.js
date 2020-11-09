const faker = require('faker');

exports.data = {
    sandbox_key: faker.random.alphaNumeric(),
    request_source_code: faker.random.alphaNumeric(),
    client_secret: faker.random.alphaNumeric(),
    client_id: faker.random.alphaNumeric(),
    request_token: faker.random.alphaNumeric(),
    host: faker.internet.url(),
    'content-type': 'application/json',
    generateToken: {
        payload: {
            sourceCode: 'W3S',
            affiliateCode: faker.random.alphaNumeric(),
            transactionDescription: faker.random.alphaNumeric(),
            amount: faker.random.number(),
            accountNo: faker.random.alphaNumeric(),
            ccy: faker.random.alphaNumeric(),
            accountType: faker.random.alphaNumeric(),
            senderName: faker.random.alphaNumeric(),
            senderMobileNo: '',
            senderId: '',
            beneficiaryName: faker.random.alphaNumeric(),
            beneficiaryMobileNo: faker.random.alphaNumeric(),
        },
    },
    nameInquiry: {
        payload: {
            affiliateCode: faker.random.alphaNumeric(),
            sourceCode: faker.random.alphaNumeric(),
            accountNo: faker.random.alphaNumeric(),
        },
    },
    fetchAccountBalance: {
        payload: {
            affiliateCode: faker.random.alphaNumeric(),
            sourceCode: faker.random.alphaNumeric(),
            accountNo: faker.random.alphaNumeric(),
        },
    },
    transferFund: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                transferType: '',
                requestId: faker.random.alphaNumeric(),
                sourceIp: faker.random.alphaNumeric(),
            },
            transactionDetails: {
                externalRefNo: faker.random.alphaNumeric(),
                paymentReferenceNo: faker.random.alphaNumeric(),
                amount: faker.random.number(),
                currency: faker.random.alphaNumeric(),
                narration: faker.random.alphaNumeric(),
                transactionDate: faker.random.alphaNumeric(),
                beneficiary: {
                    accountName: faker.random.alphaNumeric(),
                    bankCode: faker.random.alphaNumeric(),
                    accountNo: faker.random.alphaNumeric(),
                    accountType: faker.random.alphaNumeric(),
                },
            },
        },
    },
    checkTransactionStatus: {
        payload: {
            affiliateCode: faker.random.alphaNumeric(),
            sourceCode: faker.random.alphaNumeric(),
            accountNo: faker.random.alphaNumeric(),
            branchCode: faker.random.alphaNumeric(),
        },
    },
    agentNameInquiry: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
            },
            accountNo: faker.random.alphaNumeric(),
            accountEntityCode: faker.random.alphaNumeric(),
        },
    },
    initiateReceiveCash: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: '',
                requestId: faker.random.alphaNumeric(),
                requestToken: '0207d674c7a05b3a4f5a01743f8',
                sourceIp: faker.random.alphaNumeric(),
            },
            testAnswer: 'TEST',
            sendExternalRef: faker.random.alphaNumeric(),
            referenceNumber: faker.random.alphaNumeric(),
            receiveType: 'CASH',
            receiveAccountNumber: faker.random.alphaNumeric(),
            agentCode: faker.random.alphaNumeric(),
            mobilePhone: faker.random.alphaNumeric(),
            firstName: faker.random.alphaNumeric(),
            lastName: faker.random.alphaNumeric(),
            emailAddress: faker.random.alphaNumeric(),
            dob: faker.random.alphaNumeric(),
            nationality: faker.random.alphaNumeric(),
            country: faker.random.alphaNumeric(),
            contactAddress: faker.random.alphaNumeric(),
            gender: faker.random.alphaNumeric(),
            title: faker.random.alphaNumeric(),
            identificationType: faker.random.alphaNumeric(),
            identificationNumber: faker.random.alphaNumeric(),
            issueDate: faker.random.alphaNumeric(),
            expireDate: faker.random.alphaNumeric(),
        },
    },
    completeReceiveForAgent: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: '',
                requestId: faker.random.alphaNumeric(),
                requestToken: '0207d674c7a05b3a4f5a01743f8',
                sourceIp: faker.random.alphaNumeric(),
            },
            testAnswer: 'TEST',
            sendExternalRef: faker.random.alphaNumeric(),
            referenceNumber: faker.random.alphaNumeric(),
            receiveType: 'TOACCOUNT',
            receiveAccountNumber: faker.random.alphaNumeric(),
            agentCode: faker.random.alphaNumeric(),
            mobilePhone: faker.random.alphaNumeric(),
            firstName: faker.random.alphaNumeric(),
            lastName: faker.random.alphaNumeric(),
            emailAddress: faker.random.alphaNumeric(),
            dob: faker.random.alphaNumeric(),
            nationality: faker.random.alphaNumeric(),
            country: faker.random.alphaNumeric(),
            contactAddress: faker.random.alphaNumeric(),
            gender: faker.random.alphaNumeric(),
            title: faker.random.alphaNumeric(),
            identificationType: faker.random.alphaNumeric(),
            identificationNumber: faker.random.alphaNumeric(),
            issueDate: faker.random.alphaNumeric(),
            expireDate: faker.random.alphaNumeric(),
        },
    },
    agentTransactionStatus: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                requestToken: '0207d674c7a05b3a4f5a01743f87f115ee30ea5e5aea22aa40b43aa001a6814a1c7357abeb7ba59a7c1033914c7cd680380f2a3436191d709f381af40db42cab',
            },
            tranRef: faker.random.alphaNumeric(),
        },
    },
    internationalNameInquiry: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
            },
            accountorMobileNo: faker.random.alphaNumeric(),
            accountorMobileType: faker.random.alphaNumeric(),
            accountEntityCode: faker.random.alphaNumeric(),
        },
    },
    postTransfer: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
            },
            transactionDetails: {
                tranRef: faker.random.alphaNumeric(),
                sendAmount: faker.random.number(),
                sendCurrency: faker.random.alphaNumeric(),
                sendCountry: faker.random.alphaNumeric(),
                exchangeRate: faker.random.number(),
                receiveAmount: faker.random.number(),
                destinationCurrency: faker.random.alphaNumeric(),
                destinationCountry: faker.random.alphaNumeric(),
                deliveryMethod: faker.random.alphaNumeric(),
                tranSecret: faker.random.alphaNumeric(),
                secretAnswer: faker.random.alphaNumeric(),
                tranReason: faker.random.alphaNumeric(),
                tranNarration: faker.random.alphaNumeric(),
                sender: {
                    firstName: faker.random.alphaNumeric(),
                    lastName: faker.random.alphaNumeric(),
                    idNumber: faker.random.alphaNumeric(),
                    idType: faker.random.alphaNumeric(),
                    idIssueDate: '',
                    idExpiryDate: '',
                    nationality: '',
                    phoneNumber: faker.random.alphaNumeric(),
                    email: faker.random.alphaNumeric(),
                    address: '',
                    countryOfResidence: faker.random.alphaNumeric(),
                    accountNumber: faker.random.alphaNumeric(),
                },
                beneficiary: {
                    firstName: faker.random.alphaNumeric(),
                    lastName: faker.random.alphaNumeric(),
                    beneficiaryName: faker.random.alphaNumeric(),
                    idNumber: faker.random.alphaNumeric(),
                    idType: faker.random.alphaNumeric(),
                    idIssueDate: '',
                    idExpiryDate: '',
                    nationality: '',
                    phoneNumber: faker.random.alphaNumeric(),
                    email: faker.random.alphaNumeric(),
                    address: '',
                    countryOfResidence: faker.random.alphaNumeric(),
                    bankCode: faker.random.alphaNumeric(),
                    accountType: faker.random.alphaNumeric(),
                    accountNumber: faker.random.alphaNumeric(),
                },
            },
        },
    },
    fetchFeesAndRate: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
            },
            rateandfees: {
                amount: faker.random.number(),
                amountType: faker.random.alphaNumeric(),
                sendCountry: faker.random.alphaNumeric(),
                sendCcy: faker.random.alphaNumeric(),
                receiveCountry: faker.random.alphaNumeric(),
                receiveCcy: faker.random.alphaNumeric(),
                deliveryMethod: '',
                tranType: '',
            },
        },
    },
    fetchInstitutionList: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
            },
            destinationCountry: faker.random.alphaNumeric(),
        },
    },
    internationalTransactionStatus: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
            },
            sendAccountNo: faker.random.alphaNumeric(),
            externalRefNo: faker.random.alphaNumeric(),
        },
    },
    fetchRate: {
        payload: {
            hostHeaderInfo: {
                partnerId: faker.random.alphaNumeric(),
                countryCode: faker.random.alphaNumeric(),
                requestId: faker.random.alphaNumeric(),
            },
            rate: {
                amount: faker.random.number(),
                amountType: faker.random.alphaNumeric(),
                sendCountry: faker.random.alphaNumeric(),
                sendCcy: faker.random.alphaNumeric(),
                receiveCountry: faker.random.alphaNumeric(),
                receiveCcy: faker.random.alphaNumeric(),
                deliveryMethod: '',
                tranType: '',
            },
        },
    },
};

exports.generateToken = {
    message: 'OK',
    data: {
        sourceCode: 'W3S',
        requestId: '10001',
        affiliateCode: 'EGH',
        responseCode: '000',
        responseMessage: 'SUCCESS',
        token: '123456789012',
        systemRefNo: 'CATM601703786122',
        expiryDate: '2020-01-31',
    },
};

exports.nameInquiry = {
    message: 'OK',
    data: {
        responseCode: '000',
        responseMessage: 'SUCCESS',
        accountName: 'EBENEZER ASAMOAH-BEDIAKO',
        accountNo: '1441000302953',
        affiliateCode: 'EGH',
    },
};

exports.fetchAccountBalance = {
    message: 'OK',
    data: {
        accountStatus: 'ACTIVE',
        accountClass: 'GHSAIN',
        accountName: 'EBENEZER ASAMOAH-BEDIAKO',
        accountNo: '1441000302953',
        accountType: 'S',
        accrCr: 0,
        accrDr: 0,
        affiliateCode: 'EGH',
        availableBalance: 304727.96,
        blockedAmount: 0,
        branchCode: 'H01',
        currencyCode: 'GHS',
        currentBalance: 304727.96,
        openingBalance: 304727.96,
        customerId: '410315313',
        mtdToVCR: 0,
        mtdToVDR: 0,
        subLimit: 0,
        todLimit: 0,
        transactionFlag: 'N',
        udf1: null,
        udf2: '1441000302953',
        customerType: 'I',
        identityType: 'NATIONAL_DRIVER_LIC',
        identityValue: 'ASAM090884GR01',
        telephone: '233244368890,233244368890',
        phone: null,
        email: 'eben.asamoah7@gmail.com',
        country: 'GH',
        city: 'ACCRA',
        address: 'P O BOX KB 253KORLE BU',
        accountOfficer: null,
        alternateAccountNo: '0013014424412801',
        ccy: 'GHS',
        responseCode: '000',
        responseMessage: 'SUCCESS',
    },
};

exports.transferFund = {
    message: 'OK',
    data: {
        externalRefNo: '627034220705508',
        paymentReferenceNo: '627034220705508',
        cbaReferenceNo: 'ZEXA9900022818',
        responseCode: '000',
        responseMessage: 'SUCCESS',
    },
};

exports.checkTransactionStatus = {
    message: 'OK',
    data: {
        responseCode: '000',
        responseMessage: 'SUCCESS',
        accountNo: '1441000302953',
        frozen: 'N',
        dormant: 'N',
        postAllowed: 'Y',
        postNoDebit: 'N',
        postNoCredit: 'N',
    },
};

exports.agentNameInquiry = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'APIGHA',
            requestId: '33TF022217299',
            responseCode: '000',
            responseMessage: 'SUCCESS',
        },
        productLists: [
            {
                productCode: 'CASHTOACCT',
                productDesc: 'CASH TO ACCOUNT',
            },
            {
                productCode: 'CASHTOCASH',
                productDesc: 'CASH TO CASH',
            },
        ],
        affiliateList: [
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK BENIN',
                affiliateId: '961',
                countryCode: 'BJ',
                currency: 'XOF',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK BURKINA FASO',
                affiliateId: '962',
                countryCode: 'BF',
                currency: 'XOF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK BURUNDI',
                affiliateId: '963',
                countryCode: 'BI',
                currency: 'USD',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK CAMEROON',
                affiliateId: '128',
                countryCode: 'CM',
                currency: 'XAF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK CAPE VERDE',
                affiliateId: '964',
                countryCode: 'CV',
                currency: 'CVE',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK CENTRAL AFRICA',
                affiliateId: '965',
                countryCode: 'CF',
                currency: 'XAF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK CHAD',
                affiliateId: '966',
                countryCode: 'TD',
                currency: 'XAF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK CONGO BRAZZAVILLE',
                affiliateId: '967',
                countryCode: 'CG',
                currency: 'XAF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK CONGO DR',
                affiliateId: '981',
                countryCode: 'CD',
                currency: 'USD',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK EQUATORIAL GUINEA',
                affiliateId: '973',
                countryCode: 'GQ',
                currency: 'XAF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK GABON',
                affiliateId: '969',
                countryCode: 'GA',
                currency: 'XAF',
            },
            {
                affiliateCluster: '2',
                affiliateDesc: 'ECOBANK GAMBIA',
                affiliateId: '970',
                countryCode: 'GM',
                currency: 'GMD',
            },
            {
                affiliateCluster: '2',
                affiliateDesc: 'ECOBANK GHANA',
                affiliateId: '102',
                countryCode: 'GH',
                currency: 'GHS',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK GUINEA BISSAU',
                affiliateId: '971',
                countryCode: 'GW',
                currency: 'XOF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK GUINEA CONAKRY',
                affiliateId: '972',
                countryCode: 'GN',
                currency: 'GNF',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK IVORY COAST',
                affiliateId: '968',
                countryCode: 'CI',
                currency: 'XOF',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK KENYA',
                affiliateId: '974',
                countryCode: 'KE',
                currency: 'KES',
            },
            {
                affiliateCluster: '2',
                affiliateDesc: 'ECOBANK LIBERIA',
                affiliateId: '975',
                countryCode: 'LR',
                currency: 'USD',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK MALAWI',
                affiliateId: '2201',
                countryCode: 'MW',
                currency: 'MWK',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK MALI',
                affiliateId: '2199',
                countryCode: 'ML',
                currency: 'XOF',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK MOZAMBIQUE',
                affiliateId: '978',
                countryCode: 'MZ',
                currency: 'MZN',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK NIGER',
                affiliateId: '2205',
                countryCode: 'NE',
                currency: 'XOF',
            },
            {
                affiliateCluster: '4',
                affiliateDesc: 'ECOBANK NIGERIA',
                affiliateId: '980',
                countryCode: 'NG',
                currency: 'NGN',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK RWANDA',
                affiliateId: '982',
                countryCode: 'RW',
                currency: 'RWF',
            },
            {
                affiliateCluster: '3',
                affiliateDesc: 'ECOBANK SAO TOME',
                affiliateId: '983',
                countryCode: 'ST',
                currency: 'STN',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK SENEGAL',
                affiliateId: '984',
                countryCode: 'SN',
                currency: 'XOF',
            },
            {
                affiliateCluster: '2',
                affiliateDesc: 'ECOBANK SIERRA LEONE',
                affiliateId: '985',
                countryCode: 'SL',
                currency: 'SLL',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK SOUTH SUDAN',
                affiliateId: '986',
                countryCode: 'SD',
                currency: 'USD',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK TANZANIA',
                affiliateId: '987',
                countryCode: 'TZ',
                currency: 'TZS',
            },
            {
                affiliateCluster: '1',
                affiliateDesc: 'ECOBANK TOGO',
                affiliateId: '988',
                countryCode: 'TG',
                currency: 'XOF',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK UGANDA',
                affiliateId: '989',
                countryCode: 'UG',
                currency: 'UGX',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK ZAMBIA',
                affiliateId: '990',
                countryCode: 'ZM',
                currency: 'ZMW',
            },
            {
                affiliateCluster: '5',
                affiliateDesc: 'ECOBANK ZIMBABWE',
                affiliateId: '991',
                countryCode: 'ZW',
                currency: 'USD',
            },
            {
                affiliateCluster: '2',
                affiliateDesc: 'EPROCESS INTERNATIONAL',
                affiliateId: '81',
                countryCode: 'PI',
                currency: 'GHS',
            },
        ],
    },
};

exports.initiateReceiveCash = {
    message: 'OK',
    data: {
        responseMessage: 'SUCCESS',
    },
};

exports.completeReceiveForAgent = {
    message: 'OK',
    data: {
        responseMessage: 'SUCCESS',
    },
};

exports.agentTransactionStatus = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'LUMO',
            requestId: '33TF022217299',
            responseCode: '000',
            responseMessage: 'SUCCESS',
        },
        status: {
            cbaReferenceNo: 'RTC077263704073',
            charges: 0,
            deliveryMethod: 'ACCTOCASH',
            otherCharges: 0,
            rate: 65.13761,
            receiveAmount: 364.77,
            receiveDate: null,
            receiveRespCode: null,
            receiveResponseMsg: null,
            sendAmount: 5.6,
            sendRespCode: '000',
            sendRespMsg: 'TRANSACTION WAS SUCCESSFUL',
            sendStatus: null,
            totalAmount: 5.6,
            tranRef: 'RTC077263704073',
            transactionDate: '2019-11-12 12:11:02.0',
            vatAmount: 0,
        },
    },
};

exports.internationalNameInquiry = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: '001',
            requestId: '124454545',
            responseCode: '000',
            responseMessage: 'SUCCESS',
        },
        name: 'KOSSIVI SELOM AFELI',
        ccy: 'GHS',
        status: 'A',
        nameInquiryRef: 'REF2045',
    },
};

exports.postTransfer = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'MOBILEAPP',
            requestId: '33MG101746976',
            responseCode: '000',
            responseMessage: 'SUCCESS',
        },
        externalRefNo: 'ECO1234567890116',
        CBAReferenceNo: 'H01MCLG9937748272',
    },
};

exports.fetchFeesAndRate = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'MOBILEAPP',
            requestId: '33TF022217299',
            responseCode: '000',
            responseMessage: 'Success',
        },
        rateandfees: {
            sendCountry: 'USA',
            sendBankCode: 'EIN',
            destinationCountry: 'EGH',
            destinationBankCode: 'EGH',
            sendAmount: '500',
            receiveAmount: '162500.00',
            totalCharge: '0.0',
            exchRate: '325.0000',
            amountType: 'SENDAMT',
            deliveryTimeInHour: '1.0',
            chargePayer: 'SENDERPAY',
            transferCurrency: 'USD',
        },
    },
};

exports.fetchInstitutionList = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'MOBILEAPP',
            requestId: '33TF022217299',
            responseCode: '000',
            responseMessage: 'Success',
        },
        institutionLists: [
            {
                countryCode: 'EBJ',
                institutionId: 'AFICBJBJXXX',
                institutionName: 'Baic',
                institutionType: 'BANK',
            },
            {
                countryCode: 'EBJ',
                institutionId: 'AFRIBJBJXXX',
                institutionName: 'Bank Of Africa Benin',
                institutionType: 'BANK',
            },
            {
                countryCode: 'EBJ',
                institutionId: 'ATBJBJBJXXX',
                institutionName: 'Banque Atlantique Benin',
                institutionType: 'BANK',
            },
        ],
    },
};

exports.internationalTransactionStatus = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'MOBILEAPP',
            requestId: '33TF022217299',
            requestToken: '0207d674c7a05b3a4f5a01743f87f115ee30ea5e5aea22aa40b43aa001a6814a1c7357abeb7ba59a7c1033914c7cd6803 80f2a3436191d709f381af40db42cab',
            responseCode: '000',
            responseMessage: 'SUCCESS',
        },
        tranRef: 'RT0821595662',
        txnStatusCode: '000',
        txnStatusMessage: 'SUCCESS',
        cbaReferenceNo: '90761079',
        transactionDate: '2019-07-11 15:11:32.0',
    },
};

exports.fetchRate = {
    message: 'OK',
    data: {
        hostHeaderInfo: {
            partnerId: 'LXCHANGE',
            requestId: '33TF022217299',
            responseCode: '000',
            responseMessage: 'SUCCESS',
        },
        rate: {
            sendCountry: 'US',
            sendCcy: 'USD',
            receiveCountry: 'GH',
            receiveCcy: 'GHS',
            exchangeRate: '5.36',
        },
    },
};
