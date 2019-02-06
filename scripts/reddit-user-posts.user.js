
// ==UserScript==
// @description Display posts of a reddit user
// @grant       none
// @include	https://www.reddit.com/*
// @name	reddit user posts.
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var array=[];
var iter = document.evaluate("//p[contains(@class,'tagline') and time]/a[starts-with(@href,'https://www.reddit.com/user/')]",document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  for(;;) {
    var a = iter.iterateNext();
     if(a==null) break;
    var href= a.getAttribute("href");
	  if(href.endsWith("/")) continue;
    array.push(a);
    array.push(href+"/posts/");
	}
// after, otherwise got "InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable"
for(var i=0;i+1<array.length;i+=2) {
  array[i].href = array[i+1];
}

