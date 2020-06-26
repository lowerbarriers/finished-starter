---
layout: post
dsq_thread_id: "108871474" 
title: CSS is Syntactically Inconsistent 
tags: [General] 
---

HTML is a pretty straightforward markup language. It has tags, each of which has optional attributes and sometimes required ones as well. Content goes between the opening and closing tags. Sometimes you can even self-close tags (but not &lt;script&gt; ! For the love of all things holy not script!). That's about it — there are comments and a doctype (which is just a special comment in the scheme of things), and some quirks relating mostly to form element attributes, but the gist of html is tags with attributes.

JavaScript has been to hell and back in attempting to handle this object model, but is getting there. If you want to be there now, the extendability of js allows you to use a library like JQuery to play with the tags, attributes, and their associated behaviors.

How, then, can a more recently-updated language like CSS be going so off course?

Take, for example, this checkbox: 

{% highlight html %}
	<input type="checkbox" name="receivenewsletter" class="register-input" id="receivenewsletter" checked />
{% endhighlight %}

Here are some ways to target it using CSS:

  * input[type="checkbox"]{}
  * input[name="receivenewsletter"]{}
  * input.register-input{}
  * input#receivenewsletter{}
  * input:checked{}

Some of the "input"s in the list are superfluous, but I left them for illustrative purposes. Otherwise, it would be difficult to see that #receivenewsletter is really preceded by the universal selector for all intents and purposes.

I can sort of buy the full stop being shorthand for [class=""] and similarly the hash for an id (though in the development of CSS as a language, that's not really wha happened), but the last example really bugs me.

CSS pseudo-classes are generally relegated to default browser styles/behaviors that can reasonably take CSS declarations. :hover is a good example. If you've ever tried to apply :hover to an element other than an anchor, you know that IE6- will not take the directive. I agree with this — <a> has a default behavior on hover while most other elements do not. The :hover pseudo-class is therefore taking over behavioral duties from JavaScript. Just so you know, I also think that the quirks mode box model makes more sense and would allow for better liquid layouts and cleaner markup had it been the standard.

Getting back to :checked — As far as I know, hovering does not create, destroy, or change attributes by default in a browser. On the other hand, checking a checkbox via an interface does create or remove a checked attribute. Therefore checked should be treated as an attribute using an attribute selector. Having the pseudo-class just muddies the issue.