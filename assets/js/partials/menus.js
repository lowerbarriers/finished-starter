/**
 * @file
 * Handle behavior of the main menu, toggle, and tray.
 */

/* Use event delegation for any dynamically-added dismiss events. */
document.addEventListener(
  "click",
  function (event) {
    if (event.target !== document && event.target.closest(".js--hamburger")) {
      let burger = event.target.closest(".js--hamburger");
      const burgerTarget = burger.getAttribute("aria-controls");

      /* Toggle the hamburger/x animation. */
      burger.classList.toggle("is-active");
      document.querySelector("#" + burgerTarget).classList.toggle("open");
      document.body.classList.toggle("mobile--tray--open");

      /* a11y enhancements. */
      let expanded = burger.getAttribute("aria-expanded") === "true" || false;
      burger.setAttribute("aria-expanded", !expanded);
    }
  },
  false
);
