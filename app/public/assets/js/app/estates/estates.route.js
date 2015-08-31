(function route() {
	'use strict';

	function config(route) {
		route.set([{
			url: '/estates',
			config: {
				templateUrl: '/public/assets/js/app/estates/views/estates.html',
				controller: 'Estates',
				controllerAs: 'vm',
			},
		},{
			url: '/estates/cadastro',
			config: {
				templateUrl: '/public/assets/js/app/estates/views/estates-form.html',
				controller: 'EstatesInsert',
				controllerAs: 'vm',
			},
		}]);
	}

	config.$inject = ['route'];

	angular
		.module('cm.estates')
		.run(config);
}());
