(function count() {
	'use strict';

	function cmBreadcrumb($window) {

		function link() {

		}

		return {
			templateUrl: '/public/assets/js/app/components/breadcrumb.html',
			restrict: 'EA',
			scope: true,
			link: link,
		};
	}

	cmBreadcrumb.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmBreadcrumb', cmBreadcrumb);

}());
