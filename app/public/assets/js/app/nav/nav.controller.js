(function controller() {
	'use strict';

	function ctrl($scope, $rootScope) {
		var vm = this;

		$rootScope.$on('$routeChangeSuccess', function(e, current) {
			$scope.header = $rootScope.sublinks[0];
		});
	}

	ctrl.$inject = ['$scope', '$rootScope'];

	angular
		.module('cm.nav')
		.controller('Nav', ctrl);
}());
