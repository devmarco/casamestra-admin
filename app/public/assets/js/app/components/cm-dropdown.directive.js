(function count() {
	'use strict';

	function cmDropdown($window) {

		function link($scope, element, attrs) {
			var	isBinded = false;

			$scope.open = function open(e) {
				element.toggleClass('active');
				e.stopPropagation();
			};

			element.find('ul').on('click', function(e) {
				e.stopPropagation();
			});

			angular.element(document).on('click', function(e) {
				if (element.hasClass('active')) element.removeClass('active');
			});
		}

		return {
			restrict: 'A',
			scope: true,
			link: link,
		};
	}

	cmDropdown.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmDropdown', cmDropdown);

}());
