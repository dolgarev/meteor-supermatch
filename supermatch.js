import { Match } from 'meteor/check'

let validator
try {
  validator = require('validator')
} catch (e) {
  validator = null
}

// RegExp from [https://www.npmjs.com/package/simpl-schema#regex]
const DOCUMENT_ID_PATTERN = /^[23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz]{17}$/

Match.is = (v, validatorName, ...opts) => {
  const fn = typeof validatorName === 'function'
    ? validatorName
    : validator[validatorName]

  return Match.test(v, Match.Where(x => {
    return typeof x === 'string' && typeof fn === 'function' && fn(x, ...opts)
  }))
}

// Basic matchers
Match.Date = Match.Where(x => x instanceof Date && !isNaN(+x))

Match.DocumentId = Match.Where(x => {
  return typeof x === 'string' && DOCUMENT_ID_PATTERN.test(x)
})

Match.NonEmptyArray = Match.Where(x => Array.isArray(x) && x.length > 0)

Match.NonEmptyString = Match.Where(x => {
  return typeof x === 'string' && x.trim().length > 0
})

Match.NonNegativeInteger = Match.Where(x => {
  return Number.isInteger(x) && x >= 0
})

Match.NonNegativeNumber = Match.Where(x => {
  return typeof x === 'number' && x >= 0
})

Match.FiniteNumber = Match.Where(x => {
  return typeof x === 'number' && Number.isFinite(x)
})

// Helper functions
Match.isDate = date => Match.test(date, Match.Date)
Match.isDocumentId = id => Match.test(id, Match.DocumentId)
Match.isFiniteNumber = num => Match.test(num, Match.FiniteNumber)
Match.isNonEmptyArray = arr => Match.test(arr, Match.NonEmptyArray)
Match.isNonEmptyString = str => Match.test(str, Match.NonEmptyString)
Match.isNonNegativeInteger = num => Match.test(num, Match.NonNegativeInteger)
Match.isNonNegativeNumber = num => Match.test(num, Match.NonNegativeNumber)

if (validator) {
  Match.isBase64 = (data, ...opts) => Match.is(data, 'isBase64', ...opts)
  Match.isDataURI = (str, ...opts) => Match.is(str, 'isDataURI', ...opts)
  Match.isEmail = (str, ...opts) => Match.is(str, 'isEmail', ...opts)
  Match.isHexColor = (str, ...opts) => Match.is(str, 'isHexColor', ...opts)
  Match.isISO8601 = (date, ...opts) => Match.is(date, 'isISO8601', ...opts)
  Match.isMongoId = (str, ...opts) => Match.is(str, 'isMongoId', ...opts)
  Match.isURL = (str, ...opts) => Match.is(str, 'isURL', ...opts)
  Match.isUUID = (str, ...opts) => Match.is(str, 'isUUID', ...opts)
}

if (validator) {
  Match.Base64 = Match.Where(x => Match.isBase64(x))
  Match.DataURI = Match.Where(x => Match.isDataURI(x))
  Match.Email = Match.Where(x => Match.isEmail(x))
  // Deprecated: use Match.Email instead
  Match.EMail = Match.Email
  Match.HexColor = Match.Where(x => Match.isHexColor(x))
  Match.ISO8601 = Match.Where(x => Match.isISO8601(x))
  Match.MongoId = Match.Where(x => Match.isMongoId(x))
  Match.URL = Match.Where(x => Match.isURL(x))
  // Deprecated: use Match.URL instead
  Match.Url = Match.URL
  Match.UUID = Match.Where(x => Match.isUUID(x))
}

// TODO: These are deprecated methods
Match.isBoolean = bool => Match.test(bool, Boolean)
Match.isInteger = num => Match.test(num, Match.Integer)
Match.isNull = val => Match.test(val, null)
Match.isNumber = num => Match.test(num, Number)
Match.isString = str => Match.test(str, String)
Match.isUndefined = val => Match.test(val, undefined)
