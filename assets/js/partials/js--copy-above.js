/**
 * @file
 * Enable and manage classed elements (<button>s) that make a copy of
 * the above element when pressed.
 *
 * Any id, for, name, etc. attributes are incremented numerically (and appended
 * if no number is there yet) so forms continue to work.
 *
 * Due to the incrementing, ensure any form labels and aria relations are within
 * the wrapper and at the same DOM nesting level.
 *
 * Uses the DOM initializer pattern in partials/utility--initializer.js
 */

const copyaboveAttrRegex = /^(.*)[:]{1,}([0-9]{1,})$/;

var copyaboveInitializationFunction = function (initType) {
  this.classList.add("js--event--click");
};
utilityInitializer("js--copy-above", "copyaboveInitializationFunction");

var copyaboveTraverse = function (elem, depth) {
  depth = typeof depth === "number" ? depth + 1 : 1;
  const colons = new Array(depth + 1).join(":");

  Array.prototype.forEach.call(
    [
      "aria-controls",
      "aria-describedby",
      "aria-details",
      "aria-errormessage",
      "aria-labelledby",
      "aria-owns",
      "for",
      "id",
      "itemid",
      "name",
    ],
    (thisAttr) => {
      if (elem.hasAttribute(thisAttr)) {
        const attrValue = elem.getAttribute(thisAttr);
        const attrMatch = attrValue.match(copyaboveAttrRegex);
        if (!attrMatch || !attrMatch[2]) {
          elem.setAttribute(thisAttr, attrValue + colons + 2);
        } else {
          elem.setAttribute(
            thisAttr,
            attrMatch[1] + colons + (parseInt(attrMatch[2]) + 1)
          );
        }
      }
    }
  );

  if (elem.children.length) {
    Array.prototype.forEach.call(elem.children, (childElement) => {
      copyaboveTraverse(childElement, depth);
    });
  }
};

/* Use event delegation for any dynamically-added events. */
document.addEventListener(
  "click",
  function (event) {
    if (event.target !== document && event.target.closest(".js--copy-above")) {
      let copyabove = event.target.closest(".js--copy-above");
      let aboveElem = copyabove.previousElementSibling.cloneNode(true);
      aboveElem.classList.add("js--dismissible");

      /* Copy unique attributes and indicate depth with colons for template-inference. */
      copyaboveTraverse(aboveElem);

      copyabove.insertAdjacentElement("beforeBegin", aboveElem);
    }
  },
  false
);
