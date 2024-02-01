const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('test calculateNumber function', () => {
  it('test sum type', () => {
    expect(calculateNumber('SUM', 2.5, 3.1)).to.equal(6);
  });
  it('test subtract type', () => {
    expect(calculateNumber('SUBTRACT', 4.6, 2.3)).to.equal(3);
  });
  it('test divide error', () => {
    expect(calculateNumber('DIVIDE', 6.4, 0.4)).to.equal('Error');
  });
  it('test divide type', () => {
    expect(calculateNumber('DIVIDE', 6.4, 1.8)).to.equal(3.0);
  });
  it('test other types', () => {
    expect(calculateNumber('pla', 6, 5)).to.equal('not operation');
  });
});
