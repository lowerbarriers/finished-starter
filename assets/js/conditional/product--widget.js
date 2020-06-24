/**
 * @file
 * Interaction between form elements within the .product--widget class.
 */

/* Use event delegation for any dynamically-added events. */
document.addEventListener('change', function (event) {
  if (event.target !== document) {
    if (event.target.closest('.product--widget--quantity--input')
      && event.target.closest('.product--widget')
    ) {
      let productWidget = event.target.closest('.product--widget');
      productWidget.querySelector('.buy-button').dataset.itemQuantity =
        parseInt(productWidget.querySelector('.product--widget--quantity--input').value);
    }
  }
}, false);
