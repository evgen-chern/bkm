$(function() {

    $('.change_lang').click(function (){
        $(this).toggleClass('active');
        $('.lang_list').stop(true).slideToggle();
    });

    let drop = '.dropped';
    let listNotWork = '.dropped:not(.work)';
    $(drop).click(function () {
        $(this).addClass('work');
        $(listNotWork).children('ul').stop(true).slideUp();
        if($(this).hasClass('work')){
            $(this).children('ul').stop(true).slideToggle();
        }
        $(this).removeClass('work');
    });

    $('.open_mobile__menu').click(function (){
        $('.header_mobile__menu').stop(true).slideToggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(drop).length) {
            $(drop).children('ul').stop(true).slideUp();
        }
        if (!$(e.target).closest('.change_lang').length) {
            $('.lang_list').stop(true).slideUp();
            $('.change_lang').removeClass('active');
        }
        if (!$(e.target).closest('.open_mobile__menu').length) {
            $('.header_mobile__menu').stop(true).slideUp();
        }
    });


    let topPx = 73;
    if($(window).width() < 1023){topPx = 70;}else{topPx = 72;}
    let $page = $('html, body');
    $('.header__menu a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - topPx
        }, 600);
        return false;
    });


    $('.header_mobile__menu a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $page.animate({
                scrollTop: $(hash).offset().top - 63
            }, 800);
        }
    });



    if ($(window).width() > 767){
        let header = $('.header_bottom');
        $(window).scroll(function() {
            if($(this).scrollTop() > 92) {
                header.addClass('fixed');
                $('body').css({
                    'paddingTop': '73px'
                });
            } else {
                header.removeClass('fixed');
                $('body').css({
                    'paddingTop': 0
                })
            }
        });
    }

    $('.slider__wrap').lightSlider({
        gallery: false,
        item: 1,
        loop:false,
        slideMargin: 0,
        controls: true,
        speed: 600,
    });

    $('.cert_slider').lightSlider({
        gallery: false,
        item: 5,
        loop:false,
        slideMargin: 29,
        controls: true,
        speed: 600,
        responsive : [
        {
            breakpoint:1279,
            settings: {
                item:4,
            }
        },
        {
            breakpoint:979,
            settings: {
                item:3,
            }
        },
        {
            breakpoint:767,
            settings: {
                item:1,
            }
        }
    ],
    });

    let elLink = '.subsection .elements .element_link';
    $(elLink).click(function() {
        let elLinkVal = $(this).attr("rel");
        if($(this).attr("rel")){
            let popup_id = $('#' + $(this).attr("rel"));
            $(popup_id).show();
            $('.overlay_popup').show();
        }
    })
    $('.close_link').click(function() {
        $('.overlay_popup, .popup-content').hide();
    });
    $('.overlay_popup').click(function() {
        $('.overlay_popup, .popup-content').hide();
    });

 });


$('[data-fancybox="f_certificates"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

$('[data-fancybox="f_gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});