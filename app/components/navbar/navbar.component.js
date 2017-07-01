(function(angular) {
	'use strict';
	var navbarModule = angular.module("navbarModule",[]);
	navbarModule.component('navBar', {
		bindings: {
		},
		controller: NavController,
		templateUrl: '/components/navbar/navbar.template.html'
	});

	function NavController($state){
	    $(document).ready(function(){
	    	/* affix the navbar after scroll below header */
	    	$("header").toggle().toggle();
	    	$(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
	    	console.log($("#myCarousel").outerHeight(true));
	    });
			// $('body').scrollspy({target: ".navbar", offset: 50});   
	  	// Add smooth scrolling on all links inside the navbar
	  	$("#myNavbar a").on('click', function(event) {
	  	//instead of this we can use ng-click as well
	    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;
		      console.log(hash);
		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			      $('html, body').animate({
			      	scrollTop: $(hash).offset().top
			      }, 800, function(){

			        // Add hash (#) to URL when done scrolling (default click behavior)
			        //Don't need this
			        // window.location.hash = hash;
			    });
	    	}  // End if
		}); 
		$state.go('defaultStateForSection');
  	}
})(window.angular);
