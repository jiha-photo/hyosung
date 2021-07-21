(function() {
    var sc = 0; // scrollTop
    var header = $('#header');
    

    // $(window).resize(function() {
    //     winH = $(window).height();
    //     // mainSlider.height(winH);
    // }).trigger('resize');

    // language 토글
    $('#header .language').on('mouseenter', function() {
        $(this).find('.lang_list').stop().slideDown(0);
    }).on('mouseleave', function() {
        $(this).find('.lang_list').stop().slideUp(0);
    });

    //  // gnb .depth2 애니메니션
    $('#header .gnb').on('mouseenter', function() {
        $('#header').addClass('on');
    }).on('mouseleave', function() {
        $('#header').removeClass('on');
    });

    // 모바일 사이드메뉴 (m_gnb)
    $('#header .btn_sidemenu, #header .top_sidemenu .btn_close').on('click', function() {
        $('#header .m_gnb_wrap').toggleClass('on'); 
    });

    // 모바일 depth2 열기
    $('#header .m_gnb>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings().removeClass('active');
        
        $('#header .m_gnb .depth2_wrap').stop().slideUp();
        
        if( $(this).parent().hasClass('active') ) {
            $(this).siblings().stop().slideDown();
        }
    });

    // var mainSlider =  $('.main_slider');

    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.slide-button-next',
            prevEl: '.slide-button-prev',
        },
    });

    
 

    /* 패밀리사이트 */
    $('#footer .family').on('click', function() {
        $(this).toggleClass('on');
        $('.family_site .list_family').slideToggle();
    });

})();