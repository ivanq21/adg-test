$(function(){

  $('.js-language__selected, .language__dropdown-item').on('click', function(){
    $('.language__dropdown-wrapper').toggleClass('is-active');
  });

  $('body').on('click', function(event){
    if($(event.target).closest('.language').length === 0){
      $('.language__dropdown-wrapper').removeClass('is-active');
    }
  });

  $('.js-menu__btn').on('click', function(){
    $('.menu__list').toggleClass('is-active');
  });

})