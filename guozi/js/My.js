$(document).ready(function () {
  var $navli = $('.nav ul li');
  var $navSon = $('.navSon')

  $navli.hover(function () {
    $(this).addClass('on');
    $(this).find('.navSon').stop().slideDown();
  }, function () {
    $(this).removeClass('on');
    $(this).find('.navSon').stop().slideUp();
  })
  $('.middle-in ul li').hover(function () {
    $('.middle-in ul li').removeClass('cur');
    $(this).addClass('cur');
  })

  //鎼滅储
  $(".search").hover(function () {
      $(".text").css('padding-left', '10px').stop().animate({
        width: "300px"
      });
    }, function () {
      $(".text").css('padding-left', '0').stop().animate({
        width: "0"
      });
    }

  );

});

$(function () {

  jQuery(".slideBox1").slide({
    mainCell: ".bd ul",

    autoPlay: true
  });
  jQuery(".slideBox2").slide({
    mainCell: ".bd ul",
    effect: "leftLoop",
    autoPlay: true
  });
  jQuery(".slideBox3").slide({
    mainCell: ".bd ul",

    autoPlay: true
  });

});