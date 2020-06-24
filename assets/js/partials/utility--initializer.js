/**
 * @file
 * Perform DOM operations on load and when the DOM changes, so dynamically-added
 * elements work the same way as pre-rendered ones.
 */

/**
 * Set a single mutation observer on the body, and let other code subscribe to
 * it by pushing a window-context function name to the registry.
 *
 * The observer has slightly better performance by ignoring Old state. We also
 * forbid mutations to the body.
 */
let mutationCallbackRegistry = [];
if ("MutationObserver" in window) {
  var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.target !== document.body &&
        mutationCallbackRegistry.length
      ) {
        mutationCallbackRegistry.forEach((registrant) => {
          if (
            mutation.type &&
            (mutation.type === "attributes" || mutation.type === "childList")
          ) {
            let elems = [];

            if (mutation.type === "childList") {
              elems = mutation.target.querySelectorAll(
                "." +
                  registrant.jsClass +
                  ":not(." +
                  registrant.jsClass +
                  "--initialized)"
              );
            } else if (mutation.type === "attributes") {
              if (
                mutation.target.classList.contains(registrant.jsClass) &&
                !mutation.target.classList.contains(
                  registrant.jsClass + "--initialized"
                )
              ) {
                elems.push(mutation.target);
              }
            }

            if (elems.length) {
              Array.prototype.forEach.call(elems, (elem) => {
                elem.classList.add(registrant.jsClass + "--initialized");
                window[registrant.initializationFunction].apply(elem, [
                  mutation.type,
                ]);
              });
            }
          }
        });
      }
    });
  });

  mutationObserver.observe(document.body, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: false,
    characterDataOldValue: false,
  });
}

/**
 * Create a function that performs an initialization op on load,
 * then registers a mutationObserver callback to perform the same
 * initialization step on applicable elements modified in DOM over time.
 *
 * @todo use a better pattern than a function.
 */
var utilityInitializer = function (jsClass, initializationFunction) {
  const startElements = document.querySelectorAll("." + jsClass);
  if (startElements.length) {
    Array.prototype.forEach.call(startElements, (elem) => {
      if (!elem.classList.contains(jsClass + "--initialized")) {
        elem.classList.add(jsClass + "--initialized");
        window[initializationFunction].apply(elem, ["load"]);
      }
    });
  }

  mutationCallbackRegistry.push({
    jsClass: jsClass,
    initializationFunction: initializationFunction,
  });
};
