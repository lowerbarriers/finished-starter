/**
 * @file
 * Class the body with scroll state.
 */

let scrollY = window.scrollY;

var scrollClasses = function (e) {
  if (window.scrollY > scrollY) {
    document.body.classList.add("body-scroll--down");
    document.body.classList.remove("body-scroll--up");
  } else if (window.scrollY < scrollY) {
    document.body.classList.add("body-scroll--up");
    document.body.classList.remove("body-scroll--down");
  }

  if (window.scrollY === 0) {
    document.body.classList.add("body-scroll--top");
  } else {
    document.body.classList.remove("body-scroll--top");
  }

  scrollY = window.scrollY;
};

var debounce = function (fn, wait) {
  var time = Date.now();

  return function (e) {
    if (time + wait - Date.now() < 0) {
      fn(e);
      time = Date.now();
    }
  };
};

window.addEventListener("scroll", debounce(scrollClasses, 20), {
  passive: true,
});
