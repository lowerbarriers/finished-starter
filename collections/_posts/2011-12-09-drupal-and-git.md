---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "A presentation that made me locally infamous"
#  image:
#    alt: "Default social image" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
#  robots: "index,follow"
#  title: "Overrides the tab title and social titles"
#permalink: /blog/post-title/
#published: true
#sitemap: true
tags: ["Web Design"]
title: "Drupal and Git"
---

I'm honored to have been selected to present at the first-ever [DrupalCamp
Michigan](http://drupalcampmi.org/). The local Drupal community is super
strong: they opened registration for 50 people and it sold out so quickly they
expanded to 100. Not being a good public speaker at all, you'd think this
might be daunting. However, a combination of under-preparedness and lack of
sleep really put me in the right mindset. So, without further ado, here are
the [slides](http://bit.ly/gitdrupal) and a
[video of the presentation](http://blip.tv/drupalcampmi/how-git-fits-into-your-workflow-5802593):

<iframe src="https://docs.google.com/presentation/embed?id=13uh9jabl4MQ_W1LVbVc8H_O2wJlQ5ptL6MEKKihzjDI&amp;start=false&amp;loop=false&amp;delayms=30000" frameborder="0" width="480" height="389"></iframe>

<iframe src="http://blip.tv/play/h9h3guKVRQI.html" width="550" height="389" frameborder="0" allowfullscreen></iframe>

## Notes

### You've got the wrong guy

I originally proposed this session not because I have a ton of experience on
the topic and all the answers, but because I wanted to use presenting as an
excuse to learn about [git](http://git-scm.com/).

If you've been using git for a long time and/or have memorized large portions
of the Drupal APIs, chances are you won't be able to learn much from me.

### WTF is a git!?

The word git [was first a British slang word for an annoying or stupid person](http://en.wikipedia.org/wiki/Git_%28software%29).
The software was named self-deprecatingly from that word. I like to think git stands for
something else though: good shit.

Git is a fast, distributed version control system.

It was originally developed by Linus Torvalds in 2005 to be used for
developing the Linux kernel

If you've used another version control system, you might wonder what sets git
apart.

From what I've gathered, the most important [differences between git and other
systems](http://whygitisbetterthanx.com/) are:

  * Git is distributed נthis is important, because having a local copy of a repo lets you access the version history easily,
    commit whenever it makes sense, and push it to one or more repositories, or remotes, based on the structure of your project
  * Git reduces the pain of merging, which means that you can make lots of branches without worry

Other systems, like CVS, subversion, and others, are also considered slow for
accomplishing certain tasks. While I don't have a great means of comparison,
git seems pretty quick to do most everything.

### Drupal and Git

The [Drupal project switched from CVS to git in February
2011](http://drupal.org/community-initiatives/git). The changeover is a
3-phase process, of which they're on phase 2.

  1. Phase 1 was a git mirror, so that people could test and develop in git without affecting the project
  2. Phase 2 is a centralized model based entirely in git
  3. Phase 3 will be a decentralized, GitHub-like model that will change the Drupal.org contribution workflow. Details are
    still being hashed out on that front

### Local Tools

Locally, there are a few tools that can make routine tasks fast and can
integrate with the tools you already use.

I'm a visual, GUI guy, especially for menial tasks. So I like
[TortoiseGit](http://code.google.com/p/tortoisegit/) on Windows, along with a
[Git plugin for Notepad++](http://forum.lowyat.net/topic/1358320/all).
TortoiseGit makes pushing changes a job of a few clicks. The Notepad++ plugin
lets me press Ctrl+Alt+C, type a commit message, and click a button to commit
changes to one or more files. If you think vi is a pain in the butt, tools
like these are for you.

### Remote Tools

It's probably not just you doing development. Even if it is, there's a
compelling reason to have at least one central place for your repositories,
which I'll explain later.

But a side reason to have bare remote repositories is that you can use tools
intended for remotes, like [redmine](http://www.redmine.org/). Tools like this
add another layer for project management. You can do project planning, bug
tracking, wiki documentation, and other such tasks from a web interface,
letting either you or your team keep track of things. And if your project is
out in the open, you can leverage a much larger community using sites like
[GitHub](https://github.com/ao5357), [Google
Code](http://code.google.com/u/ao5357/), or SourceForge.

### Your First Repo

Let's say you have a directory of files that you want to put under version
control at that path. You'd go there in your terminal, then initiate a new
repository. Next you'd add all the files. Those files are queued up and ready
for the first commit, which you then perform.

If you don't use the 'm' option to add a commit message, the commit command
will show the log entry for the commit in vi, and you put the commit message
at the top. It's at this point that I'd like to reiterate that vi is a pain in
the butt.

So that's how you create a new repo from bash

### Commands

These are the git commands you might use in day-to-day work

*Point at commands and explain what they do*
^ Learn what the commands do

These commands are used less frequently (in general), but it's good to know
about them

bisect lets you determine where a bug began in the revision history, using a
binary search to split the possibilities in half each time.

These are also git commands, though you might not use them very often or ever.

stash is commit for wusses

### Workflow

So let's talk workflow.

At my job I've got two Drupal sites: "Beta," which isn't really the right name
for it, since at times it's a dev box and at others it's a beta-slash-QA
machine.

And the live site.

The design and development parts of my job revolve around creating modules and
themes to add functionality and enhance the design of just those two
properties.

I'm guessing that's NOT what your jobs are like. I'm guessing you make lots of
sites. And those sites in various states exist in multiple places, like your
local dev machine, an internal server for testing, and external hosting that
you don't necessarily control. I don't envy you.

### Wherein I Tell You Not To Hack the Core

A site is Drupal core, plus contrib, plus the data in your database.

Since Drupal is modular and nearly everything can be changed via hooks, it's
really pretty rare that you have to change anything in core. And if you do,
I've found from experience that it's usually for temporary debugging rather
than for permanent changes.

Do not hack core.

### Avoiding Temptation

So from Do Not Hack Core we can take away that all the things on the left are
things you shouldn't mess with, and the thing on the right is the only place
that customizations go (unless you have a weird multisite setup, which is
cool, but your workflow's going to be different).

A repo at the whole site level is redundant, and reinforces the opposite of
the number 1 best practice of the Drupal site-building community.

### Drilling Down

What about at the 'sites' level?

This is workable, but you might notice something immediately.

Look at the sites/all/modules directory.

You're probably not going to be hacking contrib either! All of those modules
are version tracked in git on the drupal.org site. The vast majority of those
modules require zero coding to work exactly as expected. Putting them under
version control doesn't accomplish much.

Then there's sites/default

sites/default/files contains uploaded and attached files. Those files are
site-specific and are subject to database dependencies. The files also tend to
be images and other files that are unlikely to change. There are a number of
reasons why version controlling those files is impractical.

On the other hand, sites/default/settings.php is a good candidate for revision
control individually, as it's something that you have to work on in the
development process, and some of the settings will likely have to change
depending on where the site lives. The branching model of git could be really
useful for this purpose.

### .gitignore Files

One way to wrangle sites/default/files and streamline the process is with
.gitignore files. With a well-made, well-placed .gitignore file or two, you
can continue using git add . and git commit -a without adding stuff you don't
want to your project.

.gitignore files let you choose files to omit from the versioning index, based
on wildcard notation. So instead of omitting /sites/default/files wholesale,
for instance, you could just selectively ignore boring images and junk while
preserving the directory structure wherever the repo might end up.

### What You're Controlling

Conceptually, the two components that you're likely to work on that can most
benefit from version control are:

  1. Customizing the theme to the client's needs
  2. Developing custom modules or modifying one or more contrib modules

If you start with a working theme, like Zen, you can clone down a repo from
Drupal.org and use the history of that particular part of the project if you
need it. You can create your own branch for your theme and develop from there.

If you code up a custom module, it might only be useful for a single site a
single time. But maybe the functionality you add is something that other
clients might want, or that can be contributed back to the Drupal community.
Modules are reusable pieces, so structuring your repository environment to
make them accessible for all sorts of projects is a plus.

### Hypothetical Model

Here's an example of what repositories on a central server might look like.

I made the directory structure here very flat, putting core, modules, themes,
and the site_projects repositories all within a single folder. This would work
well if you always use the same base theme along with a limited number of
custom modules. This particular setup plays nice with management software like
redmine, which is one reason a flat structure is attractive.

If you're going to have lots of distinct themes and modules, it might be
helpful to create big repos called modules and themes, then use git's
submodules functionality to manage the individual drupal modules contained
within. Thanks Ben for the submodules tip!

Now that we have a central place for all the things we're working on related
to building our sites, we can optimize our workflow to play nice with version
control.

### Leveraging Synergy

One way to do that is to set up pushing and pulling.

If you don't already have ssh keys set up between your development box and
your repository server, setting that up will make it a lot quicker to push and
pull from git. If you want to deploy via git from the repo server to other
machines like your site testing server or even live web server, you'll also
want to set up ssh keys between the those boxes.

On your local dev box, use the clone command to make a local version of the
repo on your server. When you do that, the source repo becomes a 'remote'
called origin.

Make some changes to the local copy (you can branch if you want to, you can
leave master behind). When you're done making changes and they're ready for
other people in your shop to see/use them, use the push command to send them
back to the origin.

### Drush Make and Install Profiles

Once the changes are on the server, you can pull them to your deployment
boxes, or…

You can get fancy.

It's a common use case: you end up using the same base theme, modules,
configurations, and other tweaks on most of your projects. You might already
have an "install profile" informally; Drupal with all the stuff you use all in
one place.

The "drush make" command lets you generate makefiles that turn your informal
install profiles into the real deal. In Drupal 7 it's easier to make profiles
that configure things on install, but technically it should be possible in D6
too. Some combination of the features, strongarm, context, and other helper
modules could let you automate some impressive stuff — like pre-built views.

Hint: it might be manual coding work, but if you install a whole bunch of
similar sites, writing a (profile name).install file could be a time-saver in
the long run. Especially if you swipe one from an existing public profile and
suit it to your needs.

You can use the drush make command to import all the dependencies for your
profile wherever you need them. Then just run the installer (which if you're
super fancy you could get working with drush site-install) to have a
functional site in the time it takes to make a pot of coffee because your
junior dev doesn't know proper coffee machine etiquette.

The makefiles are really flexible, so you can choose particular version
numbers of modules for compatibility, apply patch files to change modules or
core code, or grab external libraries from tarballs.

Nailing down a "holy grail" workflow for this sort of development takes time
and effort, and I certainly don't have all the answers.

Over the next few weeks, Alex Fisher and I will be working on drush make and
workflows, and will report useful findings to our respective blogs.

You may also ask about how to go from local dev to testing to quality
assurance to live, all while easily managing your databases. You may ask that,
but I don't have an answer. Sorry.

### Pay it Forward

If you'd like to become a core developer or get involved in a contrib project,
a working knowledge of git will help.

I'm fighting the urge to give nitty-gritty details here, as the instructions
are both technical and well-documented. If you're not a project maintainer,
contributing code involves creating patch files based on numbers from the
issue queue. If you are a project maintainer, you can interact directly with
the remote repo (albeit while following the guidelines).

One reason I'm avoiding an in-depth explanation is that the Phase 3 git
migration could very well change how things get developed on Drupal.org.

But here's how to create a patch file, just in case.

Just one commit is the easiest for contributing back patches.

The Version Control tab on project pages gives really good instructions for
grabbing source repos and other contibution tasks, including the specific
clone command you need to grab a local copy of the repository.

So now that you're a git expert, go out there and contribute back to the
Drupal community!

Thanks for putting up with me!
