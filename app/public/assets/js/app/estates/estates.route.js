(function route() {
	'use strict';

	function config(route) {
		route.set({
			url: '/estates',
			config: {
				templateUrl: '/public/assets/js/app/estates/estates.html',
				controller: 'Estates',
				controllerAs: 'vm',
			},
		});
	}

	config.$inject = ['route'];

	angular
		.module('cm.estates')
		.run(config);
}());
