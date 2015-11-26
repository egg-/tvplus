/**
 * @file auth.js
 */

/**
 * @class Authentication APIs
 * @constructs Auth
 * @param  {Auth} api
 * @example
 * var auth = new Auth(api)
 */
var Auth = function (api) {
  /**
   * api instance
   * @member api
   * @memberof Auth.prototype
   * @type {API}
   */
  this.api = api
}

/**
 * load seedkey
 * @method loadSeedkey
 * @memberof Auth.prototype
 * @param  {function} cb cb(err, data)
 * @example
 * auth.loadSeedkey(function (err, data) {
   console.log(err, data)
  // null, { token: '4cf0....' }
 })
 */
Auth.prototype.loadSeedkey = function (cb) {
  return this.api.request('/auth/v1/seedkey', {
    data: this.api.getKeys()
  }, function (err, data) {
    if (err) {
      return cb(err)
    }

    cb(null, data.connected)
  })
}

module.exports = Auth
