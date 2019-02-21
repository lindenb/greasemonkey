// ==UserScript==
// @description Display posts of a reddit user
// @grant       none
// @include	https://www.ncbi.nlm.nih.gov/pubmed*
// @name	pubmed
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var array=[];
var iter = document.evaluate("//p/a[starts-with(@href,'/pubmed?linkname=pubmed_pubmed&from_uid=') and text()='Similar articles']",document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  for(;;) {
    var a = iter.iterateNext();
     if(a==null) break;
     var href= a.getAttribute("href");
     var eq= href.indexOf("_uid=");
     if(eq==-1) continue;
     href=href.substr(eq+5);
     var amp= href.indexOf("&");
     if(amp!=-1)   href=href.substr(0,amp);
     array.push(a.parentNode);
     array.push(href+"/posts/");
     }

for(var i=0;i+1<array.length;i+=2) {
  var a = document.createElement("a");
  a.setAttribute("title","bibtex");
  a.setAttribute("target","_blank");
  a.setAttribute("href","https://www.bioinformatics.org/texmed/cgi-bin/list.cgi?.submit=export&PMID="+array[i+1]);
  a.appendChild( document.createTextNode("BibTex"));
  
  array[i].appendChild(a);
}
