---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Presenter notes for a Drupal presentation"
#  image:
#    alt: "Default social image" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
#  robots: "index,follow"
#  title: "Overrides the tab title and social titles"
#permalink: /blog/post-title/
#published: true
#sitemap: true
tags: ["Web Design"]
title: "Drupal is the Answer"
---

Here are the slides and notes from my [June 16th presentation for Refresh Detroit](http://refresh-detroit.org/2010/06/22/recap-drupal/).
I was fortunate enough to be joined by [Alex Fisher](http://www.commercialprogression.com/) and
[Stephen Colson](http://switchbackcms.com/), who really brought everything together and luckily had all the answers. Thanks
again, guys.

<iframe src="http://docs.google.com/present/embed?id=dhsbt2xj_455hj4c9vgb&amp;size=m" frameborder="0" width="555" height="451"></iframe>

The following notes do not reflect the actual presentation. If video evidence comes along to prove this, I will add it to
the bottom of the post.

## Slide 1 — Welcome

Hey, I'm Brad Czerniak. I'm the web guy at [Canton Public Library](http://www.cantonpl.org/).

Thank you very much for coming to see this presentation today. And especially thank you to [Deborah](http://lireo.com/),
for inviting us to speak. I hope that what we're talking about will be useful.

My presentation is decidedly impractical — I'm gonna try to explain what Drupal is and some of how it works.

I'll be followed by two really energetic and talented guys:
[Alex Fisher from Commercial Progression](http://www.commercialprogression.com/), and
[Stephen Colson from Switchback CMS](http://switchbackcms.com/). They will put the rest of the puzzle together with real
world sites and practical demos.

Before moving on, I'd like to thank all the people who contributed to this crowdsourced presentation, and all the
[local](http://www.facebook.com/group.php?gid=108075972555061&ref=ts) [Drupal](http://www.meetup.com/midrupal/) user
[groups](http://groups.drupal.org/ann-arbor) for their support and advice.

## Slide 2 — Drupal is the answer

### So, right off the bat

[Drupal](http://www.drupal.org/) is free and open source. It's released under the
[GNU Public License](http://www.gnu.org/licenses/licenses.html#GPL), which is the same license used for the Linux kernel
and around 60% of open source software.

You may have heard of LAMP. I love lamp. It stands for

  * [Linux](http://en.wikipedia.org/wiki/Linux)
  * [Apache](http://en.wikipedia.org/wiki/Apache_HTTP_Server)
  * [MySQL](http://en.wikipedia.org/wiki/Mysql)
  * [PHP](http://en.wikipedia.org/wiki/Php)

While Drupal could be considered a typical LAMP application, you should note that only the P is strictly necessary. It can
run on Windows or Mac, with various web servers, and with a few different database systems. It is written in the PHP
programming language, so you're kinda stuck with that requirement.

It's been around for nearly 10 years and a [whole new version](http://drupal.org/project/drupal) is set to be released soon.

### Drupal is the answer, but what's the question?

  * Do you want a powerful website?
  * Do you want to add more features later?
  * Do you need support?
  * Do you want different users to do different stuff?
  * Do you want options? There's an easy way and a hard way for everything in Drupal

I have to admit something now.

## Slide 3 — Drupal kinda sucks (right out of the box)

If I have learned anything in the last two years, it's that Drupal is not a
[Ronco Showtime Rotisserie](http://en.wikipedia.org/wiki/Ron_Popeil#Inventions).

It's not "Set it and forget it."

This out-of-the-box unimpressiveness is by design, though. The use case for Drupal is for a site more sophisticated than
a small personal blog. It's assumed that you'll customize the site to some degree before unleashing it on the public. It's
not strictly necessary, but a site based on a basic Drupal install won't turn any heads.

Drupal also has a notorious learning curve, partly due to an administrative interface that tends to scare away beginners.
Luckily, one of the big features for the upcoming version is a [big improvement in usability](http://groups.drupal.org/usability).

Let's take a look at what you get out of the box.

## Slide 4 — Your New Site

It's like this.

A blue-and-gray theme called "Garland" is set by default, and you have two content types — page and story.

If you install Drupal for the first time, this can be an incredibly scary sight.

Content types are important: They range from "blog post" to page to a form to external content from RSS feeds to whatever
you can dream up. Each content type has a bunch of options:

  * Whether or not you want them to take user comments
  * Which users you want to be able to create, edit, or delete content of that type
  * Whether you want new posts of that type to show up on the homepage

Stuff like that. You can set all of that on your website if you're an administrator. No coding necessary. Once you get the
hang of it, It's really easy and flexible.

## Slide 5 — The Happy Middle

And it's that flexibility and ability to do complex things without code that sets Drupal apart from other solutions.

Here on the left we have [Rails](http://en.wikipedia.org/wiki/Ruby_on_Rails),
[Django](http://en.wikipedia.org/wiki/Django_%28web_framework%29), and
[ CodeIgniter](http://en.wikipedia.org/wiki/CodeIgniter#CodeIgniter). The basic idea behind all three of them is that they're
frameworks — tools for building web applications that help you do it quicker than starting from scratch and using some basic
guidelines to make sure they don't suck.

But, when you install them, you have to write code before you even have a basic webpage.

On the right we have [Wordpress](http://en.wikipedia.org/wiki/Wordpress) and [MediaWiki](http://en.wikipedia.org/wiki/Mediawiki).
Wordpress powers almost every personal blog on the web. It has like 200 million installs.

MediaWiki is the software that powers Wikipedia and a ton of other sites.

When you install them you're up and running. You don't need to worry about the particulars — just add content. These
applications are great if you want a blog or a wiki, but they take a lot of work and aren't really intended to do much
custom stuff with them.

Drupal sits in the middle. It gives you the flexibility of coding a site yourself and the beginnings of common website use
cases right when you install it.

## Slide 6 — Sweet, Sweet Nodes

So that's sweet, right?

One of the scary words that's really important to understanding Drupal and talking shop with other Drupalistas is 'node.'

A node is an individual page or blog post or whatever you've dreamed up.

All the real content of your site is made up of nodes. Everything is a node.

Node node node.

It might help to think of a node as a note. Or it might not. But a note or a memo has a subject line or title and some
content. All Drupal nodes have those things too.

If you want to organize your notes you might put them in folders or attach Post-Its to them. This is kind of how Taxonomy
works.

Taxonomy is another one of the scary words.

Here's the skinny. A taxonomy is a list of descriptive terms. Each term is like one tag in a tag cloud. You can stick these
tags to any node and use them to organize your content.

Down here we have the tape dispenser, labeled CCK. That stands for [Content Construction Kit](http://drupal.org/project/cck).
I'll talk about Modules in the next slide and Steve will demonstrate CCK specifically, but the general idea is that CCK
lets you attach all kinds of funky things to your notes — like photos and even whole other notes.

## Slide 7 — Modulez, Drupal Enhancement

There are 5703 total modules. That's a lot.

A [module](http://drupal.org/project/modules) extends (extenze, get it?) what Drupal does. In fact, Drupal is made up almost
entirely of modules. Each one performs some small role.

So there's a module called node that does stuff for the nodes from the last slide.

There's a module called menu. Confusingly, it mostly has to do with URLs, but kinda not really. It's one of the things you
only have to learn at 1:00AM on a weekend while wired on Mountain Dew. So we'll skip over that for now.

Those are modules that come pre-packed when you download Drupal core.

Then there (contributed) modules nicknamed contrib modules. These are written by the community to make Drupal awesomer.

CCK from the last slide is a contrib module lets you add more stuff to your nodes.

[Pathauto](http://drupal.org/project/pathauto) lets you make friendly URLs with tons of options

[Rules](http://drupal.org/project/rules) lets make things happen on your site. It's a good example of the "easy way" of
working in Drupal.

There are modules to give you fancy calendars, Word-like rich text editors, and 5700 other cool things.

## Slide 8 — Umbday Exampleway

So here's a rich text editor. You can pick which one [you want to use](http://drupal.org/project/ckeditor) from a bunch
of different cool options, then install the module and set it up.

Boom! Now you have WYSIWYG capability. And you have options, just like the Drupal gods intended.

Here in the text box we have some pig latin. If you aren't fluent, it says "This is a really dumb example."

It's a dumb example because —

Well… let's say you want to make a node and you want that [node to appear in pig latin](http://drupal.org/project/dialectic)
to your users.

You can type it out in plain English and let Drupal do the translation for you.

There are many modules that let you type in wiki syntax or markdown or plain URLs or ISBN numbers and the module turns it
into something cool for your users when they view the page. At the library, for instance, we use double square brackets
and links to books in our catalog to import book cover images and the title and author and stuff. This is a real time saver
and it's all automatic.

And you can mix and match these filters. If you want to [strip out certain html tags](http://drupal.org/project/htmlpurifier)
from the text AND [put the text in Pirate-speak](http://drupal.org/project/pirate), no problem!

This particular example is dumb because when you're creating or editing that node, you'd just see English. So silly.

Drupal also has non-ridiculous translation built right in. You can put your menus and other site text in other languages
and switch it for different users and all kinds of stuff. If that's an important part of your project then you'll be stumbling
into a funky corner of Drupal's learning curve.

## Slide 9 — Users

One of the most powerful features of Drupal lies with User management.

Out of the box it handles sessions and cookies and usernames and passwords and all the stuff that's a big pain in the butt
to get right yourself.

On top of that, you can assign permissions to users in a really common sense way.

You can create roles. Roles are containers for much more specific permissions. An example of a permission is "User can edit
their own blog posts."

So an admin is free to do anything on the site. A signed-in user can do some things, but is restricted depending on what
roles on the site they've been assigned.

A visitor CAN have permissions, but generally can just view stuff through their binoculars.

When you install modules, they often give you new permissions that you can assign, so it's really easy to make sure that
the right people can see and do the right things.

## Slide 10 — API

This ability for modules to tie into what Drupal does is because of the [API](http://api.drupal.org/).

API stands for Application Programming Interface. It's the way that programmers can interact with the code and data in an
application.

Drupal's API is full of these things called hooks. These hooks let you add stuff to Drupal in a standard way.

For instance, when writing a module you might want to use [hook_user](http://api.drupal.org/api/function/hook_user/6). Your
code might say — when a user signs in, redirect them to a different page.

When one things happens, do other stuff.

Once you get the hang of it, writing code for Drupal makes a lot of sense.

## Slide 11 — Page Theming

Along with coding modules, you can also code themes.

You can hard-code HTML into your theme, or put little bits of PHP in there to display the content from the database exactly
how you want it.

If you use the default template language, called PHPTemplate, you can specify regions on your page to hold blocks of dynamic
content stored in your database.

You can move these blocks around from your browser. Once your theme is coded it's really easy to put stuff where you want
it.

Your theme consists of a bunch of template files. This one is for an entire page.

## Slide 12 — Node Theming

This one is for a single node. A page can have more than one node displayed at a time, and those nodes can be of many
different content types.

Does that make any sense?

Think of a bag of jelly beans. The page itself is like the bag. It wraps around all the good stuff.

Each node is like a jelly bean. All the buttered popcorn flavored beans are from the product content type.

But the bag also has black licorice beans. These could be wiki entries.

The one page could show products and wiki entries in one listing.

And the cool part is that you can make them display however you'd like using template files.

This doesn't speak to how gross a bag of popcorn and licorice jelly beans would be, but this is America so you're free to
fill that bag however you'd like.

## Slide 13 — jQuery is Money

Nothing's better than esoteric programming double entendres.

If you know [jQuery](http://jquery.com/), you know that the shorthand for the base function is the dollar sign.

But I also mean that jQuery is money. [jQuery is so money and it doesn't even know it!](http://www.imdb.com/title/tt0117802/quotes)

jQuery is baked in to Drupal's core. You can even code up your JavaScript is a very Drupal-ish way using Drupal's concepts
of behaviors, settings, and locales.

But that's not all!

You can use all the same web standards that everyone else uses, or go your own way.

If you want to use a particular CSS Framework, there's probably a pre-existing theme to do it, or you can roll your own.

If you want to do everything in HTML5, Drupal won't complain.

If you want some visitors of your site to view your pages in full size and others to get a mobile page, that's very doable.

Drupal lets you do what you already know and gets out of your way.

## Slide 14 — All the cool kids are doing it

What else can I say to convince you that Drupal will work for your site at the scale you need?

[Argumentum ad Populum](http://en.wikipedia.org/wiki/Argumentum_ad_populum). Translated from the Latin it means "All the
cool kids are doing it."

There are a lot more prominent sites and organizations using Drupal, but these sites are notable because you're in Drupal
when you get to the home page and most if not all of the content is in Drupal.

That's a powerful indication of the trust organizations place in Drupal and the ability of it to suit complex needs.

## Slide 15 — Support

Another great selling point is the available support.

You can get help directly from the Community via [IRC](http://drupal.org/irc), [Forums](http://drupal.org/forum-posting),
and other avenues.

You can get materials ranging from books to videos and more from [Lullabot](http://www.lullabot.com/),
[Apress](http://apress.com/), and other publishers

The creator of Drupal has a company called [Acquia](http://acquia.com/) that also lends support.

The documentation for every aspect of Drupal is amazing. If you want a quick
[how-to for a beginner](http://drupal.org/getting-started/before) it's on the Drupal site. If you need in-depth documentation
of the API, it's there too.

Each module has an issue queue. These are really handy for seeing if the issue you run into is a known bug or a
[picnic error](http://en.wikipedia.org/wiki/User_error).

Most any problem you run in to likely has a forum post or page on the Drupal site. The site search is arguably the best
tool for getting the support you need.

There are also plentiful user and developer groups. There are at least three in Metro Detroit.

You can also hire a firm to develop, design, consult, or for individual bounties to develop a particular feature.

Options. Drupal gives you options.

One more thing…

## Slide 16 — One More Thing (Views)

[Views](http://drupal.org/project/views) makes a Developer's life so much easier.

I'm not ashamed to admit that I frequently take the lazy route. Views is the lazy route in a very real and very cool way.

Remember the jelly beans? Let's say all the content on your site is a big tub of jelly beans.

Views lets you put whichever beans from the tub you want in whichever bag you want.

If you want an RSS feed with just the images from your products in order by the date they were last edited, you can do that
by playing around in Views for a couple minutes.

If you want a block in the sidebar with the latest posts from one user's blog, that's a cinch.

If you want a page of all the posts tagged chicken in reverse-title order, you can do that.

With Views. Views is a miracle wrapped in a magic trick.

Views makes learning Drupal SO worth it.
