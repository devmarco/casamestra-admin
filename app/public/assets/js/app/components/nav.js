(function count() {
	'use strict';

	function cmNav($window) {

		function link() {

		}

		return {
			templateUrl: '/public/assets/js/app/components/nav.html',
			restrict: 'EA',
			scope: true,
			link: link,
		};
	}

	cmNav.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmNav', cmNav);

}());
