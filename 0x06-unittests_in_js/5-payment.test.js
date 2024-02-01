const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const utlis = require('./utils'); // Correct import
const chai = require('chai');
const expect = chai.expect;

let spy;

beforeEach(() => {
  spy = sinon.spy(console, 'log');
});

afterEach(() => {
  spy.restore();
});

describe('sendPaymentRequestToApi', () => {
  it('first test', () => {
    const result = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;
  });
  it('second test', () => {
    const result = sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
