'use strict'
/* global describe, it */
const assert = require('assert')
describe('Payment Generic Authorize.net', () => {
  let PaymentGenericService
  let Authorize

  before((done) => {
    PaymentGenericService = global.app.services.PaymentGenericService
    Authorize = global.app.config.proxyGenerics['authorize-net']
    done()
  })

  it('should exist', () => {
    assert(PaymentGenericService)
    assert(Authorize)
  })
})
