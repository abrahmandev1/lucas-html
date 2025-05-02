/*
Author       : AB_Themes
Template Name: Edumate
Version      : 1.0
*/

(function ($) {
    "use strict";

    $(document).ready(function () {
       /* One Page Navigation & Wow.js */
		$(".main_menu").onePageNav({
			currentClass: "active",
			changeHash: true,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: ":not(.external)",
			easing: "swing",
			begin: function () {
				console.log("Scrolling started");
			},
			end: function () {
				console.log("Scrolling ended");
			},
			});

			/* Navbar Toggle and Reduce */
			var nav = $("nav");
			var navHeight = nav.outerHeight();

			$(".navbar-toggler").on("click", function () {
			if (!$("#mainNav").hasClass("navbar-reduce")) {
				$("#mainNav").addClass("navbar-reduce");
			}
			});

			const toggler = document.querySelector(".navbar-toggler");
			const navbarCollapse = document.querySelector(".navbar-collapse");

			if (navbarCollapse.classList.contains("show")) {
			navbarCollapse.classList.remove("show");
			}

			if (!toggler.classList.contains("collapsed")) {
			toggler.classList.add("collapsed");
			toggler.setAttribute("aria-expanded", "false");
			}

			/* Navbar Scroll Behavior */
			$(window).on("scroll", function () {
			var pixels = 50;
			var top = 1200;

			if ($(window).scrollTop() > pixels) {
				$(".navbar-expand-md").addClass("navbar-reduce");
				$(".navbar-expand-md").removeClass("navbar-trans");
			} else {
				$(".navbar-expand-md").addClass("navbar-trans");
				$(".navbar-expand-md").removeClass("navbar-reduce");
			}

			if ($(window).scrollTop() > top) {
				$(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
			} else {
				$(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
			}
			});

			/* Scroll to Top */
			$(".scrolltop-mf").on("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 1000);
			});

			/* Close responsive menu when a scroll trigger link is clicked */
			$(".js-scroll").on("click", function () {
			$(".navbar-collapse").collapse("hide");
			});


			/* Sticky Nav */
			$(window).on("scroll", function () {
			if ($(window).scrollTop() > 200) {
				$(".scrolling-navbar").addClass("top-nav-collapse");
			} else {
				$(".scrolling-navbar").removeClass("top-nav-collapse");
			}
			});

				
			/*START WOW ANIMATION JS*/
			new WOW().init();	
			/*END WOW ANIMATION JS*/	

        // start marqee
        if ($(".marquee").length) {
            $('.marquee').marquee({
                speed: 100,
                gap: 20,
                delayBeforeStart: 500,
                direction: 'left',
                duplicated: true, 
                loop: false, // Changed to not loop
                animation: 'scroll',
                animationEasing: 'linear',
                pauseOnHover: true,
                startVisible: true,
                scrollDirection: 'left',
            });
        }


		// testimonial
		$('#testimonial_slider').owlCarousel({
			loop:true,
			margin:25,
			nav:true,
			dots: false,
			navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"], 
			items: 3,
			responsive: {
				0: { items: 1 },
				430: { items: 1 },
				768: { items: 2 },
				992: { items: 3 },
				1200: { items: 3 }
			}
		})
        

		

		 /* Hide Navbar on Scroll */
		  var prevScrollpos = window.pageYOffset;
		  window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			var navbar = document.getElementById("mainNav");

			if (prevScrollpos > currentScrollPos) {
			  // Scrolling up: Show the navbar
			  navbar.style.top = "0";
			} else {
			  // Scrolling down: Hide the navbar
			  navbar.style.top = "-100px"; // Adjust based on navbar height
			}
			prevScrollpos = currentScrollPos;
		  };
        
    }); // Closed $(document).ready() properly

	
	const cursorInner = document.querySelector('.cursor-inner');
	const cursorOuter = document.querySelector('.cursor-outer');

	document.addEventListener('mousemove', (e) => {
	gsap.to(cursorInner, {
		x: e.clientX,
		y: e.clientY,
		duration: 0.1,
		ease: "power2.out"
	});
	gsap.to(cursorOuter, {
		x: e.clientX,
		y: e.clientY,
		duration: 0.3,
		ease: "power3.out"
	});
	});

	// Hover effect on links/buttons
	const interactiveElements = document.querySelectorAll('a, button, .magnetic');

		interactiveElements.forEach((el) => {
		el.addEventListener('mouseenter', () => {
			gsap.to(cursorOuter, { scale: 1.5, duration: 0.3 });
		});
		el.addEventListener('mouseleave', () => {
			gsap.to(cursorOuter, { scale: 1, duration: 0.3 });
		});
	});


	const magnets = document.querySelectorAll('.magnetic');

	magnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', function(e) {
			const bounding = this.getBoundingClientRect();
			const strength = 40; // How far the cursor pulls

			const relX = e.clientX - bounding.left;
			const relY = e.clientY - bounding.top;

			const moveX = (relX - bounding.width / 2) / bounding.width * strength;
			const moveY = (relY - bounding.height / 2) / bounding.height * strength;

			gsap.to(this, {
			x: moveX,
			y: moveY,
			duration: 0.3,
			ease: "power2.out"
			});
		});

		magnet.addEventListener('mouseleave', function() {
			gsap.to(this, {
			x: 0,
			y: 0,
			duration: 0.3,
			ease: "power2.out"
			});
		});
	});


   
	(function ($) {
		'use strict';
	
		$(window).on('load', function () {
			const svg = document.getElementById("loader");
			const tl = gsap.timeline();
	
			const startShape = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
			const endShape = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
	
			// Animation for text fading out
			tl.to(".loader-container .loaded", {
				delay: 1.2,
				y: -50,
				opacity: 0,
				duration: 0.6,
			});
	
			// Animate the SVG morphing from start shape to end shape
			tl.to(svg, {
				duration: 0.6,
				attr: { d: startShape },
				ease: "power1.easeIn",
			}).to(svg, {
				duration: 0.6,
				attr: { d: endShape },
				ease: "power1.easeOut",
			});
	
			// Move and hide the preloader
			tl.to(".preloader", {
				y: -1000,
				duration: 0.8,
			}).to(".preloader", {
				zIndex: -1,
				display: "none",
			});
		});
	
	}(jQuery));


	/*----------------------------------------------
	10. Reveal Text
	----------------------------------------------*/


	const splitTypes = document.querySelectorAll(".reveal-text");
    const rootStyles = getComputedStyle(document.documentElement);
    
    // Get initial colors
    let primaryColor = rootStyles.getPropertyValue('--primary-t-color').trim();
    let secondaryColor = rootStyles.getPropertyValue('--primary-t-color-2').trim();

    // Check for 'odd' class in body or parent
    if (document.body.classList.contains('odd')) {
        primaryColor = rootStyles.getPropertyValue('--secondary-t-color').trim();
        secondaryColor = rootStyles.getPropertyValue('--secondary-t-color-2').trim();
    }

    splitTypes.forEach((char) => {
        const text = new SplitType(char, { types: 'words, chars' });

        gsap.fromTo(text.chars,
            { color: secondaryColor }, // Initial color from SCSS variable
            {
                color: primaryColor, // Target color from SCSS variable
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                stagger: 0.1,
            }
        );
    });
	

  /*----------------------------------------------
   End Reveal Text
  ----------------------------------------------*/
	// accordion start
	document.querySelectorAll('.accordion-button').forEach(button => {
		button.addEventListener('click', () => {
			const icon = button.querySelector('.toggle-icon');
			const isOpen = !button.classList.contains('collapsed');
		});
	});
	// accordion end

	// typedText
	gsap.to("#typedText", {
		duration: 1,
		opacity: 1,
		y: 0,
		delay: 1, // Delay before typing starts
		onComplete: () => {
		  new Typed("#typedText", {
			strings: [
				"on Visual Design",
				"on UI/UX Design",
				"on Product Design",
			],
			typeSpeed: 50,
			backSpeed: 25,
			backDelay: 2000,
			loop: true,
			showCursor: true
		  });
		}
	  });

})(jQuery);

	// Project popup model
	function openModal() {
		document.getElementById("projectModal").style.display = "flex";
	}
	s
	function closeModal() {
		document.getElementById("projectModal").style.display = "none";
	}

	// Optional: Close when clicking outside modal content
	window.onclick = function(event) {
		const modal = document.getElementById("projectModal");
		if (event.target === modal) {
		closeModal();
		}
	}