/**
 * @file
 * Include the Twitter widget script when needed and render tweet embeds.
 *
 * Uses the DOM initializer pattern in partials/utility--initializer.js
 */

var twitterTweetInitializationFunction = function (initType) {
  /* Conditionally add the twitter script if there are tweets on the page. */
  if (!document.body.classList.contains("twitter-tweet--script-attached")) {
    var script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.insertAdjacentElement("beforeend", script);
    document.body.classList.add("twitter-tweet--script-attached");
  }

  /* Let Twitter do its thing. */
  if (
    typeof twttr !== "undefined" &&
    typeof twttr.widgets.load === "function"
  ) {
    twttr.widgets.load();
  }
};
utilityInitializer("twitter-tweet", "twitterTweetInitializationFunction");
