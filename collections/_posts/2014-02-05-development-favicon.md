---
layout: post
title: Development Favicon
tags: [Technology]
---

Originally posted on [my blog at Commercial Progression](https://www.commercialprogression.com/post/development-favicon).

### tl;dr

  * [Install the Development favicon extension in the Chrome webstore](https://chrome.google.com/webstore/detail/development-favicon/pdfbbnojibegcfdmhcccicmllbbkpeaf)
  * [The code on GitHub](https://github.com/ao5357/development_favicon)

Or read about the extension below.

### About

Here at Commercial Progression we live in a bunch of environments: our local development environment, the staging ecosystem, the QA habitat, and of course production. It's a pretty common thing for website developers; your setup is probably similar.

If you have a whole bunch of tabs open, it's often difficult to tell which tabs are which. You might have three different versions of the same site open, and the only way to tell the difference is to click into the tab and look at the address bar.

Well that simply won't do! There's got to be a better way. Preferably an automated system built on an open source foundation. That's where [Development Favicon](https://chrome.google.com/webstore/detail/pdfbbnojibegcfdmhcccicmllbbkpeaf) comes in.

### Style your favicons
Development favicon lets you select a color and apply one of eight effects (stripes on top, bottom, left, or right, plus background, replace, cover, and xor-top) to the existing favicon for a given site.

You target sites using Regular Expression match patterns.

This setup lets you create patterns once, and have them apply to each new project (assuming the projects have a common pattern). If all your local sites end in ".local", you can add a green stripe to the top in 10 seconds and have it work from now on. Same goes for staging. Sometimes production too.

The settings page (accessible from [chrome://extensions](chrome://extensions)) uses the HTML5 color picker, and features a slick drag-and-drop interface. Your settings get saved as you enter them, and they work wherever you're signed into Chrome.

###Recipes

Here are some ideas for favicons you could colorize:
<table><thead>
  <tr><th>Match</th><th>Example URL</th><th>Pattern</th></tr>
</thead><tbody>
  <tr><td>Local site</td><td>http://example.local/</td><td>.*\.local.*</td></tr>
  <tr><td>Staging site</td><td>http://stage.example.com/</td><td>.*stage\..*</td></tr>
  <tr><td>Second Google account</td><td>https://www.google.com/voice/b/1</td><td>.*google.*\/[bru]\/1.*</td></tr>
  <tr><td>IP Address</td><td>198.168.1.1</td><td>.*?\/\/[\d]{1,4}\.[\d]{1,4}\.[\d]{1,4}\.[\d]{1,4}.*</td></tr>
</tbody></table>

###Contribute
The source code for Development Favicon is completely open and [available on GitHub](https://github.com/ao5357/development_favicon). If you'd like to contribute back to the project, we're open to pull requests.

Looking for expert Drupal website design and development? [Learn more about Commercial Progression](http://www.commercialprogression.com/about).
