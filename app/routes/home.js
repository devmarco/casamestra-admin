/* ------------------------------------ *\
	[HOME]
\* ------------------------------------ */

var homeView = {
	method: 'GET',
	path: '/{path*}',
	handler: function handler(req, reply) {
		reply.file('app/views/index.html');
	},
};

module.exports = homeView;
