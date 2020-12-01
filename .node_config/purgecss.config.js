module.exports = {
  content: [
    '_site/*.html',
    '_site/**/*.html',
    '_site/**/*.js'
  ],
  css: [
    '_site/assets/css/style.css'
  ],
  keyframes: true,
  variables: true,
  whitelist: [],
  whitelistPatterns: [
    /.*js--event--.*/,
    /.*webp.*/
  ]
};
