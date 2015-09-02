(function route() {
	'use strict';

	function routeConfigProvider($routeProvider) {
		this.$get = function get() {
			return {
				config: $routeProvider,
			};
		};
	}

	function route($rootScope, routeConfigProvider) {

		$rootScope.sublinks = [];

		return {
			set: function set(routeConfig) {
				if (Array.isArray(routeConfig)) {
					routeConfig.forEach(function each(value, index) {
						routeConfigProvider.config.when(value.url, value.config);

						if (value.sublinks) {
							$rootScope.sublinks.push(value.sublinks);
						}
					});
				} else {
					routeConfigProvider.config.when(routeConfig.url, routeConfig.config);
				}
			},
		};
	}

	routeConfigProvider.$inject = ['$routeProvider'];
	route.$inject = ['$rootScope', 'routeConfigProvider'];

	angular
		.module('cm.core')
		.provider('routeConfigProvider', routeConfigProvider)
		.factory('route', route);
}());
