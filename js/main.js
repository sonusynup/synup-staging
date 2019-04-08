$( document ).ready(function() {
      var removeClass = true;
      $("#mask_overlay").click(function () {
      $(".mask").toggleClass('active');
      removeClass = false;
      });

      $("#mask_overlay").click(function() {
      removeClass = false;
      });
});


var navHeight = $('#wrapper').outerHeight(true);


// $('#primary-nav').affix({
//     offset: {top: $('#primary-nav').offset().top+2}
// });


// $('#wrapper').affix({
//     offset: {top: $('#wrapper').offset().top+2}
//     // $('body').css('padding-top', navHeight);
// });



$(document).ready(function () {
  //console.log($('#primary-nav').offset().top);
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
    function connectUs () {

      $(".social-media > a").each(function() {
          var getTxt = $("#facebook span").text();
          // console.log("getTxtbefore::"+getTxt);
        var getClass =  $(this).attr("class").split(" ")[0]
        $(this).mouseenter(function() {
          var getTxt = $("#facebook span").text();
          // console.log("in");
          $("#facebook span").text(getClass);
          console.log("getClass::"+getClass);
        }).mouseleave( function (){
            // console.log("out");
          $("#facebook span").text(getTxt);
          });
        });

    }
    connectUs();

    function changePosition () {


        $(".Facebook.fb").mouseenter(function() {
          $(".basic-arrows").css({"display":"none"})
            $(".Facebook.arrows").css({"display":"block","background-position":"80px -420px"})
        });
        $(".Facebook.fb").mouseleave(function () {
            $(".Facebook.arrows").css({"display":"none"})
            $(".basic-arrows").css({"display":"block"})
            });
        $(".YellowPage.yp").mouseenter(function() {
          $(".basic-arrows").css({"display":"none"})
            $(".YellowPage.arrows").css({"display":"block","background-position":"80px -840px"})
        });
        $(".YellowPage.yp").mouseleave(function () {
            $(".YellowPage.arrows").css({"display":"none"})
            $(".basic-arrows").css({"display":"block"})
          });
        $(".GooglePlus.gp").mouseenter(function() {
          $(".basic-arrows").css({"display":"none"})
            $(".GooglePlus.arrows").css({"display":"block","background-position":"80px -1260px"})
        });
        $(".GooglePlus.gp").mouseleave(function () {
            $(".GooglePlus.arrows").css({"display":"none"})
            $(".basic-arrows").css({"display":"block"})
          });
        $(".Yelp.ylp").mouseenter(function() {
          $(".basic-arrows").css({"display":"none"})
            $(".Yelp.arrows").css({"display":"block","background-position":"80px -1680px"})
        });
        $(".Yelp.ylp").mouseleave(function () {
            $(".Yelp.arrows").css({"display":"none"})
            $(".basic-arrows").css({"display":"block"})
          });
        $(".Yahoo.yh").mouseenter(function() {
          $(".basic-arrows").css({"display":"none"})
            $(".Yahoo.arrows").css({"display":"block","background-position":"80px -2100px"})
        });
        $(".Yahoo.yh").mouseleave(function () {
            $(".Yahoo.arrows").css({"display":"none"})
            $(".basic-arrows").css({"display":"block"})
          });
        $(".Bing.bn").mouseenter(function() {
          $(".basic-arrows").css({"display":"none"})
            $(".Bing.arrows").css({"display":"block","background-position":"80px -2520px"})
        });
        $(".Bing.bn").mouseleave(function () {
            $(".Bing.arrows").css({"display":"none"})
            $(".basic-arrows").css({"display":"block"})
          });


    }
    changePosition();
});

