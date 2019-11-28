
// ==UserScript==
// @description links to IG
// @grant       none
// @include	https://www.pictame.com/*
// @include	https://stalkfest.com/*
// @name	pictame links
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var anchors=[];
var iter = document.evaluate("//a[(@class='user-name' or @class='some-item-user') and @href]",document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
for(;;) {
    var e = iter.iterateNext();
    if(e==null) break;
    anchors.push(e);
    }

for(var i in anchors) {
	var e=anchors[i];
 	var href = e.getAttribute("href");
    var tokens = href.split(/\//);
    for(var i=0;i+1< tokens.length;i++)
    	{
    	if(tokens[i]=="user" || tokens[i]=="account") {
    		href="https://www.instagram.com/"+tokens[i+1];
    		e.setAttribute("href",href);
    		e.setAttribute("title",href);
    		e.setAttribute("target","_blank");
    		break;
    		}
    	}
    }
