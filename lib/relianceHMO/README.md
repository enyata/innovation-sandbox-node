# INNOVATION SANDBOX

## Install

```bash
$ npm install innovation-sandbox
```

## Require relianceHMO Library

```javascript
const { relianceHMO } = require("innovation-sandbox");
```

## Common Credentials

Below is a list of common credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

## Clients Signup([options])

You can sign up company and enrollees.

### options

The module accepts options as object of key-value.

#### payload

Request Body

##### transfer_code

##### company_name

##### company_address

##### state_code

##### payment_frequency

##### company_admin

Company admin details as an array of key value;

##### enrollees

Enrollee details as array of array of key value

### relianceHMO.clients.Signup(credentials)

Below is a sample with test data;

```javascript
relianceHMO.clients
  .Signup({
    sandbox_key: "Your sandbox_key",
    payload: {
      transfer_code: "1234WXYZ",
      company_name: "Justice League",
      company_address: "85, outer space",
      state_code: "NG-LA",
      payment_frequency: "monthly",
      company_admin: {
        first_name: "Bruce",
        last_name: "Wayne",
        email_address: "bruce@wayne.corp",
        phone_number: "08011122234",
      },
      enrollees: [
        {
          plan_id: 22,
          first_name: "Bruce",
          last_name: "Wayne",
          email_address: "bruce@wayne.corp",
          phone_number: "08011122234",
        },
        {
          plan_id: 14,
          first_name: "Barry",
          last_name: "Allen",
          email_address: "barry@flash.org",
          phone_number: "08033344322",
        },
      ],
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Renew Client Subscription ([options])

You can renew signed up company and enrollees.

### options

The module accepts options as object of key-value.

#### payload

Request Body

##### transfer_code

##### add

Adds new enrollees to the current list of enrollees.

##### remove

Removes the indicated enrollees from the current list.

##### update

Changes company's plan to a different one.

### relianceHMO.clients.Renew(credentials)

Below is a sample with test data;

```javascript
relianceHMO.clients
  .Renew({
    sandbox_key: "Your sandbox_key",
    payload: {
      transfer_code: "1234WXYZ",
      add: [
        {
          plan_id: 22,
          firstname: "Princess",
          lastname: "Diana",
          email: "diana@amazon.com",
          phone_number: "08041122234",
        },
      ],
      remove: ["K2JhMYr5wDGMxZWdh", "z44JhMYyDGMxZ362hwe"],
      update: [
        {
          plan_id: 24,
          user_token: "Y2JhMWJhNDc4YWJkMGMxZWdh",
        },
      ],
    },
    id: "UB14",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Consultations Request([options])

Request consultation for enrollee.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### patient_id

##### reason

### relianceHMO.main.Consultations(credentials)

Below is a sample with test data;

```javascript
relianceHMO.main
  .Consultations({
    sandbox_key: "Your sandbox_key",
    params: {
      patient_id: "232",
      reason: "reason for consultation",
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Register Enrollees([options])

Sign up individuals or buy multiple for families. Also supports bulk processing.

### options

The module accepts options as object of key-value.

#### payload

Request Body

##### enrollees

### relianceHMO.main.Enrollees(credentials)

Below is a sample with test data;

```javascript
relianceHMO.main
  .Register({
    sandbox_key: "Your sandbox_key",
    payload: {
      enrollees: [
        {
          payment_frequency: "monthly",
          first_name: "John",
          last_name: "Doe",
          email_address: "dewo.1@kang.pe",
          phone_number: "08132846940",
          plan_id: 22,
          can_complete_profile: "true",
          profile: {
            sex: "m",
            date_of_birth: "1991-03-03",
            first_name: "Doey",
            last_name: "Doe",
            primary_phone_number: "08159049122",
            home_address: "Somewhere Awesome",
            has_smartphone: "true",
            profile_picture_filename: "ttffddzp.jpg",
            enrollee_type: 1,
            hmo_id: "",
          },
          dependants: [
            {
              first_name: "Janet",
              last_name: "Dependant",
              email_address: "wu1uo389@gmail.com",
              phone_number: "08132046940",
              plan_id: 22,
            },
          ],
        },
      ],
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get Active Enrollees([options])

To query all active enrollees.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### page

##### limit

### relianceHMO.main.Enrollees(credentials)

Below is a sample with test data;

```javascript
relianceHMO.main
  .Enrollees({
    sandbox_key: "Your sandbox_key",
    params: {
      page: "1",
      limit: "10",
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get Single Enrollee([options])

To query a single enrollee by id.

### options

The module accepts options as object of key-value.

#### payload

Route Param

##### id

### relianceHMO.enrollees.Enrollee(credentials)

Below is a sample with test data;

```javascript
relianceHMO.enrollees
  .Enrollee({
    sandbox_key: "Your sandbox_key",
    id: "enrollee46",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Complete Enrollee Profile([options])

Complete Enrollee’s profile.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### sex

##### date_of_birth

##### home_address

##### has_smartphone

##### profile_picture_filename

##### hash

### relianceHMO.enrollees.Profile(credentials)

Below is a sample with test data;

```javascript
relianceHMO.enrollees
  .Profile({
    sandbox_key: "Your sandbox_key",
    params: {
      sex: "f",
      date_of_birth: "1991-03-03",
      home_address: "85, outer space",
      has_smartphone: "true",
      profile_picture_filename: "ttffddzp.png",
      hash: "ZDZhMTlYxRkQ0ODRDNisrMzQ",
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Enrollee Validation([options])

Retrieve enrollee details.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### hmo_id

### relianceHMO.enrollees.Validate(credentials)

Below is a sample with test data;

```javascript
relianceHMO.enrollees
  .Validate({
    sandbox_key: "Your sandbox_key",
    params: {
      hmo_id: "TXT/10002/A",
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Enrollee ID Card([options])

Retrieve enrollee id card image.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### hmo_id

### relianceHMO.enrollees.IdCard(credentials)

Below is a sample with test data;

```javascript
relianceHMO.enrollees.IdCard({
  sandbox_key: "Your sandbox_key",
  params: {
    hmo_id: "TXT/10002/A",
  },
  host: "Your host || null",
}).then((res) => {
  //do something
});
```

## Get Plans([options])

Get available plans

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### type

##### package

### relianceHMO.main.Plans(credentials)

Below is a sample with test data;

```javascript
relianceHMO.main
  .Plans({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Individual Signup([options])

Sign up individuals or buy multiple for families. Also supports bulk processing.

### options

The module accepts options as object of key-value.

#### payload

Request Body

##### Referral_code

##### enrollees

### relianceHMO.retail.Signup(credentials)

Below is a sample with test data;

```javascript
relianceHMO.retail
  .Signup({
    sandbox_key: "Your sandbox_key",
    payload: {
      Referral_code: "1122345",
      enrollees: [
        {
          payment_frequency: "monthly",
          first_name: "John",
          last_name: "Doe",
          email_address: "testuser1@kang.pe",
          phone_number: "08132646940",
          plan_id: 22,
          can_complete_profile: true,
          dependants: [
            {
              first_name: "Janet",
              last_name: "Dependant",
              email_address: "testuser2@kang.pe",
              phone_number: "08132646940",
              plan_id: 22,
            },
            {
              first_name: "Fred",
              last_name: "Dependant",
              email_address: "testuser3@kang.pe",
              phone_number: "08132646940",
              plan_id: 24,
            },
          ],
        },
        {
          payment_frequency: "q",
          first_name: "Ben",
          last_name: "Stiller",
          email_address: "snr22325@awsoo.com",
          phone_number: "08132646940",
          plan_id: 24,
          can_complete_profile: false,
          dependants: [],
        },
      ],
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Renew Individual Subscription([options])

Renew subscription for a single enrollee.

### options

The module accepts options as object of key-value.

#### payload

Request Body

##### enrollees

### relianceHMO.retail.Renew(credentials)

Below is a sample with test data;

```javascript
relianceHMO.retail
  .Renew({
    sandbox_key: "Your sandbox_key",
    payload: {
      enrollees: [
        {
          user_id: 345,
          remove: [347],
        },
      ],
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get Healthcare Providers([options])

Get Provider details. This can be used to provide more details of accessible hospitals for plans.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### state

##### plan_id

##### tiers

##### page

##### limit

### relianceHMO.utilities.Providers(credentials)

Below is a sample with test data;

```javascript
relianceHMO.utilities
  .Providers({
    sandbox_key: "Your sandbox_key",
    params: {
      state: "NG-LA",
      plan_id: "25",
      tiers: "1,2",
      page: "1",
      limit: "50",
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get States Available for Healthcare([options])

Get states. This can be used to provide the state_id for client signup.

### options

The module accepts options as object of key-value.

### relianceHMO.utilities.States(credentials)

Below is a sample with test data;

```javascript
relianceHMO.utilities
  .States({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Benefit List([options])

Retrieve Benefits list for Retail Plans.

### options

The module accepts options as object of key-value.

#### payload

Request Params

##### plan

### relianceHMO.utilities.Benefits(credentials)

Below is a sample with test data;

```javascript
relianceHMO.utilities
  .Benefits({
    sandbox_key: "Your sandbox_key",
    params: {
      plan: "25",
    },
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get Titles([options])

Get Titles for enrollee profile.

### options

The module accepts options as object of key-value.

### relianceHMO.utilities.Titles(credentials)

Below is a sample with test data;

```javascript
relianceHMO.utilities
  .Titles({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get Occupations([options])

Get Occupation(s) for enrollee profile.

### options

The module accepts options as object of key-value.

### relianceHMO.utilities.Occupations(credentials)

Below is a sample with test data;

```javascript
relianceHMO.utilities
  .Occupations({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Get Marital Status(es)([options])

Get Marital Status(es) for enrollee profile.

### options

The module accepts options as object of key-value.

### relianceHMO.utilities.MaritalStatuses(credentials)

Below is a sample with test data;

```javascript
relianceHMO.utilities
  .MaritalStatuses({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Wallet Balance([options])

Get wallet balance - useful when you want to use the walleting system to pay (Company payment not supported with this method).

### options

The module accepts options as object of key-value.

### relianceHMO.main.Wallet(credentials)

Below is a sample with test data;

```javascript
relianceHMO.main
  .Wallet({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Fund Wallet([options])

Fund Wallet.

### options

The module accepts options as object of key-value.

#### payload

Request Body

##### amount

### relianceHMO.wallet.Fund(credentials)

Below is a sample with test data;

```javascript
relianceHMO.wallet
  .Fund({
    sandbox_key: "Your sandbox_key",
    payload: { amount: '250000' }
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## Wallet Transactions([options])

Retrieve Wallet Transactions for client.

### options

The module accepts options as object of key-value.

### relianceHMO.wallet.Transactions(credentials)

Below is a sample with test data;

```javascript
relianceHMO.wallet
  .Transactions({
    sandbox_key: "Your sandbox_key",
    host: "Your host || null",
  })
  .then((res) => {
    //do something
  });
```

## RUNNING TEST

After installing dependencies, run the command

```bash
npm test
```
