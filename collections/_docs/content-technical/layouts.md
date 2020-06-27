---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Instructions for making layouts."
  #  image:
  #    alt: "Default social image" # It's okay for this to be empty if the image is decorative
  #    src: required/meta-image--default.jpg
  robots: "noindex,follow"
#  title: "Overrides the tab title and social titles"
#permalink: docs/path/page-title/
#published: true
#tags: ["three", "four"]
title: "Layouts"
---

Any page on the site can use the layout utilities included in the CSS to make beautiful, responsive layouts.

## Table of contents
{: .no_toc}

1. TOC
{:toc}

## Basic example

```html
<div class="layout--row display--flex">
  <aside
    class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse"
  >
    <p>Left column content.</p>
  </aside>

  <aside
    class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse"
  >
    <p>Right column content.</p>
  </aside>
</div>
```

The above HTML renders out as:

**Example**:

<div class="layout--row display--flex">
  <aside class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse">
    <p>Left column content.</p>
  </aside>

  <aside class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse">
    <p>Right column content.</p>
  </aside>
</div>

{% include atoms/spacer.html size="4" %}

Let's break down the markup and classes for all this. The above code can be copied as the starter for a layout, but having
an appreciation of _why_ a layout works the way it does will help ensure you don't have to refer to this page all the time.

### Div and aside

The wrapper for any row containing columns should be a semantically-appropriate or meaningless element. In most cases a
`<div>` will do nicely.

Each column, even if it is the bigger column, is an aside, so using `<aside>` is at least not semantically out of bounds.

## Sections/stripes

As is customary on websites in the 2020s, each page consists of horizontal stripes sectioning content from the header all
the way to the footer. Many pages have one big stripe for content, such as blog posts or documentation, whereas full-fledged
pages with storytelling or sales purposes may have additional stripes for calls to action and other uses.

The site includes the `_includes/organisms/section.html` component, which can tentatively be used for any such stripe. However,
there are two main considerations for this:

1. Using Liquid's assign/capture functionality in order to pass in section children/contents is likely more trouble and
   render-time processing than it's worth
2. For most collections, the content is wrapped in a section by default, so adding sections directly to the page is chiefly
   for the 'page' collection (some collections work like pages, but only for `.html` files rather than `.md` files)

For HTML validation and outline-level accessibility, be sure to include an `<h2>` near the beginning of any section you create.

A section/stripe typically has the following markup:

{% raw %}

```html
<section class="layout--stripe">
  <div class="layout--stripe--inner">
    {% include atoms/heading.html children="Describes the section contents"
    classes="" level="2" %} ...section contents here.
  </div>
</section>
```

{% endraw %}

Above, `.layout--stripe--inner` sets a max-width to the maximum content width of the site, and horizontally centers itself.
The main `<section>` tag can take as many classes as needed, such as background-color and images. For accessibility, be sure
to declare `color--white` when applying a dark background.

## Classes

The site's CSS contains a bunch of utility-first classes for constructing layouts. Some of them follow the property--value
convention for CSS relating to flexbox, so a mastery of flexbox and knowledge of the property--value convention for the site's
utility classes will get you most of the way. We'll document the flexbox classes below, nevertheless.

### property--value.css

property--value.css contains any CSS property that has keyword values beyond 'none', 'inherit', and 'initial'. If you're
looking to put `cursor: pointer;` on an element, for instance, you can use the property two dashes value class syntax and
apply

```html
<div class="cursor--pointer"></div>
```

instead. The following class categories are the ones most applicable to layouts.

#### `align-content--`

The classes

- `.align-content--flex-start`
- `.align-content--flex-end`
- `.align-content--center`
- `.align-content--space-between`
- `.align-content--space-around`
- `.align-content--space-evenly`
- `.align-content--stretch`

apply the keyword property values for [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).

Typically in layouts the vertical and horizontal alignment is applied to different elements (`layout--row` and `layout--column`),
so cross-axis settings are rare.

#### `align-items--`

These classes are also used sparingly, but can be used especially when centering.

- `.align-items--flex-start`
- `.align-items--flex-end`
- `.align-items--center`
- `.align-items--baseline`
- `.align-items--stretch`

One quick way to attempt vertical centering is to put align-items on the container. However, often the more resilient vertical
centering rests with flex-direction--column and justify-content--center instead.

#### `align-self--`

This is a super rare set of classes to use in a typical layout, but are available nonetheless.

- `.align-self--flex-start`
- `.align-self--flex-end`
- `.align-self--center`
- `.align-self--baseline`
- `.align-self--stretch`

#### `display--`

The display property is key to setting a container to a flexbox layout.

- `.display--flex`

Adding this class to a container, on its own, puts its children in a flex context. Additional classes will augment the
children.

#### `flex--`

Some of the standard layout keyword values include auto, initial, and none. These largely have the effect of making the
flex child take the space it needs, with auto making it take up the remaining space.

- `.flex--auto`
- `.flex--initial`
- `.flex--none`

The 1-6 numbered flex classes allow for proportional layout:

- `.flex--1`
- `.flex--2`
- `.flex--3`
- `.flex--4`
- `.flex--5`
- `.flex--6`

A layout containing a `flex--2` and two `flex--1` children would have a 50/25/25% layout in its
respective direction.

#### `flex-direction--`

Chiefly, flex-direction--row (the default) sets layouts horizontally, while flex-direction--colulmn
places them vertically.

- `.flex-direction--row`
- `.flex-direction--row-reverse`
- `.flex-direction--column`
- `.flex-direction--column-reverse`

Each of the reverse classes/values can be used for creating alternating layouts, or for otherwise augmenting the source
order without using the `order` property.

#### `flex-wrap--`

By default, flex containers do not wrap their children. The flex-wrap--wrap class can be added to create layouts that
continue to a second line, for instance.

- `.flex-wrap--nowrap`
- `.flex-wrap--wrap`
- `.flex-wrap--wrap-reverse`

#### `justify-content--`

The justify-content property is the most useful plain modifier class for layouts. It sets the orientation of the children
within a flex container to the start, center, or puts available space between the items.

- `.justify-content--flex-start`
- `.justify-content--flex-end`
- `.justify-content--center`
- `.justify-content--space-between`
- `.justify-content--space-around`
- `.justify-content--space-evenly`
- `.justify-content--stretch`

### utility--classes.css

There are plenty more classes in this file, but the following are most useful for making engaging sections and layouts.

#### `a11y--visually-hidden`

The `.a11y--visually-hidden` class is useful for section headings and other elements that should not appear visually, but
are semantically necessary or accessibly useful. It hides the content except when it or its children has `:focus`.

#### `background-image-display-mobile--hide`

`.background-image-display-mobile--hide` is useful when you use a busy photographic background image that looks good on
desktop, but may impede legibility on mobile. It will hide background images for viewports narrower than 1023px.

### utility--layout.css

All the layout classes reside here, and most are namespaced with `.layout--` to make them easy to see when scanning markup.

#### `layout--column`

All `<aside>` elements or others serving as columns in a layout should have the `.layout--column` class. It sets a min-width
in case flex-shrink settings would otherwise smush the column to a tiny size. When the layout collapses to a single column,
the class also sets reasonable top and bottom spacing that aren't necessary when the columns are side-by-side.

#### `layout--column--empty`

Use `.layout--column--empty` when a column has no content but is inserted to fill space. When the layout collapses to a single
column any element with this class will be hidden.

#### `layout--multiple--horizontal`

`.layout--multiple--horizontal` is slightly different conceptually from the other layouts in this guide. The layout--multiple--horizontal
class can be placed on a wrapper (ideally a `<ul>` or `<ol>`) and all the direct children are laid out three wide and wrapping.
This is ideal for the 'card' UI pattern.

As with `layout--row`, the cards go to a single column at narrow viewports.

Often this works best if you can automatically add `.flex--1` to all the child cards.

#### `layout--row`

The `.layout--row` class allows the row (containing one or more columns) to wrap if needs to, starting at 1023px and narrower,
and forces a single-column layout at 767px and narrower.

#### `layout--stripe`

`.layout--stripe` pads sections responsively. At desktop-ish viewports the padding is bigger, while on smaller viewports
there is slighly less vertical padding to account for the smaller screen real estate.

### utility--spacing.css

The utility--spacing.css file has classes for putting margin and padding on elements, and handling that spacing responsively.

#### `margin-horizontal--`

`.margin-horizontal--0`, `.margin-horizontal--1`, `.margin-horizontal--2`, `.margin-horizontal--4`, `.margin-horizontal--8`,
`.margin-horizontal--16`, `.margin-horizontal--32`

#### `margin-horizontal--collapse`

Often the margin put on an item for desktop display is too large for mobile. The `.margin-horizontal--collapse` gets rid
of horizontal margins on elements at narrow viewports, so everything displays in a neat column and obeys the box model and
overflow rules.

#### `margin-top--auto`

`.margin-top--auto` is particularly useful for pushing an element to the bottom of the column (such as a "read more" link)
when using a `layout--column` or `flex-direction--column` where the content does not flex-grow to fill the entire space
necessarily.

#### `margin-vertical--`

The margin-vertical classes, like their padding counterparts, apply vertical spacing in the same units as the horizontal
classes, but in the other direction. Vertical margin and padding need not have full-fledged collapse rules (horizontal
spacing interacts with the edges of the viewport, whereas vertical spacing most often contributes to scroll length, so
for practical purposes we are stringent about horizontal spacing and lax about vertical spacing), but the larger classes
halve in size for small viewports.

- `.margin-vertical--0`
- `.margin-vertical--1`
- `.margin-vertical--2`
- `.margin-vertical--4`
- `.margin-vertical--8`
- `.margin-vertical--16`
- `.margin-vertical--32`

#### `padding-horizontal--`

The horizontal padding classes use the same units as all the other spacing classes, and like `margin-horizontal--` there
is a `.padding-horizontal--collapse` class available for quick responsiveness.

- `.padding-horizontal--0`
- `.padding-horizontal--1`
- `.padding-horizontal--2`
- `.padding-horizontal--4`
- `.padding-horizontal--8`
- `.padding-horizontal--16`
- `.padding-horizontal--32`,

#### `padding-horizontal--collapse`

`.padding-horizontal--collapse` collapse the horizontal padding applied by the regular classes when you get down to narrow
viewports, allowing columns to have a lot of breathing room at desktop but maintain a clean left line of content on mobile
devices and other narrow viewports.

#### `padding-vertical--`

The vertical padding classes should be used fairly sparingly, since a flex column with `justify-content--` classes appied
is overwhelmingly more likely to accomplish the desired effect. For more fixed applications, and for facilitating the spacer
component, these classes can give you vertical internal spacing.

- `.padding-vertical--0`
- `.padding-vertical--1`
- `.padding-vertical--2`
- `.padding-vertical--4`
- `.padding-vertical--8`
- `.padding-vertical--16`
- `.padding-vertical--32`
