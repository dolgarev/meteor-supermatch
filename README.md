# meteor-supermatch

New patterns and methods to the built-in Match object.

## New patterns
```js
Match.Base64*
Match.Date
Match.DataURI*
Match.DocumentId
Match.Email or Match.EMail*
Match.NonEmptyArray
Match.NonEmptyString
Match.NonNegativeInteger
Match.NonNegativeNumber
Match.Url*
Match.FiniteNumber
Match.Nil

```

## New methods
```js
Match.isBoolean
Match.isDate
Match.isInteger
Match.isNull
Match.isNumber
Match.isString
Match.isUndefined
---
Match.isBase64*
Match.isDataURI*
Match.isDocumentId
Match.isEmail*
Match.isFiniteNumber
Match.isNil
Match.isNonEmptyArray
Match.isNonEmptyString
Match.isNonNegativeInteger
Match.isNonNegativeNumber
Match.isUrl*

```
(*) - these patterns and methods require separate installation of the library [validator.js](https://www.npmjs.com/package/validator).

```bash
meteor npm i validator --save
```
