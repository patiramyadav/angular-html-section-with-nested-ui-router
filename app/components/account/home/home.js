(function(angular) {
	'use strict';
	var homeModule = angular.module("homeModule",[]);
	homeModule.component('home', {
		bindings: {
		},
		controller: HomeController,
		templateUrl: '/components/account/home/home.html'
	});

	function HomeController(){

	}
})(window.angular);
