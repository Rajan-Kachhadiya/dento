
// top button start -----------------------------------
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;  // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// top button end ---------------------------------------

// top header collapse start
$(function() {
    var header = $(".sticky-top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("header1");
        } 
		else {
            header.removeClass("header1");
        }
    });
});
// top header collapse end

  
// dropdown start-------------------------------------------
(function($){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
})(jQuery)
// dropdown end----------------------------------------


// toggle tooltip start------------------------------------
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })
// toggle tooltip end-----------------------------------



// on scroll counter start------------------------------------
  var a = 0;
  $(window).scroll(function() {
  
	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
	  $('.counter-value').each(function() {
		var $this = $(this),
		  countTo = $this.attr('data-count');
		$({
		  countNum: $this.text()
		}).animate({
			countNum: countTo
		  },
  
		  {
  
			duration: 2000,
			easing: 'swing',
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			  //alert('finished');
			}
  
		  });
	  });
	  a = 1;
	}
  
  });

// on scroll counter end---------------------------------


$('.our_dentist_slider').owlCarousel({
    loop:true,
    margin:25,
	dotsEach:true,
	nav:true,
	autoplay:true,
	smartSpeed:1000,
	autoplayHoverPause:true,
	autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1025:{
            items:3
        }
    }
});


$('.blog-slider').owlCarousel({
    loop:true,
    margin:15,
	dots:false,
	nav:false,
	autoplay:true,
	smartSpeed:3000,
	autoplayHoverPause:true,
	autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1025:{
            items:1
        }
    }
});


