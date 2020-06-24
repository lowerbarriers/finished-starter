/**
 * @file
 * Demonstration of the Speech Synthesis API.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 */

if ("speechSynthesis" in window) {
  let synth = window.speechSynthesis;

  document.addEventListener("click", function (event) {
    let utter = new SpeechSynthesisUtterance(document.body.textContent);
    synth.speak(utter);
  });
}
