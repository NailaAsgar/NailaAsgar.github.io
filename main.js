$(document).ready(function() {
	// alert("asd")
$("#add-to-cart").click(function(e) {
	alert("GA Add to Cart Button Clicked");

	//Add to Cart GA event starts here

	gtag('event', 'add_to_cart', {
	  "items": [
	    {
	      "id": "P12345",
	      "name": "Android Warhol T-Shirt",
	      "list_name": "Search Results",
	      "brand": "Google",
	      "category": "Apparel/T-Shirts",
	      "variant": "Black",
	      "list_position": 1,
	      "quantity": 2,
	      "price": '2.0'
	    }
	  ]
	});
	//Add to Cart GA event ends here

})
	$(".slider-one")
	.not(".slick-initialized")
	.slick({

		prevArrow:".site-slider.prev",
		nextArrow: ".site-slider.next",
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplaySpeed: 3000
	});


});