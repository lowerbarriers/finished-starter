---
wp_id: 341
layout: post
title: Why Are We CSS-ing All Stupid?
categories: [Web Design]
---

OOCSS is narrow
  "CSS Circa 2009" — on the cusp of HTML5
  Biggest takeaway: the .media element
    When a style convention with arguable semantics appears, it may be time for a new HTML element
  https://groups.google.com/d/msg/object-oriented-css/wHHQ9ul12v0/ggYjt59o9yoJ
    The 'template' part of a design is a meta-container in OOCSS
    This is a perfectly-reasonable way to do your CSS, but it limits the purview of OOCSS
  So within the content area, what exactly needs to be classed, and why?
  Best advice: Have a component library

Preprocessors are unhelpful
  Advertise Nesting even though it's bad practice
  Problems of compilation
    In inspector, the problem doesn't have to do with what line number is displayed (though in many cases that's a concern), it's that prototyping occurs in the inspector. In many cases a preprocessor workflow means immediately re-writing styles into preprocessor syntax rather than a quick copy-paste
  Stylus fucks with the syntax just for the fuck of it
  In most cases the right tool isn't a preprocessor, it's a text expander

Bootstrap makes no sense whatsoever
  If you're prototyping but (as many claim) should restart from scratch for production, what's the point?
    Elements ship with default styles for a reason
  Goes to obscene lengths to avoid semicolons in JavaScript (not a CSS thing, but is dumb)
  A fool with a tool is still a fool — and it shows in the shoddy one-off sites made in bootstrap

H5BP gets it most right
  Normalize, then extend
  Quick note: you really only need/want 1 apple-touch-icon.png in most cases

The One-size-fits-all Answer for CSS Development
  Start with a normalization stylesheet and HTML slug
    With media queries for mobile-first responsiveness
    With media query for print
    With basic layout (role="main" and HTML5 elements)
    Take H5BP's advice and get friendly with backspace — delete the conditional-comment head and modernizr if you're not using it
  Implement, then fight, your layout
    Layouts aren't always easy
    Remember to pad the main container for thumb scrolling on mobiles
    Grids help some people, but are they truly a time-saver?
  Set 'skin' defaults at the base tag level and try not to override
  Avoid classes in favor of tags > roles > other attr
    This might sound contrary to other advice, but it's meant to make you think about semantics. Anyone who tells you classes should be semantic isn't really thinking about semantics at the right level
    If you have fewer rules, individual selector performance is less of a concern
  The cascade should be used mostly/only for special cases