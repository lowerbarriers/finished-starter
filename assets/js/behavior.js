---
layout: compress
---

'use strict';

document.body.classList.add('js');

/* Toggle out a body class if the browser supports webp. */
let browser_supports_webp = () => {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    /* Was able or not to get WebP representation. */
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  else {
    /* Very old browser like IE 8, canvas not supported. */
    return false;
  }
};
if (browser_supports_webp()) {
  document.body.classList.remove('webp--disabled');
  document.body.classList.add('webp--enabled');
}

/**
 * @file
 * Load the service worker script at the site root.
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("{{ site.subpath }}/service-worker.js");
}

/* Globals and utilities. */
{% include_relative partials/js--event--eventType.js %}
{% include_relative partials/body--scroll.js %}
{% include_relative partials/utility--initializer.js %}

/* Alphabetical partials. */
{% include_relative partials/docblock.js %}
{% include_relative partials/external-links.js %}
{% include_relative partials/js--animation--reveal.js %}
{% include_relative partials/js--child--link.js %}
{% include_relative partials/js--dismissible.js %}
{% include_relative partials/js--share-to-native.js %}
{% include_relative partials/js--toggle-below.js %}
{% include_relative partials/js--youtube.js %}
{% include_relative partials/twitter-tweet.js %}

/* Partials that might be source-order dependent. */
{% include_relative partials/js--copy-above.js %}
