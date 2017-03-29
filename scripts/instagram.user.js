// ==UserScript==
// @description	Fix instagram. Add url to the picture
// @grant       none
// @include	https://www.instagram.com/*
// @name	FixInstahram
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var nodes = document.body.getElementsByTagName('article');
for (var j=0;j< nodes.length;++j)
	{
	var node    = nodes[j];
  if(!node) continue;
  var imgs= node.getElementsByTagName('img');
  var url=null;
	for (var k=0;k<imgs.length;++k)
    {
      var img=imgs[k];
      if(!img) continue;
      var src = img.getAttribute("src");
      if(src==null || src.indexOf("_n.")==-1) continue;
      url=src;
    }
  if(url==null) continue;
  var a= document.createElement("a");
  a.appendChild(document.createTextNode("[...]"));
  a.setAttribute("href",url);
  a.setAttribute("title",url);
  a.setAttribute("target","_blank");
  node.appendChild(a);
  }
