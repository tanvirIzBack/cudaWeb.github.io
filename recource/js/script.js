$(document).ready(function(){
    var mixer = mixitup('#container');
      $('#opn').click(function(){
        $('.u9u9').css({'width' : '100%'});
      });
      $('.gol').click(function(){
        $('.u9u9').css({'width' : '0%'});
      });
});
$(function(){
  $('.rone ul li a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1100);
    return false;
  });
});