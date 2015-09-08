/* ------------------------------------ *\
	[HOME]
\* ------------------------------------ */

homeView = {
	method: 'GET',
	path: '/dashboard',
	handler: function handler(req, reply) {
		reply.view('index', {
			title: 'Dashboard',
		});
	},
};

module.exports = homeView;
