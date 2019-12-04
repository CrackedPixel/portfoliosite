$(document).ready(function () {
  console.log("jQuery loaded");
  var nPages = [$('#welcome'), $('#aboutme'), $('#skillset'), $('#projects'), $('#contact')];
  var nHeader = $('header');
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

}); // ready