Box.Application.addService('estates.service', function(application) {
	'use strict';

	var $ = application.getGlobal('jQuery');

	return {
		get: function get() {
			return $.get('http://127.0.0.1:8081/estates');
		},
	};
});
