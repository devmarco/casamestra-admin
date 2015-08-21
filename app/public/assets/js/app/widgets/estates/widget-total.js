(function count() {
	'use strict';

	function weTotal($window) {

		function link() {

		}

		return {
			templateUrl: '/public/assets/js/app/widgets/templates/total.html',
			restrict: 'EA',
			scope: true,
			link: link,
		};
	}

	weTotal.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('weTotal', weTotal);

}());
