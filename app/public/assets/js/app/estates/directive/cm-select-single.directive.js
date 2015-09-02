(function count() {
	'use strict';

	function cmSelectSingle($window) {

		function link($scope, element, attrs) {
			var model = element[0].dataset.model;

			function setModel(model, value) {
				if (model) $scope.estates[model] = value;
				$scope.$apply();
			}

			$(element[0]).selectize({
				create: true,
				onChange: function change(value) {
					setModel(model, value);
				},
			});
		}

		return {
			restrict: 'A',
			link: link,
		};
	}

	cmSelectSingle.$inject = ['$window'];

	angular
		.module('cm.widgets')
		.directive('cmSelectSingle', cmSelectSingle);

}());
