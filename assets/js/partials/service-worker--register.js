/**
 * @file
 * Load the service worker script at the site root.
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
