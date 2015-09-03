(function count() {
	'use strict';

	function cmInputSearch() {

		function link($scope, element, attrs) {
			$scope.$watch('searchEstate', function(a, b) {
				if (a) {
					element.addClass('active');
				} else {
					element.removeClass('active');
				}
			});
		}

		return {
			restrict: 'A',
			link: link,
		};
	}

	angular
		.module('cm.widgets')
		.directive('cmInputSearch', cmInputSearch);

}());
