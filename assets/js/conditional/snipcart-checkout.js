/**
 * @file
 * Enable and manage dismissible classed elements.
 *
 * Uses the DOM initializer pattern in partials/utility--initializer.js
 */

const snipcartCheckout = `
  <button type="button" class="snipcart-checkout position--fixed
    top--0 right--0 margin-horizontal--4 margin-vertical--4 z-index--9">
    <figure class="figure figure--icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 27">
        <path fill-rule="evenodd" d="M1 0a1 1 0 000 2h4l3 16 1 2h17l1-1-1-1H10v-2h17l1-1 2-10-1-1H7V1L6 0H1zm7 6h5v3H8V6zm7 0h6l-1 3h-5V6zm8 0h5l-1 3h-4V6zM9 11h5v3H9v-3zm7 0h4v3h-4v-3zm6 0h5l-1 3h-4v-3zm-9 9c-2 0-4 2-4 3 0 2 2 4 4 4 1 0 3-2 3-4l-3-3zm9 0l-3 3c0 2 2 4 3 4 2 0 4-2 4-4 0-1-2-3-4-3zm-9 2l1 1-1 2-2-2 2-1zm9 0l2 1-2 2-1-2 1-1z"/>
      </svg>
    </figure>
    <span class="snipcart-total-price"></span>
  </button>
`;
const snipcartScript = `<script src="https://cdn.snipcart.com/themes/v3.6.0/default/snipcart.js"></script>`;

var parseCookieString = function(cookieString) {
  cookieString = cookieString.split(', ');
  var result = {};
  for (var i = 0; i < cookieString.length; i++) {
    var cur = cookieString[i].split('=');
    result[cur[0]] = cur[1];
  }
  return result;
};

var insertSnipcartCheckout = function() {
  const cookies = parseCookieString(document.cookie);

  if (cookies["snipcart-cart"] && !document.querySelector('.snipcart-checkout')) {
    /* Check whether the snipcart third-party JS is loaded. */
    if (!("Snipcart" in window)) {
      var tag = document.createElement("script");
      tag.src = "https://cdn.snipcart.com/themes/v3.6.0/default/snipcart.js";
      document.body.appendChild(tag);
    }

    document.body.insertAdjacentHTML('beforeEnd', snipcartCheckout);
  }
};
insertSnipcartCheckout();

var checkCookie = function() {
  var lastCookie = document.cookie;
  return function() {
    var currentCookie = document.cookie;

    if (currentCookie != lastCookie) {
      insertSnipcartCheckout();
      lastCookie = currentCookie;
    }
  };
}();
window.setInterval(checkCookie, 500);

/* This CSS file loads a Google font that adds a GA cookie, so only do that if
 we absolutely have to. */
window.addEventListener('load', (event) => {
  if ("Snipcart" in window) {
    var tag = document.createElement("link");
    tag.rel = "stylesheet";
    tag.href = "https://cdn.snipcart.com/themes/v3.6.0/default/snipcart.css";
    document.head.appendChild(tag);
  }
});
