Box.Application.addService('estates.service', function(application) {
	'use strict';

	var $ = application.getGlobal('jQuery');

	return {
		get: function get() {
			var defer = $.Deferred();
			var cache = window.sessionStorage.getItem('cmcachedata');

			if (cache) {
				defer.resolve(JSON.parse(cache));
			} else {
				$.get('http://127.0.0.1:8081/estates?limit=12').then(function then(data) {
					defer.resolve(data);
					window.sessionStorage.setItem('cmcachedata', JSON.stringify(data));

				}, function error(err) {
					defer.reject(err);
				});
			}

			return defer.promise();
		},
	};
});
