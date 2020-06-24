/**
 * @file
 * Cards with links inside them should be clickable, and take cursor/hover.
 */

var childLinkInitializationFunction = function (initType) {
  const thisLink = this.querySelector("a[href]");

  if (thisLink && thisLink.href && thisLink.href.length >= 1) {
    this.classList.add("card--hover", "cursor--pointer");
  }
};
utilityInitializer("js--child--link", "childLinkInitializationFunction");

/* Use event delegation for any dynamically-added events. */
let childLinkDown, childLinkUp;
document.addEventListener(
  "mousedown",
  (event) => {
    childLinkDown = +new Date();
  },
  false
);

document.addEventListener(
  "mouseup",
  function (event) {
    if (event.target !== document && event.target.closest(".js--child--link")) {
      childLinkUp = +new Date();

      if (childLinkUp - childLinkDown < 200) {
        event.target
          .closest(".js--child--link")
          .querySelector("a[href]")
          .click();
      }
    }
  },
  false
);
