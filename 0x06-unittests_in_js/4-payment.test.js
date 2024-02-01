const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const utlis = require('./utils'); // Correct import
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('test spy of sinon', () => {
    const spy = sinon.spy(utlis, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');
    const stub = sinon.stub(utlis, 'calculateNumber').returns(10)
    const result = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWith('The total is: 10')).to.be.true;
    expect(result).to.equal(10);
    spy.restore();
    spyConsole.restore();
    stub.restore();
  });
});
