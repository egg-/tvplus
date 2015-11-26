/**
 * @file content.js
 */

var querystring = require('querystring')
var _ = require('lodash')

var KEYS = {
  PROGRAM: 'id',
  SERIES: 'series_id',
  GROUPS: 'group_id'
}

var TYPES = {
  PROGRAM: 'program',
  SERIES: 'series',
  GROUPS: 'groups'
}

/**
 * @class Content APIs
 * @constructs Content
 * @param  {Content} api
 * @example
 * var content = new Content(api)
 */
var Content = function (api) {
  /**
   * api instance
   * @member api
   * @memberof Content.prototype
   * @type {API}
   */
  this.api = api
}

/**
 * @typedef Content~LOAD_OPTIONS
 * @type {object}
 * @property {string} [country] optional. default api.getCountry()
 * @property {string} [provider_id] optional. default api.getKeys().provider_id
 * @property {number} [page] optional. default 1
 * @property {number} [limit] optional. default 10
 */

/**
 * execute load request
 * @method loadRequest
 * @memberof Content.prototype
 * @param  {Content~TYPES} type `program`, `series`, `groups`
 * @param  {Content~LOAD_OPTIONS} opts
 * @param  {function} cb cb(err, data)
 * @example
 * content.loadRequest('program', { page: 1, limit: 5, country: 'KR' }, function (err, data) {
    console.log(err, _.pluck(data.items, 'id'))
 })
 */
Content.prototype.loadRequest = function (type, opts, cb) {
  opts = opts || {}

  var param = {}
  var page = opts.page || 1
  var limit = opts.limit || 10

  param.data = {
    country: opts.country || this.api.getCountry(),
    num: limit,
    start: Math.floor((page - 1) * limit),
    provider_id: opts.provider_id || this.api.getKeys().provider_id
  }

  return this.api.request('/monitor/v1/content/' + type, param, function (err, data) {
    if (err) {
      return cb(err)
    }

    cb(null, {
      page: page,
      limit: limit,
      country: param.data.country,
      items: data[type]
    })
  })
}

/**
 * load program
 * @method loadPrograms
 * @memberof Content.prototype
 * @param  {Content~LOAD_OPTIONS} opts
 * @param  {function} cb cb(err, data)
 * @example
 * content.loadPrograms({ page: 1, limit: 5, country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'id'))
 })
 */
Content.prototype.loadPrograms = function (opts, cb) {
  return this.loadRequest(TYPES.PROGRAM, opts, cb)
}

/**
 * load series
 * @method loadSeries
 * @memberof Content.prototype
 * @param  {Content~LOAD_OPTIONS} opts
 * @param  {function} cb cb(err, data)
 * @example
 * content.loadSeries({ page: 1, limit: 5, country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'series_id'))
 })
 */
Content.prototype.loadSeries = function (opts, cb) {
  return this.loadRequest(TYPES.SERIES, opts, cb)
}

/**
 * load groups
 * @method loadGroups
 * @memberof Content.prototype
 * @param  {Content~LOAD_OPTIONS} opts
 * @param  {function} cb cb(err, data)
 * @example
 * content.loadGroups({ page: 1, limit: 5, country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'series_id'))
 })
 */
Content.prototype.loadGroups = function (opts, cb) {
  return this.loadRequest(TYPES.GROUPS, opts, cb)
}

/**
 * @typedef Content~UPDATE_OPTIONS
 * @type {object}
 * @property {string} [country] optional. default api.getCountry()
 * @property {string} [provider_id] optional. default api.getKeys().provider_id
 */

/**
 * execute update request
 * @method updateRequest
 * @memberof Content.prototype
 * @param  {Content~TYPES} type `program`, `series`, `groups`
 * @param  {array} items
 * @param  {Content~UPDATE_OPTIONS} opts
 * @param  {function} cb cb(err, result)
 * @example
 * content.updateRequest('program', [{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
 */
Content.prototype.updateRequest = function (type, items, opts, cb) {
  opts = opts || {}

  var qs = {
    country: opts.country || this.api.getCountry(),
    provider_id: opts.provider_id || this.api.getKeys().provider_id
  }
  var param = {
    method: 'POST',
    data: {}
  }
  param.data[type] = items
  var url = [
    '/delivery/v1/content/', type, '?',
    querystring.stringify(qs)
  ].join('')

  return this.api.request(url, param, function (err, result) {
    if (err) {
      return cb(err)
    }

    cb(null, _.pluck(items, KEYS[type.toUpperCase()]))
  })
}

/**
 * update program
 * @method updatePrograms
 * @memberof Content.prototype
 * @param  {array} items
 * @param  {Content~UPDATE_OPTIONS} opts
 * @param  {Function} cb cb(err, result)
 * @example
 * content.updatePrograms([{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
 */
Content.prototype.updatePrograms = function (items, opts, cb) {
  return this.updateRequest(TYPES.PROGRAM, items, opts, cb)
}

/**
 * update series
 * @method updateSeries
 * @memberof Content.prototype
 * @param  {array} items
 * @param  {Content~UPDATE_OPTIONS} opts
 * @param  {function} cb cb(err, result)
 * @example
 * content.updateSeries([{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
 */
Content.prototype.updateSeries = function (items, opts, cb) {
  return this.updateRequest(TYPES.SERIES, items, opts, cb)
}

/**
 * update groups
 * @method updateGroups
 * @memberof Content.prototype
 * @param  {array} items
 * @param  {Content~UPDATE_OPTIONS} opts
 * @param  {function} cb cb(err, result)
 * @example
 * content.updateGroups([{
   'group_id': 'gr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
 */
Content.prototype.updateGroups = function (items, opts, cb) {
  return this.updateRequest(TYPES.GROUPS, items, opts, cb)
}

/**
 * @typedef Content~KEYS
 * @memberof Content
 * @type {string}
 * @property PROGRAM `id`
 * @property SERIES `series_id`
 * @property GROUPS `group_id`
 */
Content.KEYS = KEYS
/**
 * @typedef Content~TYPES
 * @memberof Content
 * @type {string}
 * @property PROGRAM `program`
 * @property SERIES `series`
 * @property GROUPS `groups`
 */
Content.TYPES = TYPES

module.exports = Content
