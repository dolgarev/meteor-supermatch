import { check, Match } from 'meteor/check'
import path from 'path'

const validator = (function () {
  try {
    return path.resolve('validator').length > 0
      ? require('validator')
      : null
  } catch (e) {
    return null
  }
})()

// see [https://github.com/meteor/meteor/blob/master/packages/random/random.js#L88]
const UNMISTAKABLE_CHARS = '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz'
const INVALID_ID_CHARS_REGEX = new RegExp(`[^${UNMISTAKABLE_CHARS}]`)

Match.Date = Match.Where(x => x instanceof Date && !isNaN(+x))

// code ported from [https://atmospherejs.com/peerlibrary/check-extension]
Match.DocumentId = Match.Where(x => {
  check(x, String)
  check(x, Match.Where(v => v.length === 17))
  return !INVALID_ID_CHARS_REGEX.test(x)
})

Match.NonEmptyArray = Match.Where(x => {
  check(x, Array)
  return x.length > 0
})

Match.NonEmptyString = Match.Where(x => {
  check(x, String)
  return x.trim().length > 0
})

Match.NonNegativeInteger = Match.Where(x => {
  check(x, Match.Integer)
  return x >= 0
})

Match.NonNegativeNumber = Match.Where(x => {
  check(x, Number)
  return x >= 0
})

const _isFinite = Number.isFinite
  ? Number.isFinite
  : value => typeof value === 'number' && isFinite(value)

Match.FiniteNumber = Match.Where(x => {
  check(x, Number)
  return _isFinite(x)
})

Match.Nil = Match.Where(v => v == null)

if (validator) {
  Match.Base64 = Match.Where(x => {
    check(x, Match.NonEmptyString)
    return validator.isBase64(x)
  })

  Match.DataURI = Match.Where(x => {
    check(x, Match.NonEmptyString)
    return validator.isDataURI(x)
  })

  Match.Email = Match.Where(x => {
    check(x, Match.NonEmptyString)
    return validator.isEmail(x)
  })
  Match.EMail = Match.Email

  Match.Url = Match.Where(x => {
    check(x, Match.NonEmptyString)
    return validator.isURL(x)
  })
}

Match.isBoolean = bool => Match.test(bool, Boolean)
Match.isDate = date => Match.test(date, Match.Date)
Match.isInteger = num => Match.test(num, Match.Integer)
Match.isNull = val => Match.test(val, null)
Match.isNumber = num => Match.test(num, Number)
Match.isString = str => Match.test(str, String)
Match.isUndefined = val => Match.test(val, undefined)

if (validator) Match.isBase64 = str => Match.test(str, Match.Base64)
if (validator) Match.isDataURI = str => Match.test(str, Match.DataURI)
Match.isDocumentId = id => Match.test(id, Match.DocumentId)
if (validator) Match.isEmail = str => Match.test(str, Match.Email)
Match.isFiniteNumber = num => Match.test(num, Match.FiniteNumber)
Match.isNil = val => Match.test(val, Match.Nil)
Match.isNonEmptyArray = arr => Match.test(arr, Match.NonEmptyArray)
Match.isNonEmptyString = str => Match.test(str, Match.NonEmptyString)
Match.isNonNegativeInteger = num => Match.test(num, Match.NonNegativeInteger)
Match.isNonNegativeNumber = num => Match.test(num, Match.NonNegativeNumber)
if (validator) Match.isUrl = str => Match.test(str, Match.Url)
