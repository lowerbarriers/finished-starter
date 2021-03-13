
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/lowerbarriers/finished-starter)
![GitHub language count](https://img.shields.io/github/languages/count/lowerbarriers/finished-starter)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[THIS one click and you'll have a website](https://github.com/lowerbarriers/finished-starter/fork)

[![finshed-starter](assets/images/required/readme-screenshot.jpg)](https://lowerbarriers.org/finished-starter)

This is great code to copy if you want a full-fledged site **completely free** out of the box on day one,
that you can customize and extend to suit your needs.

All the repetitive stuff for content, performance, SEO, accessibility, testing, etc. is done, so you can focus on what
makes your site special.

**Some of the wheels you won't have to reinvent**:

  * **Blog** — with pagers, categories, tags, and bylines
  * **Events** — with listings for current/future events and also past events
  * **Forms** — results sent to your email automatically. Also a mailchimp subscription form
  * **E-commerce** — products, cart, the whole deal ready to go
  * **Search** — it just works
  * **Pages and content** — Home, About, Privacy Policy, Terms and conditions, it's all there
  * **Atomic components** — Insert fancy components, including layouts, anywhere you want
  * **Accessibility** — Maybe not perfect <abbr title="Accessibility">a11y</abbr>, but we _try_ and care
  * **Icons** — Easy to use and accessible
  * **Vanilla code** — Better CSS than tailwind, less CSS needed than... anything!
  * **Feeds and SEO** — All of the tags and feeds you could want. Social share images, too
  * **Cloud CMS** — Forestry.io set up, so you can manage your site easily
  * **Progressive Web App (PWA)** — Your site is offline-capable and installable on devices
  * **Performance** — Tons of optimizations to eke out extra milliseconds of speed
  * **Documentation** — A site with a design system and more docs than you'll believe

## Just one example of why this code rocks

Let's say you want to embed a tweet on a page. On any site you can paste the embed code:

```html
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Do you have feedback on how to make the finished-starter github page more appealing? 
  </p>
  &mdash; Brad Czerniak solves it once! (@ao5357) 
  <a href="https://twitter.com/ao5357/status/1336690590893953029?ref_src=twsrc%5Etfw">December 9, 2020</a>
</blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

As far as embed codes go, Twitter's isn't bad. But on a finished-starter site if you use the liquid component 
built into the system (and pass it some props):

```
{% include molecules/tweet.html
  classes=""
  children="Do you have feedback on how to make the finished-starter github page more appealing? "
  date="December 9, 2020"
  url="https://twitter.com/ao5357/status/1336690590893953029"
%}
```

...you can manage from the [all-in-one component definition](https://github.com/lowerbarriers/finished-starter/blob/gh-pages/_includes/molecules/tweet.html) 
things like the "Do not track" attribute and color theme site-wide for consistency and to protect your users.

The [site's component script](https://github.com/lowerbarriers/finished-starter/blob/gh-pages/assets/js/partials/twitter-tweet.js) 
will only load the twitter third-party JavaScript if there's tweets on the page (which is important for privacy and performance), and 
will automatically load embeds if new ones are added to an already-loaded page.

If you ever need to look up how to embed a tweet, [your own site's documentation has a whole section about it](https://lowerbarriers.org/finished-starter/docs/design/molecules/). 
And that's far from the only documentation you get on day one!

## Installation

  1. Fork the repository (button at top of repo page)
  2. On your forked repository page, go to 'Settings' and rename the repository to match your desired behavior
    * Most of the time you will want `user/organization-name`.github.io
    * It can also be any name, typically using the `gh-pages` branch
  3. Edit to your heart's content

If you want to use netlify,
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lowerbarriers/finished-starter)

If you prefer Vercel,
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/lowerbarriers/finished-starter)

Presently **Cloudflare Pages** doesn't have a one-click deploy button (to our knowledge), but 
[the Cloudflare Pages demo here](https://finished-starter.pages.dev/) demonstrates that it's quite possible to do:

  1. Fork the repo
  2. Sign in to Cloudflare and select Pages from the bottom sidebar
  3. Connect your GitHub account and add your fork
  4. Set the production branch to `gh-pages`, "Build command" to `jekyll build --config _config.yml,_config.localdev.yml`, and "Build output directory" to `_site`

### Creating a local version for development

  1. Clone the repository to your local machine
  2. `cd` into it
  3. Run the command `bundle install` in the root of the project to get the Jekyll standard items (requires
    [bundler](https://bundler.io/))
  4. Run `npm install` in the root of the project for non-required build dependencies (requires node and npm)
  5. Run `bundle exec jekyll serve --verbose --config _config.yml,_config.localdev.yml` to build and serve your site to
    `http://localhost:4000/`

Optionally you can look at the comments in the `.scripts/` directory for any image (optipng, pngcrush, jpegoptim, webp, avif)
and other dependencies for optimizing assets on the back end. This helps improve front-end performance if you can manage it.

You can run the `.scripts/` from the project root, ideally when the server is not running since it will trigger a rebuild.

```shell script
user@computername $ .scripts/images.sh
```

and

```shell script
user@computername $ .scripts/pre-commit.sh
```

#### Aggressive caching

While the service worker cache should increment every time the site builds, often you will have to use the 'Application'
tab of the devtools to clear all site storage and caches. Keeping the devtools open also allows you to right-click the refresh
button to select "Empty cache and hard reload".

This is a mild inconvenience you learn to live with and admire, and is a reminder that front-end performance and optimization
is important.

## Features

[![finshed-starter](assets/images/required/meta-image--default.jpg)](https://github.com/lowerbarriers/finished-starter)

The original version of this codebase gets four 100s in [Lighthouse](https://github.com/GoogleChrome/lighthouse) testing,
has valid HTML per [the w3 validator](http://validator.w3.org/), and has zero errors per [the WAVE tool](https://wave.webaim.org/).
Also the following:

  * Most configuration in a single `_config.yml` file, for easy start-up (including Google Analytics and social links)
  * [Atomic design](https://atomicdesign.bradfrost.com/) implemented as consistent, templated includes, using
    [inclusive components](https://inclusive-components.design/) patterns where possible
  * JSON [Design tokens](https://css-tricks.com/what-are-design-tokens/) (compatible with [style-dictionary](https://github.com/amzn/style-dictionary))
    populate both the design system's CSS decisions and the automatic documentation
  * **Real HTML** generated by the static site generator, so users and search engines get content immediately and reliably
  * VS Code, [.editorconfig](.editorconfig) and GitHub Codespaces settings for quick dev setup anywhere
  * All the trappings of [Jekyll](https://jekyllrb.com/docs/) on [GitHub Pages](https://pages.github.com/):
    [markdown](https://kramdown.gettalong.org/quickref.html) content, [YAML front matter](https://jekyllrb.com/docs/front-matter/),
    [Liquid templates](https://shopify.github.io/liquid/basics/introduction/), GitHub builds, git revision tracking
  * Generous built-in documentation your team can use: style guide, components, UX, instructions
  * Print, `prefers-reduced-motion`, and dark mode styles already in place that you'll never need to touch
  * [Skip links](https://a11yproject.com/posts/skip-nav-links/) and plenty of other accessibility (a11y) optimizations
  * Dismissible alerts, both site-wide and reusable in content
  * Site works without JavaScript, with all features failing safe and [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)
  * Easy-to-reuse call-to-action (CTA) and other sections on any page
  * [JAMstack](https://jamstack.org/) as can be, with one-click Netlify compatibility (below)
  * [SVG icons embedded](https://css-tricks.com/icon-fonts-vs-svg/) as components. [Octicons](https://octicons.github.com/)
    and [social icons](https://simpleicons.org/) included out of the box
  * Zero front-end dependencies and _clever_ **vanilla JavaScript** so there's less code to write
  * Utility-_first_ CSS using a syntax everyone on your team can fully memorize in less than five minutes
    (ex: `.font-style--italic`, `.background-color--main-dark`, and `.display--flex`)
  * "Vanilla CSS": full embrace of CSS custom properties that makes Sass unnecessary. Very flat
    [specificity graph](https://jonassebastianohlsson.com/specificity-graph/)
  * Clean break = [**no** Internet Explorer support](https://support.microsoft.com/en-us/help/17454/lifecycle-faq-internet-explorer-and-edge).
    It's the 2020s. Friendly conditional-comment message for IE users just in case
  * [webp](https://www.tecmint.com/convert-images-to-webp-format-in-linux/) and [avif](https://jakearchibald.com/2020/avif-has-landed/)
    next-generation image formats support built in via scripts and components
  * Baked-in site search single-page app (SPA) simulating HTTP GET, with title boosts, highlighted excerpts, and History API
  * 'Collections' (AKA "content types") with semantic value: docs, events, forms, people, posts, products, pages
  * [Service worker](https://web.dev/service-worker-mindset/) with offline capability.
    Installable progressive web app (PWA) on day one
  * Configuration for the [Forestry.io static-site content management system](https://forestry.io/) (CMS) ready to go
  * [Snipcart static e-commerce](https://snipcart.com/) ready to go, with performance and privacy optimizations and an
    easy fetcher JSON file
  * Example forms for [formsubmit.co](https://formsubmit.co/) and [mailchimp](https://mailchimp.com/help/add-a-signup-form-to-your-website/)
    that make customization easy
  * [Variable fonts](https://github.com/uswds/public-sans) included and prefetched to optimize payload
  * Lazy-loading images and stylesheets, async scripts, HTTP prefetch support, minification, and other performance optimizations
  * RSS and [JSONfeed](https://jsonfeed.org/) serialization for blog posts and events
  * `<meta>` tags of all kinds, for search engine optimization (SEO), social (open graph, twitter, _et al_), and interoperability
  * robots.txt and auto-generated XML sitemap. Also a neat, sectioned HTML sitemap for humans browsing
  * Social share "floating action button" that respects privacy for [browsers with native compatibility](https://caniuse.com/#feat=web-share)
  * Some [schema.org](https://schema.org/) support already implemented as microdata
  * [Humans.txt](http://humanstxt.org/) automated from configs so you don't have to worry about it
  * Optional CSS and JS optimization via nodejs
  * Entire codebase in one place -- no opaque "Jekyll themes" or build-breaking plugins
  * Browser support list `.browserslistrc` used for both testing and documentation
  * [Lighthouse-compatible performance budget JSON](https://web.dev/use-lighthouse-for-performance-budgets/) used for both
    testing and documentation
  * GitHub Action for the [Percy visual-regression-testing web service](https://percy.io/) included
  * "Micro-animations" provided by the utility CSS library and vanilla JS
  * All documentation written generically so you don't have to customize it: Terms, Privacy Policy, Content Guide, everything
  * All .github and open-source files written generically so you don't have to worry about them
  * Cookie consent sticky footer to aid GDPR and CCPA compliance
  * Copious code comments throughout, for the right information when you need it
  * JSON files of site content and settings available for quickly making javascript front ends if desired
  * Four pre-configured menus: utility, main, footer, copyright
  * Editor configs and linters in place for consistent code styles
  * **Test coverage**: behavioral-like "user story" test definitions for both human and automated verification

## Customizing

You will find a lot of code comments and documentation along the way, but the first four things you should do to customize
the base site for your needs:

  1. Edit `_config.yml` per the inline instructions to your site's name and information
  2. Replace the generic images in `assets/images/required/` with your logo and defaults (the various sizes are used for
    installing to home screens and other purposes)
  3. Also replace `favicon.ico` and `apple-touch-icon.png` in the repo root with your logo mark
  3. Go to `_data/design-tokens/` and update the design tokens in the JSON files to your brand colors and other styles

The design tokens are broken up into three top-level sections:

### 1. lang

The lang folder of the design tokens is for translatable strings mostly. Each JSON file within the directory should be the
two-letter language code to which the strings should apply.

Since the `content` property of CSS pseudo-elements should be used sparingly and with consideration to accessibility, the
lang folder should be used minimally.

An aside: it is not necessary to use the lang directory for rtl support.

### 2. root

The root folder's contents all get set as CSS custom properties to the `:root {}`.

By default, the `_data/design-tokens/root/colors.json` file has black, white, three greys, three shades of three brand
colors (main, second, third), and a single shade of an accent color for good measure. For most sites most of the time,
this should be more than enough colors. And `assets/css/utility/utility--color.css` provides all those tokens as both
foreground and background color classes to the application front-end.

One color consideration worth over-emphasizing is that the 'main' color should be the most blue-like color if possible.
Main is used for links, so using blue helps signify their affordance (along with underlines).

The kit splits the root tokens out by property/namespace, though any file naming strategy you prefer can be used instead.
The custom properties are built from the JSON structure rather than the filenames, so renaming any JSON file has no effect.

### 3. scoped

The `_data/design-tokens/scoped/` directory is for styles outside of the `:root {}` scope. This could be one-off or non-branded
components, and especially for preventing unintended component pollution.

You can scope to tags and classes, or some combination of those. The filenames of the design tokens within the directory
are parsed as the selectory scope:

Double-underscores become spaces, single underscores become periods, with double-underscores evaluated first.

> Example:
> This file: `_data/design-tokens/scoped/div__a_street-sign___font-family--secondary.json`
> Places all its custom properties in the following scope: `div a.street-sign .font-family--secondary {}`

### fonts

Fonts are not design tokens _per se_ like above, but setting a new font includes a trip to the design tokens.

If you'd prefer to switch from the default high-performance Public Sans variable font to a brand font, do the following:

  1. Download the font as woff2 files to `assets/fonts/` in a directory that's the short name of the font, like `assets/fonts/lato/lato.woff2`.
    The [google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts) is great for this
  2. Update `assets/css/font-face.css` with the font name and file locations. Be sure to keep the `font-display: swap;` directive
    in each declaration for performance
  3. Update `_data/design-tokens/root/font-family.json` to reflect the new font name
  4. Add the file locations to the `woff:` section of `_config.yml` to prefetch the files and avoid round-trips
  5. Do a build/serve and possibly run the `.scripts/pre-commit.sh` script to update all the CSS
  6. Once you've confirmed the new font is working, you can optionally delete other fonts from the `assets/fonts/` directory

Please note for performance and privacy that you should use the above method, rather than making a third-party call to
Google Fonts API or similar services.

### Site-specific customizations

#### Content

Almost all the content for the site is within the `collections` directory, sub-divided by collection/type. You can update
all the content there to mesh with your site's purpose.

The content included when you install the site is a mix of generic and example content, and the YAML front matter has a
full range of the available modifiers for the collection the content belongs to. Some of it is commented out with a `#`;
you can remove the comments to activate some additional matter.

#### Assets

CSS and JavaScript can be edited at `assets/css` and `assets/js`, respectively. Each of those directories contains a `pre-commit-dependency`
folder with an optimized file. These files should **not be edited by humans**, but are rather generated via `.scripts/pre-commit.sh`
and controlled by the `no_pre_commit_dependencies:` directive in `_config.yml`.

The pre-commit script runs [purgeCSS](https://purgecss.com/) on the styles to include only CSS in use on the site, and
the JavaScript gets minimized using the [terser library](https://terser.org/).

#### CSS

The CSS is broken out into utility files and theme files. **Both are appropriate to edit** for customization. The distinction
between utility files and theme files is that utility files _feel_ more like they don't need to be edited from project to
project -- they're little classes that do one thing and rely on known `:root {}` properties. Theme files more closely match
customizations particular to a site.

When developing, start by getting tag-level styles in `assets/css/theme/theme--base.css` as close as possible before adding
or changing class-level styles. This prevents duplication and over-specifying. The documentation pages for style, components,
and mood are great pages to test against for the base styles.

#### JavaScript

Functionality on the site is broken out into little partials that do one or two things, and are then concatenated and minimized
in the `assets/js/behavior.js` file.

Per the [JavaScript documentation](collections/_docs/content-technical/javascript.md), the utility--initializer can be used
to ensure scripts run dynamically without degrading main-thread performance.

Note that block comments `/* Example block comment. */` rather than inline comments `// Two slashes` should be used, since
the two-slash inline comments can accidentally comment out subsequent code when the Jekyll-primitive minification is run.
Similarly, all terminating statements should end with semicolons. This is a small price to pay for convenience, and arguably
is the more agreed-upon style for most developers anyway.

#### Images

The `assets/images/` directory contains a `1200x630` sub-folder. You're encouraged to create images at this size for both
social sharing (via `<meta>` tags) and on-screen display for cards and similar. This size works well as a responsive middle
ground, and the aspect ratio is pretty standard and attractive. Place all images of the 1200x630 size in that directory.

Graphic designers on your team are best served knowing 1200x630 is the preferred size and aspect ratio for images ahead of
time.

See `/scripts/images.sh` for instructions and commands to optimize JPEG and PNG files, as well as the script's core purpose
of generating avif/webp versions of image assets. The webp version will be the original filename with '.webp' appended --
and the image component uses this pattern to figure out whether a webp version exists in order to include it.

When including images in content, overwhelmingly prefer the liquid include `_includes/atoms/image.html`:

```liquid
{% include atoms/image.html
  alt="A good description of this image"
  caption="This prop is optional and renders as a figcaption"
  classes=""
  src="1200x630/example-image-name.jpg"
%}
```

over markdown or hard-coded HTML. This ensures the avif/webp images, lazy loading, and `<figure>`/`<picture>` semantics
work consistently across the site.

## Reasoning

Every tool out there -- wordpress, drupal, create-react-app, plain static site generators, even services like Wix and
SquareSpace -- come out of the box missing _something_. For CMSes it's default content and often a bunch of plugins, for
frameworks it's **everything but the framework**, and for services it's flexibility and baked-in accessibility. This
codebase is different; it comes with everything you need to have a working, launch-ready site on day one.

And it's **free**. Free as in beer, speech, dependencies, everything.

The core ideas around which decisions were made for this kit:

  * Starter kits can ship with content!
  * Documentation written generically can be reused without much modification
  * Some amount of UX and other documentation is always the same from project to project
  * Every site can benefit from its own style guide, even if the brand has a standalone guide. It helps balance prescriptive
    and descriptive style guide usages
  * Unless you need to support IE11 for business reasons, dropping support facilitates a hard, opinionated move toward non-Sass
    CSS custom properties and library-less vanilla JS
  * Demonstrating the benefit of standard HTML + CSS + JS with some nicely-opinionated usage is better than complaining about
    giant libraries and CSS-in-JS
  * SPAs and JS libraries have their place, and can be used within a vanilla base site. But the vanilla site comes first
  * JavaScript works best for the most circumstances when it listens to both DOM mutations and event bubbling
  * CSS class names can be long and descriptive, and gzip will do its job
  * Code can often pull double duty as the source for documentation
  * Content can and should be represented all the ways a consumer might use it. JSON is easy enough to generate
  * Code comments should be all over the place. jQuery was used because it was useful. It was loved because it was well-documented
  * Full-featuredness, openness, cleverness, and DRY-ness all take precedence over SSG build time
