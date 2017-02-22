/* eslint no-console: [0] */
'use strict'

module.exports = class ProxyGenericsAthorizeNet {
  constructor(options) {
    this.options = options
  }

  /**
   * Create Authorize.net Instance
   * @returns {*} Authorize.net Instance
   */
  authorizeNet() {
    const ApiContracts = require('authorizenet').APIContracts
    const ApiControllers = require('authorizenet').APIControllers

    return {
      contracts: ApiContracts,
      controllers: ApiControllers
    }
  }

  /**
   * resolves error code to proxy-cart error_code
   * @param {Object} err
   * @returns {String}
   */
  resolveAuthorizeError(err) {
    let errorCode
    switch (err.code) {
    case 'card_declined':
      errorCode = 'card_declined'
      break
    case 'incorrect_cvc':
      errorCode = 'incorrect_cvc'
      break
    case 'expired_card':
      errorCode = 'expired_card'
      break
    case 'processing_error':
      errorCode = 'processing_error'
      break
    case 'incorrect_number':
      errorCode = 'incorrect_number'
      break
    case 'invalid_expiry_month':
      errorCode = 'invalid_expiry_date'
      break
    case 'invalid_expiry_year':
      errorCode = 'invalid_expiry_date'
      break
    case 'invalid_cvc':
      errorCode = 'invalid_cvc'
      break
    default:
      errorCode = 'processing_error'
    }
    return errorCode
  }

  /**
   *
   * @param transaction
   * @returns {Promise}
   */
  authorize(transaction) {
    // Set the kind immediately
    transaction.kind = 'authorize'
    if (!transaction.payment_details) {
      transaction.payment_details = {
        gateway: 'authorize-net'
      }
    }
    return Promise.resolve(transaction)
  }

  /**
   *
   * @param transaction
   * @returns {Promise}
   */
  capture(transaction) {
    transaction.kind = 'capture'
    if (!transaction.payment_details) {
      transaction.payment_details = {
        gateway: 'authorize-net'
      }
    }
    return Promise.resolve(transaction)
  }

  /**
   *
   * @param transaction
   * @returns {Promise}
   */
  sale(transaction) {
    // Set the kind immediately
    transaction.kind = 'sale'
    if (!transaction.payment_details) {
      transaction.payment_details = {
        gateway: 'authorize-net'
      }
    }
    return Promise.resolve(transaction)
  }

  /**
   *
   * @param transaction
   * @returns {Promise}
   */
  void(transaction) {
    transaction.kind = 'void'
    if (!transaction.payment_details) {
      transaction.payment_details = {
        gateway: 'authorize-net'
      }
    }
    return Promise.resolve(transaction)
  }

  /**
   *
   * @param transaction
   * @returns {Promise}
   */
  refund(transaction) {
    transaction.kind = 'refund'
    if (!transaction.payment_details) {
      transaction.payment_details = {
        gateway: 'authorize-net'
      }
    }
    return Promise.resolve(transaction)
  }
}

