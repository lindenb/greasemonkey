
// ==UserScript==
// @description	Hide some posts from RedditGetsDrawn
// @grant       none
// @include	https://www.reddit.com/r/redditgetsdrawn/*
// @name	fix rgd
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var hide_them=[];
var hide_tokens=["puppies","my dog","my cat","my daughter","and my boyfriend","girlfriend and i"," dog ",
	"grandaughter","kitty"];

var nodes = document.body.getElementsByTagName('div');
for (var J=nodes.length-1;  J >= 0;  J--)
	{
	var node    = nodes[J];
        if (node)
	    {
	    var clazz = node.getAttribute("class");
	    if(clazz==null || clazz.length==0) continue;
	    
	   
	    if(clazz.indexOf("thing")==-1) continue;
	    if(clazz.indexOf("link")==-1) continue;
	    
	    var author = node.getAttribute("data-author");
	    if(author.length>0 && hide_them.indexOf(author)!=-1)
	    	{

	    	node.parentNode.removeChild (node);
	    	 continue;
	    	}
	    var unders= node.getElementsByTagName('a');
    
	    var k=0;
	    for (k=0;k<unders.length;++k)
	    	{
	    	var under= unders[k];
	    	if(!under) continue;
	    	clazz = under.getAttribute("class");
         
	        if(clazz==null || clazz.length==0) continue;
	        if(clazz.indexOf("title")==-1) continue;
          
	        var text = under.textContent;
	        if(text==null) continue;
	        text=text.toLowerCase();
		
		var m=0;
		for(m=0;m< hide_tokens.length;++m)
			{
			if( text.indexOf(hide_tokens[m])!=-1) break;
			}
		if(m!=hide_tokens.length) break;
	       
	    	}
	    if(k!=unders.length)
	    	{
	    	node.parentNode.removeChild (node);
	    	}
	    
  	    }
	}

