---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Unfinished draft I really wanted to publish"
#  image:
#    alt: "Default social image" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
#  robots: "index,follow"
#  title: "Overrides the tab title and social titles"
#permalink: /blog/post-title/
#published: true
#sitemap: true
tags: ["Web Design"]
title: "Why Are We CSS-ing All Stupid?"
---

When evaluating a CSS methodology or new tool, I tend to ask questions:

  * Does this create better designs?
  * Does it help me work faster?
  * Does it produce cross-compatible styles?
  * Does it fit into my current workflow?
  * Does it avoid sprawling stylesheets?
  * Does it use selectors sensibly?

In keeping up with tons of CSS-related blogs, I've learned about techniques that seem like good ideas on the surface, but
which often fall short in the questionnaire.

## OOCSS is kind of just status updates

OOCSS itself was branded "CSS Circa 2009" by its creator. In 2009, we were on the cusp of HTML5/CSS3, and perhaps a majority
of web designers still fretted over IE6 backwards-compatibility. As we approach 2013, it's probably a good idea to revisit
both the conceptual framework and the CSS framework it spawned.

To me, the biggest takeaway of OOCSS is the media class. This is a class for a block element that tends to hold a thumbnail
along with some text. It literally came from (re-)designing the boxes in facebook's timeline. It's often paired with comments,
likes, or other attachments. Media-classed elements can be extended and augmented with multiple classes for particular
applications. The innards of such elements can be targeted for further customization.

The media construct stems from the OOCSS recommendation to use classes near-universally. This allows an input of type
"button" and an anchor to both take the same class and benefit from common styling. However, it also decouples the document
semantics from the stylistic semantics, leading to lots of redundant classes in the HTML rather than redundant styles in
the CSS.

What we've found in the mean time, from the HTML5 camp, are elements specified to enhance document semantics. Likewise,
WAI-ARIA allows us to take HTML elements and assign role-based semantics (among other cool things ARIA does). The
`<article>` tag, for instance, is a suitable container for design projects that require a box like the media class. When
a style convention with arguable semantics appears, it's probably time for a new HTML element

In the OOCSS Google Group,
[stubbornella explained that designing the wrapper for a site isn't necessarily where OOCSS shines](https://groups.google.com/d/msg/object-oriented-css/wHHQ9ul12v0/ggYjt59o9yoJ).
OOCSS, by merit of OOP principles, is most useful for reusable elements; which tend to be in the main content area of a
page. This is a perfectly-reasonable way to do your CSS, but it limits the purview of OOCSS principles.

## Preprocessors are unhelpful

Look at the home pages for all the common CSS preprocessors. They all advertise auto-nesting rules. This might give you
the impression that nesting is a good or useful practice. It is not, for two reasons:

  * Overly-qualified selectors aren't necessary for inheritance in the cascade
  * Nesting is an incredibly leaky abstraction

Another issue is one of workflow. If you design and tweak using Firebug or Chrome DevTools, a preprocessor's generated
styles may not match up with the line numbers in the inspector. And if you make a change, you often have to translate it
into the new syntax before putting it in your stylesheet. By avoiding a preprocessor altogether, what you see is what you
get.

Stylus fucks with the syntax just for the fuck of it.

In most cases the right tool isn't a preprocessor, it's a text expander.

## Bootstrap makes no sense whatsoever

If you're prototyping but (as many claim) should restart from scratch for production, what's the point?

Elements ship with default styles for a reason

Goes to obscene lengths to avoid semicolons in JavaScript (not a CSS thing, but is dumb)

A fool with a tool is still a fool — and it shows in the shoddy one-off sites made in bootstrap

## H5BP gets it most right

Normalize, then extend

Quick note: you really only need/want 1 apple-touch-icon.png in most cases

## The One-size-fits-all Answer for CSS Development

Start with a normalization stylesheet and HTML slug

With media queries for mobile-first responsiveness

With media query for print

With basic layout (role="main" and HTML5 elements)

Take H5BP's advice and get friendly with backspace — delete the conditional-comment head and modernizr if you're not using
it

Implement, then fight, your layout

Layouts aren't always easy

Remember to pad the main container for thumb scrolling on mobiles

Grids help some people, but are they truly a time-saver?

Set 'skin' defaults at the base tag level and try not to override

Avoid classes in favor of tags > roles > other attr

This might sound contrary to other advice, but it's meant to make you think about semantics. Anyone who tells you classes
should be semantic isn't really thinking about semantics at the right level

If you have fewer rules, individual selector performance is less of a concern

The cascade should be used mostly/only for special cases
