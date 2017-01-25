$(window).on("load", function() {

  var $landingWrapper = $(".landing-wrapper"),
      $landingInnerContent = $(".landing-inner-content");

  // set initial container to half of .landing-inner-content width
  //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});
  
  // scroll left and right
  $landingInnerContent.on("mousemove touchmove", function(e) {
    if (e.clientX > $landingWrapper.width() / 2) {
      TweenMax.to($landingWrapper, 2, {
        scrollTo: {
          x: "+=175"
        },
        ease: Power2.easeOut
      });
    } else {
      TweenMax.to($landingWrapper, 2, {
        scrollTo: {
          x: "-=175"
        },
        ease: Power2.easeOut
      });
    }
  });

});