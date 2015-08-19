(function route() {
	'use strict';

	function config(route) {
		route.set({
			url: '/',
			config: {
				templateUrl: '/public/assets/js/app/dashboard/dashboard.html',
				controller: 'Dashboard',
				controllerAs: 'vm',
			},
		});
	}

	config.$inject = ['route'];

	angular
		.module('cm.dashboard')
		.run(config);
}());
