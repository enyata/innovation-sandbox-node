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

## ecobank.CorporateApi.generateToken(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.generateToken({
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

### ecobank.CorporateApi.cardPayment(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.cardPayment({
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

### ecobank.CorporateApi.mcc(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.mcc({
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

### ecobank.CorporateApi.createQR(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.createQR({
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

### ecobank.CorporateApi.QR(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example


```javascript

ecobank.CorporateApi.QR({
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

### ecobank.CorporateApi.statement(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.CorporateApi.statement({
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

## *Airtime Billers([options])*

Get All airtime billers

 ### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Header*

Header

### *Aff Code*

affcode

### *Request Id*

requestId

### *Request Token*

requestToken

### *Source Code*

sourceCode

### *Source Ip*

sourceIp

### *Channel*

channel

### *Request Type*

requesttype

### *Agent  Code*

agentcode

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### content-type

### ecobank.AgencyBanking.airtimeBillers(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.AgencyBanking.airtimeBillers({
  sandbox_key: "Your Sandbox Key",
    "content-type": "application/json",
    accept: 'application/json',
    payload: { 
      "header": {
        "affcode": "any:string",
        "requestId": "any:string",
        "requestToken": "any:string" ||"ab104d4f4fbff91be354a49f26ab8991610c4174233447ef4101f61f09879371e0b8d2ae8eb3edabe45cb30be88ec2390deeeab6607bbbd8faa5b7c0fb82a35b",
        "sourceCode": "any:string",
        "sourceIp": "any:string" || "1.2.3.4",
        "channel": "any:string" || "MOBILE",
        "requesttype": "VALIDATE",
        "agentcode": "any:string"
      }
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Buy Airtime[options])*

Send Airtime purchase request

 ### options

The module accepts options as objects of key-value.

## payload

Request Body

### *Biller Code*

billercode

### *Mobile Number*

mobileno

### *Amount*

amount

### *Transaction Token*

transactiontoken

### *Currency*

ccy

### *Header*

header

### *Aff Code*

affcode

### *Request Id*

requestId

### *Request Token*

requestToken

### *Source Code*

sourceCode

### *Source Ip*

sourceIp

### *Channel*

channel

### *Request Type*

requesttype

### *Agent Code*

agentcode

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### content-type

### ecobank.AgencyBanking.buyAirtime(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.AgencyBanking.buyAirtime({
  sandbox_key: "e59e48adcd59a772b5e2841631413232",
    "content-type": "application/json",
    accept: 'application/json',
    payload:{
      "billercode": "MTN GHANA",
      "mobileno": "0246108878",
      "amount": "20", 
      "transactiontoken": "488bdead4dae96d90a6b170992d8335cf56e8baa1ce0887ab72f917b86668f7477331b8f8e1702a576d9cf58aa9cc2505c3d31fac93cd5c6806fd2efe9316634",
      "ccy": "GHC",
      "header": {
        "affcode": "EGH",
        "requestId": "123456",
        "requestToken": "ab104d4f4fbff91be354a49f26ab8991610c4174233447ef4101f61f09879371e0b8d2ae8eb3edabe45cb30be88ec2390deeeab6607bbbd8faa5b7c0fb82a35b",
        "sourceCode": "TEST",
        "sourceIp": "1.2.3.4",
        "channel": "MOBILE",
        "requesttype": "VALIDATE",
        "agentcode": "50420442"
      }
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Get Account Balance[options])*

Send Airtime purchase request

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Header*

Header

### *Aff code*

affcode

### *Request Id*

requestId

### *Request Token*

requestToken

### *Source Code*

sourceCode

### *Source Ip*

sourceIp

### *Channel*

channel

### *Request Type*

requesttype

### *Agent Code*

agentcode

### *Transaction Token*

transactiontoken

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### content-type

### ecobank.AgencyBanking.balance(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.AgencyBanking.balance({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  accept: 'application/json',
  payload: {
    "header": {
      "affcode": "any:string",
      "requestId": "any:string",
      "requestToken": "any:string" || "f5b6003ebd6a25e8e837ff7fca4a7ee42f22f0f3b8313c5a9e6ac4cb0f250c55e30111a330c6fc46a1067176b3c4baea2f6317ce99af5e2a39d11125552e6bdb",
      "sourceCode": "any:string",
      "sourceIp": "any:string" || "10.8.245.9",
      "channel": "any:string" || "API",
      "requesttype": "VALIDATE",
      "agentcode": "any:string"
    },
    "transactiontoken": "any:string" || "dfd9f14d926b54c2bf06b197969624a575e84727e67fbeea6746788b05e7afa838e0d60c48fb5d9825cbece019ef52f57853dbad543bf233e4d43a5cf2a5e74e"
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Customer_Acc_Details[options])*

Get Customer account info for Cash deposit

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Account Number*

accountno

### *Header*

Header

### *Aff Code*

affcode

### *Request Id*

requestId

### *Request Token*

requestToken

### *Source Code*

sourceCode

### *Source Ip*

sourceIp

### *Channel*

channel

### *Request Type*

requesttype

### *Agent Code*

agentcode

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### content-type

### ecobank.AgencyBanking.customerDetails({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript


ecobank.AgencyBanking.customerDetails({
  sandbox_key: "Your sandbox Key",
  "content-type": "application/json",
  accept: 'application/json',
  payload:{
    "accountno": "any:string", 
    "header": {
      "affcode": "any:string",
      "requestId": "any:string",
      "requestToken": "any:string" ||"b3ea5445f84d8464c4e03b43f994e7ee36655144622f22b296ec7b47979460b91ad059199b4b5dcc1d9851e3a04edd9d250119ee295b7b69ef709c791e779bb6",
      "sourceCode": "any:string",
      "sourceIp": "any:string",
      "channel": "MOBILE",
      "requesttype": "VALIDATE",
      "agentcode": "any:string"
    }
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *initiate Receive For Agent(Cash Receipt)(options])*

Used by agent to initiate receive cash for beneficiary

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Agent Code*

agentCode

### *Test Answer*

testAnswer

### *Send External Reference*

sendExternalRef

### *Reference Number*

referenceNumber

### *Client ID*

clientID

### *Module Value*

moduleValue

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.RapidTransfer.initiateAgentReceive({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript


ecobank.RapidTransfer.initiateAgentReceive({
  sandbox_key: "your sandbox Key",
 "content-type": "application/json",
 request_source_code: 'NIBBS' ,
 client_secret: "any:string" || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
 client_id: "any:string" || 'fadc5e4191e043599238d01fd0d51cbc',
 request_token: "any:string" ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
 payload: {
   "agentCode": "any:string",
   "testAnswer": "TEST",
   "sendExternalRef": "any:string",
   "referenceNumber": "any:string",
   "clientID": "any:string",
   "moduleValue": "any:string" || "4df9bf9be716bccf6b61d64851311dbe501c30ad81daa4e05353ed6ad4df93e7fb15cf3ea9d96cbf22c50662c537d9fab7b4d43c393f16664ea308c5071a66d7"
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Receive Complete(options])*

Used to complete an initiated receive transaction

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Send External Reference*

sendExternalRef

### *Test Answer*

testAnswer

### *Reference Number*

referenceNumber

### *ClientID*

clientID

### *Module Value*

moduleValue

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.RapidTransfer.completeReceive({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript


ecobank.RapidTransfer.completeReceive({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  request_source_code: "any;string" || 'NIBBS' ,
  client_secret: "any;string" || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
  client_id: "any;string" || 'fadc5e4191e043599238d01fd0d51cbc',
  request_token: "any;string" ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
  payload: {
    "sendExternalRef": "any;string",
    "testAnswer": "any;string",
    "referenceNumber": "any;string",
    "clientID": "any;string",
    "moduleValue": "any;string" ||"6b5ed44e97574a6de37209597ab39426ff6bc6cee521472a426af257f2a6aeacff03cf6eddb2e94d11e52c70e92fff90ed25d8a299c9b1cc277c96848ebb8946"
  },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Generate Xpress Token(options])*

This allows a user to generate a token that allows money to be redeemed from an Ecobank ATM terminal anywhere in the country.

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Source Code*

sourceCode

### *Affiliate Code*

AffiliateCode

### *Transaction Description*

transactionDescription

### *Amount*

amount

### *Account Number*

accountNo

### *Currency*

ccy

### *Account Type*

accountType

### *Sender Name*

senderName

### *Sender Mobile Number*

senderMobileNo

### *Sender Id*

senderId

### *Beneficiary Name*

beneficiaryName

### *Beneficiary Mobile Number*

beneficiaryMobileNo

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### content-type

### ecobank.EnterpriseIntegration.generateToken({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.generateToken({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string'  ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "sourceCode": 'any:string' ,
     "affiliateCode": 'any:string' ,
     "transactionDescription": "Test Data",
     "amount": 'any:number',
     "accountNo": 'any:string' ,
     "ccy": 'any:string' ,
     "accountType": 'any:string' ,
     "senderName": 'any:string' ,
     "senderMobileNo":"",
     "senderId": "",
     "beneficiaryName": 'any:string' ,
     "beneficiaryMobileNo": 'any:string' 
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## * Name inquiry(options])*

Verify the name of an account holder at Ecobank

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Affiliate Code*

affiliateCode

### *Source Code*

sourceCode

### *Account Number*

accountNo

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### content-type

### ecobank.EnterpriseIntegration.accountNameInquiry({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.accountNameInquiry({
  sandbox_key: "e59e48adcd59a772b5e2841631413232",
  "content-type": "application/json",
   client_secret: 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   client_id: 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: '7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "affiliateCode": "ENG",
     "sourceCode": "PALMPAY",
     "accountNo": "1441000302953"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## * fetch account balance(options])*

This allows a user to generate a token that allows money to be redeemed from an Ecobank ATM terminal anywhere in the country.

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Affiliate Code*

affiliateCode

### *Source Code*

sourceCode

### *Account Number*

accountNo

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### content-type

### ecobank.EnterpriseIntegration.balance({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.balance({
  sandbox_key: "your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "affiliateCode": "any:string",
     "sourceCode": "any:string",
     "accountNo": "1441000302953"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## * Transfer Funds(options])*

The transfer endpoint allows a 3rd party fintech to post the below transactions

1 Wallet 2 Bank (W2B)

2 Bank to Wallet (B2W)

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Transfer Type*

transferType

### *Request Id*

requestId

### *Source Ip*

sourceIp

### *Transaction Details*

transactionDetails

### *External Reference Number*

externalRefNo

### *Amount*

amount

### *Currency*

currency 

### *Narration*

narration

### *Transaction Date*

transactionDate

### *beneficiary*

beneficiary

### *Account Name*

accountName

### *BankCode*

bankCode

### *Account Number*

accountNo

### *Account Type*

accountType

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### content-type

### ecobank.EnterpriseIntegration.transfer({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.transfer({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' || '7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload:  {
     "hostHeaderInfo": {
       "partnerId": 'any:string',
       "countryCode": 'any:string' || "NG",
       "transferType": "",
       "requestId": 'any:string',
       "sourceIp": 'any:string'
      },
      "transactionDetails": {
        "externalRefNo": 'any:string',
        "paymentReferenceNo": 'any:string',
        "amount": 1,
        "currency": 'any:string' || "NGN",
        "narration": 'any:string',
        "transactionDate": 'any:string',
        "beneficiary": {
          "accountName": 'any:string',
          "bankCode": 'any:string',
          "accountNo": 'any:string',
          "accountType": 'any:string'
        }
      }
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Check transaction status(options])*

Check the validity of an Ecobank account number.

frozen - account is frozen.

postNoDebit - possible values (Y/N). Y means the account cannot be debited.

postNoCredit - possible values (Y/N). Y means the account cannot be credited.

Dormant - The account is dormant

 ### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Affiliate Code*

affiliateCode

### *Source Code*

sourceCode

### *Account Number*

accountNo

### *BranchCode*

branchCode

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### content-type

### ecobank.EnterpriseIntegration.transactionStatus({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.transactionStatus({
  sandbox_key: "your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "affiliateCode":'any:string',
     "sourceCode": 'any:string' || "W3S",
     "accountNo": 'any:string',
     "branchCode": 'any:string'
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## * InitiateReceive-CASH(options])*

InitiateReceive - CASH

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Request Token*

requestToken

### *SourceIp*

sourceIp

### *Test Answer*

testAnswer

### *Send External Reference*

sendExternalRef

### *Reference Number*

referenceNumber

### *ReceiveType*

receiveType

### *Receive Account Number*

receiveAccountNumber

### *AgentCode*

agentCode

### *Mobile Phone*

mobilePhone

### *First Name*

firstName

### *Last Name*

lastName

### *Email Address*

emailAddress

### *Date of Birth*

dob

### *Nationality*

nationality

### *Country*

country

### *Contact Address*

contactAddress

### *Gender*

gender

### *Title*

title

### *identification Type*

identificationType

### *identification Number*

identificationNumber

### *Issue Date*

issueDate

### *ExpireDate*

expireDate

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.initiateReceiveCash({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.initiateReceiveCash({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' || '7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": "any:string",
       "countryCode": "",
       "requestId": "any:string",
       "requestToken": "any:string" || "0207d674c7a05b3a4f5a01743f8",
       "sourceIp": "any:string" || "189.210.155.254"
      },
      "testAnswer": "any:string",
      "sendExternalRef": "any:string",
      "referenceNumber": "any:string",
      "receiveType": "any:string",
      "receiveAccountNumber": "any:string",
      "agentCode": "any:string",
      "mobilePhone": "any:string",
      "firstName": "any:string",
      "lastName": "any:string",
      "emailAddress": "any:string",
      "dob": "any:string",
      "nationality": "any:string",
      "country": "any:string",
      "contactAddress": "any:string",
      "gender": "any:string",
      "title": "any:string",
      "identificationType": "any:string",
      "identificationNumber": "any:string",
      "issueDate": "any:string",
      "expireDate": "any:string"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## * Complete Receive for Agent(options])*

Complete Receive for Agent

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Request Token*

requestToken

### *SourceIp*

sourceIp

### *Test Answer*

testAnswer

### *Send External Reference*

sendExternalRef

### *Reference Number*

referenceNumber

### *ReceiveType*

receiveType

### *Receive Account Number*

receiveAccountNumber

### *AgentCode*

agentCode

### *Mobile Phone*

mobilePhone

### *First Name*

firstName

### *Last Name*

lastName

### *Email Address*

emailAddress

### *Date of Birth*

dob

### *Nationality*

nationality

### *Country*

country

### *Contact Address*

contactAddress

### *Gender*

gender

### *Title*

title

### *identification Type*

identificationType

### *identification Number*

identificationNumber

### *Issue Date*

issueDate

### *ExpireDate*

expireDate

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.completeReceive({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.completeReceive({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' || '7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": 'any:string',
       "countryCode": "",
       "requestId": 'any:string',
       "requestToken": 'any:string' || "0207d674c7a05b3a4f5a01743f8",
       "sourceIp": "any:string"
      },
      "testAnswer": 'any:string',
      "sendExternalRef": 'any:string',
      "referenceNumber": 'any:string',
      "receiveType": 'any:string',
      "receiveAccountNumber": 'any:string',
      "agentCode": 'any:string',
      "mobilePhone": 'any:string',
      "firstName": 'any:string',
      "lastName": 'any:string',
      "emailAddress": 'any:string',
      "dob": 'any:string',
      "nationality": 'any:string',
      "country": 'any:string',
      "contactAddress": 'any:string',
      "gender": 'any:string',
      "title": 'any:string',
      "identificationType": 'any:string',
      "identificationNumber": 'any:string',
      "issueDate": 'any:string',
      "expireDate": 'any:string'
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Rapid Transfer Transaction Status(options])*

Complete Receive for Agent

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *RequestId*

requestId

### *RequestToken*

requestToken

### *Source Ip*

sourceIp

### *Transfer Reference*

tranRef

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.agentTransactionStatus({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.agentTransactionStatus({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload:  {
     hostHeaderInfo: {
       partnerId: 'any:string',
       countryCode: 'any:string',
       requestId: 'any:string',
       requestToken: 'any:string' ||'0207d674c7a05b3a4f5a01743f87f115ee30ea5e5aea22aa40b43aa001a6814a1c7357abeb7ba59a7c1033914c7cd680380f2a3436191d709f381af40db42cab'
      },
      tranRef: 'any:string'
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *International Remittance Name Inquiry(options])*

Complete Receive for Agent

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *HostHeaderInfo*

hostHeaderInfo

### *PartnerId*

partnerId

### *RequestId*

requestId

### *CountryCode*

countryCode

### *Account Or Mobile Number*

accountorMobileNo

### *Account or Mobile Type*

accountorMobileType

### *Account Entity Code*

accountEntityCode

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.internationalNameInquiry({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.internationalNameInquiry({
  sandbox_key: "Your sandbox KEY",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' || '7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": 'any:string',
       "requestId": 'any:string',
       "countryCode": 'any:string' || "NG"
      },
      "accountorMobileNo": 'any:string',
      "accountorMobileType": 'any:string',
      "accountEntityCode": 'any:string'
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Rapid Transfer Name Inquiry(options])*

Complete Receive for Agent

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Account Number*

accountNo

### *Account Entity Code*

accountEntityCode

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.agentNameInquiry({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example


```javascript

ecobank.EnterpriseIntegration.agentNameInquiry({
  sandbox_key: "Your sandbox Key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id:  'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": 'any:string',
       "countryCode": 'any:string',
       "requestId": 'any:string'
      },
      "accountNo": 'any:string',
      "accountEntityCode": 'any:string'
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## * Post transfer(options])*

International Remittance post transfer

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Transaction Details*

transactionDetails

### *Transaction Reference*

tranRef

### *Send Amount*

sendAmount

### *Send Currency*

sendCurrency

### *Send Country*

sendCountry

### *Exchange Rate*

exchangeRate

### *Receive Amount*

receiveAmount

### *Destination Currency*

destinationCurrency

### *Delivery Method*

deliveryMethod

### *transaction Secret*

tranSecret

### *Secret Answer*

secretAnswer

### *Transaction Reason*

tranReason

### *Transaction Narration*

tranNarration

### *Sender*

sender

### *First Name*

firstName

### *Las tName*

lastName

### *Id Number*

idNumber

### *Id Type*

idType

### *Id IssueDate*

idIssueDate

### *Id ExpiryDate*

idExpiryDate

### *Nationality*

nationality

### *Phone Number*

phoneNumber

### *Email*

email

### *Address*

address

### *Country Of Residence*

countryOfResidence

### *Account Number*

accountNumber

### *Beneficiary*

beneficiary

### *FirstName*

firstName

### *LastName*

lastName

### *BeneficiaryName*

beneficiaryName

### *Id Number*

idNumber

### *Id Type*

idType

### *Id Issue Date*

idIssueDate

### *Id Expiry Date*

idExpiryDate

### *Nationality*

nationality

### *Phone Number*

phoneNumber

### *Email*

email

### *Address*

address

### *country Of Residence*

countryOfResidence

### *Bank Code*

bankCode

### *AccountT ype*

accountType

### *Account Number*

accountNumber

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.postTransfer({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example


```javascript

ecobank.EnterpriseIntegration.postTransfer({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": 'any:string',
       "countryCode": "any:string",
       "requestId": "any:string"
      },
      "transactionDetails": {
        "tranRef": "any:string",
        "sendAmount": 'any:number',
        "sendCurrency": "any:string",
        "sendCountry": "any:string",
        "exchangeRate": 'any:number',
        "receiveAmount": 'any:number',
        "destinationCurrency": "any:string",
        "destinationCountry": "any:string",
        "deliveryMethod": "any:string",
        "tranSecret": "any:string",
        "secretAnswer": "any:string",
        "tranReason": "any:string",
        "tranNarration": "any:string",
        "sender": {
          "firstName": "any:string",
          "lastName": "any:string",
          "idNumber": "any:string",
          "idType": "any:string",
          "idIssueDate": "",
          "idExpiryDate": "",
          "nationality": "",
          "phoneNumber": "any:string",
          "email": "any:string",
          "address": "",
          "countryOfResidence": "any:string",
          "accountNumber": "any:string"
        },
        "beneficiary": {
          "firstName": "any:string",
          "lastName": "any:string",
          "beneficiaryName": "any:string",
          "idNumber": "any:string",
          "idType": "any:string",
          "idIssueDate": "",
          "idExpiryDate": "",
          "nationality": "",
          "phoneNumber": "any:string",
          "email": "any:string",
          "address": "",
          "countryOfResidence": "any:string",
          "bankCode": "any:string",
          "accountType": "any:string",
          "accountNumber": "any:string"
        }
      }
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Fetch Fees and Rate(options])*

International Remittance Fetch Fees and Rate

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Rate And Fees*

rateandfees

### *Amount*

amount

### *Amount Type*

amountType

### *Send Country*

sendCountry

### *send Currency*

sendCcy

### *Receive Country*

receiveCountry

### *Receive Currency*

receiveCcy

### *Delivery Method*

deliveryMethod

### *transaction Type*

tranType

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.fetchRateFees({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.fetchRateFees({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code:  'any:string' || 'NIBBS' ,
   client_id:  'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token:  'any:string' || '7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId":  'any:string',
       "countryCode": "any:string'",
       "requestId": "any:string'"
      },
      "rateandfees": {
        "amount": 'any:number,
        "amountType": "any:string'",
        "sendCountry": "any:string'",
        "sendCcy": "any:string'",
        "receiveCountry": "any:string'",
        "receiveCcy": "any:string'",
        "deliveryMethod": "",
        "tranType": ""
      }
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Fetch Institution List(options])*

International Remittance Fetch Institution List

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Destination Country*

destinationCountry

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.fetchInstitutionList({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.fetchInstitutionList({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": "any:string",
       "requestId": "any:string",
       "countryCode": "any:string"
      },
      "destinationCountry": "any:string"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *International Remittance  Transaction Status(options])*

International Remittance  Transaction Status

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Send Account Number*

sendAccountNo

### *External Reference Number*

externalRefNo

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.internationalTransactionStatus({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.internationalTransactionStatus({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret:  "any:string" || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code:  "any:string" || 'NIBBS' ,
   client_id:  "any:string" || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token:  "any:string" ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": "any:string",
       "countryCode": "any:string",
       "requestId": "any:string"
      },
      "sendAccountNo": "any:string",
      "externalRefNo": "any:string"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *International Remittance  Fetch Rate(options])*

International Remittance  Fetch Rate

### options

This service is used to compute the commission and also to validate Customer account number.

## payload

Request Body

### *Host Header Information*

hostHeaderInfo

### *Partner Id*

partnerId

### *Country Code*

countryCode

### *Request Id*

requestId

### *Rate*

rate

### *Amount*

amount

### *Amount Type*

amountType

### *Send Country*

sendCountry

### *send Currency*

sendCcy

### *Receive Country*

receiveCountry

### *receive Currency*

receiveCcy

### *Delivery Method*

deliveryMethod

### *Transaction Type*

tranType

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### *client_id*

client_id

### *client_secret*

client_secret

### *request_token*

request_token

### *request_source_code*

request_source_code

### content-type

### ecobank.EnterpriseIntegration.fetchRate({credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript

ecobank.EnterpriseIntegration.fetchRate({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
   client_secret: 'any:string' || 'ef5b01f399Cb434faE95a8134D0b2cAC' ,
   request_source_code: 'any:string' || 'NIBBS' ,
   client_id: 'any:string' || 'fadc5e4191e043599238d01fd0d51cbc',
   request_token: 'any:string' ||'7f137705f4caa39dd691e771403430dd23d27aa53cefcb97217927312e77847bca6b8764f487ce5d1f6520fd7227e4d4c470c5d1e7455822c8ee95b10a0e9855',
   payload: {
     "hostHeaderInfo": {
       "partnerId": 'any:string',
       "countryCode": "any:string",
       "requestId": "any:string"
      },
      "rate": {
        "amount": 'any:number',
        "amountType": "any:string",
        "sendCountry": "any:string",
        "sendCcy": "any:string",
        "receiveCountry": "any:string",
        "receiveCcy": "any:string",
        "deliveryMethod": "",
        "tranType": ""
      }
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___