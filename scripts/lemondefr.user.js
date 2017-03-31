
// ==UserScript==
// @description	Remove stuff from lemonde.fr
// @grant       none
// @include	http://www.lemonde.fr/
// @name	FixLemondeFr
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var hide_them=[];

var nodes = document.body.getElementsByTagName('section');
for (var J=nodes.length-1;  J >= 0;  J--)
	{
	var node    = nodes[J];
        if (!node) continue;
	var clazz = node.getAttribute("class");
	if(clazz==null || clazz.length==0) continue;
	if( clazz.indexOf(" poops ")!=-1 ||
            clazz.indexOf(" sport ")!=-1 ||
            clazz.indexOf("deroule_rubrique_marque")!=-1)
	    	{
	    	node.parentNode.removeChild (node);
	    	continue;
	    	}
	}

nodes = document.body.getElementsByTagName('div');
for (var J=nodes.length-1;  J >= 0;  J--)
	{
	var node    = nodes[J];
        if (!node) continue;
	var clazz = node.getAttribute("class");
	if(clazz==null || clazz.length==0) continue;
	if(clazz=="services" || clazz.indexOf("appel-marque")!=-1  || clazz.indexOf("appels-marque")!=-1)
	    	{
	    	node.parentNode.removeChild (node);
	    	continue;
	    	}
	}

