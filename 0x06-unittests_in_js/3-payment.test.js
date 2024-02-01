const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utlis = require('./utils'); // Correct import
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('test spy of sinon', () => {
    const spy = sinon.spy(utlis, 'calculateNumber');
    const result = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
