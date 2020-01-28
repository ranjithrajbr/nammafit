// -----------------------------

//   js index
/* =================== */
/*  ## preloader
    ## sticky
    ## scroll-up
    ## counter
    ## smooth scroll
    ## countdown
    ## owl carousel
    ## WOW 
    ## StellarNav Activaton Plus Dropdown Support
    ## Skill Bar
    ## Youtube Video Player By Passing URL
    ## Shuffle JS
    ## Contact Form
    

    

*/
// -----------------------------


(function($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });


 
    
    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });
    
    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });
    
    /*------------------------------
         counter
    ------------------------------ */
    $('.counter-up').counterUp();

    
    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });

    
    /*---------------------
    countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });
    
    /*---------------------
    owl carousel
    --------------------- */

    // Hero 1 Carousel
    function hero1_carousel() {
        var owl = $(".hero1-carousel");
        owl.owlCarousel({
            loop: true,
            margin:20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    hero1_carousel();

    // Testimonial Carousel
    function testimonial_carousel() {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin:20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    testimonial_carousel();


    // Class Details Gallery Carousel
    function cdgallery_carousel() {
        var owl = $(".cdgallery-carousel");
        owl.owlCarousel({
            loop: true,
            margin:20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    cdgallery_carousel();

    
    

    /**================================ 
    WOW 
    ================================**/
    var wowSel = 'wow';
    
    var wow = new WOW({
        boxClass: wowSel,
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
            
        },
        scrollContainer: null
    });
    wow.init();
    /**================================ 
    End of WOW 
    ================================**/
    
    /*-------------------------------------------------
    StellarNav Activaton Plus Dropdown Support
    ------------------------------------------------- */
    $(window).on('load', function() {
        
        $('.stellarnav').stellarNav({
            // theme: 'dark',
            breakpoint: 992,
            position: 'right',
            phoneBtn: false,
            menuLabel: ' ' // label for the mobile nav
        });
        // Remove Hamburger Close Button Href Attribute
        $(".close-menu").removeAttr("href");
    });
    $(window).on('load', function() {

        $('.has-sub>a').parent().on('mouseover', function() {
            var menu = $(this).find(">ul");
            var menupos = $(menu).offset();
            var menuextrawidth = menupos.left+menu.width() - $(window).width();
            if (menuextrawidth > 0) {
                menu.parent().addClass('drop-left');
            }
        });
        $('.rexfit-nav ul>li.has-sub>ul>li.has-sub>a').parent().on('mouseover', function() {
            var lv3menu = $(this).find(">ul");
            var menu3pos = $(lv3menu).offset();
            var menu3extrawidth = menu3pos.left+lv3menu.width() - $(window).width();
            if (menu3extrawidth > 0) {
                lv3menu.parent().addClass('drop3-left');
            }
        });

        // Staller Nav OffCanvas Mode
        if (!$(".navSlideOnly").length > 0) {
            $('.rexfit-nav a.menu-toggle').on('click', function(){
                var mobileNavWidth = $('.stellarnav.mobile.active>ul').width();
                var mobileBodySlide = '-'+mobileNavWidth+'px';
    
                if ($(".stellarnav.mobile.active>ul").length > 0) {
                    $('body').css('margin-left', mobileBodySlide);
                    $('body').addClass('mobiletoggleSlide');
                    $('.header-area').css('right', mobileNavWidth);
                    $('.header-area').css('left', mobileBodySlide);
                    
                    
                }else {
                    $('body').removeClass('mobiletoggleSlide');
                    $('body').css('margin-left', '0px');
                    $('.header-area').css('right', '0px');
                    $('.header-area').css('left', '0px');
                    
                }
                
            });
            // Offcanvase on swipe

            $("body").on('swiperight', function() {
                if( $('.stellarnav.mobile.active').length > 0 ) {
                    // alert('Hello Mr Shahadat');
                    $('.stellarnav.mobile').removeClass('active');
                    $('body').removeClass('mobiletoggleSlide');
                    $('body').css('margin-left', '0px');
                    $('.header-area').css('right', '0px');
                    $('.header-area').css('left', '0px');
                    $('.rexfit-nav.mobile>ul').css('display', 'none');
                }
            });
            //Bind the swipeleftHandler callback function to the swipe event on div.box
            // $('body').on('swiperight', function(){
            //     if( $('.stellarnav.mobile.active').length > 0 ) {
            //         // alert('Hello Mr Shahadat');
            //         $('.stellarnav.mobile').removeClass('active');
            //         $('body').removeClass('mobiletoggleSlide');
            //         $('body').css('margin-left', '0px');
            //         $('.header-area').css('right', '0px');
            //         $('.header-area').css('left', '0px');
            //         $('.rexfit-nav.mobile>ul').css('display', 'none');
            //     }
                
            // });
            

            $('body').on('click', function(e){
                // Check if click was triggered on or within .stellarnav.mobile.active
                if( !$(e.target).closest(".stellarnav.mobile.active").length > 0 ) {
                    $('body').removeClass('mobiletoggleSlide');
                    $('body').css('margin-left', '0px');
                    $('.header-area').css('right', '0px');
                    $('.header-area').css('left', '0px');
                    
                }
                
            });
        }
        
        
        
        
    });
    
    $(window).on('resize', function(){
        // Check if click was triggered on or within .stellarnav.mobile.active
        if( $('.stellarnav.mobile.active').length > 0 ) {
            
            return false;
        } else {
            $('body').removeClass('mobiletoggleSlide');
            $('body').css('margin-left', '0px');
            $('.header-area').css('right', '0px');
            $('.header-area').css('left', '0px');
        }
        
        // Otherwise
        // trigger your click function
    });

    
    
    /*--------------------------- Stellar Nav JS END -------------------------- */
    

    /*---------------------
    ## Skill Bar
    --------------------- */
    if ($(".profoSkill").length > 0) {
        $(".bar").each(function () {
            var $bar = $(this),
                $pct = $bar.find(".pct"),
                data = $bar.data("bar");
            setTimeout(function () {
                $bar
                    .animate({
                        "width": $pct.html()
                    }, data.speed || 2000, function () {
                        $pct.css({
                            "opacity": 1
                        });
                    });
            }, data.delay || 0);
        });
    }
    


    // Youtube Video Player By Passing URL
    if ($("#youtubeVideoUrl").length > 0) {
        // $(window).on('load',function () {
            $('#YTopen').on('click', function () {
                if (!$("#YTvidP").length > 0) {
                    var youTubeUri = $('#youtubeVideoUrl').text();
                    var youTubeVideoId = get_youtubeId(youTubeUri);
                    loadYouTubeVideo(youTubeVideoId);
                }
                
            }); 
        // });
    
        function get_youtubeId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return match[2];
            } else {
                //error
            }
        }
    
        function loadYouTubeVideo(id){
            $('#iframe').append("<iframe id='YTvidP' class='YTembed' src='https://www.youtube.com/embed/"+id+"?autoplay=1' allowfullscreen></iframe>");
        }
    }

    // Play Youtube Video By Click Modal Button
    $('.YTVidModal button.close').on('click', function(){
        $('#YTvidP').remove();
    });
   
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('#YTvidP').remove();
        }
    });
    

    // Shuffle JS
    
    if ($('.gallery3-grid').length > 0) {
                
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('.gallery3-grid'), {
        itemSelector: '.grid3-item',
        sizer: '.grid3-sizer',
        buffer: 1,
        });

        $('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
        });
    }
    


     // Contact Form
     $('.cf-msg').hide();
     $('form#cf button#submit').on('click', function() {

         var firstName = $('#firstName').val();
         var email = $('#email').val();
         var subjectName = $('#subjectName').val();
         var msg = $('#msg').val();
         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

         if (!regex.test(email)) {
             alert('Please enter valid email');
             return false;
         }

         firstName = $.trim(firstName);
         subjectName = $.trim(subjectName);
         email = $.trim(email);
         msg = $.trim(msg);

         if (firstName != '' && email != '' && msg != '') {
             var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
             $.ajax({
                 type: "POST",
                 url: "assets/php/mail.php",
                 data: values,
                 success: function() {
                     $('#firstName').val('');
                     $('#subjectName').val('');
                     $('#email').val('');
                     $('#msg').val('');

                     $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                     setTimeout(function() {
                         $('.cf-msg').fadeOut('slow');
                     }, 4000);
                 }
             });
         } else {
             $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
         }
         return false;
     });

}(jQuery));











