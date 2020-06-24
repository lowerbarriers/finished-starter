---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Scripts and behaviors available for use on the site."
  #  image:
  #    alt: "Shelby and Brad among the stars" # It's okay for this to be empty if the image is decorative
  #    src: required/meta-image--default.jpg
  robots: "noindex,follow"
#  title: "Overrides the tab title and social titles"
#permalink: docs/path/page-title/
#published: true
#tags: ["three", "four"]
title: "JavaScript"
---

The site comes pre-installed with some JavaScript that allows you to accomplish some common interface conventions without
having to write any front-end code.

These scripts can be used in conjunction with one another, and can be used dynamically on the page (new DOM elements with
relevant classes are initialized via a mutationObserver, and all event code uses bubbling).

Per the Technical section of the site documentation, all additional JavaScript should be either:

1. Vanilla JS with no dependencies, and following the patterns and format of the existing scripts
2. Relegated to its own context, such as an 'SPA' page. The search functionality is an example of a single-page app that
   has its own JavaScript that doesn't appear elsewhere on the site

## Initializer

The core utility among all these scripts is `/assets/js/partials/utility--initizalizer.js`. It allows you to easily perform
initialization operations on classed elements when they appear in the DOM.

The initializer runs first once the DOM is ready during page load, operating on all registered elements that exist at the
time of page load.

A mutationObserver, the only one on the site for performance, then listens for DOM changes, and relatively-efficiently detects
whether any registered elements are among the changes. If they are, the registered initialization function is run and a class
is added to the element to signify that its initializer has run.

For example, if an element should be given a particular class once it's found in the DOM, the initialization function might
be:

```javascript
var exampleInitializationFunction = function (initType) {
  this.classList.add("js--event--click");
};
```

Notice that the targeted element is the `this` within the function scope.

To register it to run both on load and on DOM mutations, call the `utilityInitializer()`:

```javascript
utilityInitializer("js--example", "exampleInitializationFunction");
```

Any element that enters the DOM with the `js--example` class will then have the `js--event--click` class added by the function
you've written, either at page load or when a mutation is observed. In order to prevent the initializer from running multiple
times on the same element, an appended class is also added to the element. In the example, that class would be `js--example--initialized`.

Only single classes may be used for the first argument of the `utilityInitializer()`, and the class should not have a preceding
period (it's a class string rather than a selector). Similarly, the second argument should be the function name of the
initialization function as a string, allowing for a `this` caller into the function as desired.

By convention, the functions passed into the `utilityInitializer()` should be named for the partial and appended with
'InitializationFunction'. For instance, in `/assets/js/partials/js--copy-above.js` (named for the class in the first place,
where the class is descriptive of the behavior), the initialization function passed to `utilityInitializer()` is named
`copyaboveInitializationFunction`.

The utility works purely on classes and keeps track of initializations using classes as well. This is by design, since other
solves may leak or prevent multiple different initializations on a single element. It also keeps the majority of DOM work
as class manipulation rather than costly operations.

### Event bubbling

While not technically part of the initializer, the common pattern on the site for new JavaScript is to use a bubbling event
listener to ensure any element matching the correct criteria triggers the event, even if it was not registered to the listener
at load-time.

```javascript
/* Use event delegation for any dynamically-added events. */
document.addEventListener(
  "click",
  function (event) {
    if (event.target !== document && event.target.closest(".js--example")) {
      let exampleElement = event.target.closest(".js--example");
    }
  },
  false
);
```

The `closest()` method facilitates the bubbling with vanilla methods, narrowing events bubbled to the `document` to only elements
with a specific selector.

## Utility

### Feature detection

The main JavaScript on the site includes adding a 'js' class to the body, which can be used for Progressive enhancement
in CSS and elsewhere.

```javascript
document.body.classList.add("js");
```

### Scroll

The window has a single, lightweight, debounced scroll listener that toggles classes on the body for whether the user is
scrolling up, down, or if they have reached the top of the page. These classes can be used in the CSS for things like sticky
headers:

- `.body-scroll--down`
- `.body-scroll--top`
- `.body-scroll--up`

#### Animate upon scroll reveal

The `window` also has a single intersectionObserver: it does the lazy-loaded pictures and some classes for doing animations
once the user scrolls to reveal the element.

If you have animations defined, as in the `utility--animation.css` stylesheet, and applied to an element, you can make the animation
trigger via the intersectionObserver by putting the `js--to-animate` class on it. This observer is dynamic, so you can put
reveal animations on elements added via AJAX if so desired.

An example of a reveal animation on an element is as follows:

```html
<div class="js--to-animate animation-name--reveal">
  This text will use the 'reveal' animation once observed.
</div>
```

**Result**:

<div class="js--to-animate animation-name--reveal">This text will use the 'reveal' animation once observed.</div>

### "Block links"

Per [Heydon Pickering's work on the Inclusive card component](https://inclusive-components.design/cards/), the class
`js--child--link` applied to a card or other block-level context will turn the element into the most functional block-link-like
item possible. The class dynamically does the following (conditional on the classed element containing a valid link):

- Adds a utility class to change the cursor to `pointer` so hover makes it feel like a link
- Adds the `card--hover` class, which can be used in CSS to add hover effects
- Triggers a timed event listener that links for clicks, but ignores for highlights and drags

**Example**:

<ul class="list-style--none layout--multiple--horizontal">
  <li class="card js--child--link display--flex flex-direction--column">
    <div class="card--text padding-horizontal--4 padding-vertical--4">
      <h3 class="card--title font-size--1p25em">
        <a href="/blog/example-post/">Example card</a>
      </h3>
      <strong class="card--subtitle display--block font-size--p875em font-weight--100 font-style--italic">January 1, 1970</strong>
      <p class="card--description font-size--p75em">Text content for the example card.</p>
    </div>
    <figure class="figure figure--image figure--card--image order--neg1">
      <picture class="picture picture--lazy-load layout--hide--no-javascript" itemprop="image">
        <source data-srcset="/assets/images/required/meta-image--default.jpg.webp" type="image/webp">
        <img data-src="/assets/images/required/meta-image--default.jpg" alt="Default alt text" loading="lazy">
      </picture>
      <noscript>
        <img src="/assets/images/required/meta-image--default.jpg" alt="Default alt text" loading="lazy" />
      </noscript>
    </figure>
  </li>
</ul>

### Docblocks

On the 'atomic' pages (atoms, molecules, organisms, etc.) of the documentation, each component is itself within a 'docblock'
component: `molecules/docblock.html`. Any class declared and passed to the docblock via the 'classes' parameter may then
be toggled on the front end to the top-level element of the component (note that every component should have configurable
classes at the top level so authors may modify the appearance and functionality to suit their needs).

**Example**:

{% include atoms/heading.html
  children="About this section"
  classes="text-shadow--second-light--solid"
  level="2"
  mode="docblock"
%}

### Event classes

For the following events:

```javascript
"animationcancel",
  "animationend",
  "animationiteration",
  "animationstart",
  "blur",
  "canplay",
  "canplaythrough",
  "change",
  "click",
  "compositionend",
  "compositionstart",
  "compositionupdate",
  "contextmenu",
  "dblclick",
  "drag",
  "dragend",
  "dragenter",
  "dragleave",
  "dragover",
  "dragstart",
  "drop",
  "durationchange",
  "emptied",
  "ended",
  "focus",
  "focusin",
  "focusout",
  "fullscreenchange",
  "fullscreenerror",
  "gotpointercapture",
  "input",
  "loadeddata",
  "loadedmetadata",
  "lostpointercapture",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pause",
  "play",
  "playing",
  "pointercancel",
  "pointerdown",
  "pointerenter",
  "pointerleave",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "ratechange",
  "reset",
  "seeked",
  "seeking",
  "show",
  "slotchange",
  "stalled",
  "submit",
  "suspend",
  "SVGAbort",
  "SVGError",
  "SVGLoad",
  "SVGResize",
  "SVGScroll",
  "SVGUnload",
  "SVGZoom",
  "timeupdate",
  "touchcancel",
  "touchend",
  "touchmove",
  "touchstart",
  "transitionend",
  "unload",
  "volumechange",
  "waiting";
```

...you can add `js--event--` and then the event name, and the classed element will have some things happen automatically
when that event triggers:

- If the event occurs once, the `js--event--[eventName]--once` class is added and persists. So, if you add `js--event--click`
  to a `<div>` and then click it, that element will have the `js--event--click--once` class on it
- The element will have a data attribute after the event occurs at least once: `data-js-event-eventname-count` and its
  value will increment as the event occurs on the element
- Like the 'once' class, the event triggers a 'toggle' class. So, if you add `js--event--click` to a `<div>` and then
  click it, that element will have the `js--event--click--toggle` class on it. Clicking again removes the class, and so forth

A great deal of what we do as front-end JavaScript developers comes down to event handling and class manipulation, so this
generalized utility can often be used to create functionality without writing additional JavaScript. Toogled items like
lightboxes, dropdown menus, etc. can all be accomplished by addressing the `js--event--...--toggle` classes in CSS, usually
with an additional class to avoid conflicts.

This functionality is not expressly dynamic (ie. it does not register with the mutationObserver), but it _does_ use event
bubbling, so dynamically-added elements can also use these utility event classes.

The list of events does not include scroll, resize, or other events that would require a debounce, and are usually best
accomplished with an observer pattern rather than an event listener.

### External links

External links, for usability and security purposes, are set to open in a new tab/window via `target="_blank"`, with `rel`
set with the `noopener` and `noreferrer` flags so the browser does not leak private information across sites.

This script is not presently set to be dynamic like other scripts, so any dynamically-added external links may open in the
same tab and may leak opener and referrer information to the destination.

### Lazy-loaded pictures

Rather than using a library for lazy loading, since this site only supports evergreen browsers we can let our intersectionObserver
lazy load our images, with only a minimal fallback.

To lazy-load an `<img>` or `<picture>`, simply:

1. Set all instances of `src` to `data-src` and `srcset` to `data-srcset`
2. Put in a placeholder for `src` and `srcset` as `src="/assets/images/required/s.gif"` (a tiny pixel) in order to maintain
   HTML validity
3. Ideally, place a working original version of the tag within a `<noscript>` element as a fallback
4. Add the `picture--lazy-load` class to the `<img>` or `<picture>` element, whichever is at the top level

To make lazy loading and modern formats easier, add all images with the image include:

{% raw %}

```liquid
{% include atoms/image.html
  alt="Your alt text here"
  caption="Optional caption here"
  classes=""
  src="required/meta-image--default.jpg"
%}
```

{% endraw %}

**Result**:

{% include atoms/image.html
  alt="Your alt text here"
  caption="Optional caption here"
  classes=""
  src="required/meta-image--default.jpg"
%}

## Special, classed elements

There are a few classes/utilities that either change their parent element or work in tandem with adjacent elements. These
classes can be used for some of the most frequent interface conventions:

### Copy above

The `.js--copy-above` class, applied usually to a `<button>` like so:

```html
<button class="js--copy-above layout--hide--no-javascript" type="button">
  + Add another
</button>
```

...clones the DOM element preceding it upon click, inserts another version, and does some interesting modification to the
cloned element to ensure proper operation and accessibility.

**Example**:

<div class="helper-wrapper">
  <fieldset name="attendee">
    <legend>Attendee</legend>
    <div class="form--item form--item--input form--item--input--text ">
      <label class="label form--item--label display--block font-size--p75em" for="fullname"> Full name </label>
      <input name="fullname" id="fullname" type="text">
    </div>
  </fieldset>

<button class="js--copy-above layout--hide--no-javascript" type="button">+ Add another</button>

</div>

Mainly, it increments the value of any attribute that should be unique on the page, such as `for`, `id`, `name`, and the `aria-`
attributes corresponding to those. These increments are delimited by between 1 and infinity colons (`:`) that represent the
depth of the element within the DOM element being cloned.

Cloned elements are dismissible, allowing the application to be returned to its original state by the user.

If the original element is:

```html
<fieldset name="attendee">
  <legend>Attendee</legend>
  <div class="form--item form--item--input form--item--input--text ">
    <label
      class="label form--item--label display--block font-size--p75em"
      for="fullname"
    >
      Full name
    </label>
    <input name="fullname" id="fullname" type="text" />
  </div>
</fieldset>
```

The first clone created by pressing the js--copy-above button would be augmented to be:

```html
<fieldset
  name="attendee:2"
  class="js--dismissible js--dismissible--initialized position--relative"
>
  <button type="button" class="js--dismissible--close" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
  <legend>Attendee</legend>
  <div class="form--item form--item--input form--item--input--text ">
    <label
      class="label form--item--label display--block font-size--p75em"
      for="fullname:::2"
    >
      Full name
    </label>
    <input name="fullname:::2" id="fullname:::2" type="text" />
  </div>
</fieldset>
```

The colon delimiters can conceivably be used to predict, template, or reconstruct cloned elements on subsequent page loads,
based on form data or some other state persistence mechanism not currently used on the site. Note that the `service-worker.js`
can be modified to persist application state across the session, though this is not implemented in an appreciable way on the
site (except for the search page where the History API is used to persist a GET parameter).

Since the delimiters are based on depth in the cloned element, it's important to ensure any referenced elements within (
such as a paragraph referenced with `aria-describedby`) are at the same DOM level within the element. Often this can be
achieved by wrapping an element with a semantically-empty element such as `<div>` or `<span>`. If you don't place elements
at the same DOM level, assistive technologies or the browser itself may issue a warning about duplicates or a mismatch.

### Dismissible

The `js--dismissible` class is really cool.

**Example**:

{% include molecules/alert.html
  children="<p>Dismissible status alert</p>"
  classes=""
  dismissible=true
  level="status"
%}

If you add it to an element, it will initialize by adding some padding and a close button. When a user presses the close
button, the classed element will be removed from the DOM entirely.

If the dismissed element had a stable-valued `id` attribute and also has the `js--dismissible` class on subsequent page loads,
a localStorage check will hide the element on DOMReady.

This class functionality is dynamic, so it can be used in conjunction with the "Copy Above" classed element above, for instance,
which opens a lot of possibilities for `<form>` and other interfaces.

### Share to native

Share links are the worst. The JavaScript that ships with this site includes a "floating action button" (FAB) that uses the
browser/OS native sharing mechanism rather than a third-party script for sharing links and content. The button will only
appear if native sharing is supported by the browser (progressive enhancement).

### Toggle below

The `.js--toggle-below` class, applied typically to a `<button>`, can be used to toggle the visibility of the element immediately
following the control in the DOM.

Adding a button to the page like so:

```html
<button type="button" class="js--toggle-below" aria-expanded="true">
  Example hidden content<br />
  <span class="js--toggle-below--label">Close below</span>
</button>
```

**Example**:

<div><!-- Div for adjacency (only needed for markdown) -->
  <button type="button" class="js--toggle-below" aria-expanded="true">
    Example hidden content<br />
    <span class="js--toggle-below--label">Close below</span>
  </button>
  <p>will hide the element following it, with the button toggling the element's appearance in an accessible way on click.</p>
</div>

If the `aria-expanded` attribute is not present or set to `"true"`, the element following the button is visible and the
text of the `<span class="js--toggle-below--label>` will automatically switch to "Close below".

If JavaScript is not present, this toggle fails safe, and the contents will be visible.

## Products (snipcart)

The site's codebase contains the ability to sell products using the third-party Snipcart e-commerce utility. The snipcart
code is dynamically added to the page as needed, for both performance and privacy reasons.

### Product quantity

For a product widget of the following construction (automatic using collections and includes/layouts):

```html
<div class="product--widget layout--hide--no-javascript ">
  <div class="product--widget--quantity">
    <label for="sbfrt-0001-quantity">Quantity:</label>
    <input
      type="number"
      id="sbfrt-0001-quantity"
      name="sbfrt-0001-quantity"
      class="product--widget--quantity--input"
      min="1"
      value="1"
    />
  </div>
  <div class="product--widget--buy-button">
    <button
      type="button"
      class="buy-button snipcart-add-item"
      data-item-quantity="1"
      data-item-id="SBFRT-0001"
      data-item-name="A banana"
      data-item-price="82.99"
      data-item-image="http://localhost:4000/assets/images/1200x630/banana.jpg"
      data-item-url="http://localhost:4000/products/a-banana/"
      data-item-description="Affordable, portable fruiting"
    >
      Add to cart
    </button>
  </div>
</div>
```

An event listener is in place to update the `data-item-quantity` attribute on the button (as specified by snipcart's API)
when the `.product--widget--quantity` number input changes.

For this to work, the parent must be a `.product--widget` and the number `<input>` itself must have the class `.product--widget--quantity--input`

### Cart/checkout FAB

If a snipcart cookie is present, a "floating action button" for accessing the shopping cart will appear to the user.
