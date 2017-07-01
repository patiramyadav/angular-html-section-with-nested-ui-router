(function(angular) {
	'use strict';
	var detailsModule = angular.module("detailsModule",[]);
	detailsModule.component('details', {
		bindings: {
		},
		controller: DetailsController,
		templateUrl: '/components/account/details/details.html'
	});

	function DetailsController(){

	}
})(window.angular);
