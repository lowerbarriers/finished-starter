/**
 * @file
 * Bubbling and manipulation of elements based on their children.
 */

/**
 * Give external links target="_blank" and rel="noopener"
 *
 * @type {NodeListOf<HTMLElementTagNameMap[string]>}
 */
const allAnchors = document.querySelectorAll("a");
if (allAnchors.length) {
  Array.prototype.forEach.call(allAnchors, (thisAnchor) => {
    if (
      thisAnchor.href.length &&
      thisAnchor.hostname !== window.location.hostname &&
      thisAnchor.href.substring(0, 6) !== "mailto" &&
      thisAnchor.href.substring(0, 3) !== "tel" &&
      thisAnchor.href.substring(0, 1) !== "#"
    ) {
      thisAnchor.setAttribute("target", "_blank");
      thisAnchor.setAttribute("rel", "external noopener noreferrer");
    }
  });
}
