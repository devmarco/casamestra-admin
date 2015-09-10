/* ------------------------------------ *\
	[ESTATES NEW]
\* ------------------------------------ */

homeView = {
	method: 'GET',
	path: '/imoveis/novo',
	handler: function handler(req, reply) {
		reply.view('estates-register', {
			title: 'Novo Imóvel',
			links: [
				{
					title: 'Visualizar Imóveis',
					url: '/imoveis',
				},
			],
		});
	},
};

module.exports = homeView;
