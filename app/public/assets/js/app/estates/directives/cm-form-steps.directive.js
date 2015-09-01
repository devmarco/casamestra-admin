(function count() {
	'use strict';

	function cmFormSteps($window) {

		function link($scope, element, attrs) {
			$scope.step = 1;

			$scope.estates = {};
			$scope.config = {
				loading: false,
			};

			$scope.next = function next() {
				if ($scope.step < 4) {
					$scope.step = $scope.step + 1;
				}
			};

			$scope.prev = function next() {

				if ($scope.step > 1) {
					$scope.step = $scope.step - 1;
				}
			};
		}

		return {
			restrict: 'A',
			link: link,
		};
	}

	cmFormSteps.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmFormSteps', cmFormSteps);

}());
