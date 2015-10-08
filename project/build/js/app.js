//bizwrap v1.3



$( window ).resize(function() {
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
});
/* ==============================================
 Sticky Navbar
 =============================================== */

$(document).ready(function() {
    $(".sticky").sticky({topSpacing: 0});
});


/*=========================*/
/*====main navigation hover dropdown====*/
/*==========================*/
$(document).ready(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});

/*====flex  slider for main slider or testimonials====*/
$('.main-flex-slider,.testimonials').flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade"
});

/*========portfolio mix====*/
$('#grid').mixitup();

/*========tooltip and popovers====*/

$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();


/*========flex-gallery slide====*/
$(window).load(function() {
    $('.flexslider').flexslider({
        directionNav: false,
        slideshowSpeed: 3000,
        animation: "fade"
    });
});

/*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/
     
   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();
    
    /* -------------------
 Parallax Sections
 ---------------------*/
$('.parallax-1').parallax("50%", 0.5);
$('.page-tree-bg').parallax("50%", 0.5);

(function(){
	
	var myLatlng;
	var map;
	var marker;
	
	function initialize() {
		myLatlng = new google.maps.LatLng(-33.937952, 18.862212);
	
		var mapOptions = {
			zoom: 17,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			draggable: false
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
		var contentString = '<p style="line-height: 20px;"><strong>Coastal Concepts</strong></p><p>Old College Building, 35 Church Street, Stellenbosch</p>';
	
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	
		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Marker'
		});
	
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
	
}).call(this);


/// <reference path="../typings/tsd.d.ts" />
var onloadCallback;
(function () {
    $("#contact-footer").submit(function (e) {
        e.preventDefault();
        submitFooterContactForm();
    });
    $("#contactForm").submit(function (e) {
        e.preventDefault();
        submitContactForm();
    });
    function submitContactForm() {
        var contactInput = {};
        contactInput.name = $('#name').val();
        contactInput.email = $('#email').val();
        contactInput.subject = $('#subject').val();
        contactInput.message = $('#message').val();
        contactInput.recaptchaResponse = grecaptcha.getResponse(contactWidgetID);
        if (contactInput.name === "" || contactInput.name === null) {
            setContactError("Please enter your name.");
            return;
        }
        if (contactInput.email === "" || contactInput.email === null) {
            setContactError("Please enter your email address.");
            return;
        }
        if (contactInput.subject === "" || contactInput.subject === null) {
            setContactError("Please enter a subject line.");
            return;
        }
        if (contactInput.subject === "" || contactInput.subject === null) {
            setContactError("Please enter a message body.");
            return;
        }
        if (contactInput.recaptchaResponse === "") {
            setContactError("Please solve the CAPTCHA to confirm you are not a robot.");
            return;
        }
        var ajaxSettings = {};
        ajaxSettings.url = "/api/contact";
        ajaxSettings.method = "POST";
        ajaxSettings.data = JSON.stringify(contactInput);
        ajaxSettings.headers = {
            "Content-Type": "application/json"
        };
        $.ajax(ajaxSettings)
            .done(function (data, statusCode, jqXHR) {
            setContactSuccess("Successfully sent an email to Coastal Concepts. We will reply as soon as possible.");
        })
            .fail(function (jqXHR, statusCode, error) {
            setContactError("An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience.");
        });
    }
    function submitFooterContactForm() {
        var contactInput = {};
        contactInput.name = $('#contact-footer-name').val();
        contactInput.email = $('#contact-footer-email').val();
        contactInput.subject = $('#contact-footer-subject').val();
        contactInput.message = $('#contact-footer-message').val();
        contactInput.recaptchaResponse = grecaptcha.getResponse(footerWidgetID);
        if (contactInput.name === "" || contactInput.name === null) {
            setFooterContactError("Please enter your name.");
            return;
        }
        if (contactInput.email === "" || contactInput.email === null) {
            setFooterContactError("Please enter your email address.");
            return;
        }
        if (contactInput.subject === "" || contactInput.subject === null) {
            setFooterContactError("Please enter a subject line.");
            return;
        }
        if (contactInput.subject === "" || contactInput.subject === null) {
            setFooterContactError("Please enter a message body.");
            return;
        }
        if (contactInput.recaptchaResponse === "") {
            setFooterContactError("Please solve the CAPTCHA to confirm you are not a robot.");
            return;
        }
        var ajaxSettings = {};
        ajaxSettings.url = "/api/contact";
        ajaxSettings.method = "POST";
        ajaxSettings.data = JSON.stringify(contactInput);
        ajaxSettings.headers = {
            "Content-Type": "application/json"
        };
        $.ajax(ajaxSettings)
            .done(function (data, statusCode, jqXHR) {
            setFooterContactSuccess("Successfully sent an email to Coastal Concepts. We will reply as soon as possible.");
        })
            .fail(function (jqXHR, statusCode, error) {
            setFooterContactError("An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience.");
        });
    }
    function setFooterContactSuccess(message) {
        unHideFooterContactStatus();
        $("#contact-footer-status-message > p")
            .toggleClass("success", true)
            .toggleClass("error", false)
            .text(message);
    }
    function setFooterContactError(message) {
        unHideFooterContactStatus();
        $("#contact-footer-status-message > p")
            .toggleClass("success", false)
            .toggleClass("error", true)
            .text(message);
    }
    function unHideFooterContactStatus() {
        $("#contact-footer-status-message")
            .toggleClass("hidden", false);
    }
    function setContactSuccess(message) {
        unHideContactStatus();
        $("#contact-form-status-message > p")
            .toggleClass("success", true)
            .toggleClass("error", false)
            .text(message);
    }
    function setContactError(message) {
        unHideContactStatus();
        $("#contact-form-status-message > p")
            .toggleClass("success", false)
            .toggleClass("error", true)
            .text(message);
    }
    function unHideContactStatus() {
        $("#contact-form-status-message")
            .toggleClass("hidden", false);
    }
    var footerWidgetID;
    var contactWidgetID;
    onloadCallback = function () {
        footerWidgetID = grecaptcha.render('contactFooterCaptcha', {
            'sitekey': '6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO'
        });
        contactWidgetID = grecaptcha.render('contactCaptcha', {
            'sitekey': '6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO'
        });
    };
}).call(this);
//# sourceMappingURL=app.js.map