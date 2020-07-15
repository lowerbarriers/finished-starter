---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Early versions of a catalog app were nightmarish"
#  image:
#    alt: "Default social image" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
#  robots: "index,follow"
#  title: "Overrides the tab title and social titles"
#permalink: /blog/post-title/
#published: true
#sitemap: true
tags: ["Libraries"]
title: "LibraryThing Issues"
---

I've been weighing whether to blog about some issues I've come across with [LibraryThing](http://www.librarything.com/).
I've happily used their flagship product,
[listened to their founder/owner keynote conferences](http://www.ala.org/ala/mgrps/divs/lita/litaevents/litaforum2008/2008forumkeynote.cfm),
and have been something of a cheerleader for the [LibraryThing for Libraries enhancements](http://www.librarything.com/forlibraries/).
So it follows that I was initially optimistic about their [Library Anywhere](http://www.libanywhere.com/) product.

Unfortunately, my testing of that product and the conversation with an LT representative that followed (which I consider
due diligence in reporting security/performance bugs prior to this post) left a bad taste in my mouth. For full disclosure:

## LibraryThing Password Security Issue

Being a compulsive [reddit](http://www.reddit.com/)-lurker, I saw
[this warning about LT passwords](http://www.reddit.com/r/books/comments/e8hn7/atten tion_librarything_subscribers/) on
the front page a few weeks ago. It reminded me that I had sent an email 6 months before with performance and accessibility
(but not security) suggestions to which LT never responded. Last week I re- sent that email, along with the reddit link.

The issue outlined in the reddit thread means that, if a hacker were to compromise the LibraryThing database, all the users'
passwords would be easily available. Since people often re-use usernames and passwords between sites, this can lead to identity
theft. Sending passwords to users as plain text via email can lead to other security concerns as well.

For the non-technical: Even though there doesn't initially seem to be a way around saving passwords as themselves, it's
actually [described by experts](http://www.codinghorror.com/blog/2007/09/youre- probably-storing-passwords-incorrectly.html)
as "Security 101". Instead of storing a password, you store something unique and irreversible created by the password. Then,
when someone signs in, you run the same process and compare the results for a match. There's more to it, but the best practice
for sensitive credential storage includes [cryptographic hashing](http://en.wikipedia.org/wiki/Cryptographic_hash_function).

It was an issue before the reddit mention, likely for around 5 years. It might be more of an issue now, given that identity
thieves may have seen it widely advertised that plaintext passwords were available on a particular site. It has been over
2 weeks and LT passwords are still stored as plain text. Additionally, I received no update about that issue in my email,
have not seen a blog post about it, have not seen an _active_ [bug report](http://www.librarything.com/topic/47341), have
not seen a tweet, reddit reply, or any other indication that LibraryThing is taking this security concern seriously.

If you are a registered LibraryThing user, I suggest that you:

  1. [Change your password on LibraryThing](http://www.librarything.com/changesomething.php) to something new and unique
  2. Change your password on any site using the same password as your former LT password in case it has already been compromised

## Library Anywhere Security Issue

As part of reviewing the performance and accessibility suggestions I had made previously, I dug into the front-end code
of the Library Anywhere product. This isn't hacking since I just observed code using [Firebug](http://getfirebug.com/)
during the normal operation of the app.

In my analysis (which you can duplicate if you've used an inspector like Firebug), I found that most every action at the
library level — search queries included — in the full-featured version of the app returns much more than just search results.
It also returns institutional customer information, such as: **contact full name**, **contact email**, **billing preference**,
**billing status**, etc. I have not found anywhere in the Library Anywhere interface where that information appears, and
am unsure institutions know that their information is being quietly disclosed every time a patron searches their library
using the app.

I did not get the feeling the LT developer I corresponded with was very concerned with this issue.

## Library Anywhere Under-Performance

As you might imagine by the above-mentioned security issue, unnecessary information is sent from the server to the user
every time they perform a search. After removing the customer information and some other redundancy, I estimate search
results could be less than half the size they are currently. I suggested specific optimizations to their JSON response that
I'd be happy to further explain if anyone's interested, but the basic premise here is that reducing the size of that file
is a win-win.

This is particularly important because we're talking about a mobile app. There is a certain lag that's **necessary** in
Library Anywhere; LibraryThing has to search an institution's catalog, process the data they get, then format it to make
it useful _before_ sending it along. However, the size of the file sent from LibraryThing to the user can still effect
noticeable changes in speed (and tentatively save LT money on bandwidth). This is more true on 3G or EDGE/Cellular connections
than broadband/wi-fi, so you'd assume a mobile app would pay extra-close attention to it.

In the particular case of the search results, a speed boost multiplies the responsiveness of the app. Search results include
images of book jackets, which can't be loaded until the first file gets returned. So, the faster the results file gets there,
the faster a whole bunch more files can arrive, leading to a progressively-faster experience.

## Library Anywhere Accessibility Issue

I'm only speculating, but my guess is that many institutions were interested in Library Anywhere because it advertised a
[Section 508](http://en.wikipedia. org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973)-compliant version.
With higher-ups mandating compliance and ILS vendors being slow to fulfill, there's a market for accessible alternative
solutions.

The "universal version" may be Section 508 compliant, but the bells-and-whistles version is far from it. The disturbing
part is that they have full control over the interface, so there is zero reason why it couldn't be. After all, separate
accessible versions of websites
[are considered a last resort by standards bodies](http://www.webcredible.co.uk/user-friendly-resources/web-accessibility/text-only.shtml).
Here's an example of the lack of Library Anywhere accessibility:

[![](/images/lanojs.png)](/images/lanojs.png)

This is how the regular version of Library Anywhere appears in a browser with JavaScript turned off. This may sound like
a red herring at first, but the most recent numbers I've heard put non-JavaScript users are around 5%, while blind users,
traditionally the standard-bearers of accessibility, at around 0.3% of web users.

What's particularly messed up here is that a user cannot even get to the "universal version" from this blank screen. They
are stuck. This is true for other accessibility situations besides JavaScript being off. But it doesn't have to be this
way.

[Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) is a principle by which web applications
are made to work without JavaScript and CSS. Then, style via CSS and advanced/fancy behaviors via JavaScript are added to
that interface to make for a nicer experience on more-advanced browsers. Since the underlying version of the app works
without any bells and whistles, it should be accessible to many different sorts of users.
[Further advancements](http://en.wikipedia.org/wiki/WAI-ARIA) in HTML and JavaScript can even make the additional and fancy
features accessible. I provided rather detailed suggestions (which I'm omitting here but would be happy to explain) for
how to accomplish such an effect.

LibraryThing doesn't _have_ to make Library Anywhere accessible. But, I think prospective customers have a right to know
that the advertised Section-508-compliant version is only part of a woefully-inaccessible product.
