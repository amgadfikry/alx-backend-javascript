const utlis = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = utlis.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
