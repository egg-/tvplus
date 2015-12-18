## Classes
<dl>
<dt><a href="#API">API</a></dt>
<dd><p>Core class for Samsung TV Plus API.</p>
</dd>
<dt><a href="#Auth">Auth</a></dt>
<dd><p>Authentication APIs</p>
</dd>
<dt><a href="#Content">Content</a></dt>
<dd><p>Content APIs</p>
</dd>
</dl>
<a name="API"></a>
## API
Core class for Samsung TV Plus API.

**Kind**: global class  

* [API](#API)
  * [new API(endpoint, opts)](#new_API_new)
  * [.getEndpoint()](#API+getEndpoint) ⇒ <code>string</code>
  * [.getKeys()](#API+getKeys) ⇒ <code>object</code>
  * [.setToken(val)](#API+setToken)
  * [.getToken()](#API+getToken) ⇒ <code>string</code>
  * [.getCountry()](#API+getCountry) ⇒ <code>string</code>
  * [.request(uri, opts, cb)](#API+request)

<a name="new_API_new"></a>
### new API(endpoint, opts)

| Param | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| opts | <code>object</code> | 
| opts.devkey | <code>string</code> | 
| opts.provider_id | <code>string</code> | 
| opts.provider_name | <code>string</code> | 
| opts.country | <code>string</code> | 

**Example**  
```js
var api = new API('https://...', {...})
```
<a name="API+getEndpoint"></a>
### apI.getEndpoint() ⇒ <code>string</code>
return api endpoint

**Kind**: instance method of <code>[API](#API)</code>  
<a name="API+getKeys"></a>
### apI.getKeys() ⇒ <code>object</code>
return keys

**Kind**: instance method of <code>[API](#API)</code>  
<a name="API+setToken"></a>
### apI.setToken(val)
set token

**Kind**: instance method of <code>[API](#API)</code>  

| Param | Type |
| --- | --- |
| val | <code>string</code> | 

<a name="API+getToken"></a>
### apI.getToken() ⇒ <code>string</code>
return token

**Kind**: instance method of <code>[API](#API)</code>  
<a name="API+getCountry"></a>
### apI.getCountry() ⇒ <code>string</code>
return contry code

**Kind**: instance method of <code>[API](#API)</code>  
<a name="API+request"></a>
### apI.request(uri, opts, cb)
request

**Kind**: instance method of <code>[API](#API)</code>  

| Param | Type | Description |
| --- | --- | --- |
| uri | <code>string</code> |  |
| opts | <code>object</code> |  |
| opts.method | <code>object</code> | `POST`, `GET` default is `GET` |
| opts.data | <code>object</code> |  |
| cb | <code>function</code> | cb(err, data) |

<a name="Auth"></a>
## Auth
Authentication APIs

**Kind**: global class  

* [Auth](#Auth)
  * [new Auth(api)](#new_Auth_new)
  * [.api](#Auth+api) : <code>[API](#API)</code>
  * [.loadSeedkey(cb)](#Auth+loadSeedkey)

<a name="new_Auth_new"></a>
### new Auth(api)

| Param | Type |
| --- | --- |
| api | <code>[Auth](#Auth)</code> | 

**Example**  
```js
var auth = new Auth(api)
```
<a name="Auth+api"></a>
### auth.api : <code>[API](#API)</code>
api instance

**Kind**: instance property of <code>[Auth](#Auth)</code>  
<a name="Auth+loadSeedkey"></a>
### auth.loadSeedkey(cb)
load seedkey

**Kind**: instance method of <code>[Auth](#Auth)</code>  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | cb(err, data) |

**Example**  
```js
auth.loadSeedkey(function (err, data) {
   console.log(err, data)
  // null, { token: '4cf0....' }
 })
```
<a name="Content"></a>
## Content
Content APIs

**Kind**: global class  

* [Content](#Content)
  * [new Content(api)](#new_Content_new)
  * _instance_
    * [.api](#Content+api) : <code>[API](#API)</code>
    * [.loadRequest(type, opts, cb)](#Content+loadRequest)
    * [.loadPrograms(opts, cb)](#Content+loadPrograms)
    * [.loadSeries(opts, cb)](#Content+loadSeries)
    * [.loadGroups(opts, cb)](#Content+loadGroups)
    * [.loadIntiles(opts, cb)](#Content+loadIntiles)
    * [.loadSchedules(opts, cb)](#Content+loadSchedules)
    * [.updateRequest(type, items, opts, cb)](#Content+updateRequest)
    * [.updatePrograms(items, opts, cb)](#Content+updatePrograms)
    * [.updateSeries(items, opts, cb)](#Content+updateSeries)
    * [.updateGroups(items, opts, cb)](#Content+updateGroups)
    * [.updateIntiles(items, opts, cb)](#Content+updateIntiles)
    * [.updateSchedules(items, opts, cb)](#Content+updateSchedules)
    * [.deleteRequest(type, items, opts, cb)](#Content+deleteRequest)
    * [.deleteSchedules(items, opts, cb)](#Content+deleteSchedules)
  * _inner_
    * [~LOAD_OPTIONS](#Content..LOAD_OPTIONS) : <code>object</code>
    * [~UPDATE_OPTIONS](#Content..UPDATE_OPTIONS) : <code>object</code>
    * [~KEYS](#Content..KEYS) : <code>string</code>
    * [~TYPES](#Content..TYPES) : <code>string</code>

<a name="new_Content_new"></a>
### new Content(api)

| Param | Type |
| --- | --- |
| api | <code>[Content](#Content)</code> | 

**Example**  
```js
var content = new Content(api)
```
<a name="Content+api"></a>
### content.api : <code>[API](#API)</code>
api instance

**Kind**: instance property of <code>[Content](#Content)</code>  
<a name="Content+loadRequest"></a>
### content.loadRequest(type, opts, cb)
execute load request

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>[TYPES](#Content..TYPES)</code> | `program`, `series`, `groups`, `schedule` |
| opts | <code>[LOAD_OPTIONS](#Content..LOAD_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, data) |

**Example**  
```js
content.loadRequest('program', { page: 1, limit: 5, country: 'KR' }, function (err, data) {
    console.log(err, _.pluck(data.items, 'id'))
 })
```
<a name="Content+loadPrograms"></a>
### content.loadPrograms(opts, cb)
load program

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>[LOAD_OPTIONS](#Content..LOAD_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, data) |

**Example**  
```js
content.loadPrograms({ page: 1, limit: 5, country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'id'))
 })
```
<a name="Content+loadSeries"></a>
### content.loadSeries(opts, cb)
load series

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>[LOAD_OPTIONS](#Content..LOAD_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, data) |

**Example**  
```js
content.loadSeries({ page: 1, limit: 5, country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'series_id'))
 })
```
<a name="Content+loadGroups"></a>
### content.loadGroups(opts, cb)
load groups

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>[LOAD_OPTIONS](#Content..LOAD_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, data) |

**Example**  
```js
content.loadGroups({ page: 1, limit: 5, country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'series_id'))
 })
```
<a name="Content+loadIntiles"></a>
### content.loadIntiles(opts, cb)
load intile

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>[LOAD_OPTIONS](#Content..LOAD_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, data) |

<a name="Content+loadSchedules"></a>
### content.loadSchedules(opts, cb)
load schedules

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>[LOAD_OPTIONS](#Content..LOAD_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, data) |

**Example**  
```js
content.loadSchedules({ starttime: '2015-12-11T00:56:19+09:00', endtime: '2015-12-11T00:56:19+09:00', country: 'KR' }, function (err, data) {
   console.log(err, _.pluck(data.items, 'schedule_id'))
 })
```
<a name="Content+updateRequest"></a>
### content.updateRequest(type, items, opts, cb)
execute update request

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>[TYPES](#Content..TYPES)</code> | `program`, `series`, `groups`, `schedule` |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.updateRequest('program', [{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+updatePrograms"></a>
### content.updatePrograms(items, opts, cb)
update program

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.updatePrograms([{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+updateSeries"></a>
### content.updateSeries(items, opts, cb)
update series

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.updateSeries([{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+updateGroups"></a>
### content.updateGroups(items, opts, cb)
update groups

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.updateGroups([{
   'group_id': 'gr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+updateIntiles"></a>
### content.updateIntiles(items, opts, cb)
update intile

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.updateIntile([{
   'category_id': 'ca000000000025440391'
   ...
 }], { country: 'KR', service_id: 'SVID###' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+updateSchedules"></a>
### content.updateSchedules(items, opts, cb)
update schedule

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| opts.service_id | <code>string</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.updateSchedules([{
   'schedule_id': 'SC000000000025440391'
   ...
 }], { service_id: '', country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+deleteRequest"></a>
### content.deleteRequest(type, items, opts, cb)
execute delete request

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>[TYPES](#Content..TYPES)</code> | `schedule` |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.deleteRequest('program', [{
   'id': 'pr000000000025440391'
   ...
 }], { country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content+deleteSchedules"></a>
### content.deleteSchedules(items, opts, cb)
update schedule

**Kind**: instance method of <code>[Content](#Content)</code>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> |  |
| opts | <code>[UPDATE_OPTIONS](#Content..UPDATE_OPTIONS)</code> |  |
| opts.service_id | <code>string</code> |  |
| cb | <code>function</code> | cb(err, result) |

**Example**  
```js
content.deleteSchedules([{
   'schedule_id': 'SC000000000025440391'
   ...
 }], { service_id: '', country: 'KR' }, function (err, result) {
   console.log(err, result)
 })
```
<a name="Content..LOAD_OPTIONS"></a>
### Content~LOAD_OPTIONS : <code>object</code>
**Kind**: inner typedef of <code>[Content](#Content)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | optional. default api.getCountry() |
| provider_id | <code>string</code> | optional. default api.getKeys().provider_id |
| page | <code>number</code> | optional. default 1 |
| limit | <code>number</code> | optional. default 10 |
| starttime | <code>number</code> | optional. for schedule ex) 2015-12-11T00:56:19+09:00 |
| endtime | <code>number</code> | optional. for schedule ex) 2015-12-11T00:56:19+09:00 |

<a name="Content..UPDATE_OPTIONS"></a>
### Content~UPDATE_OPTIONS : <code>object</code>
**Kind**: inner typedef of <code>[Content](#Content)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | optional. default api.getCountry() |
| provider_id | <code>string</code> | optional. default api.getKeys().provider_id |

<a name="Content..KEYS"></a>
### Content~KEYS : <code>string</code>
**Kind**: inner typedef of <code>[Content](#Content)</code>  
**Properties**

| Name | Description |
| --- | --- |
| PROGRAM | `id` |
| SERIES | `series_id` |
| GROUPS | `group_id` |

<a name="Content..TYPES"></a>
### Content~TYPES : <code>string</code>
**Kind**: inner typedef of <code>[Content](#Content)</code>  
**Properties**

| Name | Description |
| --- | --- |
| PROGRAM | `program` |
| SERIES | `series` |
| GROUPS | `groups` |

