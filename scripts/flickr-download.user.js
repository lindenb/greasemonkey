// ==UserScript==
// @description Dowload Flickr Image
// @grant       none
// @include	https://www.flickr.com/photos/*
// @name	flickr download
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var menu=null;
var src=null;

var iter = document.evaluate("//meta[@property='og:image']/@content",document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
for(;;) {
    var e = iter.iterateNext();
    if(e==null) break;
    src= e.nodeValue;
  console.log(src);
  break;
}

iter = document.evaluate("//li[@data-context='you']",document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
for(;;) {
    var e = iter.iterateNext();
    if(e==null) break;
    menu= e;
  break;
}


if(menu!=null && src!=null) {
  var a=document.createElement("a");
  
  a.setAttribute("href","#");
  a.setAttribute("target","_blank");
  a.setAttribute("class","gn-title");
  a.setAttribute("href",src);
  a.appendChild(document.createTextNode("Download"));
  menu.appendChild(a);
} else {
 console.log("greasemonkey failed"); 
}
