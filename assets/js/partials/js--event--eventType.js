/**
 * @file
 * Manipulate classes and data attributes when an event occurs within a classed element.
 */

if (Element.prototype.closest) {
  /**
   * All events that bubble inside the document,
   * but that we also do not need to debounce (resize, scroll).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Events
   */
  const eventTypes = [
    "animationcancel",
    "animationend",
    "animationiteration",
    "animationstart",
    "blur",
    "canplay",
    "canplaythrough",
    "change",
    "click",
    "compositionend",
    "compositionstart",
    "compositionupdate",
    "contextmenu",
    "dblclick",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "durationchange",
    "emptied",
    "ended",
    "focus",
    "focusin",
    "focusout",
    "fullscreenchange",
    "fullscreenerror",
    "gotpointercapture",
    "input",
    "loadeddata",
    "loadedmetadata",
    "lostpointercapture",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pause",
    "play",
    "playing",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "ratechange",
    "reset",
    "seeked",
    "seeking",
    "show",
    "slotchange",
    "stalled",
    "submit",
    "suspend",
    "SVGAbort",
    "SVGError",
    "SVGLoad",
    "SVGResize",
    "SVGScroll",
    "SVGUnload",
    "SVGZoom",
    "timeupdate",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
    "transitionend",
    "unload",
    "volumechange",
    "waiting",
  ];

  eventTypes.forEach((eventType) => {
    document.addEventListener(
      eventType,
      function (event) {
        if (
          event.target !== document &&
          event.target.closest(".js--event--" + eventType)
        ) {
          let elem = event.target.closest(".js--event--" + eventType);
          const eventTypeCamel =
            eventType.charAt(0).toUpperCase() +
            eventType.slice(1).toLowerCase();

          /* Once */
          elem.classList.add("js--event--" + eventType + "--once");

          /* Count (data attr) */
          if (elem.dataset["jsEvent" + eventTypeCamel + "Count"]) {
            elem.dataset["jsEvent" + eventTypeCamel + "Count"]++;
          } else {
            elem.dataset["jsEvent" + eventTypeCamel + "Count"] = 1;
          }

          /* Toggle */
          elem.classList.toggle("js--event--" + eventType + "--toggle");
        }
      },
      false
    );
  });
}
