$(document).ready(function () {
  console.log("jQuery loaded");
  var nPages = [$('#welcome'), $('#aboutme'), $('#skillset'), $('#projects'), $('#contact')];
  var nHeader = $('header');
  var nH1 = $('#h1');
  var nHBtn = $('#h1b');
  checkAllSections();

  function setNewPage(nID) {
    var nClass = 'p' + (nID+1);
    for (var i = 0; i < nPages.length; ++i){
      nHeader.removeClass('p' + (i+1));
    }
    nHeader.addClass(nClass);
  }

  function checkAllSections() {
    var sTop = $(this).scrollTop();
    for( var i = 0; i < nPages.length; ++i){
      if( sTop >= nPages[i].position().top && sTop <= (nPages[i].position().top + nPages[i].height())){
        setNewPage(i);
      }
    }
  }

  $(document).on('scroll', function() {
    checkAllSections();
  })

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

}); // ready