(function route() {
	'use strict';

	function config(route) {
		route.set({
			url: '/dashboard',
			config: {
				templateUrl: '/public/assets/js/app/dashboard/dashboard.html',
				controller: 'Dashboard',
				controllerAs: 'vm',
				header: {
					title: 'Dashboard',
				}
			},
		});
	}

	config.$inject = ['route'];

	angular
		.module('cm.dashboard')
		.run(config);
}());
