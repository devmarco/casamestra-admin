/* ------------------------------------ *\
	[ESTATES]
\* ------------------------------------ */

homeView = {
	method: 'GET',
	path: '/imoveis',
	handler: function handler(req, reply) {
		reply.view('estates', {
			title: 'Imóveis',
			links: [
				{
					title: 'Novo Imóvel',
					url: '/imoveis/novo'
				}
			]
		});
	},
};

module.exports = homeView;
