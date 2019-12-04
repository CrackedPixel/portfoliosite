$(document).ready(function () {
  var nH1 = $('#h1');
  var nHBtn = $('#h1b');
  
  nH1.hover( function() {
      nH1.addClass( "isHover" );
    }, function() {
      nH1.removeClass( "isHover" );
    }
  );

  nHBtn.hover( function() {
      nH1.addClass( "isHover" );
    }, function() {
      nH1.removeClass( "isHover" );
    }
  );
  console.log("jQuery loaded");
}); // ready