var _ = require('lodash')
var tvplus = require('../')
var config = require('./config.json')
var dummy = require('./dummy.json')

var api = new tvplus.API(config.endpoint.development, config.options)
var auth = new tvplus.Auth(api)
var content = new tvplus.Content(api)

var dump = function (err, data, key) {
  if (err) {
    console.error(err)
  } else {
    console.log(_.pluck(data.items, key))
  }
}

if (config.token) {
  api.setToken(config.token)
} else {
  // load seedkey
  auth.loadSeedkey(function (err, data) {
    console.log(err, data)
  })
}

content.loadPrograms({}, function (err, data) {
  dump(err, data, tvplus.Content.KEYS.PROGRAM)
})

content.loadSeries({}, function (err, data) {
  dump(err, data, tvplus.Content.KEYS.SERIES)
})

content.loadGroups({}, function (err, data) {
  dump(err, data, tvplus.Content.KEYS.GROUPS)
})

content.updatePrograms(dummy.programs, { country: 'KR' }, function (err, result) {
  console.log(err, result)
})

content.updateSeries(dummy.series, {}, function (err, result) {
  console.log(err, result)
})

content.updateGroups(dummy.groups, { country: api.getCountry() }, function (err, result) {
  console.log(err, result)
})
