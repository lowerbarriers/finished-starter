/**
 * @file
 * Enable and manage dismissible classed elements.
 *
 * Uses the DOM initializer pattern in partials/utility--initializer.js
 */

var dismissibleInitializationFunction = function (initType) {
  if (this.hasAttribute("id")) {
    let storedInfo = localStorage.getItem(
      "js--dismissible--" + this.getAttribute("id")
    );
    if (storedInfo === "hidden") {
      this.classList.add("display--none");
      this.parentNode.removeChild(this);
    }
  }

  const dismissButton = `
    <button type="button" class="js--dismissible--close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  if (window.getComputedStyle(this).getPropertyValue("position") === "static") {
    this.classList.add("position--relative");
  }

  this.insertAdjacentHTML("afterBegin", dismissButton);
};
utilityInitializer("js--dismissible", "dismissibleInitializationFunction");

/* Use event delegation for any dynamically-added dismiss events. */
document.addEventListener(
  "click",
  function (event) {
    if (
      event.target !== document &&
      event.target.closest(".js--dismissible--close") &&
      event.target.closest(".js--dismissible")
    ) {
      let dismissible = event.target.closest(".js--dismissible");

      dismissible.classList.add("display--none", "js--dismissible--closed");
      dismissible.parentNode.removeChild(dismissible);

      if (dismissible.hasAttribute("id")) {
        localStorage.setItem(
          "js--dismissible--" + dismissible.getAttribute("id"),
          "hidden"
        );
      }
    }
  },
  false
);
