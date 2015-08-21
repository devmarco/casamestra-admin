(function count() {
	'use strict';

	function waBest($window) {

		function link() {

		}

		return {
			templateUrl: '/public/assets/js/app/widgets/templates/best.html',
			restrict: 'EA',
			scope: true,
			link: link,
		};
	}

	waBest.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('waBest', waBest);

}());
