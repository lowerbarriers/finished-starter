/**
 * @file
 * Show and hide the element below a classed button.
 */

var togglebelowInitializationFunction = function (initType) {
  let ariaExpanded = this.getAttribute("aria-expanded");
  if (!ariaExpanded || (ariaExpanded !== "true" && ariaExpanded !== "false")) {
    this.setAttribute("aria-expanded", "false");
    ariaExpanded = "false";
  }

  /* Explicitly toggle classes on the next element, in case this is the first time. */
  if (ariaExpanded === "true") {
    this.querySelector(".js--toggle-below--label").textContent = "Close below";
    this.nextElementSibling.classList.add("js--toggle-below--open");
    this.nextElementSibling.classList.remove("js--toggle-below--closed");
  } else {
    this.querySelector(".js--toggle-below--label").textContent = "Open below";
    this.nextElementSibling.classList.add("js--toggle-below--closed");
    this.nextElementSibling.classList.remove("js--toggle-below--open");
  }
};
utilityInitializer("js--toggle-below", "togglebelowInitializationFunction");

/* Use event delegation for any dynamically-added events. */
document.addEventListener(
  "click",
  function (event) {
    let toggleBelow, ariaExpanded;

    if (
      event.target !== document &&
      event.target.closest(".js--toggle-below")
    ) {
      toggleBelow = event.target.closest(".js--toggle-below");

      /* Add or toggle the aria-expanded attribute. */
      ariaExpanded = toggleBelow.getAttribute("aria-expanded");
      if (!ariaExpanded || ariaExpanded === "false") {
        toggleBelow.querySelector(".js--toggle-below--label").textContent =
          "Close below";
        ariaExpanded = "true";
      } else {
        toggleBelow.querySelector(".js--toggle-below--label").textContent =
          "Open below";
        ariaExpanded = "false";
      }
      toggleBelow.setAttribute("aria-expanded", ariaExpanded);

      /* Explicitly toggle classes on the next element, in case this is the first time. */
      if (ariaExpanded === "true") {
        toggleBelow.nextElementSibling.classList.add("js--toggle-below--open");
        toggleBelow.nextElementSibling.classList.remove(
          "js--toggle-below--closed"
        );

        /* Focus into the first form input if there's one in the next element. */
        if (toggleBelow.nextElementSibling.querySelector("input")) {
          toggleBelow.nextElementSibling.querySelector("input").focus();
        }
      } else {
        toggleBelow.nextElementSibling.classList.add(
          "js--toggle-below--closed"
        );
        toggleBelow.nextElementSibling.classList.remove(
          "js--toggle-below--open"
        );
      }
    }
  },
  false
);
