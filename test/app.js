'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('../api'),
  config: {
    main: {
      packs: [
        require('trailpack-proxy-generics')
      ]
    },
    proxyGenerics: {
      'authorize-net': {
        adapter: require('../'),
        options: {
          login_id: process.env.AUTHORIZE_LOGIN_ID,
          transaction_key: process.env.AUTHORIZE_TRANSACTION_KEY
        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


