
// ==UserScript==
// @description	Remove stuff from DA
// @grant       none
// @include	http://*.deviantart.com/*
// @name	FixDeviantArt
// @namespace   https://github.com/lindenb/greasemonkey
// ==/UserScript==

var block_notice=document.getElementById("block-notice");
if( block_notice  != null )
	{
	block_notice.style.visibility = "hidden";
	}

