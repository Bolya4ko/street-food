$(function(){
     $('.header__burger').on('click', function(){
          $('.header__menu').toggleClass('header__menu--active');
        });
    
        let accardion = function () {
          let data = $('.delivery__acardion').attr("data-accardion");
          $('.delivery__acardion-title').on('click', function () {
            if (data === 'close') {
                 $('.delivery__acardion-content').slideUp();
                 if ($(this).hasClass('active')) {
                      $(this).toggleClass('active');
                 }
                 else {
                      $('.delivery__acardion-content').removeClass('active');
                      $(this).toggleClass('active');
                 }
            }
            else {
                 $(this).toggleClass('active');
            }
            $(this).next('.delivery__acardion-content').not(':animated').slideToggle();
       })
        }
        accardion();

        $('.basket__item-amount, .form-delivery__select-box, .form-time__input, .form-time__person-input, .form-time__question-input, .form-order__checkbox').styler();
}); 
