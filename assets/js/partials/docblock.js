/**
 * @file
 * Allow users to toggle classes on example components in docblocks.
 */

document.addEventListener(
  "click",
  function (event) {
    if (
      event.target !== document &&
      event.target.closest(".docblock") &&
      event.target.closest(".docblock--classes--class")
    ) {
      const checkbox = event.target.closest(".docblock--classes--class");

      if (checkbox.checked) {
        checkbox
          .closest(".docblock")
          .querySelector(".docblock--example")
          .firstElementChild.classList.add(checkbox.value);
      } else {
        checkbox
          .closest(".docblock")
          .querySelector(".docblock--example")
          .firstElementChild.classList.remove(checkbox.value);
      }
    }
  },
  false
);
