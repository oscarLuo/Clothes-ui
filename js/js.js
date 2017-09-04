var moblie = moblie ||{};
//This is for navigations part
(function(module,$){
    module.navigations = function(){
        var eventTarget =null, eventDropDown = null;
        $(".navigation .nav-bar .primary").each(function(){
            $(this).click(function(ev){
                eventDropDown =ev.target;
                $(this).siblings().find(".child-options").slideUp();
                $(this).find(".child-options").slideToggle();
            })
        });

        $(".container .header .icon ").click(function(ev){
            eventTarget = ev.target;
            $(this).css({"transform":"scale(rotate(90deg))"});
            $(".navigation").css({"left":0});
        });

        $("body").click(function(event){
            if(event.target !== eventTarget){
                $(".navigation").css({"left":"0"});
                if(event.target !== eventDropDown){
                    $(".navigation").css({"left":"-70%"}).find(".primary .child-options").delay(300).slideUp();
                }
            }
        });
    }

    module.navigations();
})(moblie,jQuery);

(function(module,$){
    module.carousel = function(){
        $(".carousel .carousel-container").slick({
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        });
    }
    module.carousel();
})(moblie,jQuery);
