(function route() {
	'use strict';

	function getAll(EstatesService) {
		return EstatesService.get();
	}

	function getOne(EstatesService, $route) {
		return EstatesService.one($route.current.params.id);
	}

	function config(route) {
		route.set([
			{
				url: '/estates',
				config: {
					templateUrl: '/public/assets/js/app/estates/views/estates.html',
					controller: 'Estates',
					controllerAs: 'vm',
					resolve: {
						estates: getAll,
					},
				},
				sublinks: {
					title: 'Imóveis',
					links: [
						{url: '/estates', title: 'Visualizar Imóveis'},
						{url: '/estates/cadastro', title: 'Novo Imóvel'},
					],
				},
			},
			{
				url: '/estates/cadastro',
				config: {
					templateUrl: '/public/assets/js/app/estates/views/estates-form.html',
					controller: 'EstatesInsert',
					controllerAs: 'vm',
				},
			},
			{
				url: '/estates/edit/:id',
				config: {
					templateUrl: '/public/assets/js/app/estates/views/estates-edit.html',
					controller: 'EstatesEdit',
					controllerAs: 'vm',
					resolve: {
						estate: getOne,
					},
				},
			},
		]);
	}

	getAll.$inject = ['EstatesService'];
	getOne.$inject = ['EstatesService', '$route'];
	config.$inject = ['route'];

	angular
		.module('cm.estates')
		.run(config);
}());
