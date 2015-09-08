/* ------------------------------------ *\
	[ESTATES]
\* ------------------------------------ */

homeView = {
	method: 'GET',
	path: '/estates',
	handler: function handler(req, reply) {
		reply.view('estates', {
			title: 'Imóveis',
		});
	},
};

module.exports = homeView;
