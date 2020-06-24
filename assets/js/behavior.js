---
layout: compress
---

'use strict';

document.body.classList.add('js');

/* Globals and utilities. */
{% include_relative partials/service-worker--register.js %}
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

/* Partials that might be source-order dependent. */
{% include_relative partials/js--copy-above.js %}
