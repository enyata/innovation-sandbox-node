# INNOVATION SANDBOX

## Install

```bash
$ npm install innovation-sandbox
```

## Require ATLABS Library

```javascript
const { atlabs } = require("innovation-sandbox");
```

## Common Credentials

Below is a list of required credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up. However `0ae0db703c04119b3db7a03d7f854c13` can be used for testing purposes.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

## Create Checkout Token([options])

To create a new checkout token.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### phoneNumber

The phone number to be subscribed.

### atlabs.Token.CreateCheckoutToken(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.Token.CreateCheckoutToken({
  sandbox_key: "Your sandbox key",
  payload: { phoneNumber: "+2348111111111" }
}).then(res => {
  //do something
});
```

## Voice Call([options])

Initiate a phone call

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### callFrom

Your Africa's Talking issued virtual phone number.

###### callTo

Phone number to dial

### atlabs.Voice.VoiceCall(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.Voice.VoiceCall({
  sandbox_key: "Your sandbox key",
  payload: { callFrom: "+2348130155009", callTo: "+2349091271976" }
}).then(res => {
  //do something
});
```

## Fetch Queue Calls([options])

Get queued calls

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### phoneNumbers

Your Africa's Talking issued virtual phone number.

### atlabs.Voice.FetchQueueCalls(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.Voice.FetchQueueCalls({
  sandbox_key: "Your sandbox key",
  payload: { phoneNumbers: "+2348033080471" }
}).then(res => {
  //do something
});
```

## Upload Media File([options])

You can upload media/audio file with the extension .mp3 or .wav only. This media files will be played when called upon by one of our voice actions.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### phoneNumbers

Your Africa's Talking issued virtual phone number.

###### url

URL to your media file

### atlabs.Voice.UploadMediaFile(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.Voice.UploadMediaFile({
  sandbox_key: "Your sandbox key",
  payload: {
    phoneNumber: "+2348033080471",
    url: "https://sandbox.fsi.ng/images/svg/fsi-logo-dark.svg"
  }
}).then(res => {
  //do something
});
```

## SMS Service([options])

You can send SMS by making a HTTP POST request to the SMS API.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### to

A String or an array with comma separated string of recipients’ phone numbers.

###### from

Your registered short code or alphanumeric, defaults is FSI.

###### message

The message to be sent.

###### enqueue (optional)

Set to true if you would like to deliver as many messages to the API without waiting for an acknowledgement from telecom companies.

### atlabs.SMS.SMSService(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.SMS.SMSService({
  sandbox_key: "Your sandbox key",
  payload: {
    to: "+2349091271976",
    from: "FSI",
    message: "Hello World"
  }
}).then(res => {
  //do something
});
```

## Premium Subscription([options])

To send premium SMS.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### to

A String or an array with comma separated string of recipients’ phone numbers.

###### from

Your registered short code or alphanumeric, defaults is FSI.

###### message

The message to be sent.

###### keyword

Your premium product keyword "innovation-sandbox".

###### linkId

We forward the linkId to your application when the user send a message to your service.

###### retryDurationInHours

It specifies the number of hours your subscription message should be retried in case it's not delivered to the subscriber.

### atlabs.SMS.PremiumSub(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.SMS.PremiumSub({
  sandbox_key: "Your sandbox key",
  payload: {
    to: "+2349091271976",
    from: "FSI",
    message: "Hello World",
    keyword: "innovation-sandbox",
    linkId: "12345",
    retryDurationInHours: "1"
  }
}).then(res => {
  //do something
});
```

## Create Premium Subscription([options])

To create a premium subscription, you first need to create a checkoutToken.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### shortCode

This is the premium short code mapped to your account.

###### keyword

Your premium product keyword.

###### phoneNumber

The phone number to be subscribed.

###### checkoutToken

This is a token used to validate the subscription request and can only be used once. Generate one from checkoutToken.

### atlabs.SMS.CreatePremiumSub(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.SMS.CreatePremiumSub({
  sandbox_key: "Your sandbox key",
  payload: {
    shortCode: "19171",
    keyword: "innovation-sandbox",
    phoneNumber: "+2349091271976",
    checkoutToken: "Enter your token"
  }
}).then(res => {
  //do something
});
```

## Delete Premium Subscription([options])

To delete a premium subscription.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### shortCode

This is the premium short code mapped to your account.

###### keyword

Your premium product keyword

###### phoneNumber

The phone number whose premium subscription is to be removed.

### atlabs.SMS.DeletePremiumSub(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.SMS.DeletePremiumSub({
  sandbox_key: "Your sandbox key",
  payload: {
    shortCode: "19171",
    keyword: "innovation-sandbox",
    phoneNumber: "+2349091271976"
  }
}).then(res => {
  //do something
});
```

## Fetch Premium Subscription([options])

Fetch your premium subscription data

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### shortCode

This is the premium short code mapped to your account.

###### keyword

A premium keyword under the above short code and mapped to your account.

###### lastReceivedId

This is the id of the message that you last processed. Defaults to 0

### atlabs.SMS.FetchPremiumSub(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.SMS.FetchPremiumSub({
  sandbox_key: "Your sandbox key",
  payload: {
    shortCode: "19171",
    keyword: "innovation-sandbox",
    lastReceivedId: "0"
  }
}).then(res => {
  //do something
});
```

## Fetch Message([options])

Manually retrieve your messages

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### lastReceivedId

This is the id of the message that you last processed. Defaults to 0

### atlabs.SMS.FetchMessage(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.SMS.FetchMessage({
  sandbox_key: "Your sandbox key",
  payload: {
    lastReceivedId: "0"
  }
}).then(res => {
  //do something
});
```

## Send Airtime([options])

You can send Send airtime to a bunch of phone numbers.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### phoneNumber

Recipient of airtime.

###### currencyCode

3-digit ISO format currency code.

###### amount

Amount to charge.

### atlabs.Airtime.SendAirtime(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
atlabs.Airtime.SendAirtime({
  sandbox_key: "Your sandbox key",
  payload: {
    recipients: [
      { phoneNumber: "+2349091271976", amount: "1000", currencyCode: "NGN" }
    ]
  }
}).then(res => {
  //do something
});
```
