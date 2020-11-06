# INNOVATION SANDBOX

## INSTALL

```bash
$ npm install innovation-sandbox
```

## Require ECOBANK   Library

```javascript
const { ecobank } = require("innovation-sandbox");
```

## Required Credentials

Below is a list of required credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.


## Optional Credentials

Below is a list of optiional credentials.

### accept

This is mostly default to application/json except otherwise stated. It is used in the header

### content-type

It is used in the header. What it takes varies by API.

___

## *Token Generation([options])*

Generates token for merchant authentication and authorization

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *userId*


### *Password*

password used for registration

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### content-type

## ecobank.CorporateApi.generateAccessToken(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.generateAccessToken({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  accept: 'application/json',
  payload: {
    userId: 'any: string' || 'iamaunifieddev103',
    password: 'any:string'
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Card Payment([options])*

This call allows merchants to receive payments via debit and credit cards from customers.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *PaymentDetails*

Details of the payment

### *Request Id*

request_id

### *Product Code*

product_code

### *Amount*

Amount to be paid

### *Currency*

Currency type

### *Locale*

Location

### *Order Info*

Information about order

### *Return Url*

Link to return order

### *Merchant Details*

Information about merchant

### *Access Code*

Access Code 

### *Merchant Id*

Merchant Id

### *Secure Secret*

secure secret

### *Consumer Lab Key*

Your consumer Key

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.card(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.card({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: 'Your Access token',
  accept: 'application/json',
  payload: {
    "paymentDetails": {
        "requestId": "any:string",
        "productCode":"any:string",
        "amount": "any:string",
        "currency": 'any:string' || "GBP",
        "locale": "any:string" || "en_AU",
        "orderInfo": "any:string",
        "returnUrl": "any:string" || "https://unifiedcallbacks.com/corporateclbkservice/callback/qr"
    },
    "merchantDetails": {
        "accessCode": 'any:string' || "79742570",
        "merchantID": 'any:string' ||"ETZ001",
        "secureSecret": 'any:string' || "sdsffd"
    },
    'consumer_lab_key': 'any:string' || 'XT7zuounWNKXmbwdAR+qYhyQymRdsEUylXFZ'
},
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Momo Payment([options])*

Call allowing merchants to receive payments via customer wallet

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Affiliate Code*

Affiliate Code

### *Telco*

Telecommunication

### *Channel*

Channel

### *Token*

Token

### *Content*

content

### *Country Code*

Country code

### *Transaction Id*

transId

### *Product Code*

Product code

### *Sender Name*

sender name

### *Sender Account Number*

sender account number

### *Sender Phone Number*

sender phone number

### *Branch*

Branch

### *Transaction Reference*

Transaction reference 

### *Bank Reference*

Bank Reference

### *Receiver Phone Number*
Receiver phone number

### *Receiver First Name*

Receiver first name

### *Receiver Last Name*

Receiver last name

### *Receiver Email*

Receiver email

### *Receiver Bank*

Receiver bank

### *currency*

currency

### *Amount*

amount

### *Transaction Description*

transDesc

### *Transaction Type*

transType

### *Consumer Lab Key*

Your consumer Key

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.momoPayment(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.momoPayment({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: 'Your access token',
  accept: 'application/json',
  payload: {
    "affiliateCode": "any:string",
    "telco": "any:string",
    "channel": "UNIFIED",
    "token": "any:string" || "SBRC/3MJMGmz1WuHiRpmikk6SWgBj/Tt",
    "content": {
      "countryCode": 'any:string' || "GH",
      "transId": "any:string",
      "productCode": "any:string",
      "senderName": "any:string",
      "senderAccountNo": "any:string",
      "senderPhoneNumber": "any:string",
      "branch": "any:string",
      "transRef": "any:string",
      "bankref": "any:string",
      "receiverPhoneNumber": "any:string",
      "receiverFirstName": "any:string",
      "receiverLastName": "any:string",
      "receiverEmail": "",
      "receiverBank": "any:string",
      "currency": "any:string" || "GHS",
      "amount": "any:string"
      "transDesc": "any:string",
      "transType": "any:string"
    },
    'consumer_lab_key': "any:string" || 'XT7zuounWNKXmbwdAR+qYhyQymRdsEUylXFZ'
  },
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Merchant Category Code([options])*

Allows the merchant to identify itself to the industry it belongs to

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Request Id*

Request Id

### *affiliate Code*

Affiliate Code

### *Request Token*

requestToken

### *Source Code*

sourceCode

### *Source Channel Id*

sourceChannelId

### *Request Type*

request Type

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.merchantCategoryCode(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.merchantCategoryCode({
  sandbox_key: "Your sandbox key"
  "content-type": "application/json",
  access_token: 'Your access token',
  accept: 'application/json',
  payload: {
    "requestId": "123344",
    "affiliateCode": "EGH",
    "requestToken": "/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV",
    "sourceCode": "ecobank_QR_API",
    "sourceChannelId": "KANZAN",
    "requestType": "CREATE_MERCHANT"
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Merchant Qr Creation([options])*

 Allows merchants to register and be assigned a terminal to receive Qr payments.

 ### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Header Request*

headerRequest

### *Request Id*

requestId

### *Affiliate Code*

affiliateCode

### *Request Token*

requestToken

### *Source Code*

sourceCode

### *Source Channel Id*

sourceChannelId

### *Request Type*

requestType

### *Merchant Address*

merchantAddress

### *Merchant Name*

merchantName

### *Account Number*

accountNumber

### *Terminal Name*

terminalName

### *Mobile Number*

mobileNumber

### *Email*

email

### *Area*

area

### *City*

city

### *Referral Code*

referralCode

### *Merchant Creation code*

mcc

### *Dynamic Qr*

dynamicQr

### *Call Back Url*

callBackUrl

### *Consumer Lab Key*

Your consumer Key

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.merchantQrCreation(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.merchantQrCreation({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: 'Your access token',
  accept: 'application/json',
  payload: {
    "headerRequest": {
      "requestId": "",
      "affiliateCode": "any:string",
      "requestToken": "any:string" || "/4mZF42iofzo7BDu0YtbwY6swLwk46Z91xItybhYwQGFpaZNOpsznL/9fca5LkeV",
      "sourceCode": "any:string" || "ECOBANK_QR_API",
      "sourceChannelId": "any:string" || "KANZAN",
      "requestType": "CREATE_MERCHANT"
    },
    "merchantAddress": "any:string" || "123ERT",
    "merchantName": "any:string" || "UNIFIED SHOPPING CENTER",
    "accountNumber": "any:string",
    "terminalName": "any:string",
    "mobileNumber": "any:string",
    "email": "any:string",
    "area": "any:string",
    "city": "any:string",
    "referralCode": "any:string",
    "mcc": "0000",
    "dynamicQr": "Y",
    "callBackUrl": "any:string",
    'consumer_lab_key': "any:string" || 'XT7zuounWNKXmbwdAR+qYhyQymRdsEUylXFZ'
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Dynamic Qr Payment([options])*

Call to generate EcobankPay Dynamic Qr

 ### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Ec Terminal Id*

ec_terminal_id

### *EC Transaction Id*

ec_transaction_id

### *Ec Amount*

ec_amount

### *Ec Charges*

ec_charges

### *Ec Fees Type*

ec_fees_type

### *Ec Ccy*

ec_ccy

### *Ec Payment Method*

ec_payment_method

### *Ec Customer Id*

ec_customer_id

### *Ec Customer Name*

ec_customer_name

### * Ec Mobile Number*

ec_mobile_no

### *Ec Email*

ec_email

### *Ec Payment Description*

ec_payment_description

### *Ec Product Code*

ec_product_code

### *Ec Product Name*

ec_product_name

### *Ec Transaction Date*

ec_transaction_date

### *Ec Affiliate*

ec_affiliate

### *Ec Country Code*

ec_country_code

### *Consumer Lab Key*

Your consumer Key

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.dynamicQrPayment(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example


```javascript

ecobank.CorporateApi.dynamicQrPayment({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: 'Your access token',
  accept: 'application/json',
  payload: {
    "ec_terminal_id": "20207038",
    "ec_transaction_id": "any:string",
    "ec_amount": "any:number",
    "ec_charges": "any:string",
    "ec_fees_type": "P",
    "ec_ccy": "KES",
    "ec_payment_method": "any:string" || "QR",
    "ec_customer_id":  "any:string" || "OK1337/09",
    "ec_customer_name":  "any:string",
    "ec_mobile_no":  "any:string",
    "ec_email":  "any:string",
    "ec_payment_description": "any:string",
    "ec_product_code": "any:string",
    "ec_product_name": "any:string",
    "ec_transaction_date": "any:string",
    "ec_affiliate": "any:string",
    "ec_country_code": "123",
    'consumer_lab_key': "any:string" || 'XT7zuounWNKXmbwdAR+qYhyQymRdsEUylXFZ'
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Statement Generation([options])*

Merchant are able to view their Statements

 ### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Affiliate Code*

affiliateCode

### *Corporate Id*

corporateId

### *Account Number*

accountNumber

### *Start Date*

startDate

### *End Date*

endDate

### *Consumer Lab Key*

Your consumer Key

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.statementGeneration(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.statementGeneration({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: 'your access key',
  accept: 'application/json',
  payload: {
    "affiliateCode": 'any:string' || "EGH",
    "corporateId": 'any:string' || "UNIFIED",
    "accountNumber": 'any:string',
    "startDate": 'any:string',
    "endDate": 'any:string',
    'consumer_lab_key': 'any:string' || 'XT7zuounWNKXmbwdAR+qYhyQymRdsEUylXFZ'
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Payment([options])*

Ecobank Parthners use this moudle to make payment to thier customers

Merchant are able to view their Statements

 ### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Payment Header*

payment Header

### *Client   Id*

clientid

### *Batch Sequence*

batchsequence

### *Batch Amount*

batchamount

### *transaction amount*

transaction amount

### *batch Id*

batchid

### *Transaction Count*

transactioncount

### *batch Count*

batch Count

### *transaction Id*

transaction Id

### *Debit Type*

debittype

### *Affiliate Code*

affiliateCode

### *Total Batches*

total Batches

### *Execution Date*

execution_date

### *extension*

extension

### *Request Id*

request_id

### *Request Type*

request_type

### *Param List*

param_list

### *Amount*

amount

### *Currency*

currency

### *Status*

status

### *Rate Type*

 rate_type

 ### *Consumer Lab Key*

Your consumer Key

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *Access Token*

Your access token

### content-type

### ecobank.CorporateApi.payment(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.payment({
  sandbox_key: "Your sandbox Key",
  "content-type": "application/json",
  accept: 'application/json',
  payload: {
    paymentHeader: {
      "clientid": 'any:string' || "EGHTelc000043",
      "batchsequence": 'any:string' || "1",
      "batchamount": 'any:number' || 170,
      "transactionamount": 'any:number' || 170,
      "batchid": 'any:string' || "EG1593490",
      "transactioncount": 'any:number' || 7,
      "batchcount": 'any:number' || 7,
      "transactionid": 'any:string' || "E12T443308",
      "debittype": 'any:string',
      "affiliateCode": 'any:string',
      "totalbatches": 'any:string',
      "execution_date": 'any:string'
    },
    extension: [
      {
        "request_id": "555555",
        "request_type": "BILLPAYMENT",
        param_list: [
          {
            key: 'billerCode',
            value: 'any:string'
          },
          {
            key: 'billRefNo',
            value: 'any:string'
          },
          {
            key: 'cbaRefNo',
            value: ''
          },
          {
            key: 'customerName',
            value: 'any:string'
          },
          {
            key: 'customerRefNo',
            value: 'any:string'
          },
          {
            key: 'productCode',
            value: 'any:string'
          },
          {
            key: 'formDataValue',
            value: [
              {
                fieldName: 'CONSIGNEE NAME',
                fieldValue: 'any:string'
              },
              {
                fieldName: 'DEPOSITORS NUMBER',
                fieldValue: 'any:string'
              },
              {
                fieldName: 'BILL OF LADING',
                fieldValue: 'any:string'
              }
            ]
          }
        ],
        "amount": 'any:number',
        "currency": 'any:string' || "GHS",
        "status": "",
        "rate_type": 'any:string'
      }
    ],
    'consumer_lab_key': 'any:string' || 'XT7zuounWNKXmbwdAR+qYhyQymRdsEUylXFZ'
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___
