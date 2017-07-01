(function(angular) {
	'use strict';
	var blogModule = angular.module("blogModule",[]);
	blogModule.component('blog', {
		bindings: {
		},
		controller: BlogController,
		templateUrl: '/components/blog/blog.html'
	});

	function BlogController(){

	}
})(window.angular);
