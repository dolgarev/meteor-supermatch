/* global Package */

Package.describe({
  name: 'liberation:supermatch',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dolgarev/meteor-supermatch',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.6.0.1')
  api.use(['check', 'ecmascript'])
  api.mainModule('supermatch.js')
})

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest', 'check', 'random'])
  api.use('liberation:supermatch')
  api.mainModule('supermatch-tests.js')
})
