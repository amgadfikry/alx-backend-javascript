const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe("test sum of two number", () => {
  it("first test", () => {
    assert.equal(calculateNumber(2.5, 3.9), 7);
  });
  it("second test", () => {
    assert.equal(calculateNumber(2.1, 3.4), 5);
  });
  it("third test", () => {
    assert.equal(calculateNumber(-2.5, -3.1), -5);
  });
});
