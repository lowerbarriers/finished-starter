/**
 * @file
 * Initialize and handle behaviors for YouTube molecule components.
 *
 * Uses the DOM initializer pattern in partials/utility--initializer.js
 */

var youtubeInitializationFunction = function (initType) {
  console.log({
    message: "YouTube video initialized",
    element: this,
  });
};
utilityInitializer("js--youtube", "youtubeInitializationFunction");

/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
var stringToHTML = function (str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

/* Use event delegation for any dynamically-added dismiss events. */
document.addEventListener(
  "click",
  function (event) {
    if (event.target !== document && event.target.closest(".js--youtube")) {
      event.preventDefault();
      let thisVid = event.target.closest(".js--youtube");

      /* The part where we replace the whole thing with an iframe is here. */
      const vidId = thisVid.dataset["youtube"];
      const vidIframe = `<iframe width="960" height="480"
        src="https://www.youtube.com/embed/${vidId}" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""></iframe>`;
      const iframeNode = stringToHTML(vidIframe);

      thisVid.parentNode.replaceChild(iframeNode, thisVid);
    }
  },
  false
);
