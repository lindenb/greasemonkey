/** scroll down  500px until click */

var scrolling=true;

function scrollStart() {
if(!scrolling) return;
var iter = document.evaluate( "//div[@class='scroll_to_top_container']", document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
var array=[];
for(;;) {
   var e= iter.iterateNext();
  if(e==null) break;
  array.push(e);
  }
 for(var a in array) {
  var e=array[a];
  e.scrollIntoView();
  }
 setTimeout(()=>scrollStart(),2000);
}



function scrollStop() {
  scrolling=false;
}

document.addEventListener("click",e=>scrollStop());

scrollStart();

