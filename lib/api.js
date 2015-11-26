/**
 * @file api.js
 */

/** @private */
var request = require('request')

/**
 * @class Core class for Samsung TV Plus API.
 * @constructs API
 * @param  {string} endpoint
 * @param  {object} opts
 * @param  {string} opts.devkey
 * @param  {string} opts.provider_id
 * @param  {string} opts.provider_name
 * @param  {string} opts.country
 * @example
 * var api = new API('https://...', {...})
 */
var API = function (endpoint, opts) {
  /**
   * options
   * @member options
   * @memberof API.prototype
   * @private
   * @type {object}
   * @property {string} mode `development`, `product`
   */
  var options = {}

  /**
   * token string
   * @member token
   * @memberof API.prototype
   * @private
   * @type {string}
   */
  var token = null

  // defaults options
  opts = opts || {}

  // check mandatory
  var mandatory = ['devkey', 'provider_id', 'provider_name']
  for (var i = 0; i < mandatory.length; i++) {
    if (!opts[mandatory[i]]) {
      throw new Error('require api key: ' + mandatory[i])
    }
  }

  // init
  options = opts
  token = opts.token || null

  /**
   * return api endpoint
   * @method getEndpoint
   * @memberof API.prototype
   * @return {string}
   */
  this.getEndpoint = function () {
    return endpoint
  }

  /**
   * return keys
   * @method getKeys
   * @memberof API.prototype
   * @return {object}
   */
  this.getKeys = function () {
    return {
      devkey: options.devkey,
      provider_name: options.provider_name,
      provider_id: options.provider_id
    }
  }

  /**
   * set token
   * @method setToken
   * @memberof API.prototype
   * @param  {string} val
   */
  this.setToken = function (val) {
    token = val
  }

  /**
   * return token
   * @method getToken
   * @memberof API.prototype
   * @return {string}
   */
  this.getToken = function () {
    return token
  }

  /**
   * return contry code
   * @method getCountry
   * @memberof API.prototype
   * @return {string}
   */
  this.getCountry = function () {
    return options.country || ''
  }
}

/**
 * request
 * @method request
 * @memberof API.prototype
 * @param  {string} uri
 * @param  {object} opts
 * @param  {object} opts.method `POST`, `GET` default is `GET`
 * @param  {object} opts.data
 * @param  {function} cb cb(err, data)
 */
API.prototype.request = function (uri, opts, cb) {
  var param = {}

  param.url = this.getEndpoint() + uri
  param.method = opts.method || 'GET'
  param.json = true

  opts.data = opts.data || {}

  if (param.method === 'GET') {
    param.qs = opts.data
  } else {
    param.body = opts.data
  }

  param.headers = opts.headers = opts.headers || {}
  param.headers.token = opts.headers.token || this.getToken()

  return request(param, function (err, res) {
    if (err) {
      return cb(err)
    }

    try {
      var result = res.body.rsp
      if (result.stat === 'fail') {
        cb(result.err)
      } else {
        cb(null, result)
      }
    } catch (e) {
      console.error(res.body)
      cb(e)
    }
  })
}

module.exports = API
