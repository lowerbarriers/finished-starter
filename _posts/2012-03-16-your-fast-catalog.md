--- 
wp_id: 340 
layout: post 
title: Your Fast Catalog 
categories: [Google, Libraries, Web Design] 
--- 
[Canton Public Library's Catalog](http://catalog.cantonpl.org/) uses a large
library application called [Millennium ILS from Innovative Interfaces,
Inc](http://www.iii.com/products/millennium_ils.shtml). Recently, I undertook
to spruce up the images, styles, and JavaScript for our catalog, and in doing
so realized substantial speed increases catalog-wide.

**Note**: The speed enhancements below are mostly about optimizing files and client-side stuff. You can also speed up your catalog on the server side with hardware and database optimization, though doing so is likely to require assistance from Innovative.

### Why

Faster-loading pages make users happier. Some speed-enhancing techniques also
increase server performance and decrease the amount of bandwidth used. Page
speed also factors into search engine rankings, though that is less of a
concern for our catalog than our website.

### How

Most of the improvements came from [Google Page
Speed](http://code.google.com/speed/page-speed/index.html) recommendations.

#### Sprites

**Fact I found interesting**: Before I applied the catalog changes, the directory contained 682 files. It now has 49. Having fewer files doesn't inherently speed up the app, but it does speak to the nature of the changes.

There are two types of images in a Millennium "example set": icons (or whole
buttons as images) and media type indicators. A typical setup, until recently,
had 145 or so button images. The most recent example set available from
Innovative has 45 icons and a couple support images for making buttons. These
images are coupled with some crufty markup to make the buttons work. The
latest set also ships with 39 media indicators (in fairness, we'd use maybe 13
of those for our library).

CPL now has [one image for all the icons](http://catalog.cantonpl.org/screens
/ico-sp.png) and [one image for all the media
indicators](http://catalog.cantonpl.org/screens/media-sp.png). In total, the
catalog screens have 8 images: one is required but never used, [another never
seen](http://www.perlmonks.org/?node_id=7974), and two others used
infrequently. Yes, we grab book jackets from an external service, but that's
the extent of the catalog graphics.

An individual example icon weighs in between 600 bytes and 1.3K. Our icon
sprite is 5.44K. It can be loaded once and [cached on the user's
machine](http://code.google.com/speed/page-
speed/docs/caching.html#LeverageBrowserCaching). For pages with many buttons,
this results in far fewer HTTP requests and a smaller total payload. The same
goes for media indicators.

How do we pull this off? We use two spriting techniques: ['traditional'
sprites](http://css-tricks.com/css-sprites/) and [pseudo sprites](http://css-
tricks.com/pseudo-spriting/). The styles to makes these work can be found in
the [catalog stylesheet](http://catalog.cantonpl.org/screens/styles.css).
What's novel, and how you can pull this off in Millennium, is in carefully
crafting what're called 'wwwoptions':

    
    
    # pseudo sprite example
    ICON_BUT_REQUEST=<span class="but icon request">Request</span>
    
    # traditional sprite example
    IMAGE_MATTYPE3=/screens/spacer.gif" class="media-icon bookmp3
    

As you can see, in both cases activating sprites involves appending classes to
a particular HTML element. In the case of the pseudo sprites, there's a class
that makes anything look like a button, one that pads the left-hand side and
loads the icon sprite image into the space, and one ['request' above] that
stipulates where in the sprite image the request icon appears. In the
traditional sprite, the "IMAGE_MATTYPE3" option _must_ be an image. Since
there's no getting around that, I used a spacer gif. It's 43 bytes � the
smallest practical image for the web. I then [circumvented the wwwoption to
add the classes to the image](http://google-
gruyere.appspot.com/part2#2__stored_xss_via_html_attribute). Those classes set
the background size and position the sprite image.

Be advised that pseudo sprites only work in standards-compliant browsers and
IE8+. If a substantial number of your users are on IE7-, you may want to wait.
Users with non-supporting browsers can still see the button style we use, but
the icons won't appear. Sites that work for everyone but look better for
modern browsers are considered [progressively-enhanced](http://www.alistapart.
com/articles/understandingprogressiveenhancement); that's what you can
consider these buttons.

#### Distrusting Bowker

We use [Syndetics Plus](http://www.bowker.com/en-
US/products/syndetics/plus/index.html), [Librarything for
Libraries](http://www.librarything.com/forlibraries), and [Google Books
previews](http://code.google.com/apis/books/docs/viewer/developers_guide.html)
on our bibliographic record pages. That's a lot of stuff to load. As part of
an overall improvement in JavaScript performance, we changed the way we [pull
in those resources](http://api.jquery.com/jQuery.getScript/).

Syndetics Plus, by default, loads onto a page something like this

  * Page calls widget.js directly, via a script tag
  * widget.js loads jQuery from Google's CDN
  * After jQuery is loaded, widget.js loads widget_connector.js
  * widget_connector.js gets ready, finds ISBNs on the page, and requests an ISBN-specific widget_response.js
  * widget_response.js writes to the page and asks widget_connector.js to do stuff

This is a mess. It's a long chain of [serialized
resources](http://code.google.com/speed/page-
speed/docs/rtt.html#ParallelizeDownloads) that aren't well-cached by the
browser, aren't served [minified](http://marijnhaverbeke.nl/uglifyjs) and/or
[gzipped](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html), can't be
[served over SSL](http://en.wikipedia.org/wiki/Transport_Layer_Security), and
that [block full page rendering](http://code.google.com/speed/page-
speed/docs/payload.html#DeferLoadingJS) until they're complete (whether or not
there's a result). Total payload for this process is 49K.

Librarything for Libraries is even worse ([here I go
again](http://hawidu.com/2010/12/11/librarything-issues/)). It goes:

  * Page calls widget.php (served as javascript) directly, via a script tag
  * widget.php loads connector.php
  * connector.php pulls in connector_LB.css
  * connector.php gets ready, finds ISBNs on the page, and requests an ISBN-specific widget_response.php
  * widget_response.php writes to the page and asks connector.php to do stuff

What makes this process so awful is connector.php. It's over 150K all by
itself, and it includes the [sizzle selector library](http://sizzlejs.com/)
and a bunch of [other](http://robertnyman.com/2005/11/07/the-ultimate-
getelementsbyclassname/) [utilities](http://blog.stchur.com/2007/04/06
/serializing-objects-in-javascript/). Which makes one wonder � why not just
use jQuery? Moreover, why does a file that loads a comprehensive selector
engine need to define getElementsByClassName()? connector.php's JavaScript is
a Frankenstein's monster of code that pollutes the global namespace. I'm
afraid that [some people might be having nightmares over
it](https://twitter.com/librarythingtim/statuses/167130139891728384). This
file also includes all functionality for all different ILSes (not just
Millennium, the one we're using) and all LTfL features (a small fraction of
which we're using). This massive file is unminified and uncompressed and is
part of a call chain that doesn't support HTTP keep-alive. Minifying the file
wouldn't solve all the problems, but it would be less than half the size
(mostly because their variable names are massive). Ditto on gzip compression,
which could make it less than a quarter of its heft over the wire (without
minification!).

We [pull in jQuery from Google](http://code.google.com/apis/libraries/) (the
old-fashioned way, so it client-side caches for just about ever) and use it
for almost all the [(CPL-made)
JavaScript](http://catalog.cantonpl.org/screens/canton.js) on the page. The
code for us to replace Syndetics Plus's payload (25K without jQuery) is 150
bytes before compression. The nearly 200K for LTfL? Less than 1K, and I could
probably optimize further.

CPL-specific code pulls the primary ISBN from bib record pages, validates it,
then makes sure the page is served as regular HTTP. All of this occurs after
the page has already loaded. If the conditions are met, we then feed the ISBN
to the widget_response files from the two services, getting back just the
results specific to the bib record. The widget_response files handle writing
to the page all by themselves, so the service-specific code just adds things
those scripts expect to find and handles certain on-page actions. Since we do
this all asynchronously, the page loads (and _feels_ like it loads) as quickly
as Millennium allows.

Being careful with the three widget services provided the biggest overall
improvement to payload size and page rendering speed. Google Page Speed
eliminated the warnings about redirects, uncompressed resources, request
serialization, unminified javascript, and undeferred scripts.

What's funny about the terribleness coming from Bowker's servers is that a big
part of improving the situation is both easy _and_ a big sack of win. Users
would get faster pages and Bowker'd save on bandwidth and hardware specs. Some
quick apache config of mod_expires and mod_deflate is all that's required to
pay dividends. A deployment scheme involving minification and/or a refactor of
the connector scripts would be more time-consuming, but could make the widgets
substantially faster. Serving out static scripts without query strings would
be a huge help, for instance.

#### More JavaScript Optimization

I was more diligent about jQuery best practices like using [fast
selectors](http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-think-
right-to-left-with-jquery/), [caching selected
objects](http://www.artzstudio.com/2009/04/jquery-performance-rules/#cache-
jquery-objects), and [delegating events to their appropriate
containers](http://thinkvitamin.com/code/john-resig-on-advanced-javascript-to-
improve-your-web-app/).

Millennium has its own JavaScript library. It's ordinarily served out as 3
files, but we weren't having any of that. Our Millennium setup [prevents the
default files from loading](https://docs.google.com/viewer?url=http://www.rodm
anlibrary.com/iug/egl2008/hackthepac.pdf), and instead serves [a single file
with all three components
minified](http://catalog.cantonpl.org/screens/iii.js). iii.js is just under
20K before compression, and 5.2 over the wire. That's 2 fewer HTTP requests
and 4.4K less payload on every page.

#### Image Optimization

I ran all the catalog images through [PNGGauntlet](http://pnggauntlet.com/),
which uses [PNGOUT](http://advsys.net/ken/utils.htm) to reduce file size �
sometimes by 25% or more. For high-use files, I also weighed the quality
reduction of making them 8-bit PNGs; the sprites, for instance, get served out
as 8-bit files, making them substantially smaller.

#### Web Server

I also rolled out [a sprite for the
site](http://www.cantonpl.org/sites/all/themes/zen/cpl/sprites/site-sp-
v011712r1.png)'s layout and theme, optimized the chat widget, and [combined
and minified CSS files](http://lowfatcats.com/blog/1-tutorial/18-how-to-
optimize-javascript-css-linux-using-yui-compressor.html) for use by the
catalog. Our web server, in contrast to the catalog, is pretty aggressive
about caching. Files are served with far-future expires headers. APC for PHP
caches the opcode to minimize file reads; this results in faster execution
speed across the board, but not necessarily faster serving to the end user. We
have [drupal](http://drupal.org/) caching set up, which benefits from MySQL
query caching. Apache gets some love from the OS's buffer cache. Altogether,
the website is a layer of caches.

### What's Next

I'd like to reduce the payload of every page on our site by rolling out a new
theme. There's a lot of extraneous markup and styling that can get cut out
pretty easily. Other possibilities:

  * Optimize images as they're uploaded
  * Minify CSS and JavaScript on [theme deployment](http://liquidninja.com/deploying-with-git/)
  * Defer jQuery and other [scripts](https://developer.mozilla.org/En/HTML/Element/Script#Attributes) on page loads
  * Put stuff into a [cache manifest](http://www.html5rocks.com/en/tutorials/appcache/beginner/)
  * Investigate [mod_pagespeed](http://code.google.com/speed/page-speed/docs/module.html) to do some of this stuff automatically

For the catalog, a few squeaks of extra speed could come from moving static
files to our web server (which has longer cache lifetimes), combining the
[minified] catalog CSS into the site CSS, and working with Syndetics to get
book jackets from URLs without query parameters.

### tl;dr

[Google Page Speed](http://code.google.com/speed/page-speed/index.html).

