const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber function', () => {
  it('test sum type', () => {
    assert.equal(calculateNumber('SUM', 2.5, 3.1), 6);
  });
  it('test subtract type', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.6, 2.3), 3);
  });
  it('test divide error', () => {
    assert.equal(calculateNumber('DIVIDE', 6.4, 0.4), 'Error');
  });
  it('test divide type', () => {
    assert.equal(calculateNumber('DIVIDE', 6.4, 1.8), 3.0);
  });
  it('test other types', () => {
    assert.equal(calculateNumber('pla', 6, 5), 'not operation');
  })
});
