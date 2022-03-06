$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 3200) {
        $('.header').css('padding', '2px 0px');
        $('.l_company').css('width', '80px');
        $('.nav-item .nav-link').css('font-size', '13px');
        $('.search i, .shop i, .user i, .lang i').css('font-size', '18px');
    } else {
        $('.header').css('padding', '13px 0px ');
        $('.l_company').css('width', 'unset');
        $('.nav-item .nav-link').css('font-size', '15px');
        $('.search i, .shop i, .user i, .lang i').css('font-size', '21px');



    }
});






$(document).ready(function () {
    $('.shop').hover(function () {
        $('.carts').css('visibility', 'visible');
    });

    $('body').click(function (e) {
        if (!$(e.target).is('.carts', 'shops')) {
            $('.carts').css('visibility', 'hidden');

        }
    });
});










let icon = document.querySelector('.box_item.dropdown>.arrow_box i');
console.log(icon);

// });
$(".submenu").hide();
$(document).ready(function () {

    $(".box_item.dropdown").on('click ', function (e) {


        $(this).siblings('.submenu').slideToggle();
        $(this).find(".arrow_box i").toggleClass("open");
    });
});




//- mobile_menu
$('.drowdown').click(function (e) {
    $('.parent_bar').css('right', '0px');


});

$('.close_menu').click(function (e) {

    $('.parent_bar').css('right', '-150%');


});


$('.navbar .dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});



$('.intro_slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
    rtl: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})


$('.category_slider ').owlCarousel({
    loop: true,
    autoplay: true,
    items: 4,
    margin: 20,
    nav: true,
    dots: false,
    navText: ["<i class='fi-rs-angle-small-right'></i>", "<i class='fi-rs-angle-small-left'></i>"],
    rtl: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        480: {
            items: 1,
            nav: false,


        },

        600: {
            items: 2,
            nav: false,

        },
        1000: {
            items: 3,
            nav: false,

        },
        1024: {
            items: 3,
            nav: true,

        },

        1440: {
            items: 4,
            nav: true,

        },
    }
})


$(document).ready(function () {
    $('.newset_slider ').owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: false,
        rtl: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,

            },
            480: {
                items: 1,

            },

            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1024: {
                items: 3,
            },

            1440: {
                items: 4,
            },
        }
    })
})

$(document).ready(function () {
    $('.slider_brands').owlCarousel({
        items: 8,
        margin: 0,
        loop: true,
        dots: true,
        nav: false,
        rtl: true,
        autoplay: true,

        responsive: {
            0: {
                items: 1,


            },
            368: {
                items: 3,


            },
            480: {
                items: 3,


            },

            600: {
                items: 4,

            },
            1000: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    })
})

//- blog_slider
$(document).ready(function () {
    $('.blog_slider').owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        dots: true,
        nav: false,
        rtl: true,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1440: {
                items: 4,
            }
        }

    })
})


;



const att = document.querySelector('button.owl-dot.active span');
att.setAttribute('aria-label', 'button-slider')


var a = document.querySelector('a');