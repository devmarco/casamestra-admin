(function count() {
	'use strict';

	function cmSelectSingle($window) {

		function link($scope, element, attrs) {
			$(element[0]).selectize({
				create: true,
			});
		}

		return {
			restrict: 'A',
			scope: true,
			link: link,
		};
	}

	cmSelectSingle.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmSelectSingle', cmSelectSingle);

}());
