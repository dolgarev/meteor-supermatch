// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest'

// Import and rename a variable exported by supermatch.js.
import { name as packageName } from 'meteor/liberation:supermatch'

// Write your tests here!
// Here is an example.
Tinytest.add('supermatch - example', function (test) {
  test.equal(true, true)
})
