(function controller() {
	'use strict';

	function ctrl($http) {
		var query = '?callback=JSON_CALLBACK&query=Belo%20Horizonte';
		
		$http.post('https://api.twitter.com/oauth2/token', {
			grant_type: 'client_credentials',
		}).then(function(data) {
			console.log(data);
		});

		// $http.jsonp('https://api.twitter.com/1.1/geo/search.json' + query).then(function then(data) {
		// 	console.log(data);
		// }, function error() {
		// 	console.log('Error');
		// });
	}

	ctrl.$inject = ['$http'];

	angular
		.module('cm.dashboard')
		.controller('Dashboard', ctrl);
}());
