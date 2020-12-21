/**
 * @file
 * Load local versions of YouTube thumbnails for performance.
 */

'use strict';

const fs = require('fs');
const request = require('request');

/**
 * Download a file and save it to a filesystem path.
 *
 * @param url
 * @param path
 * @param callback
 */
const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback);
  });
};

/* Get the data feed containing cached lists of videos. */
let rawdata = fs.readFileSync('_data/youtube.json');
let videos = JSON.parse(rawdata);

console.log(videos);

/* Go through each video and save down a thumbnail. */
Array.prototype.forEach.call(videos, (video) => {
  const ytimg = 'https://i3.ytimg.com/vi/' + video.id + '/0.jpg';
  const path = 'assets/images/youtube/' + video.id + '.jpg';
  const cback = () => { console.log('Another thumbnail saved.'); };

  if (!fs.existsSync(path)) {
    download(ytimg, path, cback);
  }
});
