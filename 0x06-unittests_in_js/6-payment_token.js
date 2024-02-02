/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 1, 2024
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: "Successful response from the API" });
  } else {
    return Promise.resolve();
  }
}

module.exports = getPaymentTokenFromAPI;
