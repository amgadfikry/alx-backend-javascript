const request = require('request');
const chai = require('chai');
const expect = chai.expect;

let res;

beforeEach((done) => {
  request('http://localhost:7865', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res = response;
      done();
    }
  });
});

describe('index page', () => {
  it('check status code', () => {
    expect(res.statusCode).to.equal(200);
  });
  it('check body', () => {
    expect(res.body).to.equal('Welcome to the payment system');
  });
});
