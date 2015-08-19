(function route() {
	'use strict';

	function routeConfigProvider($routeProvider) {
		this.$get = function get() {
			return {
				config: $routeProvider,
			};
		};
	}

	function route(routeConfigProvider) {
		return {
			set: function set(routeConfig) {
				routeConfigProvider.config.when(routeConfig.url, routeConfig.config);
			},
		};
	}

	routeConfigProvider.$inject = ['$routeProvider'];
	route.$inject = ['routeConfigProvider'];

	angular
		.module('cm.core')
		.provider('routeConfigProvider', routeConfigProvider)
		.factory('route', route);
}());
