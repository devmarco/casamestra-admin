(function route() {
	'use strict';

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
					header: {
						title: 'Imóveis',
						links: [
							{url: '/estates/cadastro', title: 'Novo Imóvel'},
						],
					},
				},
			},
			{
				url: '/estates/cadastro',
				config: {
					templateUrl: '/public/assets/js/app/estates/views/estates-form.html',
					controller: 'EstatesInsert',
					controllerAs: 'vm',
					header: {
						title: 'Novo Imóvel',
						links: [
							{url: '/estates', title: 'Visualizar Imóvel'},
						],
					},
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
					header: {
						title: 'Alterar Imóvel',
						links: [
							{url: '/estates/cadastro', title: 'Novo Imóvel'},
							{url: '/estates', title: 'Visualizar Imóvel'},
						],
					},
				},
			},
		]);
	}

	getOne.$inject = ['EstatesService', '$route'];
	config.$inject = ['route'];

	angular
		.module('cm.estates')
		.run(config);
}());
