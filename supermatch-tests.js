import { Match } from 'meteor/check'
import { Mongo } from 'meteor/mongo'
import { Random } from 'meteor/random'
import { Tinytest } from 'meteor/tinytest'

const validator = (function () {
  try {
    return path.resolve('validator').length > 0
      ? require('validator')
      : null
  } catch (e) {
    return null
  }
})()

Tinytest.add('supermatch - Match.isBoolean', function (test) {
  test.equal(Match.isBoolean(true), true)
  test.equal(Match.isBoolean(false), true)
})

Tinytest.add('supermatch - Match.isDate', function (test) {
  test.equal(Match.isDate(new Date()), true)
  test.equal(Match.isDate(new Date(NaN)), false)
})

Tinytest.add('supermatch - Match.isInteger', function (test) {
  test.equal(Match.isInteger(0), true)
  test.equal(Match.isInteger(1), true)
  test.equal(Match.isInteger(-1), true)
  test.equal(Match.isInteger(1.0), true)
  test.equal(Match.isInteger(1.1), false)
  test.equal(Match.isInteger(NaN), false)
  test.equal(Match.isInteger(Infinity), false)
  test.equal(Match.isInteger(-Infinity), false)
})

Tinytest.add('supermatch - Match.isNull', function (test) {
  test.equal(Match.isNull(null), true)
  test.equal(Match.isNull(undefined), false)
})

Tinytest.add('supermatch - Match.isNumber', function (test) {
  test.equal(Match.isNumber(0), true)
  test.equal(Match.isNumber(1), true)
  test.equal(Match.isNumber(-1), true)
  test.equal(Match.isNumber(1.0), true)
  test.equal(Match.isNumber(1.1), true)
  test.equal(Match.isNumber('0'), false)
  test.equal(Match.isNumber(NaN), true)
  test.equal(Match.isNumber(Infinity), true)
  test.equal(Match.isNumber(-Infinity), true)
  test.equal(Match.isNumber(null), false)
  test.equal(Match.isNumber(undefined), false)
})

Tinytest.add('supermatch - Match.isString', function (test) {
  test.equal(Match.isString(''), true)
  test.equal(Match.isString('abc'), true)
  test.equal(Match.isString(0), false)
})

Tinytest.add('supermatch - Match.isUndefined', function (test) {
  test.equal(Match.isUndefined(undefined), true)
  test.equal(Match.isUndefined(null), false)
})

Tinytest.add('supermatch - Match.isDocumentId', function (test) {
  test.equal(Match.isDocumentId(Random.id()), true)
  test.equal(Match.isDocumentId(Random.id(18)), false)
})

Tinytest.add('supermatch - Match.isFiniteNumber', function (test) {
  test.equal(Match.isFiniteNumber(0), true)
  test.equal(Match.isFiniteNumber(0.99), true)
  test.equal(Match.isFiniteNumber(-0.99), true)
  test.equal(Match.isFiniteNumber(NaN), false)
  test.equal(Match.isFiniteNumber(Infinity), false)
  test.equal(Match.isFiniteNumber(-Infinity), false)
})

Tinytest.add('supermatch - Match.isNonEmptyArray', function (test) {
  test.equal(Match.isNonEmptyArray([1, 2, 3]), true)
  test.equal(Match.isNonEmptyArray([]), false)
})

Tinytest.add('supermatch - Match.isNonEmptyString', function (test) {
  test.equal(Match.isNonEmptyString('abc'), true)
  test.equal(Match.isNonEmptyString(''), false)
})

Tinytest.add('supermatch - Match.isNonNegativeInteger', function (test) {
  test.equal(Match.isNonNegativeInteger(0), true)
  test.equal(Match.isNonNegativeInteger(1), true)
  test.equal(Match.isNonNegativeInteger(-1), false)
  test.equal(Match.isNonNegativeInteger(NaN), false)
  test.equal(Match.isNonNegativeInteger(Infinity), false)
  test.equal(Match.isNonNegativeInteger(-Infinity), false)
})

Tinytest.add('supermatch - Match.isNonNegativeNumber', function (test) {
  test.equal(Match.isNonNegativeNumber(0), true)
  test.equal(Match.isNonNegativeNumber(1), true)
  test.equal(Match.isNonNegativeNumber(-1), false)
  test.equal(Match.isNonNegativeNumber(1.1), true)
  test.equal(Match.isNonNegativeNumber(-1.1), false)
  test.equal(Match.isNonNegativeNumber(NaN), false)
  test.equal(Match.isNonNegativeNumber(Infinity), true)
  test.equal(Match.isNonNegativeNumber(-Infinity), false)
})

if (validator) {
  Tinytest.add('supermatch - Match.isMongoId', function (test) {
    test.equal(Match.isMongoId(new Mongo.ObjectID()._str), true)
    test.equal(Match.isMongoId(Random.id()), false)
    test.equal(Match.isMongoId(Random.id(24)), false)
  })
}
