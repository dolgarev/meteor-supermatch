import { Match } from 'meteor/check'
import { Tinytest } from 'meteor/tinytest'

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
  test.equal(Match.isNumber("0"), false)
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
