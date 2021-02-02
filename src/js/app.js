//bizwrap v1.3

$(window).on("resize", function () {
    $(".navbar-collapse").css({
        maxHeight: $(window).height() - $(".navbar-header").height() + "px",
    });
});
/* ==============================================
 Sticky Navbar
 =============================================== */

$(document).on("ready", function () {
    $(".sticky").sticky({ topSpacing: 0 });
});

/*=========================*/
/*====main navigation hover dropdown====*/
/*==========================*/
$(document).on("ready", function () {
    $(".js-activated")
        .dropdownHover({
            instantlyCloseOthers: false,
            delay: 0,
        })
        .dropdown();
});

/*====flex  slider for main slider or testimonials====*/
$(".main-flex-slider,.testimonials").flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade",
});

/*========portfolio mix====*/
$("#grid").mixitup();

/*========tooltip and popovers====*/

$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();

/*========flex-gallery slide====*/
$(window).load(function () {
    $(".flexslider").flexslider({
        directionNav: false,
        slideshowSpeed: 3000,
        animation: "fade",
    });
});

/*=========================*/
/*========Animation on scroll with wow.js====*/
/*==========================*/

wow = new WOW({
    animateClass: "animated",
    offset: 100,
    mobile: true,
});
wow.init();

/* -------------------
 Parallax Sections
 ---------------------*/
$(".parallax-1").parallax("50%", 0.5);
$(".page-tree-bg").parallax("50%", 0.5);

(function () {
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
            draggable: false,
        };
        map = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions
        );

        var contentString =
            '<p style="line-height: 20px;"><strong>Coastal Concepts</strong></p><p>Old College Building, 35 Church Street, Stellenbosch</p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: "Marker",
        });

        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    }

    google.maps.event.addDomListener(window, "load", initialize);
}.call(this));
