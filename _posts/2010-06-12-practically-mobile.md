--- 
meta: 
dsq_thread_id: "108871479" 
_edit_last: "1" 
type: post 
published: true 
status: publish 
title: Practically Mobile 
tags: - General 
layout: post 
--- 

Are you interested in mobile devices and how libraries can leverage the mobile surge? You may be interested in the presentation I did on May 20th for [MCLS](http://mlc.lib.mi.us/cms/sitem.cfm), entitled "[Practically Mobile](http://docs.google.com/present/view?id=dhsbt2xj_442chgw9jfb)."

<iframe src="http://docs.google.com/present/embed?id=dhsbt2xj_442chgw9jfb&amp;size=m" frameborder="0" width="555" height="451"></iframe>

## Presenter Notes

### Slide 1

Hello. Thank you for sticking around to see me!

I'm [Brad Czerniak](http://www.hawidu.com/), the Digital Resources Developer at [Canton Public Library](http://www.cantonpl.org/) in [Canton, MI](http://www.cantonwiki.org/). They let me hack and play with cool technology all day. It's a pretty sweet gig.

Today I'll be talking about some common-sense ways to enter the mobile arena.

I'd also like to reassure you that if you're not doing anything mobile yet that you're probably doing just fine.

First, a little activity: 
Now this is totally optional, but I encourage you to do it. Get out your phone

Add me to your address book. Put me under "Brad Czerniak" or "Brad Library" or whatever.

Feel free to call or text me with your mobile and library-related questions. Like, for instance, if you're about to go into a meeting with your boss and you need a bleeding-edge new idea and some encouragement. That would be a good time to call me.

If you want to text me questions during this presentation, that's cool too.

### Slide 2

So this is a pretty broad question.

Many of us here spent years in classrooms just trying to skim the surface of this question.

Luckily that's not really what I'm asking

When you're watching TV and there's a song you like in a commercial, where do you go to look it up?

Of course Google, but how do go about actually doing the search?

Where specifically do you enter the search terms?

### Slide 3

For me, the answer is the browser search bar

I **love** the browser search bar

Every major browser has some type of search bar. Even Chrome.

Google, Wikipedia, Amazon, and Youtube are all a click and typing your query away.

So

Take a look at your website analytics. If your library is like mine, people use your catalog a lot.

So your catalog — it's basically the search engine for things in your collection, right?

Can your patrons search your catalog from the browser search bar? If not, why not?

Let's take the obligatory code peek at what's necessary to make this happen.

### Slide 4

An [OpenSearch description](https://developer.mozilla.org/en/Creating_OpenSear ch_plugins_for_Firefox) is a tiny XML file. All you have to do is link to it in the head of your web pages.

Autosuggest is trickier, but definitely possible. In the description file it's just these two lines at the bottom.

Is OpenSearch just a minor detail?

Or does the fact that so few libraries offer it speak to something?

Is there a gap between what we offer and how our users interact with information?

Are our users searching Amazon when a splash of XML and a pinch of psychology could change their behavior?

### Slide 5

Getting patrons to think of the library when they have an information need isn't easy.

So where do we start?

We have to find the points of entry.

The browser search bar is a good example of a point of entry.

Once we find one, we need to set a path for the user

So let's say you add an OpenSearch XML file to your site.

The next step is to advertise your new Browser Search Bar plugin along with installation instructions

In this case: "if the arrow is glowing blue or orange, click it" You can also make a [JavaScript button](http://www.cantonpl.org/tools) to do it from [a blog post](http://www.cantonpl.org/blog/technology/do-you-convenience)

Then add some search behavior examples to the mix

"Instead of searching Amazon for that new movie, search our catalog and put it on hold. It might take a little longer, but you'll save $20"

and you've injected your services at the patrons' point of need.

But what about people on the go?

What's the starting point for information needs on a mobile device?

Well — It depends.

### Slide 6

You can't rely on a patron to have a smartphone.

It's a safer assumption that your patron has a phone, mobile or otherwise.

When a user has a mobile phone you can be almost sure that the device can send and receive text messages, even if its user can't.

Mobile sites and apps are a few strategic steps ahead. Step 1 in mobile is having a phone number folks can call.

So you have this phone number — are as many people calling as you'd think?

The worldwide trend is more people with more phones. Are you getting more questions?

If people knew they could get questions answered by Master's Degree-holding local experts via phone (or text message, or chat, or email, or in person), would 3-1-1, 4-1-1, KGB, ChaCha, and other services be able to stay in business?

Do patrons know what they should be asking?

### Slide 7

A good way to increase calls is to make sure your users have your number handy.

You can do this by:

  * Distributing stickers for patrons to put on/near their landline phones
  * Handing out slips or bookmarks with calls to action, like "put our number in your phone!"
  * Starting off events, classes, and programs by getting people to put your number into their mobile phones

Then you have to sell it. Demonstrate the product, like Ron Popeil or Billy Mays. Your product is free, so all you have to do is provide the why and how of using it:

Ever since reading [Made to Stick](http://catalog.cantonpl.org/record=b1405014) by Chip and Dan Heath

(I'll give you a second to write that down)

Ever since reading it I've been obliged to mention it in every PowerPoint presentation.

The book teaches that ideas with staying power tend to be one or more of the following:

  * Simple
  * Unexpected
  * Concrete
  * Credible
  * Emotional
  * Stories

So give tangible use case examples that the patron can relate to and be reminded of when a similar situation arises 

Like, when you need a bleeding edge idea to give your boss.

### Slide 8

So we've got the telephone part down. Now let's look at other ways patrons can ask you things.

There are a bunch of solutions out there:

[Library Success Wiki Online Reference Page](http://www.libsuccess.org/index.php?title=Online_Reference)

Here's what we're doing at Canton:

For the last 2 years we've been using a Gmail for IM reference. You can sign into AIM from Gmail too, so it's really 2 accounts.

On our site we have heavily modified [Google Talk chatback badges](http://www.google.com/talk/service/badge/New). After picking a Kids or Adult librarian, it pops out a new little window, so the patron can switch pages while continuing to chat.

Here's what our Gmail account looks like:

### Slide 9

We use Multiple Inboxes, plus filters, plus labels to make everything easier.

The second inbox down here is for bibliography requests, which we label "[May We Suggest](http://www.cantonpl.org/taxonomy/term/3769)." By setting up filters looking for forwards and replies and applying labels accordingly, we can automatically track the status of the bib being assigned and created

This Gmail account is also a [Google Voice](http://voice.google.com/) account. Text messages sent to a local number Google provided show up in the inbox.

You can reply to them just like emails, except 160 characters or less.

When you call the Google Voice number it forwards the call to the library's main line, so patrons can text and call a single number.

For the price tag of $0 and the ease and convenience of it all, it's a good investment.

If you're moving toward cloud-based infrastructure to save on IT costs, this is a great test suite for Google Apps. [wink. wink]

### Slide 10

I heartily suggest a [presentation by David Woodbury and Jason Casden](http:// www.educause.edu/Resources/LibraryinYourPocketStrategiesa/195003) at North Carolina State University Libraries entitled "Library in Your Pocket". They give some really good advice. I do take issue with one of their slides, though — it says "'Mobile' is not just shrinking the page"

Somebody should tell that to the iPhone's Safari browser!

When I first got my iPhone 2 years ago, I had the choice of starting up my slow, loud, hot 6-year-old desktop computer or surfing the net on my phone.

So, by surfing the web on an iPhone exclusively for 6 months, I learned a thing or two about how the mobile web works.


My conclusion: The mobile web is a lot like the regular web, but smaller.

Fast forward to now: In the last month, approximately 1% of Canton Public Library's website visits came from mobile devices, with iPhones, iPods, and iPads making up the majority of those visits.

Android is catching up quickly, too.

There are two important things to note about this 1% stat:

  * That figure has doubled in the last 6 months
  * Those visitors are all going to our full-size website

If you haven't visited your website on an iPhone, catch me sometime today. I'm confident that a quick demo will make you think "that's not so bad!"

That's the same thing iPhone owners think. And they're the ones doing nearly all the mobile web surfing.

### Slide 11

This slide is intentionally crammed with words.

I'm going to quickly touch on each of these points, but here's the gist

there are a lot of things you can do when making a "mobile site" that can be **worse than not making a mobile site at all**.

Automatic redirects — If someone clicks a link, like, to a blog post, the worst possible outcome is being redirected to a mobile homepage without any way to view the intended content.

If you can't get to your mobile site from your full site easily, or vice versa, you're setting users up for failure.

If your website is mobile-fied and perfect but your catalog isn't mobile and looks totally different, that's a failure. That's actually a failure no matter what size screen you use.

I'm using Progressive Enhancement as an umbrella term for:

  * Semantic HTML
  * Separation of content, style, and behavior
  * Features that work without JavaScript magic, but are fancier in capable browsers

High performance mobile sites cache files, reduce file size and compress, and stick to best practices.

Mouseover menus are frustrating, since they rely on mouse hovering. Touchscreen devices don't have hovering, just touching. This was one of Steve Jobs' cases against Flash, but it's not only a Flash problem.

A late-model device connected to fast wifi is just a computer with a small screen. A crippled mobile site doesn't match user expectations.

I'll talk about apps in the next slide

Nothing on the web is "set it and forget it." Once you make your mobile interface you have to test it with users and develop and design it and continuously improve

Don't make a mobile site just because everybody else is doing it (poorly).

### Slide 12

Apps

Here's the deal with apps:

You most likely shouldn't make one.

Platform apps require a significant investment of learning, time, and money.

The two biggest platforms at present have totally different programming languages and APIs.

So, creating apps for both means keeping up with upgrades and bugs and general quirks across two platforms and two languages and multiple device versions.

Web apps, when properly designed OTOH, are cross-platform and standardized.

Platform apps allow for more hardware integration, like GPS, camera, and other features.

If you don't need to use those features, a platform app is probably a huge waste.

Platform apps do have the advantage, though, of being in an app store or marketplace, which is great for generalized apps, and was great for all apps when there were fewer competing, but is now rather crowded out.

I think many app developers hope that more people will use a platform app as opposed to a web app. There are certainly circumstances where this is true, but is it true for libraries? How do your users get to your site? How are they expected to know you have an app? iPhone owners: ever searched the app store for your city on a whim?

Keep in mind Apple's inconsistent and harsh app approval policies. You could spend months making an app and then have it get rejected.

Web apps, besides being cross-platform, can also mimic platform apps with a little ingenuity. Google Buzz has a little bubble that pops up when you first use it on an iPhone that prompts you to add it to your home screen. At this point it looks more or less like a platform app.

Here's what a home screen bookmark for CantonPL looks like on an iPhone. Do you have apple-touch-icon.png in your server root, along with your favicon?

### Slide 13

What if —

You only had to maintain one site with one set of content

And

No matter which device accessed the site, the URLs were always the same

And

That site was optimized for whichever device was using it?

That would be ideal, right?

Well, that's the idea behind a general philosophy and a few technologies.

At first it was called "browser sniffing" and it didn't work where it counted. It required JavaScript and the devices that could have benefited didn't HAVE JavaScript.

Nowadays, you can keep a separation of content, style, and behavior and pull off something similar. An emerging standard called [CSS3 media queries](http://www.w3.org/TR/css3-mediaqueries/) along with similar JavaScript means that one site can look a bunch of different ways, depending on the size of the screen.

Yes, it still takes work, but the end result is consistent and more maintainable. If you have the ability to tweak the CSS and JavaScript of your catalog, you can have a unified interface!

### Slide 14

Real quickly, I'd like to talk about vendor apps.

Why not (exclusively) use a vendor solution, like LibraryThing's upcoming Library Anywhere, or Boopsie, or any of the other cool stuff out there?

Customization.

Getting a generalized vendor solution to provide exactly what we provide but in their mobile app would end up costing as much or more as doing it in house. Vendors have the habit of charging you annually, and justifying new expenses is getting kinda hard.

That's not to say that the vendor products I've tested aren't good. Boopsie's app for Seattle Public Library is quite nice. Library Anywhere is a great multi-library catalog interface. It's still in beta, too, so it could get even better.

In my not so humble opinion, suiting one site to multiple devices is the best bet.

### Slide 15

That doesn't mean you shouldn't reach out to **other apps**, though.

These three apps are used to a disturbing amount on mobile devices.

If you have a facebook page and push out updates, mobile users can see them.

If you tweet, mobile users might see it.

It your library is a foursqure venue, your patrons can check in. People might compete to be your mayor.

These tools let you promote services, give timely reminders of events, and generally foster good will.

So that's cool, right?

### Slide 16

Before closing (and going improv in the remaining time) I'd like to touch on **other** implications for the mobile device revolution. Here's one scary example:

Not too long ago, curious hackers would print out paper booklets full of barcodes called fuzzers.

They'd do this because barcode scanners are a lot like keyboards, except different.

When someone writing software expects input to come from a barcode scanner, they're less likely to 'validate' the input to make sure it's barcode-like.

So, someone with a lot of time on their hands and some custom-made barcodes could often do some damage.

Someone with an iPhone and basic web design skills can now do the same thing, but without having to print the barcodes. Oh, and much faster.

Are your self-check stations secure? How do you know?

Do they validate input to make sure they're getting numeric barcodes?

Do they only allow a few bad scans before timing out for a while?

Do they require a secondary piece of information, like a user's name?