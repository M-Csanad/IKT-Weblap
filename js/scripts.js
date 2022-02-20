(function($) {
    "use strict"; 
	
	/* Navbar Scripts */
    // closes the responsive menu on menu item click
    $(".navbar-nav a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });

    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });
    

    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top page-scroll"></a>');
    var amountScrolled = 100;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
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