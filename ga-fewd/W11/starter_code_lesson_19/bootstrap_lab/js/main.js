// KONAMI!

var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    
    // Add your own easter egg here!!
    $.getScript('http://www.cornify.com/js/cornify.js',function(){
      cornify_add();
      $(document).keydown(cornify_add);
    });


  }
});