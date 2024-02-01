const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('index page', () => {
  let res;

  beforeEach((done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (response.statusCode === 200) {
        res = response;
        done();
      }
    });
  });

  it('check status code', () => {
    expect(res.statusCode).to.equal(200);
  });

  it('check body', () => {
    expect(res.body).to.equal('Welcome to the payment system');
  });

});

describe('chart page', () => {
  it('check with params is number', (done) => {
    request('http://localhost:7865/cart/2', (error, response, body) => {
      if (response.statusCode === 200) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal('Payment methods for cart 2');
        done();    
      }
    });
  });

  it('check with params not number', (done) => {
    request('http://localhost:7865/cart/hh', (error, response, body) => {
      if (response.statusCode === 404) {
        expect(response.statusCode).to.equal(404);
        done(); 
      }
    });
  });

});
