(function controller() {
	'use strict';

	function ctrl($route, $scope) {
		$scope.$on('$routeChangeSuccess', function change() {
			$scope.active = $route.current.$$route.originalPath;
		});
	}

	ctrl.$inject = ['$route', '$scope'];

	angular
		.module('cm.nav')
		.controller('Nav', ctrl);
}());
