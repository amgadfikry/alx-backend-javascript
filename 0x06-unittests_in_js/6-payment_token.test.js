const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('test async fuction', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.equal({data: 'Successful response from the API' });

    });
    done();
  });
  it('test async fuction false', (done) => {
    getPaymentTokenFromAPI(false).then((data) => {
      expect(data).to.equal({});
    });
    done();
  });
});
