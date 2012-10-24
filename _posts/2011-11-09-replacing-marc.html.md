--- meta: _edit_last: "1" type: post published: false status: draft title: Replacing MARC tags: - General - Libraries layout: post --- There's been [a](http://kcoyle.blogspot.com/2011/11/future-format-goals-and-measures.html) lot of [discussion](http://listserv.loc.gov/cgi-bin/wa?A1=ind1111&L=bibframe) of the [Library of Congress's announcement to replace MARC](http://www.loc.gov/marc/transition/news/framework-103111.html) with an RDF-based framework. What I've found from the folks emailing and commenting on the news is that many in the library world are bad at chess: we're thinking one move ahead instead of planning an adequate strategy. I agree with [the library loon](http://gavialib.com/2011/11/herding-catalogers/) that it was important for the LoC to make this announcement, since efforts would otherwise be stalled. What's curious to me, though, is that the rather non-specific report was specific about some design decisions, at least one of which is really stupid. In this post I'd like to discuss some software-development-y concepts, and how giving them consideration could be useful for our cataloging/library future. 

### Versioning

This is where the LoC report was specific where it shouldn't have been.
Backward-compatibility ("Compatibility with MARC-based records") and upgrade
paths ("Provision of transformation from MARC 21 to a new bibliographic
environment") are thorny issues in versioning software, standards, or anything
else that might be versioned.
[Versioning](http://en.wikipedia.org/wiki/Software_versioning) affords a
number of things to the developer, especially the ability to break
compatibility between major versions. Forward-compatibility (or, perhaps in
the case of a major overhaul, an upgrade path) is useful between versions
because it allows end users to upgrade without requiring substantial effort.
Backward-compatibility can lead to bloat both in standards and in
implementations, since constructs have to be in place to translate between
versions at some level. You can see this bloat in Windows Vista, for instance,
which allowed for really old software to still work, but at the expense of
system performance. Windows 7 instead opted for a stand-alone emulator for
legacy systems. See [Drupal's statement on
compatibility](http://drupal.org/node/65922) for a sensible software model. A
metadata standard that is designed so that you can maintain aspects of
fidelity both upgrading and downgrading is destined to be bloated and
backward-thinking. If I have a [MARC record for a good
book](http://openlibrary.org/show-records/ia:jungleuncensored00sinc), and
decide to import it into a system using the new standard, the process would
require some degree of data linking and reformatting. After the process, if I
decide to export a MARC record to give to a legacy library, what expectation
of fidelity to the original can I reasonably expect? Should the answer to that
question change over time? Here's an example: MARC 245, which contains the
title proper and statement of responsibility. If we ignore that the 245 is
coded up with a weird mix of subfield separator and an extraneous-but-weirdly-
cherished backslash for a second, there's a more pressing issue. Let's say
that the statement of responsibility is a string taken almost verbatim from
one of those title page/verso/colophon/book-part places. In a sensible,
normalized, rdf-triple-based new record, should it be necessary to retain the
string so that the MARC record be reconstructed with fidelity, or would each
entity be described in a distinct triple? When backporting to MARC from the
linked authority records for the responsible entities, the names could change,
the order may change, and the descriptive information about each responsible
party may no longer be verbatim. And that's fine. Preserving fidelity
introduces bloat, while the semantics of the metadata mapping are **equivalent
enough**. It really comes down to standard vs. implementation with regard to
versioning. Is the new standard the place for a mapping between the divergent
frameworks, or should crosswalking be handled on a per-implementation basis,
and based on _both_ standards? Going forward, a versioning scheme based on a
roadmap of proposed features and perhaps [semantic to some
extent](http://semver.org/) could be a useful thing to include for
interoperability purposes. While I can appreciate the [NISO process](http://ww
w.niso.org/apps/group_public/project/details.php?project_id=91), I think
finalization of standards documents is counter-intuitive to the living nature
of such a standard. And I think the new standard should be forward-thinking
and concerned with itself, not with mapping to MARC.

### Centralization/Distribution

I need to learn more about where linked library data efforts stand. What
occurred to me in considering linked data (in my ignorance) is the balance
between centralized and distributed data. Say I'm doing original cataloging on
a brand-new book by a brand-new author in the workroom at Podunk Public
Library. Our next-generation library software complies with all the new linked
data standards. Next thing you know, libraries all over the place are adding
this book to their collections. One strength of linked open data is that other
people don't have to duplicate my effort, since linking to the original record
fills in the blanks. It's copy cataloging, except the hoops are gone and the
resources linked from the URIs tentatively only have to be updated in one
place universally (since a system can poll the URI at any time to update its
local cache of the associated data). When the new book's author dies, the
authority record at Podunk is updated, and catalogs the world over using that
linked object can get the information when needed/desired. But if I've created
the record at my little library, how does any other library know that? If they
can't discover the record, they're liable to do their own original cataloging,
thereby performing work they don't have to. There's no canonical source for
the authority information if there are multiple unique records, so when the
author dies, lots of people have to update their information. That's not any
more efficient of a model than we have now. The model that appeals to me is
sort of a RESTful github/openlibrary structure with centralized hubs of
canonical records, with the ability to edit locally and submit pull requests
for meaningful changes (and use a web interface to edit central records with a
moderation scheme that essentially makes edits into pull requests). This
allows for centralization _and_ distributed forks. A discovery network could
operate in conjunction or tandem with the wiki-ish model described above. The
very same central sources (or other hubs) could have a sort of ping-pushing
/OAI-PMH/DNS service, where libraries updating local data let harvesters know
about the update, the harvesters grab the updates and act on it accordingly,
then cache whether those local URIs are canonical for a certain lifetime. In
this manner, Podunk could host the canonical authority record, while libraries
around the world could know to link there. If Podunk Public Library ever gets
shut down by the brewed leaf brigade, the cached harvested copy could then be
re-canonicalized on a central hub, and libraries linking to the PPL URI could
be informed to update the link. This model respects data and its authors. It
could be implemented entirely with open web standards. And such a construct
would facilitate collaboration in the linked data realm while eliminating
redundancy almost completely. Such a network is vital, and could conceivably
be developed independently of the standard; but the standard would be chaotic
without it and vice-versa. http://openlibrary.org/about http://help.github.com
/send-pull-requests/ http://www.w3.org/2005/Incubator/lld/XGR-lld-20111025/
http://en.wikipedia.org/wiki/Domain_Name_System

### Abstraction

Like centralization/distribution, this abstraction section is more about
related concepts than the standard itself. In this case it has to do with
FRBR, a big part of RDA. RDA is the cataloging rules that the new standard's
framework will carry. FRBR is entirely concerned with abstraction, which is
potentially problematic. All abstractions leak.

### Architecture

asdadadsada

