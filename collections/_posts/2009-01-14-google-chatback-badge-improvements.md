---
layout: post
dsq_thread_id: "617118801" 
title: Google Chatback Badge Improvements 
tags: [General]
--- 

Google Chatback badges are great for adding the ability to chat to with your visitors to your sites — Google even offers a couple of formats that you can [copy and paste straight from their site](http://www.google.com/talk/service/badge/New). It couldn't be easier! However, if you'd like the coolness of the iframe version (javascript popup, etc.) and the themability of the simple link, here's a little code for you: 

{% highlight html %}
	<a class="ask-item" 
		title="Chat with Brad instantly" onclick="window.open('http://www.google.com/talk/service/badge/Start?tk=z01q6amlq1do7r41j2498um28pp81ungnf86ajqk6cj1kqrk8htll2t43us1gk2aua89v8akkuuagor6inh581hoqpskhbkb4s9rlur1brtcqen9al2c0gqkj2auj7q0pp25321osdbr2khk7l3ee7msrjvfto918t6v9u15a','Window','menubar=no,width=300,height=500,toolbar=no,resizable=yes');" href="#">
	<script type="text/javascript">
		if(location.protocol.toLowerCase() =='http:'){
			document.write(unescape("%3Cimg src='http://www.google.com/talk/service/badge/Show?tk=z01q6amlqb9e8ste4je59hoj5t9ngb9evhed9couk6fd7lli6i4s1lkuujp02g0mkd9e3b6cm3s9d5uab3ud8et6m2raheov3ugl8r5golbc75mmoi4uol4uhj17kife84ecn2i1rbsikfnkglac5lmh6ooed3sv9d82idslh&w=9&h=9' alt='' /%3E"));
			}
	</script>
	<span>Chat with Brad</span>
	</a>
{% endhighlight %}

Notes:

  * For those of you that use protocols other than http, the script will conditionally avoid a mismatch. If this isn't a concern, you can remove the javascript and just use the straight img tag
  * The whole thing is wrapped in the link to make the indicator clickable, so the span can be used to style the text with an underline
  * To use it, just get the URLs from the Google code generator and insert them where they make sense
  * The link uses inline JavaScript, which is not the best answer in terms of usability and browser compatibility, but should fail silently in fringe use cases