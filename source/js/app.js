$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
 
        /* fixed header */
        checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){

        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this= $(this),
            blockId = $this.data('scroll'), 
            blockOffset = $(blockId).offset().top;

        $("#menu a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 400);
    });

    /* menu toggle */
    $("#menu_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#menu").toggleClass("active");
    });

    /*Collapse*/
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this= $(this),
            blockId = $this.data('collapse'); 
        $this.toggleClass("active");
    });

    /*slider*/
    $("[data-slider]").slick({
        infnite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

 

    });