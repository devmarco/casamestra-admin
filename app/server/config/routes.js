/* ------------------------------------ *\
	[ROUTES]
\* ------------------------------------ */

var routes = [
	require('../routes/files'),
	require('../routes/home'),
];

module.exports = {
	create: function create(server) {
		var endpointValue;
		var r = 0;

		if (!server || !routes) {
			throw new Error('Routes: Server or Endpoints are not found');
		}

		routes.forEach(function forEach(value, index) {
			if (typeof value === 'object') {
				server.route({
					method: value.method,
					path: value.path,
					handler: value.handler,
					config: value.config || {},
				});
			}
		});
	},
};
