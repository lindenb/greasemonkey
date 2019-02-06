// ==UserScript==
// @description	Fix 500px. Add url to the picture
// @grant       none
// @include	https://500px.com/*
// @name	Fix500px
// @namespace   https://github.com/lindenb/greasemonkey
// @run-at document-idle
// ==/UserScript==

var nodes = document.getElementsByTagName('meta');
for (var j=0;j< nodes.length;++j)
	{
	var meta = nodes[j];
	if(!meta) continue;
	var content = meta.getAttribute("content");
  if(content==null) continue;
  var og_image = meta.getAttribute("property");
  if(og_image==null || og_image!="og:image") continue;
    
  var body= document.body;
  if(body==null) continue;
  
   var a= document.createElement("a");
  a.appendChild(document.createTextNode("[EXPPPORT]"));
  a.setAttribute("href",content);
  a.setAttribute("title",content);
  a.setAttribute("target","_blank");
  body.insertBefore(a,body.firstChild);
  break;
  }