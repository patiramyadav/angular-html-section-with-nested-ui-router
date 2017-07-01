(function(angular) {
	'use strict';
	var accountModule = angular.module("accountModule",[]);
	accountModule.component('account', {
		bindings: {
		},
		controller: AccountController,
		templateUrl: '/components/account/account.html'
	});

	function AccountController(){

	}
})(window.angular);
