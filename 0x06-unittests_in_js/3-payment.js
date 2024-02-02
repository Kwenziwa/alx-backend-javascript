/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 1, 2024
 */
const Utils = require("./utils.js");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
