Box.Application.addService('filter.service', function(application) {
	'use strict';

	var $ = application.getGlobal('jQuery');

	return {
		address: function filter(obj, query) {
			var objects = [];

			obj.forEach(function each(value, index) {
				var address = value.address.toLowerCase();
				var neighborhood = value.keyDetails.neighborhood.toLowerCase();

				if (address.indexOf(query) !== -1 || neighborhood.indexOf(query) !== -1) {
					objects.push(value);
				}
			});

			return objects;
		},
		buildingType: function(obj, query) {
			var objects = [];

			if (query === 'all') {
				return obj;
			}

			obj.forEach(function each(value, index) {
				if (value.keyDetails.buildingType === query) {
					objects.push(value);
				}
			});

			return objects;
		},
		status: function(obj, query) {
			var objects = [];

			if (query === 'all') {
				return obj;
			}

			obj.forEach(function each(value, index) {
				if (value.status === query) {
					objects.push(value);
				}
			});

			return objects;
		},
		action: function(obj, query) {
			var objects = [];

			if (query === 'all') {
				return obj;
			}

			obj.forEach(function each(value, index) {
				if (value.action === query) {
					objects.push(value);
				}
			});

			return objects;
		}
	};
});
