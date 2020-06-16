// include jquery in console
var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// wait 5sec to load jquery
setTimeout(function(){ jQuery.noConflict();console.log("jQuery ready"); }, 5000);

// youtube thumbnail url
jQuery.getJSON( "https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=MjxGwfa5lxw", function( json ) {
  console.log( json.thumbnail_url );
});
