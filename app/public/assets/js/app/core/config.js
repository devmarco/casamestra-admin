(function module() {
	'use strict';

	function config($locationProvider) {
		$locationProvider.html5Mode(true);
	}

	config.$inject = ['$locationProvider'];

	angular
		.module('cm.core')
		.config(config);
}());
