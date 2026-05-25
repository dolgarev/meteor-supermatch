# meteor-supermatch

Additional patterns and methods for Meteor's built-in `Match` object.

## Usage

```bash
meteor npm i validator --save   # optional, required for (*) patterns
```

## Patterns

```js
Match.Date
Match.DocumentId
Match.FiniteNumber
Match.PositiveNumber
Match.NonEmptyArray
Match.NonEmptyString
Match.NonEmptyRawString
Match.NonNegativeInteger
Match.NaturalNumber
Match.NonNegativeNumber

Match.Base64*          // requires validator
Match.DataURI*         // requires validator
Match.Email*           // requires validator
Match.HexColor*        // requires validator
Match.ISO8601*         // requires validator
Match.MongoId*         // requires validator
Match.URL*             // requires validator
Match.UUID*            // requires validator
```

## Methods

```js
Match.isDate(date)
Match.isDocumentId(id)
Match.isFiniteNumber(num)
Match.isPositiveNumber(num)
Match.isNonEmptyArray(arr)
Match.isNonEmptyString(str)
Match.isNonEmptyRawString(str)
Match.isNonNegativeInteger(num)
Match.isNaturalNumber(num)
Match.isNonNegativeNumber(num)

Match.isBase64(str)       // requires validator
Match.isDataURI(str)      // requires validator
Match.isEmail(str)        // requires validator
Match.isHexColor(str)     // requires validator
Match.isISO8601(date)     // requires validator
Match.isMongoId(str)      // requires validator
Match.isURL(str)          // requires validator
Match.isUUID(str)         // requires validator
```

## Custom validator

```js
Match.is(value, validatorName, ...opts)
Match.is(value, fn, ...opts)
```

Validates a string using a named validator from `validator` or a custom function.

```js
Match.is('abc', 'isAlpha')          // validator.isAlpha('abc')
Match.is('foo', s => s.length > 2)  // custom function
```

## Deprecated

These are kept for backward compatibility and will be removed in a future version:

```js
Match.isBoolean(bool)    // use Match.test(val, Boolean)
Match.isInteger(num)     // use Match.test(val, Match.Integer)
Match.isNull(val)        // use Match.test(val, null)
Match.isNumber(num)      // use Match.test(val, Number)
Match.isString(str)      // use Match.test(val, String)
Match.isUndefined(val)   // use Match.test(val, undefined)
```

Aliases:

```js
Match.EMail              // use Match.Email
Match.Url                // use Match.URL
```
