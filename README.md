# proxy-generics-authorize-net

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Payment Processor for Authorize.net.

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)
Looking for [Proxy Generics?](https://github.com/calistyle/trailpack-proxy-generics)

## Install

```sh
$ npm install --save proxy-generics-authorize-net
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  // make the key authorize-net, alternatively make the key payment_processor to be the default payment_processor  
  'authorize-net': {
      adapter: require('proxy-generic-authorize-net'),
      options: {
          login_id: process.env.AUTHORIZE_LOGIN_ID,
          transaction_key: process.env.AUTHORIZE_TRANSACTION_KEY
      },
      icon: '' // url to an icon you want to use for this generic
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-authorize-net.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-authorize-net
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-authorize-net/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-authorize-net/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-authorize-net.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-authorize-net
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-authorize-net.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-authorize-net

