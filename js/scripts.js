(function($) {
    "use strict"; 
	   

    /* Search */
    
    const search = document.querySelector('.search');
    const search_icon = document.querySelector('.search_icon');
        search_icon.onclick = function(){
            search.classList.toggle('active')

        }

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top page-scroll"></a>');
    var amountScrolled = 100;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('200');
        } else {
            $('a.back-to-top').fadeOut('200');
        }
    });

    //Javascript -- responsive navigation menu
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".menu-btn");

    navToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === "false") {
            primaryNav.setAttribute("data-visible", true)
            navToggle.setAttribute("aria-expanded", true)
        }
        else if (visibility === "true") {
            primaryNav.setAttribute("data-visible", false)
            navToggle.setAttribute("aria-expanded", false)
        }
    })


    //Javascript -- video slider
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slider");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function (manual) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        contents.forEach((text) => {
            text.classList.remove("active");
        });

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
    }
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });

})(jQuery);