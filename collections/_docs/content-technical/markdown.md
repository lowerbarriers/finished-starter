---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "All markdown syntax and its usage for this site."
  #  image:
  #    alt: "Default social image" # It's okay for this to be empty if the image is decorative
  #    src: required/meta-image--default.jpg
  robots: "noindex,follow"
#  title: "Overrides the tab title and social titles"
#permalink: docs/path/page-title/
#published: true
#tags: ["three", "four"]
title: "Markdown"
---

## Table of contents
{: .no_toc}

1. TOC
{:toc}

A table of contents, based on the headings in the documents, can be added to the **top** \[only] of a markdown (.md) file
with the following code exactly:

```markdown
## Table of contents
{: .no_toc}

1. TOC
{:toc}
```

## Introduction
{:.}

On this site we use a text format called markdown for much of the content. This format is plain old text with some extra
'syntax' (symbols and spacing) to let you make things like links, headings, bold and italic text, and a bunch of other stuff,
all in a way that looks mostly natural on its own.

A big advantage of this format is that you can learn it without having to learn the nitty-gritty of HTML, and end up with
beautiful pages. Anywhere you see a file that ends in `.md` you can use this markdown stuff outlined below and spice the
heck out of your content without bugging a developer!

## All syntax
{:.}

This site renders markdown using the [kramdown engine](https://kramdown.gettalong.org/syntax.html), and as such can take
any syntax accepted by the engine as a whole. In circumstances where there are multiple ways to make an element, this
guide is prescriptive about the preferred style to use for consistency on this site.

### Plain paragraph text

Regular text can be typed as you naturally would in a word-processing program; just type out the text and then hit Enter
twice to create a new paragraph.

One thing we do as a convention on this site is hit Enter once (start a new line) when the line you're on gets to 120
letters/characters long. This makes the text readable and manageable in a plain text editor without fancy wrapping settings.

Here's an example of some plain old paragraph text in a markdown file:

```markdown
Regular text can be typed as you naturally would in a word-processing program; just type out the text and then hit Enter
twice to create a new paragraph.

One thing we do as a convention on this site is hit Enter once (start a new line) when the line you're on gets to 120
letters/characters long. This makes the text readable and manageable in a plain text editor without fancy wrapping settings.

Here's an example of some plain old paragraph text in a markdown file:
```

### Headings

Headings are a great way to split your content into meaningful, bite-size sections. Usability researchers have found time
and again that users respond very poorly to long paragraphs and big walls of text, so headings are a great solve for that.
They also give people waypoints in the document to skim, and are necessary if you want a table of contents like the one at
the top of this page.

Headings must follow a logical outline order... you can't start a page with a fourth-level heading just because you like
the way it looks. In fact, every page on the web should have just one first-level heading. That's why every markdown page
you see on the site should start with a second-level heading!

You can add a heading like this:

```markdown
### Headings
```

And here are all the heading levels available to you when writing:

```markdown
## Second-level heading

### Third-level heading

#### Fourth-level heading

##### Fifth-level heading

###### Sixth-level heading
```

You're not allowed to go beyond six levels. Typically if you get past four you're probably writing too much on one page.

### Emphasis

On this site we use bold and italic text in a specific way, and avoid underlined plain text since it can be mistaken for
links. Italic text is useful for the titles of media, or for _non-confident_ emphasis. When **confident** of what is being
emphasized, use bold text instead.

#### Italic text

Italic text can be added by wrapping the text in question in single underscores:

```markdown
This text is regular, while _this text is italic_. We're back to regular.
```

Which renders to:

This text is regular, while _this text is italic_. We're back to regular.

#### Bold text

Bold text can be added by wrapping the text in question in double asterisks:

```markdown
This text is regular, while **this text is bold**. We're back to regular.
```

Which renders to:

This text is regular, while **this text is bold**. We're back to regular.

### Links

Links are the backbone of the web. They allow you to write a little in one place and refer to information that exists on
another site or page. In markdown there is a straightforward way to make links. Be advised, though, that linking to content
on the site is different from link to external sites.

The main syntax to know is the squares-and-parentheses for links: `[descriptive text](https://...)`

#### External links

For external links, be sure to insert a fully-qualified address, including the `https://` part.

```markdown
Learn more [at the Google home page](https://www.google.com).
```

Which renders as:

Learn more [at the Google home page](https://www.google.com).

#### Internal links

Internal links can be done in one of two ways. The first is if you're **certain** that a particular path exists and will
always exist, you can refer to it directly:

```markdown
We go into our history on the [About us page](/about/).
```

This renders as:

We go into our history on the [About us page](/about/).

Note that the link starts with a slash. Typically you want all links of this type to be "root relative", or beginning with
a slash (`/`) and showing the full path from the home page.

_However_, pretty link paths can change for SEO or usability purposes, whereas the file and its location is much less likely
to change. Given this, we can use a method of linking that the underlying (Jekyll) system provides:

{% raw %}

```markdown
We go into our history on the [About us page]({{ site.subpath }}{% link collections/pages/about.html %}).
```

{% endraw %}

This renders similar to the above link:

We go into our history on the [About us page]({{ site.subpath }}{% link collections/pages/about.html %}).

If the pretty path to the About page changes, the Jekyll method will automatically update the link, while the hard-coded
method will still point to the old path.

When working with content files and their paths and links, please abide by the following:

1. Use the Jekyll, file-based method for links whenever possible
2. Avoid changing the file name or location of existing content files, especially of the Page and Doc type
3. When changing the "pretty path" ('Permalink' in the YAML front matter), be sure to [use the redirect-from plugin](https://github.com/jekyll/jekyll-redirect-from#usage)
   to preserve the old path and prevent link rot

### Lists

Lists are great for making bite-sized scannable areas of content, logically grouping concepts, ensuring accessible listings,
and semantically saying whether a list has no order (bulleted) or that order is important (numbered).

#### Bulleted lists

Bulleted lists can be entered as a line starting with two spaces, an asterisk, then another space, followed by that bullet's
content, like so:

```markdown
- First bullet in the list, though since it's a bullet that's not important. This bullet has a lot of content, requiring
  it to wrap at 120 characters. We indent the second and subsequent lines with an extra two spaces
- Another bullet
- Sure, let's do another bullet. Note that stylistically we do not end list items with periods
```

This renders to the screen as:

- First bullet in the list, though since it's a bullet that's not important. This bullet has a lot of content, requiring
  it to wrap at 120 characters. We indent the second and subsequent lines with an extra two spaces
- Another bullet
- Sure, let's do another bullet. Note that stylistically we do not end list items with periods

#### Numbered lists

Numbered lists are similar to bullet list syntax, just with the asterisks replaced with numbers and periods, like so:

```markdown
1. Say we need to talk
2. Say "sit down, it's just a talk"
3. Smile politely
4. Stare politely right on through
```

This renders to the screen as:

1. Say we need to talk
2. Say "sit down, it's just a talk"
3. Smile politely
4. Stare politely right on through

_Sometimes_ markdown gets upset when you have a numbered list with more than 9 items. In this case, it's ok to start again
at zero or one, rather than using two-digit numbers. While it's true that any number can be used at any position in a numbered
list, try whenever possible to use the correct number order so that the plain markdown file is readable.

### Quotes

A blockquote is started using the `>` marker followed by a space; all following lines that are also started with the
blockquote marker belong to the blockquote. You can use other markdown within a quote as necessary:

```markdown
> Some sort of window to your right
> As he goes left and you **stay right**
> Between the lines of fear and blame
> You begin to wonder why you came
```

The above quote code renders as:

> Some sort of window to your right
> As he goes left and you **stay right**
> Between the lines of fear and blame
> You begin to wonder why you came

The principle behind using a blockquote rather than a "sentence quote" is similar to the usage of code blocks below; a brief
quote is most appropriate inline with its surrounding text, whereas a longer quote or one deserving emphasis should be in
a blockquote like above.

### Code

If you would like to place code samples within some of the text on a page, you can either use inline code, which can appear
on the same line as the rest of the text, or in a block with smart highlighting. Inline code is good for brief examples
where highlighting and other concerns are minimal, whereas a block of code is appropriate for multi-line samples.

#### Big blocks of code

To insert a multi-line, highlighted code sample, wrap it top and bottom with three backticks. Optionally, you can add
a notation after the opening backticks to indicate the [kind of syntax to highlight within](https://rouge-ruby.github.io/docs/Rouge/Lexers.html):

````markdown
```javascript
alert("This is a bad example of JavaScript!");
```
````

This renders on the screen as:

```javascript
alert("This is a bad example of JavaScript!");
```

#### Little code examples

Inline code can be added with single backticks, within a sentence if desired.

```markdown
In markdown, `### Example` becomes `<h3>Example</h3>` in HTML.
```

This renders on the front end as: In markdown, `### Example` becomes `<h3>Example</h3>` in HTML.

### Tables

kramdown supports a syntax for creating simple tables. A line starting with a pipe character (`|`)
starts a table row. However, if the pipe characters is immediately followed by a dash (`-`), a
separator line is created. Separator lines are used to split the table header from the table body
(and optionally align the table columns) and to split the table body into multiple parts. If the
pipe character is followed by an equal sign (`=`), the tables rows below it are part of the table
footer.

```markdown
| Header1 | Header2 | Header3 |
| :------ | :-----: | ------: |
| cell1   |  cell2  |   cell3 |
| cellA   |  cellB  |   cellC |
| cell1   |  cell2  |   cell3 |
| cellA   |  cellB  |   cellC |
```

This renders out as:

| Header1 | Header2 | Header3 |
| :------ | :-----: | ------: |
| cell1   |  cell2  |   cell3 |
| cellA   |  cellB  |   cellC |
| cell1   |  cell2  |   cell3 |
| cellA   |  cellB  |   cellC |

Tables in both markdown and HTML are some of the most complicated syntax. If you find yourself making a table, it may be
time to discuss your needs with a developer.

### Images

Images can be added in the manner shown below. Just... **don't do it this way**. Keep reading this section.

```markdown
![Default meta image](/assets/images/required/meta-image--default.jpg)
```

Since this site is obscenely high-performance, it does a bunch of things to images when the site regenerates to make images
load faster. The way of adding images above won't do it, but the way below will:

{% raw %}

```smarty
{% include atoms/image.html
  src="required/meta-image--default.jpg"
  alt="Default meta image"
  caption="Look how shareable the page is!"
%}
```

{% endraw %}

The example code above becomes:

{% include atoms/image.html
  src="required/meta-image--default.jpg"
  alt="Default meta image"
  caption="Look how shareable the page is!"
%}

### Footnotes

Footnotes can easily be used. Just set a footnote marker[^1] in the text and somewhere else the footnote definition[^2].
It looks like this:

```markdown
This is some text with a footnote[^3]. We breeze past it into the next sentence.

[^3]: And here is the definition.
```

Typically you'd put all the footnote definitions at the bottom of a heading-ed section, or perhaps the page, depending on
how much you have written.

[^1]: The bracket with the caret and 1 in the footnote example above
[^2]: The bracket-y dealie with the colon after it in the footnote example above

## Advanced

{: .}

The elements below get into murky territory, since if you're using them it's often a sign you should be using an HTML file
instead of a markdown one.

### Classes

CSS classes can be added to certain elements using the `{: .classname }` syntax. For example, here's how we made the
'Advanced' heading above:

```markdown
## Advanced

{: .}
```

### HTML elements

Any valid HTML can be entered as-is into a markdown file and it will come out the other side as rendered HTML. Any text
within the HTML will not be interpreted as markdown, though, so ensure the contents of a wrapping HTML element are also
pre-written as HTML.

Something like:

```markdown
Here is some plain text. <em>This text is italic</em> but this text is not.
```

Renders to the screen as:

Here is some plain text. <em>This text is italic</em> but this text is not.
