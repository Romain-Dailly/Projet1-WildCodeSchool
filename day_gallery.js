jQuery(function(){
    $(function () {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
    if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
    $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
    } else { 
    $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
    }
    });
    });
    });

/*test scroll fade*/
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".row")
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })