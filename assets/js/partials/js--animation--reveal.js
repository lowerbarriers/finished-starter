/**
 * @file
 * Class the body with scroll state.
 */

var swapPictureSrc = function (elem) {
  const dataSrc = elem.querySelectorAll("[data-src],[data-srcset]");
  Array.prototype.forEach.call(dataSrc, (thisSrc) => {
    if (thisSrc.dataset.src) {
      thisSrc.src = thisSrc.dataset.src;
      delete thisSrc.dataset.src;
    } else {
      thisSrc.srcset = thisSrc.dataset.srcset;
      delete thisSrc.dataset.srcset;
    }
  });
  elem.classList.add("picture--lazy-load--loaded");
};

if ("IntersectionObserver" in window) {
  document.body.classList.add("js--animation");

  let animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.intersectionRatio >= 0 &&
          entry.target.classList.contains("picture--lazy-load")
        ) {
          swapPictureSrc(entry.target);
          animationObserver.unobserve(entry.target);
        } else if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add("js--animation--observed");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  var animationInitializationFunction = function (initType) {
    animationObserver.observe(this);
  };
  utilityInitializer("js--to-animate", "animationInitializationFunction");
  /* Wait until blocking resources have loaded to bring in images. */
  window.addEventListener("load", (event) => {
    utilityInitializer("picture--lazy-load", "animationInitializationFunction");
  });
} else {
  const pictureLazyLoad = elem.querySelectorAll(".picture--lazy-load");
  Array.prototype.forEach.call(pictureLazyLoad, (thisPic) => {
    swapPictureSrc(thisPic);
  });
}
